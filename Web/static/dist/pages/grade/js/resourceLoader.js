var ResourceLoader;

ResourceLoader = (function() {
  var cache;

  cache = {
    studentList: {},
    assignmentTypes: {},
    attendanceReasons: {},
    termInfo: {},
    subjectPlan: {},
    subjectPlanStudyInfo: {}
  };

  function ResourceLoader() {
    this.getCacheKey = function(filterData) {
      return JSON.stringify(filterData || "*");
    };
    this.checkCache = (function(_this) {
      return function(namespace, filterData) {
        var cachedData, key;
        key = _this.getCacheKey(filterData);
        cachedData = cache[namespace][key];
        if (cachedData) {
          return cachedData;
        }
        return null;
      };
    })(this);
    this.putCache = (function(_this) {
      return function(namespace, filterData, data) {
        var key;
        key = _this.getCacheKey(filterData);
        return cache[namespace][key] = data;
      };
    })(this);
  }

  ResourceLoader.prototype.getStudentList = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('studentList', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/grade/studentList",
      method: "GET",
      showProcessing: true,
      data: filterData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('studentList', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getAssignTypes = function(all) {
    var cachedData, queryData, ret;
    ret = $.Deferred();
    all = all || false;
    cachedData = this.checkCache('assignmentTypes');
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    queryData = {
      all: all
    };
    jsSubmit({
      action: "/webapi/grade/assignment/types",
      method: "GET",
      queryData: queryData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('assignmentTypes', null, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getTermInfo = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('termInfo', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/terms/" + filterData.termId,
      method: "GET"
    }).then((function(_this) {
      return function(response) {
        if (response) {
          _this.putCache('termInfo', filterData, response);
        }
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getAttendanceReasons = function() {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('attendanceReasons');
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/grade/attendance/reasons?lng=" + appContext.language,
      method: "GET"
    }).then((function(_this) {
      return function(response) {
        _this.putCache('attendanceReasons', null, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getSubjectPlan = function(filterData) {
    var cachedData, ref, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('subjectPlan', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/subjectplans/getForSubjectGroup",
      method: "GET",
      data: {
        sgId: (ref = filterData.sgId) != null ? ref : filterData.SGID
      }
    }).then((function(_this) {
      return function(response) {
        _.each(response.lessons, function(lesson) {
          lesson.studied = lesson.hours === lesson.hoursStudied;
          if (lesson.lastStudyDay) {
            lesson.lastStudyDay = Date.parse(lesson.lastStudyDay);
          }
        });
        _this.putCache('subjectPlan', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getSubjectPlanStudyInfo = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('subjectPlanStudyInfo', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/subjectplans/studyinfo",
      method: "GET",
      data: filterData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('subjectPlanStudyInfo', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  return ResourceLoader;

})();

module.exports = new ResourceLoader;
