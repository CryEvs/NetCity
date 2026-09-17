<%' © 2007-2016 IRTech. All rights reserved.
	OpenPanelEx obLanguage("Common","kCommonInfo"), "commonInfo", "school-info-accordion", False, "panel-info"%>
		<div class="print-block"><%

			If Not bCanEditExtraSchoolInfo Then
				DrawReadonlyRow obLanguage("SchoolInfo","kEOLegalForm"), objSchoolInfo("EOLEGALFORMNAME")
				DrawReadonlyRow obLanguage("SchoolInfo","kEOLegalForm83"), objSchoolInfo("EOLEGALFORMNAME83")
			Else
				Call DrawSelectInfoRow(obLanguage("SchoolInfo","kEOLegalForm"), objSchoolInfo("EOLEGALFORMID"), "EOLEGALFORMID", objEOLegalForms, "EOLEGALFORMID", "NAME", Null, "dataChanged();")
				Call DrawSelectInfoRow(obLanguage("SchoolInfo","kEOLegalForm83"), objSchoolInfo("EOLEGALFORM83ID"), "EOLEGALFORM83ID", objEOLegalForms83, "EOLEGALFORM83ID", "NAME", Null, "dataChanged();")
			
				Call DrawInput(nEOTypeID, "EOTYPEID", "hidden", "", "", "", "")
				Call DrawInput(nEOFormID, "EOFORMID", "hidden", "", "", "", "")
			End If

			DrawReadonlyRow obLanguage("Common","kEOType"), objSchoolInfo("FUNCNAME")
			If nEOTypeID = 5 Or nEOTypeID = 6 Then
				DrawReadonlyRow obLanguage("SchoolInfo","kEOForm"), objSchoolInfo("EOFORMNAME")
			End If

			' в предыдущем варианте отображения - стиль этого поля отличался от других полей в режиме Readonly
			tmpRO = readonly
			If readonly And bCanEditExtraSchoolInfo Then
				readonly = False
			End If
			OpenFormGroup obLanguage("SchoolInfo","kSmallOrganization")
				rw ISelect("T00SmallOrganization", Array(1, obLanguage("SchoolInfo","kIsSmallOrg"), 0, obLanguage("SchoolInfo","kIsNotSmallOrg")), 1)
			CloseFormGroup
			readonly = tmpRO

			If Not bCanEditExtraSchoolInfo Then
				DrawReadonlyRow obLanguage("SchoolInfo","kEOName"), objSchoolInfo("SCHOOLNAME")
			Else
				Call DrawInputRowWithClass(obLanguage("SchoolInfo","kEOName"), objSchoolInfo("SCHOOLNAME"), "ShortName", "text", 50, 200, "", "FilterWhiteSpace")
			End If

			comHelper.DateHelper.SetFourDigitYearFormat()

			If readonly And Not bCanEditExtraSchoolInfo Then

				DrawReadonlyRow obLanguage("SchoolInfo","kEOFullName"), objSchoolInfo("FULLSCHOOLNAME")
						
				Dim additionalName		
				additionalName = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00additionalName")
				DrawReadonlyRow obLanguage("SchoolInfo","kAdditionalName"), additionalName

				DrawReadonlyRow obLanguage("SchoolInfo","kEONumber"), objSchoolInfo("SCHOOLNUMBER")
				DrawReadonlyRow obLanguage("SchoolInfo","kEOFoundingDate"), comHelper.DateHelper.Date2Str(objSchoolInfo("FOUNDINGDATE").Value)
			Else
				Call DrawInputRowWithClass(obLanguage("SchoolInfo","kEOFullName"), objSchoolInfo("FULLSCHOOLNAME"), "FullName", "text", 120, 400, "", "FilterWhiteSpace")

				tmpRO = readonly
				If readonly And bCanEditExtraSchoolInfo Then
					readonly = False
				End If
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kAdditionalName"), "T00additionalName", 80, 250
				readonly = tmpRO

				If bCanEditExtraSchoolInfo Then
					Call DrawInputRowWithClass(obLanguage("SchoolInfo","kEONumber"), objSchoolInfo("SCHOOLNUMBER"), "SchoolNumber", "text", 26, 200, "", "FilterWhiteSpace")
				Else
					DrawReadonlyRow obLanguage("SchoolInfo","kEONumber"), objSchoolInfo("SCHOOLNUMBER")
				End If

				Call DrawDateInfoRow(obLanguage("SchoolInfo","kEOFoundingDate"), objSchoolInfo("FOUNDINGDATE").Value, "FoundingDate", "")
				
			End If


			Dim mainSchoolInfo, mainSchoolName, isBranch
			mainSchoolName = ""
			isBranch = False

			Set mainSchoolInfo = objNSNET.GetMainSchool(strSchoolID)
			If Not mainSchoolInfo.EOF Then
				mainSchoolName = GetSafeStr(mainSchoolInfo("SCHOOLNAME"), -1, "")
				isBranch = GetSafeBool(mainSchoolInfo("ISBRANCH"), False)
			End If

			If CLng(strFunctionalityType) <> kFuncType_Orphanage Then
				tmpRO = readonly
				If readonly And bCanEditExtraSchoolInfo Then
					readonly = False
				End If

				Dim arrIndepend()
				ReDim arrIndepend(1)

				If mainSchoolName = "" Then
					arrIndepend(0) = 1
					arrIndepend(1) = obLanguage("SchoolInfo","kIndepend1")
				Else
					If isBranch Then
						arrIndepend(0) = 2
						arrIndepend(1) = obLanguage("SchoolInfo","kIndepend2")
					Else
						arrIndepend(0) = 3
						arrIndepend(1) = obLanguage("SchoolInfo","kIndepend3")
					End If
				End If

				ReDim Preserve arrIndepend(9)

				arrIndepend(2) = 4
				arrIndepend(3) = obLanguage("SchoolInfo","kIndepend4")

				arrIndepend(4) = 5
				arrIndepend(5) = obLanguage("SchoolInfo","kIndepend5")

				arrIndepend(6) = 6
				arrIndepend(7) = obLanguage("SchoolInfo","kIndepend6")

				arrIndepend(8) = 7
				arrIndepend(9) = obLanguage("SchoolInfo","kIndepend7")

				OpenFormGroup obLanguage("SchoolInfo","kIndepend")
					rw ISelect("T00Independ", arrIndepend, 1)
				CloseFormGroup

				readonly = tmpRO
			End If

			DrawReadonlyRow "Головная организация", mainSchoolName

			
			Dim foundersNames
			foundersNames = objNSNET.GetFoundersNames(strSchoolID)

			Call DrawFoundersNames(obLanguage("ServAdmin","kFounders"), foundersNames)

			Dim emNames
			emNames = objNSNET.GetEmNames(strSchoolID)
			
			Call DrawFoundersNames(obLanguage("ServAdmin","kManagements"), emNames)
			
			If Not bCanEditExtraSchoolInfo Then
				DrawReadonlyRow obLanguage("SchoolInfo","kAuthority"), objSchoolInfo("AUTHORITYNAME")
			Else
				Call DrawSelectInfoRow(obLanguage("SchoolInfo","kAuthority"), objSchoolInfo("AUTHORITYID"), "AUTHORITYID", objAuthorities, "AUTHORITYID", "NAME", obLanguage("Common","kNo"), "dataChanged();")
			End If

			Dim statusOrganizationStr
			statusOrganizationStr = objNSNET.GetStatusStr(strSchoolID)
			DrawReadonlyRow obLanguage("SchoolInfo","kStatus"), statusOrganizationStr

			If CLng(strFunctionalityType) = kFuncType_Common Then
				DrawReadonlyRow obLanguage("SchoolInfo","kAreaType"), objSchoolLocationInfo.GetLocationTypeTitle()
				DrawReadonlyRow obLanguage("SchoolInfo","kProvinceCenterSchool"), IIF(objSchoolLocationInfo.InProvinceCenter, obLanguage("Common","kYes"), obLanguage("Common","kNo"))
				DrawReadonlyRow obLanguage("SchoolInfo","kProvinceSchoolInCity"), IIF(objSchoolLocationInfo.IsProvinceSchoolInCity, obLanguage("Common","kYes"), obLanguage("Common","kNo"))
			End If

			OpenFormGroup obLanguage("SchoolInfo","kAbout")
				rw ITA("T00about", 40, 4, "", " maxlength=""400""")
			CloseFormGroup

			comHelper.DateHelper.RestoreDigitYearFormat()%>
		</div><%
	ClosePanel

	If bAddSchool And bPfdoPortalIntegration Then

	OpenPanelEx "Публикация в Навигаторе", "pfdoPublishInfo", "school-info-accordion", True, "panel-success"%>
		<div class="print-block">
			<div class="form-group">
				<label class="control-label col-md-4 col-lg-3">Статус</label>
				<div class="col-md-8 col-lg-9">
					<div>
						<input type="text" class="form-control" id="PfdoPublishStatus" disabled />
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-md-4 col-lg-3">Дата публикации</label>
				<div class="col-md-8 col-lg-9">
					<div>
						<input type="text" class="form-control" id="PfdoNavDate" disabled value="<%=Date2Str(objSchoolInfo("PFDO_NAV_DATE"))%>&nbsp;<%=IIF(IsDull(objSchoolInfo("PFDO_NAV_DATE")), "", Time2Str_h_mm_ss(objSchoolInfo("PFDO_NAV_DATE")))%>" />
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="control-label col-md-4 col-lg-3">Доп. информация</label>
				<div class="col-md-8 col-lg-9">
					<div>
						<textarea disabled class="form-control" id="PfdoPublishExtendStatus" rows="3" cols="50" wrap="soft"></textarea>
					</div>
				</div>
			</div>

		</div><%
	ClosePanel

	End If
	
	
	%>