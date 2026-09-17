<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nPID, nEOID, objFounders, bFounders
Dim bFromSchoolPage

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleEOFounders")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bFromSchoolPage, MenuItem_mi_SA_School, MenuItem_mi_SA_Addresses)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bFromSchoolPage, TabItem_tb_SA_School, TabItem_tb_SA_Addresses)
 End Function

Sub ReadState()
	nPID = GetSafeLng(obTokenMgr.GetData(strToken,"State"), Null)
	nEOID = GetSafeLng(Request("AreaID"), -1)
	Set objFounders = objNSNET.GetStateEOFounders(nPID, nEOID)
	TestError obLanguage("ServAdmin","kErrFoundersList")
	bFounders = Not objFounders.EOF
	bFromSchoolPage = GetSafeBool(obTokenMgr.GetData(strToken, stFromSchoolPage), False)
End Sub

Sub DrawButtons()
	If bFounders Then ButtonSave "saveEOFounders();", obLanguage("Common","kSave")
End Sub

Sub onHeadSpecial()%>
<script>
	function Back() {
		checkForChanges().then(function() {
			$('input[name=EOFID]').attr('disabled', 'disabled');
			DoSubmit(document.mainForm, 'createArea.asp');
		});
	}

	function saveEOFounders() {
		DoSubmit(document.mainForm, 'createArea.asp');
	}
</script><%
End Sub

Sub onDrawPage()
	Dim nOldTypeID, nTypeID, nFounderID, arrEOFounders, bChecked, i
	
	DrawButtonPanel%>

	<form method="POST" class="form-horizontal" name="mainForm" action="createArea.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("Area", "EO", "AreaID", nEOID, "EditSchoolID", Request("EditSchoolID"), "act", Request("act"), "CRTCNT", Request("CRTCNT"), "EOFID", 0))%>
	
		<div class="row">
			<div class="col-md-7 col-lg-5"><%
				If bFounders Then
					If Not IsDull(Request("EOFID")) Then arrEOFounders = Split(Request("EOFID"), ",")%>
					<table class="table table-bordered table-condensed">
						<tr>
							<th><%=obLanguage("ServAdmin","kFoundersType")%></th>
							<th><%=obLanguage("ServAdmin","kFounders")%></th>
						</tr>
						<tr>
							<td><%=DB2HTML(objFounders("TYPENAME"))%></td>
							<td><%
								nOldTypeID	= GetSafeLng(objFounders("TYPEID"), Null)

								While Not objFounders.EOF
									bChecked		= False
									nTypeID			= GetSafeLng(objFounders("TYPEID"), Null)
									nFounderID		= GetSafeLng(objFounders("FOUNDERID"), Null)

									If nTypeID <> nOldTypeID Then
										nOldTypeID = nTypeID%>
										</td></tr>
										<tr><td><%=DB2HTML(objFounders("TYPENAME"))%></td><td><%
									End If

									If Not IsDull(Request("EOFID")) Then
										For i = 0 To UBound(arrEOFounders)
											If GetSafeLng(arrEOFounders(i), 0) = nFounderID Then bChecked = True
										Next
									Else If Not IsDull(objFounders("EOID")) Then bChecked = True
									End If%>
									<div class="checkbox">
										<label>
											<input type="checkbox" name="EOFID" OnClick="dataChanged()" value="<%=nFounderID%>" <%If bChecked Then%>checked<%End If%>> 
											<%=DB2HTML(objFounders("FNAME"))%>
										</label>
									</div><%
									objFounders.MoveNext
								WEnd%>
							</td>
						</tr>
					</table><%
				Else
					Response.Write obLanguage("ServAdmin","kNoFounders")
				End If%>
			</div>
		</div>
	</form><%
End Sub%>