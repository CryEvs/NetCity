/*!
 * Ajax Bootstrap Select
 *
 * Extends existing [Bootstrap Select] implementations by adding the ability to search via AJAX requests as you type. Originally for CROSCON.
 *
 * @version 1.3.2
 * @author Adam Heim - https://github.com/truckingsim
 * @link https://github.com/truckingsim/Ajax-Bootstrap-Select
 * @copyright 2015 Adam Heim
 * @license Released under the MIT license.
 *
 * Contributors:
 *   Mark Carver - https://github.com/markcarver
 *
 * Last build: 2015-05-15 6:42:55 PM CDT
 */
!(function ($, window) {

/**
 * @class AjaxBootstrapSelect
 *
 * @param {jQuery|HTMLElement} element
 *   The select element this plugin is to affect.
 * @param {Object} [options={}]
 *   The options used to affect the desired functionality of this plugin.
 *
 * @return {AjaxBootstrapSelect|null}
 *   A new instance of this class or null if unable to instantiate.
 */
var AjaxBootstrapSelect = function (element, options) {
    var i, l, plugin = this;
    options = options || {};

    /**
     * The select element this plugin is being attached to.
     * @type {jQuery}
     */
    this.$element = $(element);

    /**
     * The merged default and passed options.
     * @type {Object}
     */
    this.options = $.extend(true, {}, $.fn.ajaxSelectPicker.defaults, options);

    /**
     * Used for logging error messages.
     * @type {Number}
     */
    this.LOG_ERROR = 1;

    /**
     * Used for logging warning messages.
     * @type {Number}
     */
    this.LOG_WARNING = 2;

    /**
     * Used for logging informational messages.
     * @type {Number}
     */
    this.LOG_INFO = 3;

    /**
     * Used for logging debug messages.
     * @type {Number}
     */
    this.LOG_DEBUG = 4;

    /**
     * The jqXHR object of the last request, false if there was none.
     * @type {jqXHR|Boolean}
     */
    this.lastRequest = false;

    /**
     * The previous query that was requested.
     * @type {String}
     */
    this.previousQuery = '';

    /**
     * The current query being requested.
     * @type {String}
     */
    this.query = '';

    /**
     * The jqXHR object of the current request, false if there is none.
     * @type {jqXHR|Boolean}
     */
    this.request = false;

    // Maps deprecated options to new ones between releases.
    var deprecatedOptionsMap = [
        // @todo Remove these options in next minor release.
        {
            from: 'ajaxResultsPreHook',
            to: 'preprocessData'
        },
        {
            from: 'ajaxSearchUrl',
            to: {
                ajax: {
                    url: '{{{value}}}'
                }
            }
        },
        {
            from: 'ajaxOptions',
            to: 'ajax'
        },
        {
            from: 'debug',
            to: function (map) {
                var _options = {};
                _options.log = Boolean(plugin.options[map.from]) ? plugin.LOG_DEBUG : 0;
                plugin.options = $.extend(true, {}, plugin.options, _options);
                delete plugin.options[map.from];
                plugin.log(plugin.LOG_WARNING, 'Deprecated option "' + map.from + '". Update code to use:', _options);
            }
        },
        {
            from: 'mixWithCurrents',
            to: 'preserveSelected'
        },
        {
            from: 'placeHolderOption',
            to: {
                locale: {
                    emptyTitle: '{{{value}}}'
                }
            }
        }
    ];
    if (deprecatedOptionsMap.length) {
        $.map(deprecatedOptionsMap, function (map) {
            // Depreciated option detected.
            if (plugin.options[map.from]) {
                // Map with an object. Use "{{{value}}}" anywhere in the object to
                // replace it with the passed value.
                if ($.isPlainObject(map.to)) {
                    plugin.replaceValue(map.to, '{{{value}}}', plugin.options[map.from]);
                    plugin.options = $.extend(true, {}, plugin.options, map.to);
                    plugin.log(plugin.LOG_WARNING, 'Deprecated option "' + map.from + '". Update code to use:', map.to);
                    delete plugin.options[map.from];
                }
                // Map with a function. Functions are silos. They are responsible
                // for deleting the original option and displaying debug info.
                else if ($.isFunction(map.to)) {
                    map.to.apply(plugin, [map]);
                }
                // Map normally.
                else {
                    var _options = {};
                    _options[map.to] = plugin.options[map.from];
                    plugin.options = $.extend(true, {}, plugin.options, _options);
                    plugin.log(plugin.LOG_WARNING, 'Deprecated option "' + map.from + '". Update code to use:', _options);
                    delete plugin.options[map.from];
                }
            }
        });
    }

    // Retrieve the element data attributes.
    var data = this.$element.data();

    // @todo Deprecated. Remove this in the next minor release.
    if (data['searchUrl']) {
        plugin.log(plugin.LOG_WARNING, 'Deprecated attribute name: "data-search-url". Update markup to use: \' data-abs-ajax-url="' + data['searchUrl'] + '" \'');
        this.options.ajax.url = data['searchUrl'];
    }

    // Helper functions.
    var matchToLowerCase = function (match, p1) { return p1.toLowerCase(); };
    var expandObject = function (keys, value, obj) {
        var k = [].concat(keys), l = k.length, o = obj || {};
        if (l) { var key = k.shift(); o[key] = expandObject(k, value, o[key]); }
        return l ? o : value;
    };

    // Filter out only the data attributes prefixed with 'data-abs-'.
    var dataKeys = Object.keys(data).filter(/./.test.bind(new RegExp('^abs[A-Z]')));

    // Map the data attributes to their respective place in the options object.
    if (dataKeys.length) {
        // Object containing the data attribute options.
        var dataOptions = {};
        var flattenedOptions = ['locale'];
        for (i = 0, l = dataKeys.length; i < l; i++) {
            var name = dataKeys[i].replace(/^abs([A-Z])/, matchToLowerCase).replace(/([A-Z])/g, '-$1').toLowerCase();
            var keys = name.split('-');

            // Certain options should be flattened to a single object
            // and not fully expanded (such as Locale).
            if (keys[0] && keys.length > 1 && flattenedOptions.indexOf(keys[0]) !== -1) {
                var newKeys = [keys.shift()];
                var property = '';
                // Combine the remaining keys as a single property.
                for (var ii = 0; ii < keys.length; ii++) {
                    property += (ii === 0 ? keys[ii] : keys[ii].charAt(0).toUpperCase() + keys[ii].slice(1));
                }
                newKeys.push(property);
                keys = newKeys;
            }
            this.log(this.LOG_DEBUG, 'Processing data attribute "data-abs-' + name + '":', data[dataKeys[i]]);
            expandObject(keys, data[dataKeys[i]], dataOptions);
        }
        this.options = $.extend(true, {}, this.options, dataOptions);
        this.log(this.LOG_DEBUG, 'Merged in the data attribute options: ', dataOptions, this.options);
    }

    /**
     * Reference to the selectpicker instance.
     * @type {Selectpicker}
     */
    this.selectpicker = data['selectpicker'];
    if (!this.selectpicker) {
        this.log(this.LOG_ERROR, 'Cannot instantiate an AjaxBootstrapSelect instance without selectpicker first being initialized!');
        return null;
    }

    // Ensure there is a URL.
    if (!this.options.ajax.url) {
        this.log(this.LOG_ERROR, 'Option "ajax.url" must be set! Options:', this.options);
        return null;
    }

    // Initialize the locale strings.
    this.locale = $.extend(true, {}, $.fn.ajaxSelectPicker.locale);

    // Ensure the langCode is properly set.
    this.options.langCode = this.options.langCode || window.navigator.userLanguage || window.navigator.language || 'en';
    if (!this.locale[this.options.langCode]) {
        var langCode = this.options.langCode;

        // Reset the language code.
        this.options.langCode = 'en';

        // Check for both the two and four character language codes, using
        // the later first.
        var langCodeArray = langCode.split('-');
        for (i = 0, l = langCodeArray.length; i < l; i++) {
            var code = langCodeArray.join('-');
            if (code.length && this.locale[code]) {
                this.options.langCode = code;
                break;
            }
            langCodeArray.pop();
        }
        this.log(this.LOG_WARNING, 'Unknown langCode option: "' + langCode + '". Using the following langCode instead: "' + this.options.langCode + '".');
    }

    // Allow options to override locale specific strings.
    this.locale[this.options.langCode] = $.extend(true, {}, this.locale[this.options.langCode], this.options.locale);

    /**
     * The select list.
     * @type {AjaxBootstrapSelectList}
     */
    this.list = new window.AjaxBootstrapSelectList(this);
    this.list.refresh();

    // We need for selectpicker to be attached first. Putting the init in a
    // setTimeout is the easiest way to ensure this.
    // @todo Figure out a better way to do this (hopefully listen for an event).
    setTimeout(function () {
        plugin.init();
    }, 500);
};

/**
 * Initializes this plugin on a selectpicker instance.
 */
AjaxBootstrapSelect.prototype.init = function () {
    var requestDelayTimer, plugin = this;

    // Rebind select/deselect to process preserved selections.
    if (this.options.preserveSelected) {
        this.selectpicker.$menu.off('click', '.actions-btn').on('click', '.actions-btn', function (e) {
            if (plugin.selectpicker.options.liveSearch) {
                plugin.selectpicker.$searchbox.focus();
            }
            else {
                plugin.selectpicker.$button.focus();
            }
            e.preventDefault();
            e.stopPropagation();
            if ($(this).is('.bs-select-all')) {
                if (plugin.selectpicker.$lis === null) {
                    plugin.selectpicker.$lis = plugin.selectpicker.$menu.find('li');
                }
                plugin.$element.find('option:enabled').prop('selected', true);
                $(plugin.selectpicker.$lis).not('.disabled').addClass('selected');
                plugin.selectpicker.render();
            }
            else {
                if (plugin.selectpicker.$lis === null) {
                    plugin.selectpicker.$lis = plugin.selectpicker.$menu.find('li');
                }
                plugin.$element.find('option:enabled').prop('selected', false);
                $(plugin.selectpicker.$lis).not('.disabled').removeClass('selected');
                plugin.selectpicker.render();
            }
            plugin.selectpicker.$element.change();
        });
    }

    // Add placeholder text to the search input.
    this.selectpicker.$searchbox
        .attr('placeholder', this.t('searchPlaceholder'))
        // Remove selectpicker events on the search input.
        .off('input propertychange');

    // Bind this plugin's event.
    this.selectpicker.$searchbox.on(this.options.bindEvent, function (e) {
        var query = plugin.selectpicker.$searchbox.val();

        plugin.log(plugin.LOG_DEBUG, 'Bind event fired: "' + plugin.options.bindEvent + '", keyCode:', e.keyCode, e);

        // Dynamically ignore the "enter" key (13) so it doesn't
        // create an additional request if the "cache" option has
        // been disabled.
        if (!plugin.options.cache) {
            plugin.options.ignoredKeys[13] = 'enter';
        }

        // Don't process ignored keys.
        if (plugin.options.ignoredKeys[e.keyCode]) {
            plugin.log(plugin.LOG_DEBUG, 'Key ignored.');
            return;
        }

        // Clear out any existing timer.
        clearTimeout(requestDelayTimer);

        // Process empty search value.
        if (!query.length) {
            // Clear the select list.
            if (plugin.options.clearOnEmpty) {
                plugin.list.destroy();
            }

            // Don't invoke a request.
            if (!plugin.options.emptyRequest) {
                return;
            }
        }

        // Store the query.
        plugin.previousQuery = plugin.query;
        plugin.query = query;

        // Return the cached results, if any.
        if (plugin.options.cache && e.keyCode !== 13) {
            var cache = plugin.list.cacheGet(plugin.query);
            if (cache) {
                plugin.list.setStatus(!cache.length ? plugin.t('statusNoResults') : '');
                plugin.list.replaceOptions(cache);
                plugin.log(plugin.LOG_INFO, 'Rebuilt options from cached data.');
                return;
            }
        }

        requestDelayTimer = setTimeout(function () {
            // Abort any previous requests.
            if (plugin.lastRequest && plugin.lastRequest.jqXHR && $.isFunction(plugin.lastRequest.jqXHR.abort)) {
                plugin.lastRequest.jqXHR.abort();
            }

            // Create a new request.
            plugin.request = new window.AjaxBootstrapSelectRequest(plugin);

            // Store as the previous request once finished.
            plugin.request.jqXHR.always(function () {
                plugin.lastRequest = plugin.request;
                plugin.request = false;
            });
        }, plugin.options.requestDelay || 300);
    });
};

/**
 * Wrapper function for logging messages to window.console.
 *
 * @param  {Number} type
 * The type of message to log. Must be one of:
 *
 * - AjaxBootstrapSelect.LOG_ERROR
 * - AjaxBootstrapSelect.LOG_WARNING
 * - AjaxBootstrapSelect.LOG_INFO
 * - AjaxBootstrapSelect.LOG_DEBUG
 *
 * @param {String|Object|*...} message
 *   The message(s) to log. Multiple arguments can be passed.
 *
 * @return {void}
 */
AjaxBootstrapSelect.prototype.log = function (type, message) {
    if (window.console && this.options.log) {
        // Ensure the logging level is always an integer.
        if (typeof this.options.log !== 'number') {
            if (typeof this.options.log === 'string') {
                this.options.log = this.options.log.toLowerCase();
            }
            switch (this.options.log) {
                case true:
                case 'debug':
                    this.options.log = this.LOG_DEBUG;
                    break;

                case 'info':
                    this.options.log = this.LOG_INFO;
                    break;

                case 'warn':
                case 'warning':
                    this.options.log = this.LOG_WARNING;
                    break;

                default:
                case false:
                case 'error':
                    this.options.log = this.LOG_ERROR;
                    break;
            }
        }
        if (type <= this.options.log) {
            var args = [].slice.apply(arguments, [2]);

            // Determine the correct console method to use.
            switch (type) {
                case this.LOG_DEBUG:
                    type = 'debug';
                    break;
                case this.LOG_INFO:
                    type = 'info';
                    break;
                case this.LOG_WARNING:
                    type = 'warn';
                    break;
                default:
                case this.LOG_ERROR:
                    type = 'error';
                    break;
            }

            // Prefix the message.
            var prefix = '[' + type.toUpperCase() + '] AjaxBootstrapSelect:';
            if (typeof message === 'string') {
                args.unshift(prefix + ' ' + message);
            }
            else {
                args.unshift(message);
                args.unshift(prefix);
            }

            // Display the message(s).
            window.console[type].apply(window.console, args);
        }
    }
};

/**
 * Replaces an old value in an object or array with a new value.
 *
 * @param {Object|Array} obj
 *   The object (or array) to iterate over.
 * @param {*} needle
 *   The value to search for.
 * @param {*} value
 *   The value to replace with.
 * @param {Object} [options]
 *   Additional options for restricting replacement:
 *     - recursive: {boolean} Whether or not to iterate over the entire
 *       object or array, defaults to true.
 *     - depth: {int} The number of level this method is to search
 *       down into child elements, defaults to false (no limit).
 *     - limit: {int} The number of times a replacement should happen,
 *       defaults to false (no limit).
 *
 * @return {void}
 */
AjaxBootstrapSelect.prototype.replaceValue = function (obj, needle, value, options) {
    var plugin = this;
    options = $.extend({
        recursive: true,
        depth: false,
        limit: false
    }, options);
    // The use of $.each() opposed to native loops here is beneficial
    // since obj can be either an array or an object. This helps reduce
    // the amount of duplicate code needed.
    $.each(obj, function (k, v) {
        if (options.limit !== false && typeof options.limit === 'number' && options.limit <= 0) {
            return false;
        }
        if ($.isArray(obj[k]) || $.isPlainObject(obj[k])) {
            if ((options.recursive && options.depth === false) || (options.recursive && typeof options.depth === 'number' && options.depth > 0)) {
                plugin.replaceValue(obj[k], needle, value, options);
            }
        }
        else {
            if (v === needle) {
                if (options.limit !== false && typeof options.limit === 'number') {
                    options.limit--;
                }
                obj[k] = value;
            }
        }
    });
};

/**
 * Generates a translated {@link $.fn.ajaxSelectPicker.locale locale string} for a given locale key.
 *
 * @param {String} key
 *   The translation key to use.
 * @param {String} [langCode]
 *   Overrides the currently set {@link $.fn.ajaxSelectPicker.defaults#langCode langCode} option.
 *
 * @return
 *   The translated string.
 */
AjaxBootstrapSelect.prototype.t = function (key, langCode) {
    langCode = langCode || this.options.langCode;
    if (this.locale[langCode] && this.locale[langCode].hasOwnProperty(key)) {
        return this.locale[langCode][key];
    }
    this.log(this.LOG_WARNING, 'Unknown translation key:', key);
    return key;
};

/**
 * Use an existing definition in the Window object or create a new one.
 *
 * Note: This must be the last statement of this file.
 *
 * @type {AjaxBootstrapSelect}
 * @ignore
 */
window.AjaxBootstrapSelect = window.AjaxBootstrapSelect || AjaxBootstrapSelect;

/**
 * @class AjaxBootstrapSelectList
 *   Maintains the select options and selectpicker menu.
 *
 * @param {AjaxBootstrapSelect} plugin
 *   The plugin instance.
 *
 * @return {AjaxBootstrapSelectList}
 *   A new instance of this class.
 */
var AjaxBootstrapSelectList = function (plugin) {
    var that = this;

    /**
     * DOM element used for updating the status of requests and list counts.
     * @type {jQuery}
     */
    this.$status = $(plugin.options.templates.status).hide().appendTo(plugin.selectpicker.$menu);
    var statusInitialized = plugin.t('statusInitialized');
    if (statusInitialized && statusInitialized.length) {
        this.setStatus(statusInitialized);
    }

    /**
     * Container for cached data.
     * @type {Object}
     */
    this.cache = {};

    /**
     * Reference the plugin for internal use.
     * @type {AjaxBootstrapSelect}
     */
    this.plugin = plugin;

    /**
     * Container for current selections.
     * @type {Array}
     */
    this.selected = [];

    /**
     * Containers for previous titles.
     */
    this.title = null;
    this.selectedTextFormat = plugin.selectpicker.options.selectedTextFormat;

    // Preserve selected options.
    if (plugin.options.preserveSelected) {
        plugin.$element.on('change.abs.preserveSelected', function (e) {
            var $selected = plugin.$element.find(':selected');
            that.selected = [];
            // If select does not have multiple selection, ensure that only the
            // last selected option is preserved.
            if (!plugin.selectpicker.multiple) {
                $selected = $selected.last();
            }
            $selected.each(function () {
                var $option = $(this);
                var value = $option.attr('value');
                that.selected.push({
                    value: value,
                    text: $option.text(),
                    'class': $option.attr('class') || '',
                    data: $option.data() || {},
                    preserved: true,
                    selected: true
                });
            });
            that.replaceOptions(that.cacheGet(that.plugin.query));
        });
    }
};

/**
 * Builds the options for placing into the element.
 *
 * @param {Array} data
 *   The data to use when building options for the select list. Each
 *   array item must be an Object structured as follows:
 *     - {int|string} value: Required, a unique value identifying the
 *       item. Optionally not required if divider is passed instead.
 *     - {boolean} [divider]: Optional, if passed all other values are
 *       ignored and this item becomes a divider.
 *     - {string} [text]: Optional, the text to display for the item.
 *       If none is provided, the value will be used.
 *     - {String} [class]: Optional, the classes to apply to the option.
 *     - {boolean} [disabled]: Optional, flag that determines if the
 *       option is disabled.
 *     - {boolean} [selected]: Optional, flag that determines if the
 *       option is selected. Useful only for select lists that have the
 *       "multiple" attribute. If it is a single select list, each item
 *       that passes this property as true will void the previous one.
 *     - {Object} [data]: Optional, the additional data attributes to
 *       attach to the option element. These are processed by the
 *       bootstrap-select plugin.
 *
 * @return {String}
 *   HTML containing the <option> elements to place in the element.
 */
AjaxBootstrapSelectList.prototype.build = function (data) {
    var a, i, l = data.length;
    var $select = $('<select/>');
    var $preserved = $('<optgroup/>').attr('label', this.plugin.t('currentlySelected'));

    this.plugin.log(this.plugin.LOG_DEBUG, 'Building the select list options from data:', data);

    for (i = 0; i < l; i++) {
        var item = data[i];
        var $option = $('<option/>').appendTo(item.preserved ? $preserved : $select);

        // Detect dividers.
        if (item.hasOwnProperty('divider')) {
            $option.attr('data-divider', 'true');
            continue;
        }

        // Set various properties.
        $option.val(item.value).text(item.text);
        if (item['class'].length) {
            $option.attr('class', item['class']);
        }
        if (item.disabled) {
            $option.attr('disabled', true);
        }

        // Remove previous selections, if necessary.
        if (item.selected && !this.plugin.selectpicker.multiple) {
            $select.find(':selected').prop('selected', false);
        }

        // Set this option's selected state.
        if (item.selected) {
            $option.attr('selected', true);
        }

        // Add data attributes.
        for (a in item.data) {
            if (item.data.hasOwnProperty(a)) {
                $option.attr('data-' + a, item.data[a]);
            }
        }
    }

    // Append the preserved selections.
    if ($preserved.find('option').length) {
        $preserved[this.plugin.options.preserveSelectedPosition === 'before' ? 'prependTo' : 'appendTo']($select);
    }

    var options = $select.html();
    this.plugin.log(this.plugin.LOG_DEBUG, options);
    return options;
};

/**
 * Retrieve data from the cache.
 *
 * @param {string} key
 *   The identifier name of the data to retrieve.
 * @param {*} [defaultValue]
 *   The default value to return if no cache data is available.
 *
 * @return {*}
 *   The cached data or defaultValue.
 */
AjaxBootstrapSelectList.prototype.cacheGet = function (key, defaultValue) {
    var value = this.cache[key] || defaultValue;
    this.plugin.log(this.LOG_DEBUG, 'Retrieving cache:', key, value);
    return value;
};

/**
 * Save data to the cache.
 *
 * @param {string} key
 *   The identifier name of the data to store.
 * @param {*} value
 *   The value of the data to store.
 *
 * @return {void}
 */
AjaxBootstrapSelectList.prototype.cacheSet = function (key, value) {
    this.cache[key] = value;
    this.plugin.log(this.LOG_DEBUG, 'Saving to cache:', key, value);
};

/**
 * Destroys the select list.
 */
AjaxBootstrapSelectList.prototype.destroy = function () {
    this.replaceOptions();
    this.plugin.list.setStatus();
    this.plugin.log(this.plugin.LOG_DEBUG, 'Destroyed select list.');
};

/**
 * Refreshes the select list.
 */
AjaxBootstrapSelectList.prototype.refresh = function (triggerChange) {
    // Remove unnecessary "min-height" from selectpicker.
    this.plugin.selectpicker.$menu.css('minHeight', 0);
    this.plugin.selectpicker.$menu.find('> .inner').css('minHeight', 0);
    var emptyTitle = this.plugin.t('emptyTitle');
    if (!this.plugin.$element.find('option').length && emptyTitle && emptyTitle.length) {
        this.setTitle(emptyTitle);
    }
    else if (this.title) {
        this.restoreTitle();
    }
    this.plugin.selectpicker.refresh();
    // The "refresh" method sets the $lis property to null, it must be rebuilt.
    this.plugin.selectpicker.findLis();

    // Only trigger change event when specified.
    if(triggerChange){
      this.plugin.log(this.plugin.LOG_DEBUG, 'Triggering Change');
      this.plugin.$element.trigger('change.$');
    }
    this.plugin.log(this.plugin.LOG_DEBUG, 'Refreshed select list.');
};

/**
 * Replaces the select list options with provided data.
 *
 * It will also inject any preserved selections if the preserveSelected
 * option is enabled.
 *
 * @param {Array} data
 *   The data array to process.
 *
 * @returns {void}
 */
AjaxBootstrapSelectList.prototype.replaceOptions = function (data) {
    var i, l, item, output = '', processedData = [], selected = [], seenValues = [];
    data = data || [];

    // Merge in selected options from the previous state (cannot be cached).
    if (this.selected && this.selected.length) {
        this.plugin.log(this.plugin.LOG_INFO, 'Processing preserved selections:', this.selected);
        selected = [].concat(this.selected, data);
        l = selected.length;
        for (i = 0; i < l; i++) {
            item = selected[i];
            // Typecast the value for the seenValues array. Array indexOf
            // searches are type sensitive.
            if (item.hasOwnProperty('value') && seenValues.indexOf(item.value + '') === -1) {
                seenValues.push(item.value + '');
                processedData.push(item);
            }
            else {
                this.plugin.log(this.plugin.LOG_DEBUG, 'Duplicate item found, ignoring.');
            }
        }
        data = processedData;
    }

    // Build the option output.
    if (data.length) {
        output = this.plugin.list.build(data);
    }

    // Replace the options.
    this.plugin.$element.html(output);
    this.refresh();
    this.plugin.log(this.plugin.LOG_DEBUG, 'Replaced options with data:', data);
};

/**
 * Restores the select list to the last saved state.
 *
 * @return {boolean}
 *   Return true if successful or false if no states are present.
 */
AjaxBootstrapSelectList.prototype.restore = function () {
    var cache = this.plugin.list.cacheGet(this.plugin.previousQuery);
    if (cache && this.plugin.list.replaceOptions(cache)) {
        this.plugin.log(this.plugin.LOG_DEBUG, 'Restored select list to the previous query: ', this.plugin.previousQuery);
    }
    this.plugin.log(this.plugin.LOG_DEBUG, 'Unable to restore select list to the previous query:', this.plugin.previousQuery);
    return false;
};

/**
 * Restores the previous title of the select element.
 *
 * @return {void}
 */
AjaxBootstrapSelectList.prototype.restoreTitle = function () {
    if (!this.plugin.request) {
        this.plugin.selectpicker.options.selectedTextFormat = this.selectedTextFormat;
        if (this.title) {
            this.plugin.$element.attr('title', this.title);
        }
        else {
            this.plugin.$element.removeAttr('title');
        }
        this.title = null;
    }
};

/**
 * Sets a new title on the select element.
 *
 * @param {String} title
 *
 * @return {void}
 */
AjaxBootstrapSelectList.prototype.setTitle = function (title) {
    if (!this.plugin.request) {
        this.title = this.plugin.$element.attr('title');
        this.plugin.selectpicker.options.selectedTextFormat = 'static';
        this.plugin.$element.attr('title', title);
    }
};

/**
 * Sets a new status on the AjaxBootstrapSelectList.$status DOM element.
 *
 * @param {String} [status]
 *   The new status to set, if empty it will hide it.
 *
 * @return {void}
 */
AjaxBootstrapSelectList.prototype.setStatus = function (status) {
    status = status || '';
    if (status.length) {
        this.$status.html(status).show();
    }
    else {
        this.$status.html('').hide();
    }
};

/**
 * Use an existing definition in the Window object or create a new one.
 *
 * Note: This must be the last statement of this file.
 *
 * @type {AjaxBootstrapSelectList}
 * @ignore
 */
window.AjaxBootstrapSelectList = window.AjaxBootstrapSelectList || AjaxBootstrapSelectList;

/**
 * @class AjaxBootstrapSelectRequest
 *   Instantiates a new jQuery.ajax request for the current query.
 *
 * @param {AjaxBootstrapSelect} plugin
 *   The plugin instance.
 *
 * @return {AjaxBootstrapSelectRequest}
 *   A new instance of this class.
 */
var AjaxBootstrapSelectRequest = function (plugin) {
    var that = this;
    var ajaxCallback = function (event) {
        return function () {
            that.plugin.log(that.plugin.LOG_INFO, 'Invoking AjaxBootstrapSelectRequest.' + event + ' callback:', arguments);
            that[event].apply(that, arguments);
            if (that.callbacks[event]) {
                that.plugin.log(that.plugin.LOG_INFO, 'Invoking ajax.' + event + ' callback:', arguments);
                that.callbacks[event].apply(that, arguments);
            }
        };
    };
    var events = ['beforeSend', 'success', 'error', 'complete'];
    var i, l = events.length;

    // Reference the existing plugin.
    this.plugin = plugin;

    // Clone the default ajax options.
    this.options = $.extend(true, {}, plugin.options.ajax);

    // Save any existing callbacks provided in the options and replace it with
    // the relevant method callback. The provided callback will be invoked
    // after this plugin has executed.
    this.callbacks = {};
    for (i = 0; i < l; i++) {
        var event = events[i];
        if (this.options[event] && $.isFunction(this.options[event])) {
            this.callbacks[event] = this.options[event];
        }
        this.options[event] = ajaxCallback(event);
    }

    // Allow the data option to be dynamically generated.
    if (this.options.data && $.isFunction(this.options.data)) {
        this.options.data = this.options.data.apply(this) || {
            q: '{{{q}}}'
        };
    }

    // Replace all data values that contain "{{{q}}}" with the value of the
    // current search query.
    this.plugin.replaceValue(this.options.data, '{{{q}}}', this.plugin.query);

    // Invoke the AJAX request.
    this.jqXHR = $.ajax(this.options);
};

/**
 * @event
 * A callback that can be used to modify the jqXHR object before it is sent.
 *
 * Use this to set custom headers, etc. Returning false will cancel the request.
 * To modify the options being sent, use this.options.
 *
 * @param {jqXHR} jqXHR
 *   The jQuery wrapped XMLHttpRequest object.
 *
 * @return {void}
 */
AjaxBootstrapSelectRequest.prototype.beforeSend = function (jqXHR) {
    // Destroy the list currently there.
    this.plugin.list.destroy();

    // Set the status accordingly.
    this.plugin.list.setStatus(this.plugin.t('statusSearching'));

    //this.plugin.list.refresh();
};

/**
 * @event
 * The "complete" callback for the request.
 *
 * @param {jqXHR} jqXHR
 *   The jQuery wrapped XMLHttpRequest object.
 * @param {String} status
 *   A string categorizing the status of the request: "success", "notmodified",
 *   "error", "timeout", "abort", or "parsererror".
 *
 * @return {void}
 */
AjaxBootstrapSelectRequest.prototype.complete = function (jqXHR, status) {
    // Only continue if actual results and not an aborted state.
    if (status !== 'abort') {
        var cache = this.plugin.list.cacheGet(this.plugin.query);
        if (cache) {
            if (cache.length) {
                this.plugin.list.setStatus();
            }
            else {
                this.plugin.list.destroy();
                this.plugin.list.setStatus(this.plugin.t('statusNoResults'));
                this.plugin.log(this.plugin.LOG_INFO, 'No results were returned.');
                return;
            }
        }
        this.plugin.list.refresh(true);
    }
};

/**
 * @event
 * The "error" callback for the request.
 *
 * @param {jqXHR} jqXHR
 *   The jQuery wrapped XMLHttpRequest object.
 * @param {String} status
 *   A string describing the type of error that occurred. Possible values for
 *   the second argument (besides null) are "timeout", "error", "abort", and
 *   "parsererror".
 * @param {String|Object} error
 *   An optional exception object, if one occurred. When an HTTP error occurs,
 *   error receives the textual portion of the HTTP status, such as "Not Found"
 *   or "Internal Server Error."
 *
 * @return {void}
 */
AjaxBootstrapSelectRequest.prototype.error = function (jqXHR, status, error) {
    if (status !== 'abort') {
        // Cache the result data.
        this.plugin.list.cacheSet(this.plugin.query);

        // Clear the list.
        if (this.plugin.options.clearOnError) {
            this.plugin.list.destroy();
        }

        // Set the status after the list has cleared and before the restore.
        this.plugin.list.setStatus(this.plugin.t('errorText'));

        // Restore previous request.
        if (this.plugin.options.restoreOnError) {
            this.plugin.list.restore();
            this.plugin.list.setStatus();
        }
    }
};

/**
 * Process incoming data.
 *
 * This method ensures that the incoming data has unique values and
 * is in the proper format that is utilized by this plugin. It also
 * adds in the existing selects if the option is enabled. If the
 * preprocessData and processData functions were defined in the plugin
 * options, they are invoked here.
 *
 * @param {Array|Object} data
 *   The JSON data to process.
 *
 * @return {Array|Boolean}
 *   The processed data array or false if an error occurred.
 */
AjaxBootstrapSelectRequest.prototype.process = function (data) {
    var i, l, callbackResult, item, preprocessedData, processedData;
    var filteredData = [], seenValues = [];

    this.plugin.log(this.plugin.LOG_INFO, 'Processing raw data for:', this.plugin.query, data);

    // Invoke the preprocessData option callback.
    preprocessedData = data;
    if ($.isFunction(this.plugin.options.preprocessData)) {
        this.plugin.log(this.plugin.LOG_DEBUG, 'Invoking preprocessData callback:', this.plugin.options.processData);
        callbackResult = this.plugin.options.preprocessData.apply(this, [preprocessedData]);
        if (typeof callbackResult !== 'undefined' && callbackResult !== null && callbackResult !== false) {
            preprocessedData = callbackResult;
        }
    }

    // Ensure the data is an array.
    if (!$.isArray(preprocessedData)) {
        this.plugin.log(this.plugin.LOG_ERROR, 'The data returned is not an Array. Use the "preprocessData" callback option to parse the results and construct a proper array for this plugin.', preprocessedData);
        return false;
    }

    // Filter preprocessedData.
    l = preprocessedData.length;
    for (i = 0; i < l; i++) {
        item = preprocessedData[i];
        this.plugin.log(this.plugin.LOG_DEBUG, 'Processing item:', item);
        if ($.isPlainObject(item)) {
            // Check if item is a divider. If so, ignore all other data.
            if (item.hasOwnProperty('divider') || (item.hasOwnProperty('data') && $.isPlainObject(item.data) && item.data.divider)) {
                this.plugin.log(this.plugin.LOG_DEBUG, 'Item is a divider, ignoring provided data.');
                filteredData.push({divider: true});
            }
            // Ensure item has a "value" and is unique.
            else {
                if (item.hasOwnProperty('value')) {
                    // Typecast the value for the seenValues array. Array
                    // indexOf searches are type sensitive.
                    if (seenValues.indexOf(item.value + '') === -1) {
                        seenValues.push(item.value + '');
                        // Provide default items to ensure expected structure.
                        item = $.extend({
                            text: item.value,
                            'class': '',
                            data: {},
                            disabled: false,
                            selected: false
                        }, item);
                        filteredData.push(item);
                    }
                    else {
                        this.plugin.log(this.plugin.LOG_DEBUG, 'Duplicate item found, ignoring.');
                    }
                }
                else {
                    this.plugin.log(this.plugin.LOG_DEBUG, 'Data item must have a "value" property, skipping.');
                }
            }
        }
    }

    // Invoke the processData option callback.
    processedData = [].concat(filteredData);
    if ($.isFunction(this.plugin.options.processData)) {
        this.plugin.log(this.plugin.LOG_DEBUG, 'Invoking processData callback:', this.plugin.options.processData);
        callbackResult = this.plugin.options.processData.apply(this, [processedData]);
        if (typeof callbackResult !== 'undefined' && callbackResult !== null && callbackResult !== false) {
            if ($.isArray(callbackResult)) {
                processedData = callbackResult;
            }
            else {
                this.plugin.log(this.plugin.LOG_ERROR, 'The processData callback did not return an array.', callbackResult);
                return false;
            }
        }
    }

    // Cache the processed data.
    this.plugin.list.cacheSet(this.plugin.query, processedData);

    this.plugin.log(this.plugin.LOG_INFO, 'Processed data:', processedData);
    return processedData;
};

/**
 * @event
 * The "success" callback for the request.
 *
 * @param {Object} data
 *   The data returned from the server, formatted according to the dataType
 *   option.
 * @param {String} status
 *   A string describing the status.
 * @param {jqXHR} jqXHR
 *   The jQuery wrapped XMLHttpRequest object.
 *
 * @return {void}
 */
AjaxBootstrapSelectRequest.prototype.success = function (data, status, jqXHR) {
    // Only process data if an Array or Object.
    if (!$.isArray(data) && !$.isPlainObject(data)) {
        this.plugin.log(this.plugin.LOG_ERROR, 'Request did not return a JSON Array or Object.', data);
        this.plugin.list.destroy();
        return;
    }

    // Process the data.
    var processedData = this.process(data);
    this.plugin.list.replaceOptions(processedData);
};

/**
 * Use an existing definition in the Window object or create a new one.
 *
 * Note: This must be the last statement of this file.
 *
 * @type {AjaxBootstrapSelectRequest}
 * @ignore
 */
window.AjaxBootstrapSelectRequest = window.AjaxBootstrapSelectRequest || AjaxBootstrapSelectRequest;

/**
 * @class $.fn.ajaxSelectPicker
 * @chainable
 *
 * The jQuery plugin definition.
 *
 * This initializes a new AjaxBootstrapSelect class for each element in the jQuery chain.
 *
 * @param {Object} options
 *   The {@link $.fn.ajaxSelectPicker.defaults options} to pass to the plugin.
 *
 * @returns {jQuery}
 */
$.fn.ajaxSelectPicker = function (options) {
    return this.each(function () {
        if (!$(this).data('AjaxBootstrapSelect')) {
            $(this).data('AjaxBootstrapSelect', new window.AjaxBootstrapSelect(this, options));
        }
    });
};

/**
 * The locale object containing string translations.
 *
 * See: {@link $.fn.ajaxSelectPicker.locale}
 * @type {Object}
 */
$.fn.ajaxSelectPicker.locale = {};

/**
 * The default options the plugin will use if none are provided.
 *
 * See: {@link $.fn.ajaxSelectPicker.defaults}
 *
 * @member $.fn.ajaxSelectPicker
 * @property {Object} defaults
 */
$.fn.ajaxSelectPicker.defaults = {
    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#preprocessData}.
     * @cfg {Function} ajaxResultsPreHook
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Object} ajax (required)
     * @markdown
     * The options to pass to the jQuery AJAX request.
     *
     * ```js
     * {
     *     url: null, // Required.
     *     type: 'POST',
     *     dataType: 'json',
     *     data: {
     *         q: '{{{q}}}'
     *     }
     * }
     * ```
     */
    ajax: {
        url: null,
        type: 'POST',
        dataType: 'json',
        data: {
            q: '{{{q}}}'
        }
    },

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} ajaxSearchUrl
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#ajax}.
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} bindEvent = "keyup"
     * @markdown
     * The event to bind on the search input element to fire a request.
     */
    bindEvent: 'keyup',

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} cache = true
     * @markdown
     * Cache previous requests. If enabled, the "enter" key (13) is enabled to
     * allow users to force a refresh of the request.
     */
    cache: true,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} clearOnEmpty = true
     * @markdown
     * Clears the previous results when the search input has no value.
     */
    clearOnEmpty: true,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} clearOnError = true
     * @markdown
     * Clears the select list when the request returned with an error.
     */
    clearOnError: true,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} debug
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#log}.
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} emptyRequest = false
     * @markdown
     * Invoke a request for empty search values.
     */
    emptyRequest: false,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Object} ignoredKeys
     * @markdown
     * Key codes to ignore so a request is not invoked with bindEvent. The
     * "enter" key (13) will always be dynamically added to any list provided
     * unless the "cache" option above is set to "true".
     *
     * ```js
     * {
     *     9: "tab",
     *     16: "shift",
     *     17: "ctrl",
     *     18: "alt",
     *     27: "esc",
     *     37: "left",
     *     39: "right",
     *     38: "up",
     *     40: "down",
     *     91: "meta",
     *     229: "unknown"
     * }
     * ```
     */
    ignoredKeys: {
        9: "tab",
        16: "shift",
        17: "ctrl",
        18: "alt",
        27: "esc",
        37: "left",
        39: "right",
        38: "up",
        40: "down",
        91: "meta",
        229: "unknown"
    },

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} langCode = null
     * @markdown
     * The language code to use for string translation. By default this value
     * is determined by the browser, however it is not entirely reliable. If
     * you encounter inconsistencies, you may need to manually set this option.
     */
    langCode: null,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Object} locale = null
     * @markdown
     * Provide specific overrides for {@link $.fn.ajaxSelectPicker.locale locale string} translations. Values
     * set here will cause the plugin to completely ignore defined locale string
     * translations provided by the set language code. This is useful when
     * needing to change a single value or when being used in a system that
     * provides its own translations, like a CMS.
     *
     * ```js
     * locale: {
     *     searchPlaceholder: Drupal.t('Find...')
     * }
     * ```
     */
    locale: null,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String|Number|Number} log = 'error'
     * @markdown
     * Determines the amount of logging that is displayed:
     *
     * - __0, false:__ Display no information from the plugin.
     * - __1, 'error':__ Fatal errors that prevent the plugin from working.
     * - __2, 'warn':__ Warnings that may impact the display of request data, but does not prevent the plugin from functioning.
     * - __3, 'info':__ Provides additional information, generally regarding the from request data and callbacks.
     * - __4, true, 'debug':__ Display all possible information. This will likely be highly verbose and is only recommended for development purposes or tracing an error with a request.
     */
    log: 'error',

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} mixWithCurrents
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#preserveSelected}.
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg placeHolderOption
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.locale#emptyTitle}.
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Function|null} preprocessData = function(){}
     * @markdown
     * Process the raw data returned from a request.
     *
     * The following arguments are passed to this callback:
     *
     * - __data__ - `Array` The raw data returned from the request, passed by reference.
     *
     * This callback must return one of the following:
     *
     * - `Array` - A new array of items. This will replace the passed data.
     * - `undefined|null|false` - Stops the callback and will use whatever modifications have been made to data.
     *
     * ```js
     * function (data) {
     *     var new = [], old = [], other = [];
     *     for (var i = 0; i < data.length; i++) {
     *         // Add items flagged as "new" to the correct array.
     *         if (data[i].new) {
     *             new.push(data[i]);
     *         }
     *         // Add items flagged as "old" to the correct array.
     *         else if (data[i].old) {
     *             old.push(data[i]);
     *         }
     *         // Something out of the ordinary happened, put these last.
     *         else {
     *             other.push(data[i]);
     *         }
     *     }
     *     // Sort the data according to the order of these arrays.
     *     return [].concat(new, old, other).
     * }
     * ```
     */
    preprocessData: function(){},

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} preserveSelected = true
     * @markdown
     * Preserve selected items(s) between requests. When enabled, they will be
     * placed in an `<optgroup>` with the label `Currently Selected`. Disable
     * this option if you send your currently selected items along with your
     * request and let the server handle this responsibility.
     */
    preserveSelected: true,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} preserveSelectedPosition = 'after'
     * @markdown
     * Place the currently selected options `'before'` or `'after'` the options
     * returned from the request.
     */
    preserveSelectedPosition: 'after',

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Function|null} processData = function(){}
     * @markdown
     * Process the data returned after this plugin, but before the list is built.
     */
    processData: function(){},

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Number} requestDelay = 300
     * @markdown
     * The amount of time, in milliseconds, that must pass before a request
     * is initiated. Each time the {@link $.fn.ajaxSelectPicker.defaults#bindEvent bindEvent} is fired, it will cancel the
     * current delayed request and start a new one.
     */
    requestDelay: 300,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} restoreOnError = false
     * @markdown
     * Restores the select list with the previous results when the request
     * returns with an error.
     */
    restoreOnError: false,

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Object} templates
     * @markdown
     * The DOM templates used in this plugin.
     *
     * ```js
     * templates: {
     *     // The placeholder for status updates pertaining to the list and request.
     *     status: '<div class="status"></div>',
     * }
     * ```
     */
    templates: {
        status: '<div class="status"></div>'
    }
};

/*
 * Note: You do not have to load this translation file. English is the
 * default language of this plugin and is compiled into it automatically.
 *
 * This file is just to serve as the default string mappings and as a
 * template for future translations.
 * @see: ./src/js/locale/en-US.js
 *
 * Four character language codes are supported ("en-US") and will always
 * take precedence over two character language codes ("en") if present.
 *
 * When copying this file, remove all comments except the one above the
 * definition objection giving credit to the translation author.
 */

/*!
 * English translation for the "en-US" and "en" language codes.
 * Mark Carver <mark.carver@me.com>
 */
$.fn.ajaxSelectPicker.locale['en-US'] = {
    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} currentlySelected = 'Currently Selected'
     * @markdown
     * The text to use for the label of the option group when currently selected options are preserved.
     */
    currentlySelected: 'Currently Selected',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} emptyTitle = 'Select and begin typing'
     * @markdown
     * The text to use as the title for the select element when there are no items to display.
     */
    emptyTitle: 'Select and begin typing',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} errorText = ''Unable to retrieve results'
     * @markdown
     * The text to use in the status container when a request returns with an error.
     */
    errorText: 'Unable to retrieve results',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} searchPlaceholder = 'Search...'
     * @markdown
     * The text to use for the search input placeholder attribute.
     */
    searchPlaceholder: 'Search...',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusInitialized = 'Start typing a search query'
     * @markdown
     * The text used in the status container when it is initialized.
     */
    statusInitialized: 'Start typing a search query',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusNoResults = 'No Results'
     * @markdown
     * The text used in the status container when the request returns no results.
     */
    statusNoResults: 'No Results',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusSearching = 'Searching...'
     * @markdown
     * The text to use in the status container when a request is being initiated.
     */
    statusSearching: 'Searching...'
};
$.fn.ajaxSelectPicker.locale.en = $.fn.ajaxSelectPicker.locale['en-US'];

})(jQuery, window);

/*!
 * Ajax Bootstrap Select
 *
 * Extends existing [Bootstrap Select] implementations by adding the ability to search via AJAX requests as you type. Originally for CROSCON.
 *
 * @version 1.3.2
 * @author Adam Heim - https://github.com/truckingsim
 * @link https://github.com/truckingsim/Ajax-Bootstrap-Select
 * @copyright 2015 Adam Heim
 * @license Released under the MIT license.
 *
 * Contributors:
 *   Mark Carver - https://github.com/markcarver
 *
 * Last build: 2015-05-15 6:42:55 PM CDT
 */
!(function ($) {
/*
 * Note: You do not have to load this translation file. English is the
 * default language of this plugin and is compiled into it automatically.
 *
 * This file is just to serve as the default string mappings and as a
 * template for future translations.
 * @see: ./src/js/locale/en-US.js
 *
 * Four character language codes are supported ("en-US") and will always
 * take precedence over two character language codes ("en") if present.
 *
 * When copying this file, remove all comments except the one above the
 * definition objection giving credit to the translation author.
 */

/*!
 * English translation for the "en-US" and "en" language codes.
 * Mark Carver <mark.carver@me.com>
 */
$.fn.ajaxSelectPicker.locale['en-US'] = {
    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} currentlySelected = 'Currently Selected'
     * @markdown
     * The text to use for the label of the option group when currently selected options are preserved.
     */
    currentlySelected: 'Currently Selected',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} emptyTitle = 'Select and begin typing'
     * @markdown
     * The text to use as the title for the select element when there are no items to display.
     */
    emptyTitle: 'Select and begin typing',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} errorText = ''Unable to retrieve results'
     * @markdown
     * The text to use in the status container when a request returns with an error.
     */
    errorText: 'Unable to retrieve results',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} searchPlaceholder = 'Search...'
     * @markdown
     * The text to use for the search input placeholder attribute.
     */
    searchPlaceholder: 'Search...',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusInitialized = 'Start typing a search query'
     * @markdown
     * The text used in the status container when it is initialized.
     */
    statusInitialized: 'Start typing a search query',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusNoResults = 'No Results'
     * @markdown
     * The text used in the status container when the request returns no results.
     */
    statusNoResults: 'No Results',

    /**
     * @member $.fn.ajaxSelectPicker.locale
     * @cfg {String} statusSearching = 'Searching...'
     * @markdown
     * The text to use in the status container when a request is being initiated.
     */
    statusSearching: 'Searching...'
};
$.fn.ajaxSelectPicker.locale.en = $.fn.ajaxSelectPicker.locale['en-US'];
})(jQuery);

/*!
 * Bootstrap-select v1.6.5 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
(function ($) {
  'use strict';

  //<editor-fold desc="Shims">
  if (!String.prototype.includes) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var toString = {}.toString;
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var indexOf = ''.indexOf;
      var includes = function (search) {
        if (this == null) {
          throw TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        return indexOf.call(string, searchString, pos) != -1;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'includes', {
          'value': includes,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.includes = includes;
      }
    }());
  }

  if (!String.prototype.startsWith) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var toString = {}.toString;
      var startsWith = function (search) {
        if (this == null) {
          throw TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        var index = -1;
        while (++index < searchLength) {
          if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
            return false;
          }
        }
        return true;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'startsWith', {
          'value': startsWith,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.startsWith = startsWith;
      }
    }());
  }
  //</editor-fold>

  // Case insensitive contains search
  $.expr[':'].icontains = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.text()).toUpperCase();
    return haystack.includes(meta[3].toUpperCase());
  };

  // Case insensitive begins search
  $.expr[':'].ibegins = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.text()).toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  // Case and accent insensitive contains search
  $.expr[':'].aicontains = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toUpperCase();
    return haystack.includes(haystack, meta[3]);
  };

  // Case and accent insensitive begins search
  $.expr[':'].aibegins = function (obj, index, meta) {
    var $obj = $(obj);
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  /**
   * Remove all diatrics from the given text.
   * @access private
   * @param {String} text
   * @returns {String}
   */
  function normalizeToBase(text) {
    var rExps = [
      {re: /[\xC0-\xC6]/g, ch: "A"},
      {re: /[\xE0-\xE6]/g, ch: "a"},
      {re: /[\xC8-\xCB]/g, ch: "E"},
      {re: /[\xE8-\xEB]/g, ch: "e"},
      {re: /[\xCC-\xCF]/g, ch: "I"},
      {re: /[\xEC-\xEF]/g, ch: "i"},
      {re: /[\xD2-\xD6]/g, ch: "O"},
      {re: /[\xF2-\xF6]/g, ch: "o"},
      {re: /[\xD9-\xDC]/g, ch: "U"},
      {re: /[\xF9-\xFC]/g, ch: "u"},
      {re: /[\xC7-\xE7]/g, ch: "c"},
      {re: /[\xD1]/g, ch: "N"},
      {re: /[\xF1]/g, ch: "n"}
    ];
    $.each(rExps, function () {
      text = text.replace(this.re, this.ch);
    });
    return text;
  }


  function htmlEscape(html) {
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };
    var source = '(?:' + Object.keys(escapeMap).join('|') + ')',
        testRegexp = new RegExp(source),
        replaceRegexp = new RegExp(source, 'g'),
        string = html == null ? '' : '' + html;
    return testRegexp.test(string) ? string.replace(replaceRegexp, function (match) {
      return escapeMap[match];
    }) : string;
  }

  var Selectpicker = function (element, options, e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.$lis = null;
    this.options = options;

    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.remove;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.VERSION = '1.6.5';

  // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
  Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
        (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
      ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok',
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false
  };

  Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function () {
      var that = this,
          id = this.$element.attr('id');

      this.$element.hide();
      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');
      this.$newElement = this.createView();
      this.$element.after(this.$newElement);
      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children('.dropdown-menu');
      this.$searchbox = this.$menu.find('input');

      if (this.options.dropdownAlignRight)
        this.$menu.addClass('dropdown-menu-right');

      if (typeof id !== 'undefined') {
        this.$button.attr('data-id', id);
        $('label[for="' + id + '"]').click(function (e) {
          e.preventDefault();
          that.$button.focus();
        });
      }

      this.checkDisabled();
      this.clickListener();
      if (this.options.liveSearch) this.liveSearchListener();
      this.render();
      this.liHeight();
      this.setStyle();
      this.setWidth();
      if (this.options.container) this.selectPosition();
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      if (this.options.mobile) this.mobile();

      this.$newElement.on('hide.bs.dropdown', function(e) {
          that.$element.trigger('hide.bs.select', e);
      });
      
      this.$newElement.on('hidden.bs.dropdown', function(e) {
          that.$element.trigger('hidden.bs.select', e);
      });
      
      this.$newElement.on('show.bs.dropdown', function(e) {
          that.$element.trigger('show.bs.select', e);
      });
      
      this.$newElement.on('shown.bs.dropdown', function(e) {
          that.$element.trigger('shown.bs.select', e);
      });
    },

    createDropdown: function () {
      // Options
      // If we are multiple, then add the show-tick class by default
      var multiple = this.multiple ? ' show-tick' : '',
          inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
          autofocus = this.autofocus ? ' autofocus' : '';
      // Elements
      var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
      var searchbox = this.options.liveSearch ?
      '<div class="bs-searchbox">' +
      '<input type="text" class="form-control" autocomplete="off"' +
      (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + '>' +
      '</div>'
          : '';
      var actionsbox = this.multiple && this.options.actionsBox ?
      '<div class="bs-actionsbox">' +
      '<div class="btn-group btn-group-sm btn-block">' +
      '<button class="actions-btn bs-select-all btn btn-default">' +
      this.options.selectAllText +
      '</button>' +
      '<button class="actions-btn bs-deselect-all btn btn-default">' +
      this.options.deselectAllText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var donebutton = this.multiple && this.options.doneButton ?
      '<div class="bs-donebutton">' +
      '<div class="btn-group btn-block">' +
      '<button class="btn btn-sm btn-default">' +
      this.options.doneButtonText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var drop =
          '<div class="btn-group bootstrap-select' + multiple + inputGroup + '">' +
          '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + '>' +
          '<span class="filter-option pull-left"></span>&nbsp;' +
          '<span class="caret"></span>' +
          '</button>' +
          '<div class="dropdown-menu open">' +
          header +
          searchbox +
          actionsbox +
          '<ul class="dropdown-menu inner" role="menu">' +
          '</ul>' +
          donebutton +
          '</div>' +
          '</div>';

      return $(drop);
    },

    createView: function () {
      var $drop = this.createDropdown();
      var $li = this.createLi();
      $drop.find('ul').append($li);
      return $drop;
    },

    reloadLi: function () {
      //Remove all children.
      this.destroyLi();
      //Re build
      var $li = this.createLi();
      this.$menu.find('ul').append($li);
    },

    destroyLi: function () {
      this.$menu.find('li').remove();
    },

    createLi: function () {
      var that = this,
          _li = [],
          optID = 0,
          titleOption = '<option class="bs-title-option" value="" selected></option>';

      // Helper functions
      /**
       * @param content
       * @param [index]
       * @param [classes]
       * @param [optgroup]
       * @returns {string}
       */
      var generateLI = function (content, index, classes, optgroup) {
        return '<li' +
            ((typeof classes !== 'undefined' & '' !== classes) ? ' class="' + classes + '"' : '') +
            ((typeof index !== 'undefined' & null !== index) ? ' data-original-index="' + index + '"' : '') +
            ((typeof optgroup !== 'undefined' & null !== optgroup) ? 'data-optgroup="' + optgroup + '"' : '') +
            '>' + content + '</li>';
      };

      /**
       * @param text
       * @param [classes]
       * @param [inline]
       * @param [tokens]
       * @returns {string}
       */
      var generateA = function (text, classes, inline, tokens) {
        return '<a tabindex="0"' +
            (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
            (typeof inline !== 'undefined' ? ' style="' + inline + '"' : '') +
            ' data-normalized-text="' + normalizeToBase(htmlEscape(text)) + '"' +
            (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') +
            '>' + text +
            '<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' +
            '</a>';
      };

      if (this.options.title && !this.multiple && !this.$element.find('.bs-title-option').length) {
        this.$element.prepend(titleOption);
      }

      this.$element.find('option').each(function (index) {
        var $this = $(this);

        if ($this.hasClass('bs-title-option')) return;

        // Get the class and text for the option
        var optionClass = $this.attr('class') || '',
            inline = $this.attr('style'),
            text = $this.data('content') ? $this.data('content') : $this.html(),
            tokens = $this.data('tokens') ? $this.data('tokens') : null,
            subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
            icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
            isDisabled = $this.is(':disabled') || $this.parent().is(':disabled');
        if (icon !== '' && isDisabled) {
          icon = '<span>' + icon + '</span>';
        }

        if (!$this.data('content')) {
          // Prepend any icon and append any subtext to the main text.
          text = icon + '<span class="text">' + text + subtext + '</span>';
        }

        if (that.options.hideDisabled && isDisabled) {
          return;
        }

        if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
          if ($this.index() === 0) { // Is it the first option of the optgroup?
            optID += 1;

            // Get the opt group label
            var label = $this.parent().attr('label');
            var labelSubtext = typeof $this.parent().data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.parent().data('subtext') + '</small>' : '';
            var labelIcon = $this.parent().data('icon') ? '<span class="' + that.options.iconBase + ' ' + $this.parent().data('icon') + '"></span> ' : '';
            label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

            if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
              _li.push(generateLI('', null, 'divider', optID + 'div'));
            }

            _li.push(generateLI(label, null, 'dropdown-header', optID));
          }

          _li.push(generateLI(generateA(text, 'opt ' + optionClass, inline, tokens), index, '', optID));
        } else if ($this.data('divider') === true) {
          _li.push(generateLI('', index, 'divider'));
        } else if ($this.data('hidden') === true) {
          _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
        } else {
          if ($this.prev().is('optgroup')) _li.push(generateLI('', null, 'divider', optID + 'div'));
          _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
        }
      });

      //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
      if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
        this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
      }

      return $(_li.join(''));
    },

    findLis: function () {
      if (this.$lis == null) this.$lis = this.$menu.find('li');
      return this.$lis;
    },

    /**
     * @param [updateLi] defaults to true
     */
    render: function (updateLi) {
      var that = this;

      //Update the LI to match the SELECT
      if (updateLi !== false) {
        this.$element.find('option').each(function (index) {
          that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled'));
          that.setSelected(index, $(this).is(':selected'));
        });
      }

      this.tabIndex();
      var notDisabled = this.options.hideDisabled ? ':enabled' : '';
      var selectedItems = this.$element.find('option:selected' + notDisabled).map(function () {
        var $this = $(this);
        var icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
        var subtext;
        if (that.options.showSubtext && $this.data('subtext') && !that.multiple) {
          subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
        } else {
          subtext = '';
        }
        if (typeof $this.attr('title') !== 'undefined') {
          return $this.attr('title');
        } else if ($this.data('content') && that.options.showContent) {
          return $this.data('content');
        } else {
          return icon + $this.html() + subtext;
        }
      }).toArray();

      //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
      //Convert all the values into a comma delimited string
      var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

      //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
      if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
        var max = this.options.selectedTextFormat.split('>');
        if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
          notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
          var totalCount = this.$element.find('option').not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
              tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
          title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
        }
      }

      if (this.options.title == undefined) {
        this.options.title = this.$element.attr('title');
      }

      if (this.options.selectedTextFormat == 'static') {
        title = this.options.title;
      }

      //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
      if (!title) {
        title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
      }

      //strip all html-tags and trim the result
      this.$button.attr('title', $.trim(title.replace(/<[^>]*>?/g, '')));
      this.$button.children('.filter-option').html(title);

      this.$element.trigger('rendered.bs.select');
    },

    /**
     * @param [style]
     * @param [status]
     */
    setStyle: function (style, status) {
      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|validate\[.*\]/gi, ''));
      }

      var buttonClass = style ? style : this.options.style;

      if (status == 'add') {
        this.$button.addClass(buttonClass);
      } else if (status == 'remove') {
        this.$button.removeClass(buttonClass);
      } else {
        this.$button.removeClass(this.options.style);
        this.$button.addClass(buttonClass);
      }
    },

    liHeight: function () {
      if (this.options.size === false) return;

      var $selectClone = this.$menu.parent().clone().children('.dropdown-toggle').prop('autofocus', false).end().appendTo('body'),
          $menuClone = $selectClone.addClass('open').children('.dropdown-menu'),
          liHeight = $menuClone.find('li').not('.divider, .dropdown-header').filter(':visible').children('a').outerHeight(),
          headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0,
          searchHeight = this.options.liveSearch ? $menuClone.find('.bs-searchbox').outerHeight() : 0,
          actionsHeight = this.options.actionsBox ? $menuClone.find('.bs-actionsbox').outerHeight() : 0,
          doneButtonHeight = this.multiple ? $menuClone.find('.bs-donebutton').outerHeight() : 0;

      $selectClone.remove();

      this.$newElement
          .data('liHeight', liHeight)
          .data('headerHeight', headerHeight)
          .data('searchHeight', searchHeight)
          .data('actionsHeight', actionsHeight)
          .data('doneButtonHeight', doneButtonHeight);
    },

    setSize: function () {
      this.findLis();
      var that = this,
          $menu = this.$menu,
          $menuInner = $menu.children('.inner'),
          selectHeight = this.$newElement.outerHeight(),
          liHeight = this.$newElement.data('liHeight'),
          headerHeight = this.$newElement.data('headerHeight'),
          searchHeight = this.$newElement.data('searchHeight'),
          actionsHeight = this.$newElement.data('actionsHeight'),
          doneButtonHeight = this.$newElement.data('doneButtonHeight'),
          divHeight = this.$lis.filter('.divider').outerHeight(true),
          menuPadding = parseInt($menu.css('padding-top')) +
              parseInt($menu.css('padding-bottom')) +
              parseInt($menu.css('border-top-width')) +
              parseInt($menu.css('border-bottom-width')),
          notDisabled = this.options.hideDisabled ? '.disabled' : '',
          $window = $(window),
          menuExtras = menuPadding + parseInt($menu.css('margin-top')) + parseInt($menu.css('margin-bottom')) + 2,
          menuHeight,
          selectOffsetTop,
          selectOffsetBot,
          posVert = function () {
            // JQuery defines a scrollTop function, but in pure JS it's a property
            //noinspection JSValidateTypes
            selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
            selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
          };
      posVert();
      if (this.options.header) $menu.css('padding-top', 0);

      if (this.options.size == 'auto') {
        var getSize = function () {
          var minHeight,
              lisVis = that.$lis.not('.hidden');

          posVert();
          menuHeight = selectOffsetBot - menuExtras;

          if (that.options.dropupAuto) {
            that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras) < $menu.height());
          }
          if (that.$newElement.hasClass('dropup')) {
            menuHeight = selectOffsetTop - menuExtras;
          }

          if ((lisVis.length + lisVis.filter('.dropdown-header').length) > 3) {
            minHeight = liHeight * 3 + menuExtras - 2;
          } else {
            minHeight = 0;
          }

          $menu.css({
            'max-height': menuHeight + 'px',
            'overflow': 'hidden',
            'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px'
          });
          $menuInner.css({
            'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding + 'px',
            'overflow-y': 'auto',
            'min-height': Math.max(minHeight - menuPadding, 0) + 'px'
          });
        };
        getSize();
        this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
        $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
      } else if (this.options.size && this.options.size != 'auto' && $menu.find('li').not(notDisabled).length > this.options.size) {
        var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, this.options.size).last().parent().index();
        var divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding;
        if (that.options.dropupAuto) {
          //noinspection JSUnusedAssignment
          this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras) < $menu.height());
        }
        $menu.css({
          'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
          'overflow': 'hidden'
        });
        $menuInner.css({
          'max-height': menuHeight - menuPadding + 'px',
          'overflow-y': 'auto'
        });
      }
    },

    setWidth: function () {
      if (this.options.width == 'auto') {
        this.$menu.css('min-width', '0');

        // Get correct width if element hidden
        var selectClone = this.$newElement.clone().appendTo('body');
        var ulWidth = selectClone.children('.dropdown-menu').css('width');
        var btnWidth = selectClone.css('width', 'auto').children('button').css('width');
        selectClone.remove();

        // Set width to whatever's larger, button title or longest option
        this.$newElement.css('width', Math.max(parseInt(ulWidth), parseInt(btnWidth)) + 'px');
      } else if (this.options.width == 'fit') {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
      } else if (this.options.width) {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
      } else {
        // Remove inline min-width/width so width can be changed
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      }
      // Remove fit-width class if width is changed programmatically
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement.removeClass('fit-width');
      }
    },

    selectPosition: function () {
      var that = this,
          drop = '<div />',
          $drop = $(drop),
          pos,
          actualHeight,
          getPlacement = function ($element) {
            $drop.addClass($element.attr('class').replace(/form-control/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
            pos = $element.offset();
            actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
            $drop.css({
              'top': pos.top + actualHeight,
              'left': pos.left,
              'width': $element[0].offsetWidth,
              'position': 'absolute'
            });
          };
      this.$newElement.on('click', function () {
        if (that.isDisabled()) {
          return;
        }
        getPlacement($(this));
        $drop.appendTo(that.options.container);
        $drop.toggleClass('open', !$(this).hasClass('open'));
        $drop.append(that.$menu);
      });
      $(window).on('resize scroll', function () {
        getPlacement(that.$newElement);
      });
      $('html').on('click', function (e) {
        if ($(e.target).closest(that.$newElement).length < 1) {
          $drop.removeClass('open');
        }
      });
    },

    setSelected: function (index, selected) {
      this.findLis();
      this.$lis.filter('[data-original-index="' + index + '"]').toggleClass('selected', selected);
    },

    setDisabled: function (index, disabled) {
      this.findLis();
      if (disabled) {
        this.$lis.filter('[data-original-index="' + index + '"]').addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1);
      } else {
        this.$lis.filter('[data-original-index="' + index + '"]').removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0);
      }
    },

    isDisabled: function () {
      return this.$element.is(':disabled');
    },

    checkDisabled: function () {
      var that = this;

      if (this.isDisabled()) {
        this.$button.addClass('disabled').attr('tabindex', -1);
      } else {
        if (this.$button.hasClass('disabled')) {
          this.$button.removeClass('disabled');
        }

        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
        }
      }

      this.$button.click(function () {
        return !that.isDisabled();
      });
    },

    tabIndex: function () {
      if (this.$element.is('[tabindex]')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      }
    },

    clickListener: function () {
      var that = this,
          $document = $(document);

      this.$newElement.on('touchstart.dropdown', '.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $document.data('spaceSelect', false);
      
      this.$button.on('keyup', function(e) {
          if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
              e.preventDefault();
              $document.data('spaceSelect', false);
          }
      });

      this.$newElement.on('click', function () {
        that.setSize();
        if (!that.options.liveSearch && !that.multiple) {
          setTimeout(function () {
            that.$menu.find('.selected a').focus();
          }, 10);
        }
      });

      this.$menu.on('click', 'li a', function (e) {
        var $this = $(this),
            clickedIndex = $this.parent().data('originalIndex'),
            prevValue = that.$element.val(),
            prevIndex = that.$element.prop('selectedIndex');

        // Don't close on multi choice menu
        if (that.multiple) {
          e.stopPropagation();
        }

        e.preventDefault();

        //Don't run if we have been disabled
        if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
          var $options = that.$element.find('option'),
              $option = $options.eq(clickedIndex),
              state = $option.prop('selected'),
              $optgroup = $option.parent('optgroup'),
              maxOptions = that.options.maxOptions,
              maxOptionsGrp = $optgroup.data('maxOptions') || false;

          if (!that.multiple) { // Deselect all others if not multi select box
            $options.prop('selected', false);
            $option.prop('selected', true);
            that.$menu.find('.selected').removeClass('selected');
            that.setSelected(clickedIndex, true);
          } else { // Toggle the one we have chosen if we are multi select.
            $option.prop('selected', !state);
            that.setSelected(clickedIndex, !state);
            $this.blur();

            if (maxOptions !== false || maxOptionsGrp !== false) {
              var maxReached = maxOptions < $options.filter(':selected').length,
                  maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

              if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                if (maxOptions && maxOptions == 1) {
                  $options.prop('selected', false);
                  $option.prop('selected', true);
                  that.$menu.find('.selected').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                  $optgroup.find('option:selected').prop('selected', false);
                  $option.prop('selected', true);
                  var optgroupID = $this.parent().data('optgroup');
                  that.$menu.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else {
                  var maxOptionsArr = (typeof that.options.maxOptionsText === 'function') ?
                          that.options.maxOptionsText(maxOptions, maxOptionsGrp) : that.options.maxOptionsText,
                      maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                      maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                      $notify = $('<div class="notify"></div>');
                  // If {var} is set in array, replace it
                  /** @deprecated */
                  if (maxOptionsArr[2]) {
                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                  }

                  $option.prop('selected', false);

                  that.$menu.append($notify);

                  if (maxOptions && maxReached) {
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    that.$element.trigger('maxReached.bs.select');
                  }

                  if (maxOptionsGrp && maxReachedGrp) {
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    that.$element.trigger('maxReachedGrp.bs.select');
                  }

                  setTimeout(function () {
                    that.setSelected(clickedIndex, false);
                  }, 10);

                  $notify.delay(750).fadeOut(300, function () {
                    $(this).remove();
                  });
                }
              }
            }
          }

          if (!that.multiple) {
            that.$button.focus();
          } else if (that.options.liveSearch) {
            that.$searchbox.focus();
          }

          // Trigger select 'change'
          if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
            that.$element.change();
            // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
            that.$element.trigger('changed.bs.select', [clickedIndex, $option.prop('selected'), state]);
          }
        }
      });

      this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function (e) {
        if (e.currentTarget == this) {
          e.preventDefault();
          e.stopPropagation();
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.focus();
          } else {
            that.$button.focus();
          }
        }
      });

      this.$menu.on('click', 'li.divider, li.dropdown-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }
      });

      this.$menu.on('click', '.popover-title .close', function () {
        that.$button.click();
      });

      this.$searchbox.on('click', function (e) {
        e.stopPropagation();
      });

      this.$menu.on('click', '.actions-btn', function (e) {
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass('bs-select-all')) {
          that.selectAll();
        } else {
          that.deselectAll();
        }
        that.$element.change();
      });

      this.$element.change(function () {
        that.render(false);
      });
    },

    liveSearchListener: function () {
      var that = this,
          $no_results = $('<li class="no-results"></li>');

      this.$newElement.on('click.dropdown.data-api touchstart.dropdown.data-api', function () {
        that.$menu.find('.active').removeClass('active');
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
          that.$lis.not('.is-hidden').removeClass('hidden');
          if (!!$no_results.parent().length) $no_results.remove();
        }
        if (!that.multiple) that.$menu.find('.selected').addClass('active');
        setTimeout(function () {
          that.$searchbox.focus();
        }, 10);
      });

      this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function (e) {
        e.stopPropagation();
      });

      this.$searchbox.on('input propertychange', function () {
        if (that.$searchbox.val()) {
          var $searchBase = that.$lis.not('.is-hidden').removeClass('hidden').children('a');
          if (that.options.liveSearchNormalize) {
            $searchBase = $searchBase.not(':a' + that._searchStyle() + '(' + normalizeToBase(that.$searchbox.val()) + ')');
          } else {
            $searchBase = $searchBase.not(':' + that._searchStyle() + '(' + that.$searchbox.val() + ')');
          }
          $searchBase.parent().addClass('hidden');

          that.$lis.filter('.dropdown-header').each(function () {
            var $this = $(this),
                optgroup = $this.data('optgroup');

            if (that.$lis.filter('[data-optgroup=' + optgroup + ']').not($this).not('.hidden').length === 0) {
              $this.addClass('hidden');
              that.$lis.filter('[data-optgroup=' + optgroup + 'div]').addClass('hidden');
            }
          });

          var $lisVisible = that.$lis.not('.hidden');

          // hide divider if first or last visible, or if followed by another divider
          $lisVisible.each(function(index) {
            var $this = $(this);

            if ($this.hasClass('divider') && (
              $this.index() === $lisVisible.eq(0).index() ||
              $this.index() === $lisVisible.last().index() ||
              $lisVisible.eq(index + 1).hasClass('divider'))) {
              $this.addClass('hidden');
            }
          });

          if (!that.$lis.not('.hidden, .no-results').length) {
            if (!!$no_results.parent().length) {
              $no_results.remove();
            }
            $no_results.html(that.options.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"')).show();
            that.$menu.append($no_results);
          } else if (!!$no_results.parent().length) {
            $no_results.remove();
          }

        } else {
          that.$lis.not('.is-hidden').removeClass('hidden');
          if (!!$no_results.parent().length) {
            $no_results.remove();
          }
        }

        that.$lis.filter('.active').removeClass('active');
        that.$lis.not('.hidden, .divider, .dropdown-header').eq(0).addClass('active').children('a').focus();
        $(this).focus();
      });
    },

    _searchStyle: function () {
      var style = 'icontains';
      switch (this.options.liveSearchStyle) {
        case 'begins':
        case 'startsWith':
          style = 'ibegins';
          break;
        case 'contains':
        default:
          break; //no need to change the default
      }

      return style;
    },

    val: function (value) {
      if (typeof value !== 'undefined') {
        this.$element.val(value);
        this.render();

        return this.$element;
      } else {
        return this.$element.val();
      }
    },

    selectAll: function () {
      this.findLis();
      this.$element.find('option:enabled').not('[data-divider], [data-hidden]').prop('selected', true);
      this.$lis.not('.divider, .dropdown-header, .disabled, .hidden').addClass('selected');
      this.render(false);
    },

    deselectAll: function () {
      this.findLis();
      this.$element.find('option:enabled').not('[data-divider], [data-hidden]').prop('selected', false);
      this.$lis.not('.divider, .dropdown-header, .disabled, .hidden').removeClass('selected');
      this.render(false);
    },

    keydown: function (e) {
      var $this = $(this),
          $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
          $items,
          that = $parent.data('this'),
          index,
          next,
          first,
          last,
          prev,
          nextPrev,
          prevIndex,
          isActive,
          keyCodeMap = {
            32: ' ',
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            59: ';',
            65: 'a',
            66: 'b',
            67: 'c',
            68: 'd',
            69: 'e',
            70: 'f',
            71: 'g',
            72: 'h',
            73: 'i',
            74: 'j',
            75: 'k',
            76: 'l',
            77: 'm',
            78: 'n',
            79: 'o',
            80: 'p',
            81: 'q',
            82: 'r',
            83: 's',
            84: 't',
            85: 'u',
            86: 'v',
            87: 'w',
            88: 'x',
            89: 'y',
            90: 'z',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9'
          };

      if (that.options.liveSearch) $parent = $this.parent().parent();

      if (that.options.container) $parent = that.$menu;

      $items = $('[role=menu] li a', $parent);

      isActive = that.$menu.parent().hasClass('open');

      if (!isActive && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))) {
        if (!that.options.container) {
          that.setSize();
          that.$menu.parent().addClass('open');
          isActive = true;
        } else {
          that.$newElement.trigger('click');
        }
        that.$searchbox.focus();
      }

      if (that.options.liveSearch) {
        if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && that.$menu.find('.active').length === 0) {
          e.preventDefault();
          that.$menu.parent().removeClass('open');
          that.$button.focus();
        }
        // $items contains li elements when liveSearch is enabled
        $items = $('[role=menu] li:not(.divider):not(.dropdown-header):visible', $parent);
        if (!$this.val() && !/(38|40)/.test(e.keyCode.toString(10))) {
          if ($items.filter('.active').length === 0) {
            $items = that.$newElement.find('li');
            if (that.options.liveSearchNormalize) {
              $items = $items.filter(':a' + that._searchStyle() + '(' + normalizeToBase(keyCodeMap[e.keyCode]) + ')');
            } else {
              $items = $items.filter(':' + that._searchStyle() + '(' + keyCodeMap[e.keyCode] + ')');
            }
          }
        }
      }

      if (!$items.length) return;

      if (/(38|40)/.test(e.keyCode.toString(10))) {
        index = $items.index($items.filter(':focus'));
        first = $items.parent(':not(.disabled):visible').first().index();
        last = $items.parent(':not(.disabled):visible').last().index();
        next = $items.eq(index).parent().nextAll(':not(.disabled):visible').eq(0).index();
        prev = $items.eq(index).parent().prevAll(':not(.disabled):visible').eq(0).index();
        nextPrev = $items.eq(next).parent().prevAll(':not(.disabled):visible').eq(0).index();

        if (that.options.liveSearch) {
          $items.each(function (i) {
            if (!$(this).hasClass('disabled')) {
              $(this).data('index', i);
            }
          });
          index = $items.index($items.filter('.active'));
          first = $items.filter(':not(.disabled):visible').first().data('index');
          last = $items.filter(':not(.disabled):visible').last().data('index');
          next = $items.eq(index).nextAll(':not(.disabled):visible').eq(0).data('index');
          prev = $items.eq(index).prevAll(':not(.disabled):visible').eq(0).data('index');
          nextPrev = $items.eq(next).prevAll(':not(.disabled):visible').eq(0).data('index');
        }

        prevIndex = $this.data('prevIndex');

        if (e.keyCode == 38) {
          if (that.options.liveSearch) index -= 1;
          if (index != nextPrev && index > prev) index = prev;
          if (index < first) index = first;
          if (index == prevIndex) index = last;
        } else if (e.keyCode == 40) {
          if (that.options.liveSearch) index += 1;
          if (index == -1) index = 0;
          if (index != nextPrev && index < next) index = next;
          if (index > last) index = last;
          if (index == prevIndex) index = first;
        }

        $this.data('prevIndex', index);

        if (!that.options.liveSearch) {
          $items.eq(index).focus();
        } else {
          e.preventDefault();
          if (!$this.hasClass('dropdown-toggle')) {
            $items.removeClass('active').eq(index).addClass('active').children('a').focus();
            $this.focus();
          }
        }

      } else if (!$this.is('input')) {
        var keyIndex = [],
            count,
            prevKey;

        $items.each(function () {
          if (!$(this).parent().hasClass('disabled')) {
            if ($.trim($(this).text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
              keyIndex.push($(this).parent().index());
            }
          }
        });

        count = $(document).data('keycount');
        count++;
        $(document).data('keycount', count);

        prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

        if (prevKey != keyCodeMap[e.keyCode]) {
          count = 1;
          $(document).data('keycount', count);
        } else if (count >= keyIndex.length) {
          $(document).data('keycount', 0);
          if (count > keyIndex.length) count = 1;
        }

        $items.eq(keyIndex[count - 1]).focus();
      }

      // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
      if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
        if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
        if (!that.options.liveSearch) {
          var elem = $(':focus');
          elem.click();
          // Bring back focus for multiselects
          elem.focus();
          // Prevent screen from scrolling if the user hit the spacebar
          e.preventDefault();
          // Fixes spacebar selection of dropdown items in FF & IE
          $(document).data('spaceSelect', true);
        } else if (!/(32)/.test(e.keyCode.toString(10))) {
          that.$menu.find('.active a').click();
          $this.focus();
        }
        $(document).data('keycount', 0);
      }

      if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
        that.$menu.parent().removeClass('open');
        that.$button.focus();
      }
    },

    mobile: function () {
      this.$element.addClass('mobile-device').appendTo(this.$newElement);
      if (this.options.container) this.$menu.hide();
    },

    refresh: function () {
      this.$lis = null;
      this.reloadLi();
      this.render();
      this.setWidth();
      this.setStyle();
      this.checkDisabled();
      this.liHeight();

      this.$element.trigger('refreshed.bs.select');
    },

    hide: function () {
      this.$newElement.hide();
    },

    show: function () {
      this.$newElement.show();
    },

    remove: function () {
      this.$newElement.remove();
      this.$element.remove();
    }
  };

  // SELECTPICKER PLUGIN DEFINITION
  // ==============================
  function Plugin(option, event) {
    // get the args of the outer function..
    var args = arguments;
    // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
    // to get lost/corrupted in android 2.3 and IE9 #715 #775
    var _option = option,
        _event = event;
    [].shift.apply(args);

    var value;
    var chain = this.each(function () {
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
            options = typeof _option == 'object' && _option;

        if (!data) {
          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
          $this.data('selectpicker', (data = new Selectpicker(this, config, _event)));
        } else if (options) {
          for (var i in options) {
            if (options.hasOwnProperty(i)) {
              data.options[i] = options[i];
            }
          }
        }

        if (typeof _option == 'string') {
          if (data[_option] instanceof Function) {
            value = data[_option].apply(data, args);
          } else {
            value = data.options[_option];
          }
        }
      }
    });

    if (typeof value !== 'undefined') {
      //noinspection JSUnusedAssignment
      return value;
    } else {
      return chain;
    }
  }

  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;

  // SELECTPICKER NO CONFLICT
  // ========================
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
    return this;
  };

  $(document)
      .data('keycount', 0)
      .on('keydown', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input', Selectpicker.prototype.keydown)
      .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input', function (e) {
        e.stopPropagation();
      });

  // SELECTPICKER DATA-API
  // =====================
  $(window).on('load.bs.select.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
    })
  });
})(jQuery);

/*!
 * Bootstrap-select v1.6.5 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a){a.fn.selectpicker.defaults={noneSelectedText:"Ничего не выбрано",noneResultsText:"Совпадений не найдено {0}",countSelectedText:"Выбрано {0} из {1}",maxOptionsText:["Достигнут предел ({n} {var} максимум)","Достигнут предел в группе ({n} {var} максимум)",["items","item"]],doneButtonText:"Закрыть",multipleSeparator:", "}}(jQuery);
