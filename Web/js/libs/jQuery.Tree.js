/**
 * jQuery Tree Control
 *
 * @author Maxim Vasiliev
 */
(function($){

	var CLASS_JQUERY_TREE = 'jquery-tree';
	var CLASS_JQUERY_TREE_CONTROLS = 'jquery-tree-controls';
	var CLASS_JQUERY_TREE_COLLAPSED = 'jquery-tree-collapsed';
	var CLASS_JQUERY_TREE_HANDLE = 'jquery-tree-handle';
	var CLASS_JQUERY_TREE_TITLE = 'jquery-tree-title';
	var CLASS_JQUERY_TREE_NODE = 'jquery-tree-node';
	var CLASS_JQUERY_TREE_LEAF = 'jquery-tree-leaf';
	var CLASS_JQUERY_TREE_CHECKED = 'jquery-tree-checked';
	var CLASS_JQUERY_TREE_UNCHECKED = 'jquery-tree-unchecked';
	var CLASS_JQUERY_TREE_CHECKED_PARTIAL = 'jquery-tree-checked-partial';
	
	var TREE_NODE_HANDLE_CODE = '<span class="' + CLASS_JQUERY_TREE_HANDLE + '">+</span>';
	var TREE_NODE_HANDLE_COLLAPSED = "+";
	var TREE_NODE_HANDLE_EXPANDED = "&minus;";

	$.fn.extend({

		/**
		 * Р”РµР»Р°РµС‚ РґРµСЂРµРІРѕ РёР· СЃС‚СЂСѓРєС‚СѓСЂС‹ РІРёРґР°:
		 * <ul>
		 *   <li><label><input type="checkbox" />Item1</label></li>
		 *   <li>
		 *     <label><input type="checkbox" />ItemWithSubitems</label>
		 *     <ul>
		 *       <li><label><input type="checkbox" />Subitem1</label></li>
		 *     </ul>
		 *   </li>
		 * </ul>
		 */
		Tree: function(){
			// Р”РѕР±Р°РІРёРј РєРѕРЅС‚СЂРѕР»С‹ РґР»СЏ РІСЃРµРіРѕ РґРµСЂРµРІР° (РІСЃРµ СЃРІРµСЂРЅСѓС‚СЊ, СЂР°Р·РІРµСЂРЅСѓС‚СЊ Рё С‚.Рґ.), Рё РґРѕР±Р°РІРёРј РєР»Р°СЃСЃ
			$(this)
				.addClass(CLASS_JQUERY_TREE)
				.prev('.' + CLASS_JQUERY_TREE_CONTROLS)
				.parent('.' + CLASS_JQUERY_TREE_CONTROLS)

			$('li', this).find(':first').addClass(CLASS_JQUERY_TREE_TITLE)
				.closest('li').addClass(CLASS_JQUERY_TREE_LEAF);

			// Р”Р»СЏ РІСЃРµС… СЌР»РµРјРµРЅС‚РѕРІ, СЏРІР»СЏСЋС‰РёС…СЃСЏ СѓР·Р»Р°РјРё (РёРјРµСЋС‰РёС… РґРѕС‡РµСЂРЅРёРµ СЌР»РµРјРµРЅС‚С‹)...
			$('li:has(ul:has(li))', this).find(':first')
				// ... РґРѕР±Р°РІРёРј СЌР»РµРјРµРЅС‚, РѕС‚РєСЂС‹РІР°СЋС‰РёР№/Р·Р°РєСЂС‹РІР°СЋС‰РёР№ СѓР·РµР»
				.before(TREE_NODE_HANDLE_CODE)
				// ... РґРѕР±Р°РІРёРј Рє РєРѕРЅС‚РµР№РЅРµСЂСѓ РєР»Р°СЃСЃ "СѓР·РµР» РґРµСЂРµРІР°" Рё "СЃРІРµСЂРЅРµРј".
				.closest('li')
					.addClass(CLASS_JQUERY_TREE_NODE)
					.addClass(CLASS_JQUERY_TREE_COLLAPSED)
					.removeClass(CLASS_JQUERY_TREE_LEAF);

			// ... РїРѕРІРµСЃРёРј РѕР±СЂР°Р±РѕС‚С‡РёРє РєР»РёРєР°
			$('.' + CLASS_JQUERY_TREE_HANDLE, this).bind('click', function(){
				var leafContainer = $(this).parent('li');
				var leafHandle = leafContainer.find('>.' + CLASS_JQUERY_TREE_HANDLE);

				leafContainer.toggleClass(CLASS_JQUERY_TREE_COLLAPSED);

				if (leafContainer.hasClass(CLASS_JQUERY_TREE_COLLAPSED))
					leafHandle.html(TREE_NODE_HANDLE_COLLAPSED);
				else
					leafHandle.html(TREE_NODE_HANDLE_EXPANDED);
			});

			// Р”РѕР±Р°РІР»СЏРµРј РѕР±СЂР°Р±РѕС‚РєСѓ РєР»РёРєР° РїРѕ С‡РµРєР±РѕРєСЃР°Рј
			$('input:checkbox', this).click(function(){
				setLabelClass(this);
				checkCheckbox(this);
			})
			// Р’С‹СЃС‚Р°РІР»СЏРµРј С‡РµРєР±РѕРєСЃР°Рј РёР·РЅР°С‡Р°Р»СЊРЅС‹Рµ РєР»Р°СЃСЃС‹
			.each(function(){
				setLabelClass(this);
				if (this.checked)
					checkParentCheckboxes(this);
			})
			// Р”Р»СЏ IE РІРµС€Р°РµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё РЅР° Р»РµР№Р±Р»
			.closest('label').click(function(){
				labelClick(this);
				checkCheckbox($('input:checkbox', this));
			});
		}

	});

	/**
	 * Р РµРєСѓСЂСЃРёРІРЅРѕ РїСЂРѕРІРµСЂСЏРµС‚, РІСЃРµ Р»Рё С‡РµРєР±РѕРєСЃС‹ РІ РїРѕРґРґРµСЂРµРІРµ СЂРѕРґРёС‚РµР»СЊСЃРєРѕРіРѕ СѓР·Р»Р° РІС‹Р±СЂР°РЅС‹.
	 * Р•СЃР»Рё РЅРё РѕРґРёРЅ С‡РµРєР±РѕРєСЃ РЅРµ РІС‹Р±СЂР°РЅ - СЃРЅРёРјР°РµС‚ С‡РµРє СЃ СЂРѕРґРёС‚РµР»СЊСЃРєРѕРіРѕ С‡РµРєР±РѕРєСЃР°
	 * Р•СЃР»Рё С…РѕС‚СЏ Р±С‹ РѕРґРёРЅ, РЅРѕ РЅРµ РІСЃРµ - РІС‹СЃС‚Р°РІР»СЏРµС‚ РєР»Р°СЃСЃ CLASS_JQUERY_TREE_CHECKED_PARTIAL СЂРѕРґРёС‚РµР»СЊСЃРєРѕРјСѓ С‡РµРєР±РѕРєСЃСѓ
	 * Р•СЃР»Рё РІСЃРµ - СЃС‚Р°РІРёС‚ С‡РµРє РЅР° СЂРѕРґРёС‚РµР»СЊСЃРєРёР№ С‡РµРєР±РѕРєСЃ
	 *
	 * @param {Object} checkboxElement С‚РµРєСѓС‰РёР№ С‡РµРєР±РѕРєСЃ
	 */
	function checkParentCheckboxes(checkboxElement){
		if (typeof checkboxElement == 'undefined' || !checkboxElement)
			return;

		// РїСЂРѕРІРµСЂРёРј, РІСЃРµ Р»Рё С‡РµРєР±РѕРєСЃС‹ РІС‹РґРµР»РµРЅС‹/С‡Р°СЃС‚РёС‡РЅРѕ РІС‹РґРµР»РµРЅС‹ РЅР° РІС‹С€РµР»РµР¶Р°С‰РµРј СѓСЂРѕРІРЅРµ
		var closestNode = $(checkboxElement).closest('ul');
		var allCheckboxes = closestNode.find('input:checkbox');
		var checkedCheckboxes = closestNode.find('input:checkbox:checked');

		var allChecked = allCheckboxes.length == checkedCheckboxes.length;

		var parentCheckbox = closestNode.closest('li').find('>.' + CLASS_JQUERY_TREE_TITLE + ' input:checkbox');

		if (parentCheckbox.length > 0) {
			parentCheckbox.get(0).checked = allChecked;

			if (!allChecked && checkedCheckboxes.length > 0)
				parentCheckbox.closest('label')
					.addClass(CLASS_JQUERY_TREE_CHECKED_PARTIAL)
					.removeClass(CLASS_JQUERY_TREE_CHECKED)
					.removeClass(CLASS_JQUERY_TREE_UNCHECKED);
			else
				if (allChecked)
					parentCheckbox.closest('label')
						.removeClass(CLASS_JQUERY_TREE_CHECKED_PARTIAL)
						.removeClass(CLASS_JQUERY_TREE_UNCHECKED)
						.addClass(CLASS_JQUERY_TREE_CHECKED);
				else
					parentCheckbox.closest('label')
						.removeClass(CLASS_JQUERY_TREE_CHECKED_PARTIAL)
						.removeClass(CLASS_JQUERY_TREE_CHECKED)
						.addClass(CLASS_JQUERY_TREE_UNCHECKED);

			checkParentCheckboxes(parentCheckbox.get(0));
		}
	}

	/**
	 * Р•СЃР»Рё Сѓ С‚РµРєСѓС‰РµРіРѕ С‡РµРєР±РѕРєСЃР° РµСЃС‚СЊ РґРѕС‡РµСЂРЅРёРµ СѓР·Р»С‹ - РјРµРЅСЏРµС‚ РёС… СЃРѕСЃС‚РѕСЏРЅРёРµ
	 * РЅР° СЃРѕСЃС‚РѕСЏРЅРёРµ С‚РµРєСѓС‰РµРіРѕ С‡РµРєР±РѕРєСЃР°
	 *
	 * @param {Object} checkboxElement С‚РµРєСѓС‰РёР№ С‡РµРєР±РѕРєСЃ
	 */
	function checkCheckbox(checkboxElement){
		// С‡РµРєРЅРµРј/Р°РЅС‡РµРєРЅРµРј РЅРёР¶РµР»РµР¶Р°С‰РёРµ С‡РµРєР±РѕРєСЃС‹
		$(checkboxElement).closest('li').find('input:checkbox').each(function(){
			this.checked = $(checkboxElement).attr('checked');
			setLabelClass(this);
		});
		checkParentCheckboxes(checkboxElement);
	};

	/**
	 * Р’С‹СЃС‚Р°РІР»СЏРµС‚ РєР»Р°СЃСЃ Р»РµР№Р±Р»Сѓ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЃРѕСЃС‚РѕСЏРЅРёСЏ С‡РµРєР±РѕРєСЃР°
	 *
	 * @param {Object} checkboxElement С‡РµРєР±РѕРєСЃ
	 */
	function setLabelClass(checkboxElement){
		isChecked = $(checkboxElement).attr('checked');

		if (isChecked) {
			$(checkboxElement).closest('label')
				.addClass(CLASS_JQUERY_TREE_CHECKED)
				.removeClass(CLASS_JQUERY_TREE_UNCHECKED)
				.removeClass(CLASS_JQUERY_TREE_CHECKED_PARTIAL);
		}
		else {
			$(checkboxElement).closest('label')
				.addClass(CLASS_JQUERY_TREE_UNCHECKED)
				.removeClass(CLASS_JQUERY_TREE_CHECKED)
				.removeClass(CLASS_JQUERY_TREE_CHECKED_PARTIAL);
		}
	};

	/**
	 * РћР±СЂР°Р±Р°С‚С‹РІР°РµС‚ РєР»РёРє РїРѕ Р»РµР№Р±Р»Сѓ (РґР»СЏ IE6)
	 */
	function labelClick(labelElement){
		var checkbox = $('input:checkbox', labelElement);
		var checked = checkbox.attr('checked');
		checkbox.attr('checked', !checked);
		setLabelClass(checkbox);
	}

})(jQuery);
