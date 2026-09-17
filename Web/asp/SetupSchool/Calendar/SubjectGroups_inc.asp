<% ' © 2007-2015 IRTech. All rights reserved.

Dim bSFPresent, bLanguages, bSFSubjects
Dim nSFId, objSF, objSFSubjects
Dim strTitle, strSGName, strSGID, strOldSGName, strAbbr, strOld_Abbr

Sub ReadState()
	strSGID = CLng(GetSafe( "SGID", -1 ))
	nSFId = GetSafeLng( Request("SFID"), -1)
	strSGName = GetSafeStr( Request("SGNAME"), -1, "")
	strAbbr = GetSafeStr( Request("PSABBR"), -1, "")

	If strSGID <> -1 Then
		strOldSGName = GetSafeStr( Request("OLDSGNAME"), -1, "")
		strOld_Abbr = GetSafeStr( Request("OLD_PSABBR"), -1, "")
	End If
End Sub

Sub onSpecialHead()%>
	<script><!--
		function Back() {
			$.when(!isDataChanged() || $.show.confirmation(kDataWereChanged)).then(function(){
				goBack(document.EDITSG, '<%=kBackPage%>');
			});
		}

		function submitSG() {
			if(isDBBusy()) return false;

			if (!isDataChanged())
				alert(language.Generic.SetupSchoolCalendar.kClAltDataNotChg);
			else {

				var elems = document.EDITSG.elements;

				if (elems.SGNAME.value == "") {
					focusAlert( elems.SGNAME, language.Generic.ServAdmin.kGlobalSubjectNameCantBeEmpty);
					return false;
				}
				if (elems.PSABBR.value == "") {
					focusAlert( elems.PSABBR, language.Generic.ServAdmin.kGlobalSubjectAbbrNameCantBeEmpty);
					return false;
				}
				cnt = $('input[name=SIDS]:checked').length
					var confirms = new Array();
				if (cnt < 2 ) {
					confirms.push($.show.getConfirmation(language.Generic.ServAdmin.kParentSubjectShouldHaveMore));
					//return false;
				}
				confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kClConGroupWarning + '. ' + language.Generic.Common.kContinue));
				extDeferred.when(confirms).then(function() {
					setDBBusy();
					$('[name=BACK]').val('<%=kBackPage%>');
					ok('EDITSG', '/asp/SetupSchool/Calendar/SaveSubjectGroup.asp');
				});
			}
		}

		function resetSG() {
			document.EDITSG.reset();
		}

		function isDataChanged() {
			var elems = document.EDITSG.elements;

			if(subjchanged) {
				$('[name=SIDSCHG]').val(1);
				var OldSids =$('[name=OLDSIDS]');
				var checkedSids = $('[name=SIDS]:checked');

				if (OldSids.length != checkedSids.length)
					return true;
				for( i = 0; i < OldSids.length; i++ )
					if (OldSids[i].value != checkedSids[i].value)
						return true;
			}
			$('[name=SIDSCHG]').val(0);

			if (elems.SGNAME.value != elems.OLDSGNAME.value)
				return true;
			if (elems.PSABBR.value != elems.OLD_PSABBR.value)
				return true;

			return false;
		}
		var subjchanged = false;
	//--></script><%
End Sub

Sub Main()
	Dim objPSubjName

	Set objSF = objNSNET.GetUsedSubjectFieldList(strSchoolId )
	bSFPresent = Not objSF.EOF

	If strSGID = -1 Then
		strTitle = obLanguage("SetupSchoolCalendar","kTitleNewSubjectGroup")
	Else
		strTitle = obLanguage("SetupSchoolCalendar","kTitleEditSubjectGroup")
		Set objPSubjName = objNSNET.GetParentSubjectProperties( strSGID )
		If strSGName = "" Then strSGName = CStr( objPSubjName("PSUBJECTNAME") )
		If strAbbr = "" Then strAbbr = CStr( objPSubjName("PSABBR") )
		If strOld_Abbr = "" Then strOld_Abbr = strAbbr
		If strOldSGName = "" Then strOldSGName = strSGName
		If nSFID = -1 Then
			If Not IsNull(objPSubjName("FIELDID")) Then nSFID = objPSubjName("FIELDID")
		End If
	End If

	bLanguages = CBool( strSGName = obLanguage("SetupSchoolCalendar","kLanguages") )
	Set objSFSubjects = objNSNET.GetFreeSubjectsForParentSubject(strSchoolId , nSFID, strSGID )

	bSFSubjects = Not objSFSubjects.EOF
End Sub

Sub DrawSpecialButtons()
End Sub

Sub DrawButtons()
	Call DrawSpecialButtons()

	ButtonSave "submitSG()", obLanguage("SetupSchoolCalendar","kSubmitSG")
	If strSGID <> -1 Then
		ButtonReset "resetSG()", obLanguage("Common","kReset") 
	End If 
End Sub

Sub onDrawPage()%>
	<form name="EDITSG" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("BLANG",IIF(bLanguages,1,0), "SIDSCHG","", "BACK","", "OLDSGNAME",strOldSGName, "OLD_PSABBR", strOld_Abbr, "SGIDS",strSGID))%>
		
		<%
		DrawButtonPanel
		DrawSaveSubjectTable
		DrawSubjectListTable
		%>
	</form>
<%End Sub

Sub DrawSaveSubjectTable()%>
	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-thin">
				<tr>
					<th class="text-nowrap"><%=obLanguage("SetupSchool","kFullName")%></th>
					<td><%
						If bLanguages Then%>
							<input type="hidden" name="SGNAME" value="<%=strSGName%>"><%
							rw DB2HTML( strSGName )
						Else%>
							<input type="text" name="SGNAME" class="FilterWhiteSpace form-control" value="<%If strSGName <> "" Then rw DB2HTML( strSGName )%>" maxlength="50" size="<%=TextInputSize(51)%>"><%
						End If%>
					</td>
				</tr>
				<tr>
					<th class="text-nowrap"><%=obLanguage("SetupSchool","kAbbr_Name")%></th>
					<td><%
						If bLanguages Then%>
							<input type="hidden" name="PSABBR" value="<%=strAbbr%>"><%
							rw DB2HTML( strAbbr )
						Else%>
							<input type="text" name="PSABBR" class="FilterWhiteSpace form-control" value="<%If strAbbr <> "" Then rw DB2HTML( strAbbr )%>" maxlength="50" size="<%=TextInputSize(51)%>"><%
						End If%>
					</td>
				</tr>
			</table>
		</div>
	</div><%
End Sub

Sub DrawSubjectListTable
	Dim i
	Dim strPSubjId, strSubjID
	Dim bChecked, isExistsChecked, SubjFieldName%>

	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-thin">
				<tr>
					<th><%=obLanguage("Common","kSubjects")%></th>
					<%If bSFPresent Then%><th><%=obLanguage("SetupSchoolCalendar","kSubjField")%></th><%End If%>
				</tr>
				<tr>
					<td class="text-nowrap"><%
						isExistsChecked = False
						If Not bSFSubjects Then
							rw obLanguage("SetupSchoolCalendar","kNoSubj")
						Else
							i = -1
							While Not objSFSubjects.EOF
								strSubjID = GetSafeID(objSFSubjects("SUBJECTID"), Null)
								bChecked = False
								i = i + 1
								%>
								<div class="checkbox">
									<label>
										<input type="checkbox" name="SIDS" value="<%=strSubjID%>"<%
										strPSubjId = objSFSubjects("PARENTSUBJECTID")
											If Not IsNull( strPSubjId ) And strPSubjId = strSGID Then
													rw " checked"
													isExistsChecked = True
													bChecked = True
											End If%>
										 onclick="subjchanged = true;"><%
										If bChecked Then rw WriteHiddenTags( Array("OLDSIDS",strSubjID))
										rw DB2HTML( objSFSubjects("SUBJECTNAME") )%>
									</label>
								</div><%
								objSFSubjects.MoveNext
							Wend
						End If%>
					</td><%
					If bSFPresent Then%><td class="text-center"><%
						If Not isExistsChecked Then%>
							<select onchange="OnChangeSelect('EDITSG', '<%=strScriptName%>');" name="SFID" style="margin-top: 3px; margin-left: 1px; margin-bottom: 2px;" class="form-control">
								<option value="-1"><%=obLanguage("SetupSchoolCalendar","kFreeSF")%></option><%
								PopulateSelect objSF, "FIELDID", "FIELDNAME", nSFID%>
							</select><%
						Else
							Do While Not objSF.EOF
								If CLng(objSF("FIELDID"))=Clng(nSFID) Then Exit Do 
								objSF.MoveNext
							Loop
							If objSF.EOF Then SubjFieldName = obLanguage("SetupSchoolCalendar","kFreeSF") Else SubjFieldName = objSF("FIELDNAME")
							rw DB2HTML(SubjFieldName)%>
							<input type="hidden" name="SFID" value="<%=nSFID%>"><%
						End If%>
						</td><%
					End If%>
				</tr>
			</table>
		</div>
	</div><%
End sub%>
