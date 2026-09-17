
<%	'©2001-2006 ROOS. All rights reserved.

Function GetParamData ( strObjParameterId, nQueryId )
	Dim bIsCommonTable, bIsCommonRelsTable, bIsCommonRel, bAdminReport
	Dim i, j, k
	Dim nCommonPos, nAliasStart, nAliasEnd, nTablesCount, nTotalObjects
	Dim strResultSql, strAliasSql, strAlias
	Dim objQueryObjects, objTablesCount, objObjectTables, objObjectRels, objHiddenId, objSelect, objRepType
	Dim arrObjectTables, arrObjects

	Set objRepType = obNS2.GetReportTypeByQueryId( objCon, nQueryId )
	bAdminReport = Cbool( Left(objRepType.GetString,1) <> "S" )

	Set objQueryObjects = obNS2.GetObjectParameters( objCon, Clng(strObjParameterId) )
	arrObjects = objQueryObjects.GetRows(,,Array("OBJECTID", "ALIAS", "ITEMNAME", "IDNAME"))

	If Not bAdminReport Then
		Set objQueryObjects = obNS2.GetQueryAllObjectsList ( objCon, nQueryid, 0 )
		arrQueryObjects = objQueryObjects.GetRows(,,Array("OBJECTID", "MASTEROBJECTID"))
	Else
		Redim arrQueryObjects (1,0)
		arrQueryObjects (0,0) = arrObjects(0,0)
		arrQueryObjects (1,0) = null
	End If

	nTotalObjects = Ubound ( arrQueryObjects, 2 )

	Set objTablesCount = obNS2.GetTablesCount ( objCon )
	nTablesCount = objTablesCount.GetString
	nUsedObjectsTables = 0 :	Redim arrUsedObjectsTables ( 3, nTablesCount )
	nUsedRelsTables = 0 :		Redim arrUsedRelsTables ( 5, nTablesCount )
	nUsedObjectsAliases = 0 :	Redim arrObjectsAliases ( 4, nTablesCount )

	' alias index
	For i = 0 to Ubound(arrUsedObjectsTables,2)
		arrUsedObjectsTables (1,i) = 0
	Next

	' 1st object sql string
	Set objObjectTables = obNS2.GetObjectData (objCon, arrQueryObjects(indQrObjectId,0) )
	arrObjectTables = objObjectTables.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "SQLJOINEXPR", "JOINTYPE", "SQLTYPE", "SQLPROCPARAMS"))
	Call IsCommonTable( arrObjectTables(indTableId,0), arrObjectTables(indTableName,0) )
	strResultSql = strResultSql & kFrom_ & arrObjectTables( indTableName,0) & " " & arrObjectTables( indTableName,0 ) & InsertAlias(0, arrObjectTables( indTableId,0), null, false)

	For i = 1 To Ubound(arrObjectTables,2)
		Call IsCommonTable ( arrObjectTables ( indTableId, i ), arrObjectTables ( indTableName, i ) )
		strResultSql = strResultSql & InsertJoin(arrObjectTables( indJoinType,i)) &_
		arrObjectTables( indTableName,i) & " " & arrObjectTables( indTableName,i) &_
		InsertAlias(0, arrObjectTables( indTableId,i), null ,false) & kOn &_
		arrObjectTables( indTableName,i) & InsertAlias(i, arrObjectTables( indTableId, i ), null, false) & "." &_
		UpdateSqlExpr ( arrObjectTables( indSqlJoinExpr,i) )
	Next

	' other objects sql string
	For i = 1 to nTotalObjects
		Set objObjectTables = obNS2.GetObjectData (objCon, arrQueryObjects(indQrObjectId,i) )
		arrObjectTables = objObjectTables.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "SQLJOINEXPR", "JOINTYPE", "SQLTYPE", "SQLPROCPARAMS"))
		Set objObjectRels = obNS2.GetObjectRelations ( objCon, arrQueryObjects(indQrMasterObjectId,i), arrQueryObjects(indQrObjectId,i) )
		arrObjectRels = objObjectRels.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "SQLJOINEXPR", "JOINTYPE", "SQLTYPE", "SQLPROCPARAMS", "ISCOMMON" ))

		' join relations
		For j = 0 To Ubound(arrObjectRels,2)
			' useless?
			bIsCommonRel = (arrObjectRels ( indIsCommon, j ) = "Y")
			' sqljoinexpr in rels update
			If arrObjectRels( indIsCommon,j) = "N" Then
				' last rels table is joined as object table!
				bIsCommonTable = False
				If j = Ubound(arrObjectRels,2) Then
					bIsCommonTable = IsCommonTable( arrObjectRels(indTableId,j), arrObjectRels(indTableName,j) )
					If Not bIsCommonTable Then
						strResultSql = strResultSql & InsertJoin(arrObjectRels( indJoinType,j)) &_
						arrObjectRels( indTableName,j) & " " & arrObjectRels( indTableName, j) &_
						InsertAlias(i, arrObjectRels( indTableId,j), null, false ) & kOn &_
						arrObjectRels( indTableName,j) & InsertAlias(i, arrObjectRels( indTableId, j ), null, false) & "."
					End If
				Else
					bIsCommonRelsTable = IsCommonRelsTable( j )
					strResultSql = strResultSql & InsertJoin(arrObjectRels( indJoinType,j)) &_
					arrObjectRels( indTableName,j) & " " & arrObjectRels( indTableName, j) &_
					InsertRelsAlias(i, arrObjectRels( indTableId,j), arrObjectRels( indJoinType,j), Not bIsCommonRelsTable ) & kOn &_
					arrObjectRels( indTableName,j) & InsertRelsAlias(i, arrObjectRels( indTableId, j ), arrObjectRels( indJoinType,j), false) & "."
				End If
					' 1st object - joined table alias is taken from arrObjectsTables
				strAliasSql = ""
				If Not bIsCommonTable Then
					If  j = 0 Then
						strAliasSql = Replace(arrObjectRels( indSqlJoinExpr,j), arrObjectRels( indTableName,j) &_
						".", arrObjectRels( indTableName, j) & InsertRelsAlias(i, arrObjectRels( indTableId, j ), arrObjectRels( indJoinType,j), false) & ".")
						strAliasSql = InsertAliasForRelations(i, strAliasSql, j, False )
					ElseIf j = Ubound(arrObjectRels,2) Then
						strAliasSql = Replace(arrObjectRels( indSqlJoinExpr,j), arrObjectRels( indTableName,j) &_
						".", arrObjectRels( indTableName, j) & InsertAlias(i, arrObjectRels( indTableId, j ), null, false) & ".")
						strAliasSql = InsertAliasForRelations(i, strAliasSql, j, True )
					Else
						strAliasSql = Replace(arrObjectRels( indSqlJoinExpr,j), arrObjectRels( indTableName,j) &_
						".", arrObjectRels( indTableName, j) & InsertRelsAlias(i, arrObjectRels( indTableId, j ), arrObjectRels( indJoinType,j), false) & ".")
						strAliasSql = InsertAliasForRelations(i, strAliasSql, j, True )
					End If
				End If
				strResultSql = strResultSql & strAliasSql
			End If
		Next

		' join tables
		nCommonPos = 0
		bIsCommonTable = IsCommonTable( arrObjectTables(indTableId,nCommonPos), arrObjectTables(indTableName,nCommonPos) )
		While nCommonPos < Ubound(arrObjectTables,2) And Not bIsCommonTable
			nCommonPos = nCommonPos + 1
			bIsCommonTable = IsCommonTable( arrObjectTables(indTableId,nCommonPos), arrObjectTables(indTableName,nCommonPos) )
		Wend
		' from common table other table objects are joined  at 1st right to left ..
		If bIsCommonTable = True Then
			j = nCommonPos - 1
			While j >= 0
				strResultSql = strResultSql &_
				InsertJoin(arrObjectTables( indJoinType,j)) &_
				arrObjectTables( indTableName,j) & " " & arrObjectTables( indTableName,j) &_
				InsertAlias(i, arrObjectTables( indTableId,j), null, false) & kOn &_
				arrObjectTables( indTableName,j+1 ) & InsertAlias(i, arrObjectTables( indTableId, j+1 ), null, false) & "." &_
				UpdateSqlExpr ( arrObjectTables( indSqlJoinExpr, j+1 ) )
				j = j - 1
			Wend
			nCommonPos = nCommonPos + 1
		End If
		'' .. then left to right skipping common object tables
		For j = nCommonPos To Ubound(arrObjectTables,2)
			If Not IsCommonTable( arrObjectTables(indTableId,j), arrObjectTables(indTableName,j) ) Then
				strResultSql = strResultSql & InsertJoin(arrObjectTables( indJoinType,j)) &_
				arrObjectTables( indTableName,j) & " " & arrObjectTables( indTableName,j) &_
				InsertAlias(i, arrObjectTables( indTableId,j), null, false) & kOn &_
				arrObjectTables( indTableName,j) & InsertAlias(i, arrObjectTables( indTableId, j ), null, false) & "." &_
				UpdateSqlExpr ( arrObjectTables( indSqlJoinExpr, j ) )
			End If
		Next
	Next
	strResultSql = kSelect & kDistinct & UpdateSqlExpr(arrObjects(1,0)) & "." & arrObjects(2,0) & strResultSql
	If Not bAdminReport Then
		strResultSql = strResultSql & kWhere & UpdateSqlExpr("{SCHOOLS}") & ".SCHOOLID=" & strSchoolId
	End If
	strResultSql = strResultSql & kOrderBy & UpdateSqlExpr(arrObjects(1,0)) & "." & arrObjects(2,0)

	Set GetParamData = objCon.Execute ( strResultSql )
End Function
%>