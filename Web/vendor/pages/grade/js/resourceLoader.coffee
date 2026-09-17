class ResourceLoader
	cache =
		studentList: {}
		assignmentTypes: {}
		attendanceReasons: {}
		termInfo: {}

	constructor: () ->
		@getCacheKey = (filterData) ->
			return JSON.stringify(filterData or "*")

		@checkCache = (namespace, filterData) =>
			key = @getCacheKey(filterData)
			cachedData = cache[namespace][key]
			if cachedData
				return cachedData
			return null
		@putCache = (namespace, filterData, data) =>
			key = @getCacheKey(filterData)
			cache[namespace][key] = data

	getStudentList: (filterData) ->
		ret = $.Deferred()
		cachedData = @checkCache('studentList', filterData)

		if cachedData
			ret.resolve(cachedData)
			return ret.promise()

		jsSubmit action:"/webapi/grade/studentList", method: "GET", showProcessing: true, data: filterData
		.then (response) =>
			@putCache('studentList', filterData, response)
			ret.resolve(response)

		return ret.promise()

	getAssignTypes: () ->
		ret = $.Deferred()

		cachedData = @checkCache('assignmentTypes')

		if cachedData
			ret.resolve(cachedData)
			return ret.promise()

		jsSubmit action:"/webapi/grade/assignment/types", method: "GET"
			.then (response) => 
				@putCache('assignmentTypes', null, response)
				ret.resolve(response)

		return ret.promise()

	getTermInfo: (filterData) ->
		ret = $.Deferred()

		cachedData = @checkCache('termInfo', filterData)

		if cachedData
			ret.resolve(cachedData)
			return ret.promise()

		jsSubmit action: "/webapi/terms/#{filterData.termId}", method: "GET"
			.then (response) => 
				if response
					@putCache('termInfo', filterData, response)
				ret.resolve(response)

		return ret.promise()

	getAttendanceReasons: () ->
		ret = $.Deferred()

		cachedData = @checkCache('attendanceReasons')

		if cachedData
			ret.resolve(cachedData)
			return ret.promise()

		jsSubmit action:"/webapi/grade/attendance/reasons", method: "GET"
		.then (response) => 
			@putCache('attendanceReasons', null, response)
			ret.resolve(response)

		return ret.promise()

#для поддержки js модульности
module.exports = new ResourceLoader
