<!-- #INCLUDE VIRTUAL="/asp/scripts/EoNames_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim arrDepartReasons
Dim nDefaultReasonID
Dim bValidateCurReason

' Процедура получения списка причин выбытий и формирования javascript массива с ними
' nStep - если =-1, то не имеет значения, всё работает по-старому
' определённый nStep может изменить дефолтное значение Причины выбытия
Sub GetDepartReasons( nDocType, nFuncType, nStep )
	Dim objDepartReasons, i, j, nDefaultItemOrder
	Dim strArrayScript
	Set objDepartReasons = objNSNET.GetDepartReasonList(nFuncType, nDocType)
	If objDepartReasons.EOF Then GenerateError obLanguage("Movement","kNoDepartReasons")
	arrDepartReasons = objDepartReasons.GetRows(,, Array("ITEMID", "ITEMNAME", "ITEMORDERNO")) ' 0 - ITEMID, 1 - ITEMNAME
	'формируется java массив с причинами выбытия для формирования списков на клиенте
	strArrayScript = "var arrReasonOptions = new Array();"
	i = UBound( arrDepartReasons, 2 )
	j = i
	nDefaultReasonID = Null
	Do While i >= 0
		If IsNull(nDefaultReasonID) And arrDepartReasons( 2, i ) > 0 Then 
			Select Case nDocType
				Case kDocType_OUT 
					nDefaultItemOrder = 2
				Case kDocType_GRADUATE
					If nFuncType = 3 Then
						nDefaultItemOrder = 25 ' #18422
					Else
						nDefaultItemOrder = IIf(nStep = 2, 2, 33) ' т.е. для выпуска из 9 кл. дефлотное значение 2
					End If
			End Select
			If arrDepartReasons( 2, i ) = nDefaultItemOrder Then nDefaultReasonID = arrDepartReasons( 0, i )
		End If
		strArrayScript = strArrayScript & "arrReasonOptions[" & j & "] = [ " & arrDepartReasons( 0, i ) & ", '" & DB2HTML( arrDepartReasons( 1, i ) ) & "', " & IIF( arrDepartReasons( 2, i ) > 0, arrDepartReasons( 2, i ),"null") & " ];"
		i = i - 1
		j = j - 1
	Loop
	
	Response.Write "<script>" & strArrayScript & "</script>"
End Sub

Sub DrawSelectReasons(nDocType, nStudentID, curReasonID)
	Dim i
	Dim strInputName, strReasonName 
	Dim curReasonItemOrder
	curReasonItemOrder = ""
	strInputName = "REASON_" & nStudentID
	If Not IsArray(arrDepartReasons) Then Response.Write "<span id='REASON_SPAN_" & nStudentID & "'><nobr>&nbsp;</nobr></span><input type=hidden name=""" & strInputName & """ value="""">" : Exit Sub

	If Not IsDull(curReasonID) Or Not IsDull(nDefaultReasonID) Then
		If IsDull(curReasonID) Then 
			curReasonID = CLng(nDefaultReasonID)
		Else
			curReasonID = CLng(curReasonID)
		End If

		i = GetElemArrayIndex(curReasonID,arrDepartReasons)
		If IsNull(i) And nDefaultReasonID > 0 Then i = GetElemArrayIndex(nDefaultReasonID, arrDepartReasons)

		If Not IsNull(i) Then
			curReasonItemOrder = arrDepartReasons(2, i) 
			strReasonName = arrDepartReasons(1, i)
			Response.Write "<span id='REASON_SPAN_" & nStudentID & "'><nobr>" & DB2HTML(strReasonName) & "</nobr></span>" &_
			"<input type=""hidden"" name=""" & strInputName & """ id=""" & strInputName & """ value=""" & curReasonID & """>"

			If bValidateCurReason Then%>
				<script>
					moeEoReady.then(function() {
						var reasonOrder = <%=IIF(curReasonItemOrder > 0, curReasonItemOrder, "null")%>;
						var eoId = $('input[name=EOS_<%=nStudentID%>]').val();
						var reasonName = "<%=strReasonName%>";
						if( !reasonValidator.validateByEOId(reasonOrder, eoId)) {
							$("input[type=hidden][name=<%=strInputName%>]").after("<nobr style='color:red; display:block'>" + reasonName + "</nobr>");
						}
					});
				</script><%
			End If
		Else
			rw "<input type=""hidden"" name=""" & strInputName & """ id=""" & strInputName & """ value=""" & curReasonID & """>"
			rw "<span id='REASON_SPAN_" & nStudentID & "'><nobr>&nbsp;</nobr></span>"
		End If

		Response.Write "<input type=""hidden"" id=""defreason"" value=""" & curReasonID & """ io=""" & curReasonItemOrder & """/>"
	Else
		Response.Write "<span id='REASON_SPAN_" & nStudentID & "'><nobr>" & DB2HTML(arrDepartReasons(1, 0)) & "</nobr></span>"
		Response.Write "<input type=""hidden"" name=""" & strInputName & """ id=""" & strInputName & """ value=""" & arrDepartReasons(0, 0)&""">"
	End If
End Sub

Function GetElemArrayIndex(elemID, arrArray)
	Dim i

	GetElemArrayIndex = Null
	For i = 0 To UBound(arrArray, 2)
		If arrArray(0, i) = elemID Then
			GetElemArrayIndex = i

			Exit For
		End If
	Next
End Function

Sub InitMoveEOs_Js(nDocType, nSchoolID, nFuncType, nStep)
	%>
	<script type="text/javascript">
		(function(){ 
			$(document).ready(function(){
				initMoveEos(<%=nSchoolID%>, <%=nFuncType%>, <%=nDocType%>, <%=nStep%>);
			});
		})();
	</script>
	<%
End Sub

Sub DrawSelectEOs(strStudentID, curEOID)
	Dim strEOVal, i, EOArrayIndex
	Dim nEOLegalForm83ID
	Dim nEOID, nEOTypeID, nEOFormID, nOutSideType
	Dim strAddTagAttributes
	Dim strInputName

	strInputName = "EOS_" & strStudentID 
	strAddTagAttributes = ""
	nEOID = GetSafeLng(curEOID, -1)

	If nEOID = -1 Then
		strEOVal = " "
	Else
		'наименования организаций будут прописаны на стороне клиента. см. movement.js initMoveEos
		'на сервере пишем текст "идет загузка..."
		strEOVal = obLanguage("Common","kLoading")
	End If

	Response.Write "<span id=""EOS_SPAN_" & strStudentID &  """>" & strEOVal & "</span>"
	Response.Write "<input type=""hidden"" id=""" & strInputName & """ name=""" & strInputName & """ studentid=""" & strStudentID & """ value=""" & nEOID & """ " & strAddTagAttributes & " >"
End Sub

Function GetOutsideTypes( nSchoolID )
	Dim objRs, strScript, i
	Dim arr
	Set objRs = objNSNET.GetOutsideTypes(nSchoolID)

	arr = objRs.GetRows(,,Array("OUTSIDETYPEID", "NAME"))
	GetOutsideTypes = arr
End Function

Sub DrawOutSideTypesScript( nSchoolID )
	Dim arrOutsideTypes, arrJagged
	arrOutsideTypes = GetOutsideTypes(nSchoolID)
	
	%>
	<script>
		var arrOSTypes = <%=comHelper.JsonHelper.SerializeObject(comHelper.ArrayHelper.ToJagged(arrOutsideTypes, 1))%>;
	</script>
	<%
End Sub

Sub DrawPlaceReasonRelScripts
	%>
	<script>
		var nFuncTypeArrayIndex = <%=strFunctionalityType%> - 1;
	</script>
	<%
End Sub

Sub DrawSelectOST(strStudentID, curOSTID, strCurOSTName)
	Dim nOSTID
	Dim strInputName

	strInputName = "OST_" & strStudentID 
	nOSTID = GetSafeLng(curOSTID, -1)
	Response.Write "<span id=""OST_SPAN_" & strStudentID &  """><nobr>" & DB2HTML(strCurOSTName) & "</nobr></span>"
	Response.Write "<input type=""hidden"" id=""" & strInputName & """ name=""" & strInputName & """ studentid=""" & strStudentID & """ value=""" & nOSTID & """>"
End Sub
%>