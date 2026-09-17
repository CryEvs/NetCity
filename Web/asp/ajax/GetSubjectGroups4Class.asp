<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
	Dim result, objRs
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	strClassID_IUP = GetSafeStrParam(Request("CLASSID_IUP"), Null)
	Call InitIUPClassID(strClassID_IUP)
	Call InitSubjectGroups_IUP()
	Call WriteClass_IUP
	TestError obLanguage("Filter","kErrLoadingListSubjects")
	If oSubjClassesRs.EOF Then
		Call WriteAjaxErrorResponse( -2, obLanguage("Filter","kNoCoursesGB") )
	Else
		Set result = new JSONResult
		Call result.AddJsonData("subjects", oSubjClassesRs.ToJSON(Array("id", "name"), Array("ID", "NAME")))
		Response.Write result
	End If
%>
