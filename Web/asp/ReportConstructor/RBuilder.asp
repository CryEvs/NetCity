<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE="SqlBuilder_inc.asp" -->
<% ' © 2007-2012 IRTech. All rights reserved.

Dim strTestResultSql
Dim nTestQueryId

Const kOn				= "<font color=""blue""> ON </font>"
Const kInnerJoin		= "<font color=""blue""><br><b> JOIN </b></font>"
Const kLeftJoin			= "<br> LEFT JOIN "
Const kRightJoin		= "<br> RIGHT JOIN "
Const kFullJoin			= "<br> FULL JOIN "
Const kSelect			= "<font color=""blue""><b>SELECT </b></font>"
Const kDistinct			= "<font color=""blue"">DISTINCT </font>"
Const kFrom_			= "<font color=""blue""><br><b> FROM </b></font>"
Const kGroupBy			= "<font color=""blue""><br><b> GROUP BY </b></font>"
Const kOrderBy			= "<font color=""blue""><br><b> ORDER BY </b></font>"
Const kDesc				= "<font color=""blue""> DESC </font>"
Const kWhere			= "<font color=""blue""><br><b> WHERE </b></font>"
Const kAs				= "<font color=""blue""> AS </font>"
Const kAnd				= "<font color=""blue""> AND </font>"

Const indTableId		= 0
Const indAlias			= 1
Const indTableName		= 2
Const indSqlJoinExpr	= 3
Const indJoinType		= 4
Const indSqlType		= 5
Const indSqlProcParams	= 6
Const indIsCommon		= 7

Function GetScreenType()
	If bIsEducManager Then GetScreenType = stSimple Else GetScreenType = stNormal
End Function

Function GetPageTitle()
	GetPageTitle = "Просмотр отчета"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf( bIsEducManager, Empty, MenuItem_miReports )
End Function

Function GetPageTabItem()
	GetPageTabItem = IIF( bIsEducManager, TabItem_tb_EM_ReportConstructor, TabItem_tbReportConstructor)
 	bTabInternalPage = True
End Function

Sub Main()
	'SetWorkconnection
	strTestResultSql = BuildSql ( nTestQueryId )
End Sub

Sub ReadState()
	nTestQueryId = GetSafeLng( Request("QID"), 1 )
End Sub

Sub OnDrawPage()
	%><form name="F" method="POST"><%
	Call ShowTestResults()
	%></form><%
End Sub

Function Text(color, txt)
	Text = "<font color="""&color&""">" & txt & "</font>"
End Function

Sub Write(txt)
	Response.Write  txt
End Sub

Sub ShowTestResults()
	Dim i,j,k
	Dim objQueryObjects, objObjectTables, objQueryFields, objObjectRels
	Dim arrQueryObjects, arrObjectTables, arrQueryFields, arrObjectRels
	Set objQueryObjects = objNSNETWork.GetQueryAllObjects(nTestQueryid )

	arrQueryObjects = objQueryObjects.GetRows(,,Array("OBJECTID", "MASTEROBJECTID", "QUERYOBJECTID", "MID", "ISLEFT"))

	Response.Write "<h2>Тест построения результирующего SQL</h2>"&_
				"<h3>ID запроса</h3>" & nTestQueryid &_
				"<br><br><br><h3>ID объектов запроса</h3><table class='table table-bordered table-condensed' cellspacing=0 border=0>"&_
				"<tr bgcolor=#E7EFF7><td valign=""top""><b>OBJECTID</b></td><td valign=""top""><b>MASTEROBJECTID</b><br>(FK на OBJECTID)</td></tr>"
	For i = 0 To Ubound ( arrQueryObjects,2 )
		Response.Write "<tr><td>" & arrQueryObjects(0,i) & "</td><td>" & arrQueryObjects(1,i) & "</td></tr>"
	Next
	Response.Write "</table><br><br>"&_
	"<h3>Свойства объектов</h3>Для каждого объекта в порядке их соединения.<br>Синие таблицы - таблицы объектов, участвующих в соединении, зеленые - таблицы, участвующие в соединении объектов.<br>Вся информация в порядке использования в сборке SQL.<br><br>"

	For i = 0 To Ubound ( arrQueryObjects, 2 )
		Set objObjectTables = objNSNETWork.GetObjectData(arrQueryObjects(0,i) )
		arrObjectTables = objObjectTables.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "SQLJOINEXPR", "JOINTYPE", "SQLTYPE", "SQLPROCPARAMS"))
		Response.Write "Objectid = " & arrQueryObjects(0,i)& "<br><br>"&_
					"<table class='table table-bordered table-condensed' cellspacing=0 border=0>"&_
					"<tr bgcolor=#E7EFF7><td valign=""top""><b>TABLEID</b></td><td valign=""top""><b>TABLENAME</b></td><td valign=""top""><b>ALIAS</b></td><td valign=""top""><b>JOINTYPE</b><br>(в текущей реализации INNER и LEFT)</td>"&_
					"<td valign=""top""><b>SQLJOINEXPR</b><br>(выражение для построения цепочки JOIN'ов)</td><td valign=""top""><b>SQLTYPE</b><br>(тип - пока только таблица)</td><td valign=""top""><b>SQLPROCPARAMS</b><br>(в данной реализации не поддерживается)</td></tr>"

		For j = 0 To Ubound(arrObjectTables,2)
			Response.Write "<tr><td>" &arrObjectTables(indTableId,j)& "</td><td>" &arrObjectTables(indTableName,j)& "</td>"&_
						"<td>"&arrObjectTables( indAlias,j)& "</td><td>" &arrObjectTables( indJoinType,j)& "</td>"&_
						"<td>"&arrObjectTables( indSqlJoinExpr,j)&"</td><td>" &arrObjectTables( indSqlType,j)& "</td>"&_
						"<td>"&arrObjectTables( indSqlProcParams,j)&"</td></tr>"
		Next
		Response.Write "</table><br><br>"

		If Not IsNull (arrQueryObjects(1,i)) Then
			Set objObjectRels = objNSNETWork.GetObjectRelations(arrQueryObjects(1,i), arrQueryObjects(0,i) )
			arrObjectRels = objObjectRels.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "SQLJOINEXPR", "JOINTYPE", "SQLTYPE", "SQLPROCPARAMS", "ISCOMMON" ))

			Response.Write "<blockquote><table class='table table-bordered table-condensed' cellspacing=0 border=0>"&_
						"<tr bgcolor=#EFF7E7><td>TABLEID</td><td>TABLENAME</td><td>ALIAS</td><td>JOINTYPE</td>"&_
						"<td>SQLJOINEXPR</td><td>SQLTYPE</td><td>SQLPROCPARAMS</td><td>ISCOMMON</td></tr>"
			For j = 0 To Ubound(arrObjectRels,2)
				Response.Write "<tr><td>" &arrObjectRels(indTableId,j)& "</td><td>" & arrObjectRels( indTableName,j)& "</td>"&_
							"<td>"&arrObjectRels( indAlias,j)&"</td><td>" &arrObjectRels( indJoinType,j)& "</td>"&_
							"<td>"&arrObjectRels( indSqlJoinExpr,j)& "</td><td>" &arrObjectRels( indSqlType,j)& "</td>"&_
							"<td>"&arrObjectRels( indSqlProcParams,j)& "</td><td>"&arrObjectRels(indIsCommon,j)& "</td></tr>"
			Next
			Response.Write "</table></blockquote><br>"
		End If
	Next

	Response.Write "<h3>Таблицы, использованные в объектах</h3>"&_
				"<table class='table table-bordered table-condensed' cellspacing=0 border=0><tr bgcolor=#E7EFF7><td valign=""top""><b>TABLEID</b></td><td valign=""top""><b>Индекс алиасов</b><br>(в данной релизации всегда = 1)</td>"&_
				"<td valign=""top""><b>TABLENAME</b></td></tr>"
'	For i = 0 To nUsedObjectsTables - 1
'		Response.Write "<tr><td>" & arrUsedObjectsTables(0,i) & "</td><td>" & arrUsedObjectsTables(1,i) & "</td>"&_
'					"<td>" & arrUsedObjectsTables(2,i) & "</td></tr>"
'	Next
	Response.Write "</table><br><br>"

	Response.Write "<h3>Таблицы, использованные в отношениях</h3>"&_
				"<table class='table table-bordered table-condensed' cellspacing=0 border=0><tr bgcolor=#E7EFF7><td>TABLEID</td><td>Alias index</td>"&_
				"<td>TABLENAME</td><td>JOINTYPE</td><td>SQLJOINEXPR</td></tr>"
'	For i = 0 To nUsedObjectsTables - 1
'		Response.Write "<tr><td>" & arrUsedRelsTables(0,i) & "</td><td>" & arrUsedRelsTables(1,i) & "</td>"&_
'					"<td>" & arrUsedRelsTables(2,i) & "</td><td>" & arrUsedRelsTables(3,i) & "</td><td>" &_
'					arrUsedRelsTables(4,i) & "</td></tr>"
'	Next
	Response.Write "</table><br><br>"

	Response.Write "<h3>Список использованных алиасов</h3>"&_
				"<table class='table table-bordered table-condensed' cellspacing=0 border=0><tr bgcolor=#E7EFF7><td>OBJECTID</td><td>ALIAS</td>"&_
				"<td>TABLEID</td><td>TABLENAME</td></tr>"
'	For i=0 To nUsedObjectsAliases - 1
'		Response.Write "<tr><td>"&arrObjectsAliases( indAlObjectId, i )&"</td><td>"&arrObjectsAliases( indAlAlias, i )&"</td>"&_
'					"<td>"&arrObjectsAliases( indAlTableId, i )&"</td><td>"&arrObjectsAliases( indAlTableName, i )&"</td></tr>"
'	Next
	Response.Write "</table><br><br>"

	Set objQueryFields = objNSNETWork.GetQueryFieldsList(nTestQueryid )
	If Not objQueryFields.EOF Then
		arrQueryFields = objQueryFields.GetRows(,,Array("DISPLAYNAME", "PROPNAME", "QUERYOBJID", "ISEXPR", "EXPRESSIONID"))
		Response.Write "<h3>Возвращаемые поля</h3>"&_
				"<table class='table table-bordered table-condensed' cellspacing=0 border=0><tr bgcolor=#E7EFF7><td valign=""top""><b>DISPLAYNAME</b><br>(введенное пользователем)</td><td valign=""top""><b>PROPNAME</b><br>(полученное из свойств объекта)</td>"&_
				"<td valign=""top""><b>OBJECTID</b></td><td valign=""top""><b>ISEXPR</b><br>(является ли выражением)</td><td valign=""top""><b>FIELDORDER</b><br>(порядок возвр. столбцов)</td><td><b>EXPRESSIONID</b><br>(ID выражения)</td></tr>"
		For i=0 To Ubound ( arrQueryFields, 2 )
			Response.Write "<tr><td>" & arrQueryFields(0,i)& "</td><td>" & arrQueryFields(1,i)& "</td><td>" & arrQueryFields(2,i)& "</td>"&_
			"<td>" & arrQueryFields(3,i)& "</td><td>" & i + 1 & "</td><td>" & arrQueryFields(4,i)& "</td></tr>"
		Next
		Response.Write "</table><br><br>"
	End If

	Response.Write "<h3>Результирующий SQL</h3><table bgcolor=white><tr><td><br>"
	Response.Write "<table border=""0"" width=""800""><tr><td>" & strTestResultSql & "</td></tr></table><br>"

	Response.Write "<strong>Легенда</strong><br>"&_
				"<p><b>для SELECT .. JOIN:</b></p>" &_
				"<font color=red><b>RED</b></font> - возвращаемые поля (метод InsertReturnedFields)<br>"&_
				"<font color=black><b>BLACK</b></font> - таблицы 1-го объекта<br>"&_
				"<font color=brown><b>BROWN</b></font> - таблицы, присоединенные для созданий отношений между объектами<br>"&_
				"<font color=blue><b>BLUE</b></font> - присоединенные <i>до</i> 1-й таблицы отношений в объекте<br>"&_
				"<font color=green><b>GREEN</b></font> - присоединенные <i>после</i> 1-й таблицы отношений в объекте<br>"&_
				"<p><b>для WHERE .. GROUP BY .. ORDER BY:</b></p>" &_
				"<font color=purple><b>PURPLE</b></font> - статические фильтры (метод InsertFilters)<br>"&_
				"<font color=lime><b>LIME</b></font> - вставка обязательных для объектов условий SQLWHEREEXPR для WHERE (метод InsertObjectWhere).<br>&nbsp;Выражения задаются на этапе проектирования объектов.<br>"&_
				"<font color=black><b>BLACK</b></font> - вставка обязательных для отношений между объектами SQLWHEREEXPR для WHERE (метод InsertRelationsWhere).<br>&nbsp;Выражения задаются на этапе проектирования объектов.<br>"&_
				"<font color=red><b>RED</b></font> - пользовательские параметры (метод InsertParams), задаются на шаге 8.<br>&nbsp;Параметризация производится непосредственно перед выполнением отчета.<br>"&_
				"<font color=gray><b>GRAY</b></font> - группировки (метод InsertGroupings), задаются на шаге 4.<br>"&_
				"<font color=fuschia><b>FUSCHIA</b></font> - сортировки (метод InsertSortings), задаются на Шаге 7.<br><br>"
	Response.Write "</td></tr></table><br><br>"
End Sub
%>
