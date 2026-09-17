<% ' © 2007-2016 IRTech. All rights reserved.
	Dim strParamTitle
	Dim strFioValue
	
	OpenPanelEx obLanguage("SchoolInfo", "kAdministration"), "managementInfo", "school-info-accordion", True, "panel-warning"%>
		<div class="print-block"><%
			strFioValue = GetParamValue("T00fio1")

			OpenFormGroup  IIF(CLng(strFunctionalityType) = kFuncType_PreSchool, obLanguage("SchoolInfo", "kFIODirectorPreSchool"), obLanguage("SchoolInfo", "kFIODirector"))
			If Not objStaffList.EOF Then
				%> 
				<input type="text" id="T00fio1" name="T00fio1" size="40" maxlength="250" value="<%=strFioValue%>" hidden>
			<%
				Dim strStaffListJson
				strStaffListJson = comHelper.DataSetAdapterHelper.ToJSON(objStaffList, Array("id", "text"), Array("USERID", "FIO"))
				objStaffList.MoveFirst

					%><div class="input-group <%=IIF(PERSON_DATA, "", "col-md-12 col-lg-12")%>">
						<select name="DIRECTORID" class="form-control" <%=IIF(readonly, "disabled", "")%>>
							<option value=""><%="<" & obLanguage("Movement", "kNotSelected") & ">"%></option>
							<%
							While Not objStaffList.EOF%>
								<option value="<%=objStaffList("USERID")%>" onchange="dataChanged();" <%=IIF(CLng(objStaffList("USERID")) = objSchoolInfo("DIRECTORID").Value, "selected", "")%>><%=DB2HTML(objStaffList("FIO"))%></option><%
								objStaffList.MoveNext
							Wend%>
						</select>
					<%=IIF(Not PERSON_DATA, "", "<span class=""input-group-btn""><button class=""btn btn-default"" onclick=""var directorId = document.forms['SchoolEdit'].DIRECTORID.value;if (directorId && directorId.substring(0, 2)!='-1') {DoSubmit(document.forms['SchoolEdit'], '/angular/school/userinfo/staff/' + directorId + '&back=SchoolForms/SchoolInfo.asp');} else {alert('" + obLanguage("SchoolInfo", "kNoUserInfoExists") + "');};"" type=""button"">Просмотр информации о пользователе</button></span>")%>
					</div><%
			Else
				%>	<input class="form-control" placeholder="<нет элементов для выбора>" title="<нет элементов для выбора>" disabled>
					<input type="hidden" name="DIRECTORID" value=""><%
			End If
			CloseFormGroup

			%>
			<script>
				var directorId =  "<%=objSchoolInfo("DIRECTORID").Value%>";
				var T00fio1 = "<%=(DB2Java(strFioValue))%>";
				var staffList = <%=strStaffListJson%>;
			</script>
			<%

			DrawSchoolInfoParam IIF(CLng(strFunctionalityType) = kFuncType_PreSchool, obLanguage("SchoolInfo", "kFIOPrincipalUVR_PreSchool"), obLanguage("SchoolInfo", "kFIOPrincipalUVR")), "T00fio2", 40, 250

			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				strParamTitle = obLanguage("SchoolInfo","kFIOPrincipalAHR_PreSchool")
			ElseIf CLng(strFunctionalityType) = kFuncType_Add Then
				strParamTitle = obLanguage("SchoolInfo","kFIOPrincipalAHR_Add")
			Else 
				strParamTitle = obLanguage("SchoolInfo","kFIOPrincipalAHC")
			End If

			DrawSchoolInfoParam strParamTitle, "T00fio3", 40, 250

			If CLng(strFunctionalityType) <> kFuncType_PreSchool And CLng(strFunctionalityType) <> kFuncType_Add Then
				DrawSchoolInfoParam IIf(CLng(strFunctionalityType) = kFuncType_Orphanage, obLanguage("SchoolInfo","kFIOPrincipalBZh"), obLanguage("SchoolInfo","kFIOPrincipalIT")), "T00fio4", 40, 250
			End If
			

			' органы коллегиального управления
			OpenFormGroup obLanguage("SchoolInfo","kCollegiateManagement")%>
				<select name="T00CollegiateManagement" class="view-value-and-text" multiple="multiple" <%=IIF(readonly, "disabled", "")%> ></select><%
			CloseFormGroup
			
			%>
		</div><%
	ClosePanel

	OpenPanelEx obLanguage("Common","kContactInfo"), "contactInfo", "school-info-accordion", True, "panel-default"%>
		<div class="print-block"><%

			tmpRO = readonly
			If readonly And bCanEditExtraSchoolInfo Then
				readonly = False
			End If

			DrawReadonlyRow obLanguage("Common","kRegion"), objSchoolInfo("STATEPROVINCENAME")
			DrawReadonlyRow obLanguage("Common","kCity"), objSchoolInfo("CITYNAME")
			strSchoolDist = objSchoolInfo("DISTRNAME")
			If strSchoolDist <> "" Then 
				DrawReadonlyRow obLanguage("Common","kDistrict"), strSchoolDist
			End If 
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kPostAddress"), "T00address", 80, 250
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kJuridicalAddress"), "T00juridicalAddress", 80, 250
			DrawSchoolInfoParam obLanguage("SchoolInfo","kPhones"), "T00phones", 40, 250
			DrawSchoolInfoParam obLanguage("SchoolInfo","kFax"), "T00fax", 40, 250
			DrawSchoolInfoParam obLanguage("SchoolInfo","kEMailAddress"), "T00email", 40, kMaxLengthEmail

			OpenFormGroup obLanguage("SchoolInfo","kWeb")
				rw ITWithClass("T00web", 40, 1000, Empty)
			CloseFormGroup

			OpenFormGroup obLanguage("SchoolInfo","kAddressesAdditionalBuildings")
				rw ITA("T00addressesAdditionalBuildings", 40, 4, "", " maxlength=""2000""")
			CloseFormGroup

			readonly = tmpRO%>
		</div><%
	ClosePanel

	OpenPanelEx obLanguage("Common","kOtherInfo"), "otherInfo", "school-info-accordion", True, "panel-default"%>
		<div class="print-block"><%
			If Request.QueryString("WT") <> "0" Then
				DrawSchoolInfoParam obLanguage("SchoolInfo","kINN"), "T00inn", 26, 12
				DrawSchoolInfoParam obLanguage("SchoolInfo","kKPP"), "T00kpp", 26, 9
				DrawSchoolInfoParam IIF(GetSafeID(objSchoolInfo("EOLEGALFORMID"), Null) = 5, obLanguage("SchoolInfo","kOGRNIndividual"), obLanguage("SchoolInfo","kOGRN")), "T00ogrn", 20, 15

				DrawSchoolInfoParam obLanguage("SchoolInfo","kIDOKPO"), "T00okpo", 26, 10

				DrawSchoolInfoParam obLanguage("SchoolInfo","kIDOKATO"), "T00okato", 26, 11
				DrawSchoolInfoParam obLanguage("SchoolInfo","kIDOKOGU"), "T00okogu", 26, 7
				DrawSchoolInfoParam obLanguage("SchoolInfo","kOKOPF"), "T00okopf", 26, 5



				'DrawSchoolInfoParam obLanguage("SchoolInfo","kOKFS"), "T00okfs", 26, 2

				OpenFormGroup obLanguage("SchoolInfo","kOKFS")%>
					<select name="T00okfs" multiple="multiple" <%=IIF(readonly, "disabled", "")%> ></select><%
				CloseFormGroup


				OpenFormGroup obLanguage("SchoolInfo","kOKVED")%>
					<select name="T00okved" class="view-value-and-text" multiple="multiple" <%=IIF(readonly, "disabled", "")%> ></select><%
				CloseFormGroup
			End If


			'DrawSchoolInfoParam obLanguage("SchoolInfo","kReferenceToCharter"), "T00ReferenceToCharter", 26, 50

			OpenFormGroup obLanguage("SchoolInfo", "kCharterOfOrg")
			%><div class="print-block" id="ustavFile"></div><%
			CloseFormGroup




			'DrawSchoolInfoParam obLanguage("SchoolInfo","kSocialPartnership"), "T00SocialPartnership", 26, 50

			OpenFormGroup obLanguage("SchoolInfo", "kSocialPartnership")
				rw ITA("T00SocialPartnership", 40, 4, "", "maxlength=""500""")
			CloseFormGroup

			OpenFormGroup obLanguage("SchoolInfo","kPresenceOfPool")
				rw ISelect("T00PresenceOfPool", Array(1, "Да", 0, "Нет"), 1)
			CloseFormGroup


			OpenFormGroup obLanguage("SchoolInfo","kBarrierFreeEnvironment")
				rw ISelect("T00BarrierFreeEnvironment", Array(1, "Да", 0, "Нет"), 1)
			CloseFormGroup





			OpenFormGroup obLanguage("SchoolInfo","kVideoSurveillance")
				rw ISelect("T00VideoSurveillance", Array(1, "Да", 0, "Нет"), 1)
			CloseFormGroup



			DrawSchoolInfoParam obLanguage("SchoolInfo","maxOccupancy"), "T00maxOccupancy", 26, 9
			DrawSchoolInfoParam obLanguage("SchoolInfo","maxOccupancyOnShift"), "T00maxOccupancyOnShift", 26, 9


			OpenFormGroup obLanguage("SchoolInfo","kSpecialization")
				rw ITA("T00spec", 40, 4, "", "")
			CloseFormGroup

			OpenFormGroup obLanguage("SchoolInfo", "kEducationProcessStructure")
				rw ITA("T00EducationProcessStructure", 40, 4, "", "maxlength=""500""")
			CloseFormGroup


			OpenFormGroup obLanguage("SchoolInfo", "kTimetable")
				rw ITA("T00Timetable", 40, 4, "", "maxlength=""500""")
			CloseFormGroup

			OpenFormGroup obLanguage("SchoolInfo", "kConditionsEducation")
				rw ITA("T00ConditionsEducation", 40, 4, "", "maxlength=""500""")
			CloseFormGroup

			OpenFormGroup obLanguage("SchoolInfo", "kProjectTypeForSchool")%>
				<select name="T00ProjectTypeForSchool" multiple="multiple" <%=IIF(readonly, "disabled", "")%> ></select><%
			CloseFormGroup
			%>
		</div><%
	ClosePanel

	OpenPanelEx obLanguage("SchoolInfo", "kBankDetails"), "bankDetails", "school-info-accordion", True, "panel-default"%>
		<div class="print-block"><%
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kBankName"), "T00bankName", 26,50
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kBankScore"), "T00bankScore", 26, 20
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kCorrScore"), "T00corrScore", 26, 20
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kPersonalAccount"), "T00personalAccount", 26, 200
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kBIK"), "T00bik", 26, 9
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kBankKpp"), "T00bankKpp", 26, 9
			 
				
			OpenFormGroup obLanguage("SchoolInfo", "kNote")
				rw ITA("T00bankNote", 40, 4, "", "maxlength=""500""")
			CloseFormGroup
			%>
		</div><%
	ClosePanel

	If CLng(strFunctionalityType) = kFuncType_Common And obContext.ServerSettings.SystemSettings.ModuleFoodPay Then
		OpenPanelEx obLanguage("SchoolInfo", "kFoodPayDetails"), "foodPayDetails", "school-info-accordion", True, "panel-default"%>
			<div class="print-block"><%
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kOrgName"), "T00FoodPayOrgName", 26,200
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kINN"), "T00FoodPayInn", 26,12
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kKPP"), "T00FoodPayKpp", 26,50
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kBankName"), "T00FoodPayBankName", 26,50
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kFoodPayScore"), "T00FoodPayBankScore", 26, 20
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kCorrScore"), "T00FoodPayBankCorrScore", 26, 20
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kBIK"), "T00FoodPayBankBik", 26, 9
				DrawSchoolInfoParam obLanguage("SchoolInfo", "kBankKpp"), "T00FoodPayBankKpp", 26, 9
				%>
			</div><%
		ClosePanel
	End If

	OpenPanelEx obLanguage("SchoolInfo", "kInternetConnectionInfo"), "internetConnectionInfo", "school-info-accordion", True, "panel-default"%>
		<div class="print-block"><%
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kComputersCount"), "T00computersCount", 26, 400
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kContentFilteringName"), "T00contentFilteringName", 26, 400
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kInternetSpeedUnderContract"), "T00internetSpeedUnderContract", 26, 400
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kInternetSpeedInFact"), "T00internetSpeedInFact", 26, 400
			DrawSchoolInfoParam obLanguage("SchoolInfo", "kInternetProviderName"), "T00internetProviderName", 26, 400
			
			

			OpenFormGroup obLanguage("SchoolInfo","kInternetAccessTechnology")%>
				<select name="T00internetAccessTechnology" multiple="multiple" <%=IIF(readonly, "disabled", "")%> ></select><%
			 CloseFormGroup
			
			 

			
			%>

		</div><%
	ClosePanel%>

	<%
	OpenPanelEx obLanguage("SchoolInfo", "kPhotos"), "fileAttachments", "school-info-accordion", True, "panel-default"
		%>
		<div class="print-block" id="attachFiles"></div>
		<%
	ClosePanel
	%>