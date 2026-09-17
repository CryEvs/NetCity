<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim objAidsRs, arrAids, nSelected, i

Sub specialRead()
	arrAids = Split(GetSafeStr(obTokenMgr.GetData(strToken, stAidsFilters), -1, "0"), ",")
End Sub

Sub specialWrite()
End Sub

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub Main()
	Set objAidsRs = objNSNET.GetAidsList(strSchoolID)
	If arrAids(0) = "0" Then
		nSelected = 0
	Else
		nSelected = UBound(arrAids, 1)
	End If
End Sub

Sub specialHead()
%>
	<script>
$(document).ready(function (){
	$('input[type=checkbox]').first()[0].checked = true;
	$('input[type=checkbox]').on("click",
		function ( e )
		{
			var n = $( "input:checked" ).length;
			if (n>0)
				return true;
			alert(language.Reports.kCheckAidTypes)
			return false;
		});
});

	</script><%
End Sub

Sub specialFilters( strForm )
	Dim bChecked
	If objAidsRs.EOF Then%> <tr><td colspan=2 class="SmallHeader"><%=obLanguage("Reports","kNoAidTypes",strFunctionalityType)%>.</td></tr><%
		bExit = True
	End If
	If bExit Then Exit Sub
	OpenFormGroup obLanguage("Reports","kAidType")
	i = 0
	Do While Not objAidsRs.EOF
		bChecked = False
		%><div class="row"><%

		If i <= nSelected Then
			If GetSafeID(objAidsRs("ITEMID"), Null) = arrAids(i) Then
				i = i + 1
				bChecked = True
			End If
		End If

		%><div class="col-md-6"><%=ShowCheckbox( "ParentsAids", objAidsRs("ITEMID"), bChecked, DB2HTML(objAidsRS("ITEMNAME")), "" )%></div><%

		objAidsRs.MoveNext

		If Not objAidsRs.EOF Then
			%><div class="col-md-6"><%=ShowCheckbox( "ParentsAids", objAidsRs("ITEMID"), bChecked, DB2HTML(objAidsRS("ITEMNAME")), "" )%></div><%
			objAidsRs.MoveNext
		End If

		%></div><%
	Loop
	CloseFormGroup
End Sub
%>
