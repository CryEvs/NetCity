<% ' © 2007-2011 IRTech. All rights reserved.
' Перенесён в компоненту используется для тестирования (если пробелы исчезают)

Const kOpenSign			= "("
Const kCloseSign		= ")"

Const kAliasStartSign	= "{"
Const kAliasEndSign		= "}"
Const kUnderline		= "_"

Const indQrObjectId			= 0
Const indQrMasterObjectId	= 1

Const kHiddenID	= "[hidden_id]"

Dim bWhereInit
Dim objQueryFields, arrQueryFields
Dim bMSSQL

Dim objGroupings
Dim arrQueryObjects, arrObjectRels, dictAliases, dictFields, dictMaster, dictJoins
'Dim arrUsedRelsTables
Dim strSelect, strJoin, strFilters, strObjWhere, strGroupings, strAddressFilter

Function Text(color, txt)
	Text = txt
End Function

Function BuildSQL ( nQueryid )
Dim strResultSql
	Set dictAliases = Server.CreateObject("NetCity.Storage")
	bMSSQL = (Application("MSSQL") = "1")
	If Not bMSSQL Then Set dictFields = Server.CreateObject("NetCity.Storage")
	strResultSql = "" : strAddressFilter = "" : strGroupings = ""
	Set objGroupings = objNSNETWork.GetQueryGroupingsProps(nQueryId ) ' used global objGroupings in InsertReturnedFields
	strSelect = InsertReturnedFields ( "", nQueryId ) & " " ' пробел для облегчения алгоритма поиска подстроки на конце
	bWhereInit=False
	strFilters = InsertFilters ( "", nQueryId )
	strObjWhere = InsertObjectWhere ( "", nQueryId )
'	strResultSql = InsertRelationsWhere ( strResultSql, arrQueryObjects )			not used ????
	strResultSql = InsertParams ( strResultSql, nQueryId )
	If Not objGroupings.EOF Then strResultSql = InsertGroupings ( strResultSql, nQueryId )
	strResultSql = InsertSortings ( strResultSql, nQueryId )
	strJoin = InsertJoins ( "", nQueryId )
	BuildSQL = strSelect & strJoin &strFilters &strObjWhere& strResultSql
End Function

Function FindJoin( ByVal strObjID, ByVal strSqlJoinExpr )
	Dim i, cnt, mTmp, strAlias, strT, regE, Matches, arrA, bNotUsed
	Set regE = New RegExp
	regE.Pattern  = "{([^}]+)}"
	Do
		Set Matches = regE.Execute(strSqlJoinExpr)
		If Matches.Count <=0 Then Exit Do

		bNotUsed = False
		Set mTmp = Matches(0)
		strT = mTmp.SubMatches(0)
		strAlias = strObjID& "_" &strT
		If IsDull(dictAliases( strAlias )) Then
			If Not IsDull(dictMaster( strObjID )) Then
				strAlias = dictMaster( strObjID )& "_" &strT
				If IsDull(dictAliases( strAlias )) Then
					strAlias = strObjID& "_" &strT
					bNotUsed = True
				End If
			Else
				bNotUsed = True
			End If
		End If
		If bNotUsed Then
			If Not IsArray( dictAliases( strT )) Then
				dictAliases( strT ) = Array(0,strAlias)
				dictAliases( strAlias ) = strT
			Else
				arrA = dictAliases( strT )
				Redim Preserve arrA(Ubound(arrA)+2)
				arrA(Ubound(arrA)-1)=0
				arrA(Ubound(arrA))=strAlias
				dictAliases( strAlias ) = strT& "_" &(Ubound(arrA)+1)/2
				dictAliases( dictAliases( strAlias ) ) =  Array(0,strAlias)
			End If
		End If
		strSqlJoinExpr = Replace (strSqlJoinExpr, mTmp, dictAliases( strAlias )  )
	Loop

	FindJoin = strSqlJoinExpr
End Function

Function InsertJoins ( strResultSql, nQueryid )
	Dim i, j, k
	Dim nCommonPos, nAliasStart, nAliasEnd
	Dim strAliasSql, strAlias
	Dim objQueryObjects, objObjectTables, objObjectRels
	Dim arrObjectTables, arrJoins
	Dim strParentID, arrA, strJoinType

	Set objQueryObjects = objNSNETWork.GetQueryAllObjects(nQueryid )

	arrQueryObjects = objQueryObjects.GetRows(,,Array("OBJECTID", "MASTEROBJECTID", "QUERYOBJECTID", "MID", "ISLEFT"))

	Set dictMaster = Server.CreateObject("NetCity.Storage")
	Set dictJoins = Server.CreateObject("NetCity.Storage")

	' alias index
	' 1st object sql string
	Set objObjectTables = objNSNETWork.GetObjectData(arrQueryObjects(indQrObjectId,0) )
	arrObjectTables = objObjectTables.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "JOINTYPE", "SQLJOINEXPR", "SQLTYPE", "SQLPROCPARAMS"))
	i = 0 : j = 0 : k = 1
	Redim arrJoins(1)
	strAlias = "{" & arrObjectTables(1,j) &"}"
	strAlias = FindJoin(arrQueryObjects(2,i), strAlias )
	arrJoins(0) = strAlias
	arrJoins(1) =  kFrom_ & arrObjectTables(2,j)&" "  &strAlias
	For j = 1 to Ubound ( arrObjectTables, 2 )'у первого объекта пока нет доп. таблиц и цикл будет пустой
		strAlias = "{" & arrObjectTables(1,j) &"}"
		strAlias = FindJoin(arrQueryObjects(2,i), strAlias )
		k=k+1
		arrJoins(k) = strAlias
		k=k+1
		strParentID = ""
		arrJoins(k) =  Text("green",InsertJoin( arrObjectTables(3,j) ) & arrObjectTables(2,j)&" "  &strAlias& kOn  &strAlias & "." &FindAlias(arrQueryObjects(2,i), arrObjectTables(4,j), strParentID) )
		Call ProcessTree( strAlias, strParentID)
	Next
' other objects sql string
	For i = 1 to Ubound ( arrQueryObjects, 2 )
		dictMaster(arrQueryObjects(2,i)) = arrQueryObjects(3,i)
		Set objObjectRels = objNSNETWork.GetObjectRelations(arrQueryObjects(indQrMasterObjectId,i), arrQueryObjects(indQrObjectId,i) )
		arrObjectRels = objObjectRels.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "JOINTYPE", "SQLJOINEXPR", "SQLTYPE", "SQLPROCPARAMS"))', "ISCOMMON" 
		For j = 0 To Ubound(arrObjectRels,2)
			If Not IsDull(arrObjectRels(4,j)) Then
				strAlias = "{" & arrObjectRels(1,j) &"}"
				strAlias = FindJoin(arrQueryObjects(2,i), strAlias )
				k=k+1
				Redim preserve arrJoins(Ubound(arrJoins)+2)
				arrJoins(k) = strAlias
				k=k+1
				Select Case arrQueryObjects(4,i)
				Case "Y" : strJoinType = "L"
				Case "N" : strJoinType = "I"
				Case Else 
					strJoinType = arrObjectRels(3,j) 
				End Select
				strParentID = ""
				arrJoins(k) =  Text("brown", InsertJoin( strJoinType) & arrObjectRels(2,j)&" "  &strAlias& kOn  &strAlias & "." &FindAlias(arrQueryObjects(2,i), arrObjectRels(4,j), strParentID) )
				Call ProcessTree( strAlias, strParentID)
			End If
		Next
		Set objObjectTables = objNSNETWork.GetObjectData(arrQueryObjects(indQrObjectId,i) )
		arrObjectTables = objObjectTables.GetRows(,,Array("TABLEID", "ALIAS", "TABLENAME", "JOINTYPE", "SQLJOINEXPR", "SQLTYPE", "SQLPROCPARAMS"))
		For j = 1 to Ubound ( arrObjectTables, 2 )
			strAlias = "{" & arrObjectTables(1,j) &"}"
			strAlias = FindJoin(arrQueryObjects(2,i), strAlias )
			k=k+1
			Redim preserve arrJoins(Ubound(arrJoins)+2)
			arrJoins(k) = strAlias
			k=k+1
			Select Case arrQueryObjects(4,i)
			Case "Y" : strJoinType = "L"
			Case "N" : strJoinType = "I"
			Case Else 
				strJoinType = arrObjectTables(3,j) 
			End Select
			strParentID = ""
			arrJoins(k) =  Text("green", InsertJoin( strJoinType ) & arrObjectTables(2,j)&" "  &strAlias& kOn  &strAlias & "." &FindAlias(arrQueryObjects(2,i), arrObjectTables(4,j), strParentID) )
			Call ProcessTree( strAlias, strParentID)
		Next
	Next
	If strAddressFilter <> "Y" Then 
		For i = 0 To k step 2
			If dictAliases(arrJoins(i) )(0) = 1 Then strResultSql = strResultSql & arrJoins(i+1)
		Next
	Else
		For i = 0 To k step 2
			'strResultSql = strResultSql & arrJoins(i+1)
			If dictAliases(arrJoins(i) )(0) = 1 Then
				strResultSql = strResultSql & arrJoins(i+1)
				If Left(arrJoins(i), 2) = "UA" Then strObjWhere=strObjWhere & " and (coalesce(" & arrJoins(i) & ".STATUS, '')<>'H' or (" & arrJoins(i) & ".STATUS='H' and not exists(select 1 from USERSADDRESS where STATUS<>'H' and USERSADDRESS.USERID=" & arrJoins(i) & ".userid )))"
			End If
		Next
	End If
	InsertJoins = strResultSql
End Function

Function InsertJoin ( nJoinType )
	Select Case nJoinType
	Case "I" : InsertJoin = kInnerJoin
	Case "L" : InsertJoin = kLeftJoin
	Case "R" : InsertJoin = kRightJoin
	Case "F" : InsertJoin = kFullJoin
	End Select
End Function

Function UpdateSqlExpr ( ByVal strObjID, ByVal strSqlJoinExpr )
	Dim mTmp, strAlias, strT, regE, Matches, arrA
	Set regE = New RegExp
	regE.Pattern  = "{([^}]+)}"
	Do
		Set Matches = regE.Execute(strSqlJoinExpr)
		If Matches.Count <=0 Then Exit Do

		Set mTmp = Matches(0)
		strT = mTmp.SubMatches(0)
		strAlias = strObjID& "_" &strT
		If IsDull(dictAliases( strAlias )) Then
			If Not IsArray( dictAliases( strT )) Then
				dictAliases( strT ) = Array(1,strAlias)
				dictAliases( strAlias ) = strT
			Else
				arrA = dictAliases( strT )
				Redim Preserve arrA(Ubound(arrA)+2)
				arrA(Ubound(arrA)-1)=1
				arrA(Ubound(arrA))=strAlias
				dictAliases( strAlias ) = strT& "_" &(1+Ubound(arrA))/2
				dictAliases( dictAliases( strAlias ) ) =  Array(1,strAlias)
			End If
		End If
		strSqlJoinExpr = Replace (strSqlJoinExpr, mTmp, dictAliases( strAlias ) )
	Loop

	UpdateSqlExpr = strSqlJoinExpr
End Function

Sub ProcessTree(ByVal strAlias, ByVal strParentID)
	Dim arrParents, i, arrA, strID
	If strParentID = "" Then Exit Sub
	strID = dictAliases( strAlias )(1)
	arrParents = Split(strParentID,",")
	for i=1 To Ubound(arrParents)
		If arrParents(i) <> strID Then
			If Not IsArray(arrA) Then
				Redim arrA(0)
				arrA(0) = arrParents(i)
			Else
				Redim Preserve arrA(1+Ubound(arrA))
				arrA(Ubound(arrA)) = arrParents(i)
			End If
		End If
	next
	If Not IsArray(arrA) Then Exit Sub
	dictJoins(strID) = arrA
	If dictAliases(strAlias)(0) = 1 Then Call UseParents( strID )
End Sub

Sub UseParents( ByVal strID)
	Dim i, arrA, strAlias, arr2
	arrA = dictJoins(strID)
	If Not IsArray(arrA) Then Exit Sub
	For i = 0 To Ubound(arrA)
		strAlias = dictAliases(arrA(i))
		If dictAliases(strAlias)(0) = 0 Then
			arr2 = dictAliases(strAlias)
			arr2(0) = 1
			dictAliases(strAlias) = arr2
			Call UseParents(arr2(1))
		End If
	Next
End Sub

Function FindAlias( ByVal strObjID, ByVal strSqlJoinExpr, strParentID ) ' strParentID возвращаемый параметр
	Dim mTmp, strAlias, strT, regE, Matches, arrA, strRepl
	Set regE = New RegExp
	regE.Pattern  = "{([^}]+)}"
	Do
		Set Matches = regE.Execute(strSqlJoinExpr)
		If Matches.Count <=0 Then Exit Do

		Set mTmp = Matches(0)
		strT = mTmp.SubMatches(0)
		strAlias = strObjID& "_" &strT
		If IsDull(dictAliases( strAlias )) Then
			If IsDull(dictMaster( strObjID )) Then
				strRepl = "["&strT&"]"
			Else
				strRepl = FindParentAlias(dictMaster( strObjID ), strT )
				If IsArray(dictAliases( strRepl )) Then strParentID = strParentID& ","&dictAliases( strRepl )(1)
			End If
		Else
			strRepl = dictAliases( strAlias )
			strParentID = strParentID& ","&strAlias
		End If
		strSqlJoinExpr = Replace (strSqlJoinExpr, mTmp, strRepl )
	Loop

	FindAlias = strSqlJoinExpr
End Function

Function FindParentAlias( ByVal strObjID, ByVal strT )
	Dim strAlias, strRepl
	strAlias = strObjID& "_" &strT
	If IsDull(dictAliases( strAlias )) Then
		If IsDull(dictMaster( strObjID )) Then
			If Not IsArray( dictAliases( strT )) Then strRepl = "["&strT&"]" Else strRepl = dictAliases(  dictAliases( strT )(1) )
		Else
			strRepl = FindParentAlias(dictMaster( strObjID ), strT)
		End If
	Else
		strRepl = dictAliases( strAlias )
	End If

	FindParentAlias = strRepl
End Function


'используется в случае, когда в качестве параметра выступают свойства таблиц, используемых только в для связки между объектами
'Function UpdateSqlRelExpr( ByVal strSqlExpr )
'	Dim i, cnt
'
'	cnt = UBound(arrUsedRelsTables, 2)
'	For i = 0 To cnt
'		If Not IsEmpty(arrUsedRelsTables(indUsedAlias,i)) Then strSqlExpr = Replace (strSqlExpr, kAliasStartSign & arrUsedRelsTables(indUsedTableName,i) & kAliasEndSign, arrUsedRelsTables(indUsedTableName,i) & kUnderLine & arrUsedRelsTables(indUsedAlias,i))
'	Next
'	UpdateSqlRelExpr = strSqlExpr
'End Function

Function UpdateHidden ( strUpdStr )
	UpdateHidden = NSReplace( strUpdStr, kHiddenID, "?" )
End Function

'Function InsertRelationsWhere ( strResultSql, arrQueryObjects )
'	Dim i
'	Dim strRelsWhere
'	Dim objRelsWhere
'	Dim arrRelsWhere
'
'	strRelsWhere = ""
'	For i = 1 To Ubound(arrQueryObjects,2)
'		Set objRelsWhere = objNSNETWork.GetRelationWhereExpression(Clng(arrQueryObjects(1,i)), Clng(arrQueryObjects(0,i)) )
'		If Not objRelsWhere.EOF Then
'			If Not IsNull(objRelsWhere("SQLWHEREEXPR")) Then
'				If bWhereInit Then
'					strRelsWhere = strRelsWhere & kAnd
'				Else
'					strRelsWhere = strRelsWhere & kWhere
'					bWhereInit = True
'				End If
'				strRelsWhere = strRelsWhere & UpdateSqlExpr ( objRelsWhere("SQLWHEREEXPR"))
'			End If
'		End If
'	Next
'	InsertRelationsWhere = strResultSql & strRelsWhere
'End Function

Function InsertReturnedFields ( strResultSql, nQueryId )
	Dim i, j
	Dim strSelectFields, strExpSql, strTmp, strConstant
	Dim objExplines, objDist
	Dim arrExplines
	Dim bForceToStr

	Set objQueryFields = objNSNETWork.GetQueryFieldsWithExpressionsList(nQueryid )

	If Not objQueryFields.EOF Then
		arrQueryFields = objQueryFields.GetRows(,,Array("DN1", "OBJECTID", "SQLEXPR", "ISEXPR", "FIELDORDER", "EXPRESSIONID", "DN2", "PROPERTYID", "QUERYOBJID"))
		strSelectFields = ""
		For i = 0 To Ubound ( arrQueryFields, 2 )
			If arrQueryFields(3,i)="N" Then				' property
				strTmp = UpdateSqlExpr (arrQueryFields(8,i), arrQueryFields(2,i))
				strSelectFields = strSelectFields &strTmp
				If Not bMSSQL Then dictFields( strTmp ) = i+1
			Else			' expression
				Set objExplines = objNSNETWork.GetExpressionData(Clng(arrQueryFields( 5, i )) )
				arrExplines = objExplines.GetRows(,,ARRAY("LPARENTH", "RPARENTH", "OPERATIONID", "FUNCTIONID", "CONSTANT", "OPERTYPE", "FUNCNAME", "OPNAME", "SQLEXPR", "QUERYOBJID", "TYPEID"))
				strExpSql = ""
' Для MSSQL при сложении строк, если один операнд число - его надо явно приводить к строке.
' Также сдесь учтена одна особенность работы конструктора - он не разрешает сейчас сочетать операцию конкатенации строк
' с др. операциями. Поэтому пока здесь сделан вывод, что если хоть одна операция - есть конкат-я, то счтитаем что
' и все остальные тоже конкат-я. Поэтому все нестроковые типы (а это число и дата) - явно приводим к строке.
' ВНИМАНИЕ !!! Если такое допущение (о сочетании конкатенации с др. операциями, например с арифм. сложением) будет
' нарушено, то это потребует более сложного анализа - какие именно операнды приводить к строке, с учтом скобок и т.д.
' Например, сечас просто делается:
' INT1 || STR1
' приводится к 
' cast(INT1 as varchar) || STR1 (в базе это конечно станет: cast(INT1 as varchar) + STR1).
' Но случай:
' (INT1 + INT2) || STR1
' сейчас не позволителен и не рассматривается, его надо было бы привести к виду
' cast((INT1 + INT2) as varchar) || STR1
' алгоритма для этого сейчас нет.
				bForceToStr = False
				If objGroupings.EOF Then
					For j = 0 To Ubound (arrExplines,2)
						If arrExplines(5,j)="S" Then bForceToStr = True : Exit For
					Next
				End If
				For j = 0 To Ubound (arrExplines,2)
					If arrExplines(0,j)="Y" Then strExpSql = strExpSql & kOpenSign				' (
					If Not IsNull (arrExplines(3,j)) Then strExpSql = strExpSql & arrExplines(6,j) & kOpenSign	' function (
					If Not IsNull (arrExplines(4,j)) Then								' constant
						strConstant = NSReplace(arrExplines(4,j), "'", "''")
						If arrExplines(5,j)="S" Then	'for IB
							strExpSql = strExpSql & "'" & strConstant & "'"
						ElseIf bForceToStr Or Ubound (arrExplines,2) = 0 Then
							strExpSql = strExpSql & "'" & strConstant & "'"
						Else
							strExpSql = strExpSql & strConstant
						End If
					Else																				' property
						strTmp = UpdateSqlExpr(arrExplines(9,j), arrExplines(8,j) )
						If bForceToStr Then 'And (arrExplines(10,j) = 1 Or arrExplines(10,j) = 2) Then
							If bMSSQL Then
								If (arrExplines(10,j) < 3) Then strTmp = "cast(" & strTmp & " as varchar)"
							End If
							If (arrExplines(10,j) = 2) Then
								If Not bMSSQL Then
									strExpSql = strExpSql & "coalesce(to_char(" & strTmp & ", 'dd.mm.yyyy'),'')"
								Else
									strExpSql = strExpSql & "coalesce(cast(" & strTmp & " as varchar),'')"
								End If
							Else
								strExpSql = strExpSql & "coalesce(" & strTmp & ",'')"
							End If
							'strExpSql = strExpSql  & "cast(" & strTmp & " as varchar)"
						Else
							strExpSql = strExpSql  & strTmp
						End If
					End If
					If Not IsNull (arrExplines(3,j)) Then strExpSql = strExpSql & kCloseSign							' function )
					If arrExplines(1,j) = "Y" Then strExpSql = strExpSql & kCloseSign				' )
					If Not IsNull (arrExplines(2,j)) Then strExpSql = strExpSql & " " & arrExplines(7,j) & " "		' operation
				Next
				strSelectFields = strSelectFields & strExpSql
			End If
			If Not IsDull(arrQueryFields (0,i)) Then		' displayname present
				strSelectFields = strSelectFields & kAs & """" & arrQueryFields (0,i) & """"
			ElseIf arrQueryFields (3,i) = "N" Then		' displayname not present
				strSelectFields = strSelectFields & kAs & """" & arrQueryFields (6,i) & """"
			End If
			If i < Ubound ( arrQueryFields, 2 ) Then strSelectFields = strSelectFields & ", "
		Next
	End If

	Set objDist = objNSNETWork.GetQueryData(nQueryId )
	If bMSSQL Then
		If CStr(objDist("ISDISTINCT")) = "Y" Then strAddressFilter = "Y"
	End If
	InsertReturnedFields = Text("red", kSelect & IIF(CStr(objDist("ISDISTINCT")) = "Y", kDistinct, "") & strSelectFields) & strResultSql
End Function

Function InsertFilters ( strResultSql, nQueryId )
	Dim i, bLike
	Dim strFilters, objFilters, arrFilters
	strFilters = ""
	Set objFilters = objNSNETWork.GetQueryFilters(nQueryid )
	bLike =False
	If Not objFilters.EOF Then
		arrFilters = objFilters.GetRows(,,Array("LPARENTH", "RPARENTH", "NAME", "CONSTANT", "PROPERTYID", "SQLEXPR", "CODE", "QUERYOBJID"))
		strFilters = strFilters & kWhere & "("
		For i = 0 To Ubound ( arrFilters, 2 )
			If arrFilters ( 0, i ) = "Y" Then strFilters = strFilters & kOpenSign
			If IsNull(arrFilters ( 3, i )) Then
				strFilters = strFilters & "coalesce(" & UpdateSqlExpr(arrFilters(7,i), arrFilters(5,i) ) & ",'')"
			Else
				If bLike Then
					strFilters = strFilters & " LIKE '%" & chr(1) &arrFilters ( 3, i ) &chr(1)& "%'"
				Else
					strFilters = strFilters & "'" & arrFilters ( 3, i ) & "'"
				End If
			End If
			If arrFilters ( 1, i ) = "Y" Then strFilters = strFilters & kCloseSign
			If i < Ubound ( arrFilters, 2 ) Then
				If arrFilters(2,i) = "=" And arrFilters(6,i) = "M" Then
					bLike =True
				Else
					bLike =False
					strFilters = strFilters & " " & arrFilters ( 2, i ) & " "
				End If
			End If
		Next
		bWhereInit = true
		strFilters = strFilters & ")"
	End If
	InsertFilters = strResultSql & Text("purple",strFilters)
End Function

Function InsertParams ( strResultSql, nQueryId )
	Dim i
	Dim strParams
	Dim objParams
	Dim arrParams

	strParams = ""
	Set objParams = objNSNETWork.GetParamsList(nQueryId )
	If Not objParams.EOF Then
		arrParams = objParams.GetRows(,,Array("SQLEXPR", "QUERYOBJID", "PARAMID", "PARAMSQLEXPR", "ALIAS"))
		If bWhereInit Then
			strParams = strParams & kAnd
		Else
			strParams = strParams & kWhere
			bWhereInit = true
		End If
		For i = 0 To Ubound ( arrParams, 2 )
			If IsDull( arrParams(3,i) ) Then Call objNSNETWork.SetQueryParamSQL(arrParams(2,i), UpdateSqlExpr(arrParams(1,i), arrParams (4,i ) ) ) Else Call objNSNETWork.SetQueryParamSQL(arrParams(2,i), arrParams(3,i) )
			strParams = strParams & UpdateSqlExpr(arrParams(1,i), arrParams ( 0, i ))
			If i < Ubound ( arrParams, 2 ) Then strParams = strParams & kAnd
		Next
	End If
	InsertParams = strResultSql & Text("red",strParams)
End Function

Function InsertGroupings ( strResultSql, nQueryId )
	Dim i, m, strTmp
	Dim arrGroupings
	arrGroupings = objGroupings.GetRows(,,Array("SQLEXPR","SQLEXPRGROUP","SQLEXPRORDER", "QUERYOBJID"))
	strGroupings = strGroupings & kGroupBy
	If Not bMSSQL Then
		For i = 0 To Ubound ( arrGroupings, 2 )
			If Not IsNull( arrGroupings (1, i) ) Then
				strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(1,i))
				m = dictFields(strTmp)
				strGroupings = strGroupings & IIF(IsDull(m), strTmp, m) & ","
			ElseIf Not IsNull( arrGroupings (2, i) ) Then
				strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(2,i))
				m = dictFields(strTmp)
				strGroupings = strGroupings & IIF(IsDull(m), strTmp, m) & ","
			End If
			strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(0,i))
			m = dictFields(strTmp)
			strGroupings = strGroupings & IIF(IsDull(m), strTmp, m)
			If i < Ubound ( arrGroupings, 2 ) Then strGroupings = strGroupings & ","
		Next
	Else
		For i = 0 To Ubound ( arrGroupings, 2 )
			strTmp = ""
			If Not IsNull( arrGroupings (1, i) ) Then
				strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(1,i))
			ElseIf Not IsNull( arrGroupings (2, i) ) Then
				strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(2,i))
			End If
			If strTmp<>"" Then
				If Instr(strSelect,strTmp&" ") = 0 And Instr(strSelect,strTmp&",") = 0 Then strSelect = strSelect & ", " & strTmp  & kAs & """x2b7"&strTmp&""""
				If Instr(strGroupings,strTmp&",") = 0 Then strGroupings = strGroupings & strTmp & ","
			End If
			strTmp = UpdateSqlExpr (arrGroupings(3,i), arrGroupings(0,i))
			If Instr(strGroupings,strTmp&",") = 0 Then
				strGroupings = strGroupings &strTmp
				If i < Ubound ( arrGroupings, 2 ) Then strGroupings = strGroupings & ","
			Else
				If i >= Ubound ( arrGroupings, 2 ) Then strGroupings = Left(strGroupings,Len(strGroupings)-1)
			End If
		Next
	End If
	InsertGroupings = strResultSql & Text("gray",strGroupings)
End Function

Function InsertSortings ( strResultSql, nQueryId )
	Dim i, m, strTmp
	Dim strSortings, strGrouping
	Dim objSortings, objGrouping
	Dim arrSortings
	strSortings = ""
	Set objSortings = objNSNETWork.GetSortingsList(nQueryId )
	If Not objSortings.EOF Then
		arrSortings = objSortings.GetRows(,,Array("DIRECTION", "SQLEXPR", "PROPERTYID", "SQLEXPRORDER", "QUERYOBJID"))
		strSortings = strSortings & kOrderBy
		If Not bMSSQL Then
			For i = 0 To Ubound ( arrSortings, 2)
				If Not IsNull( arrSortings(3,i) ) Then
					strTmp = UpdateSqlExpr (arrSortings(4,i), arrSortings(3,i))
					m = dictFields(strTmp)
					strSortings = strSortings & IIF(IsDull(m), strTmp, m) & ","
				Else
					Set objGrouping = objNSNETWork.GetPropertyGroupExpression(nQueryId, Clng(arrSortings(2,i)) )
					If Not objGrouping.EOF Then
						strGrouping = objGrouping("SQLEXPRGROUP")
						If strGrouping <> "" Then
							strTmp = UpdateSqlExpr (arrSortings(4,i), strGrouping)
							m = dictFields(strTmp)
							strSortings = strSortings & IIF(IsDull(m), strTmp, m) & ","
						End If
					End If
				End If
				strTmp = UpdateSqlExpr (arrSortings(4,i), arrSortings(1,i))
				m = dictFields(strTmp)
				strSortings = strSortings & IIF(IsDull(m), strTmp, m)
				If arrSortings (0, i) = "D" Then strSortings = strSortings & kDesc
				If i < Ubound ( arrSortings, 2 ) Then strSortings = strSortings & ","
			Next
		Else
			For i = 0 To Ubound ( arrSortings, 2)
				strTmp = ""
				If IsNull( arrSortings(3,i) ) Then
					Set objGrouping = objNSNETWork.GetPropertyGroupExpression(nQueryId, Clng(arrSortings(2,i)) )
					If Not objGrouping.EOF Then
						strGrouping = objGrouping("SQLEXPRGROUP")
						If strGrouping <> "" Then strTmp = UpdateSqlExpr (arrSortings(4,i), strGrouping)
					ElseIf strAddressFilter <> "" Then
						strTmp = UpdateSqlExpr (arrSortings(4,i), arrSortings(1,i)) ' distinct требует сортировок
					End If
				Else
					strTmp = UpdateSqlExpr (arrSortings(4,i), arrSortings(3,i))
				End If
				If strTmp<>"" Then
					' Instr(strSelect,"("&strTmp)<>0  - добавлено чтобы учесть coalesce(
					If (Instr(strSelect,"("&strTmp)<>0 Or Instr(strSelect,strTmp&",") = 0) And Instr(strSelect,strTmp&" ") = 0  Then strSelect = strSelect & ", " & strTmp & kAs & """x2b7"&strTmp&""""
					If Instr(strSortings,strTmp&",") = 0 Then strSortings = strSortings & strTmp & ","
				End If
				strTmp = UpdateSqlExpr (arrSortings(4,i), arrSortings(1,i))
				If Instr(strSortings,strTmp&",") = 0 Then
					strSortings = strSortings &strTmp
					If arrSortings (0, i) = "D" Then strSortings = strSortings & kDesc
					If i < Ubound ( arrSortings, 2 ) Then strSortings = strSortings & ","
				Else
					If i >= Ubound ( arrSortings, 2 ) Then strSortings = Left(strSortings,Len(strSortings)-1)
				End If
			Next
		End If
	ElseIf strGroupings <> "" Then
		strSortings = NSReplace(strGroupings, "GROUP BY", "order by")
	End If
	InsertSortings = strResultSql & Text("fuschia",strSortings)
End Function

Function InsertObjectWhere ( strResultSql, nQueryId )
	Dim i
	Dim strWhere
	Dim objWhere
	Dim arrWhere

	strWhere = ""
	Set objWhere = objNSNETWork.GetWhereExpression(nQueryId )
	If Not objWhere.EOF Then
		arrWhere = objWhere.GetRows(,,Array("OBJECTID","SQLWHEREEXPR", "QUERYOBJECTID"))
		If bWhereInit Then
			strWhere = strWhere & kAnd
		Else
			strWhere = strWhere & kWhere
			bWhereInit = True
		End If
		For i = 0 To Ubound ( arrWhere, 2 )
			strWhere = strWhere & UpdateHidden (UpdateSqlExpr ( arrWhere (2, i), arrWhere (1, i)))
			If i < Ubound ( arrWhere, 2 ) Then strWhere = strWhere & kAnd
		Next
	End If
	InsertObjectWhere =  strResultSql & Text("lime",strWhere)
End Function

%>
