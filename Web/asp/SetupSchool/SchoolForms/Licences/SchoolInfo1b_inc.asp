<% ' © 2007-2015 IRTech. All rights reserved.

	

	OpenPanelEx obLanguage("SchoolInfo","kLicense"), "license", "", False, "panel-info"
		DrawSchoolInfoParam obLanguage("SchoolInfo","kNumberBlankLic"), "TnumberLic", 40, 50
		DrawSchoolInfoParam obLanguage("SchoolInfo","kRegNumberLic"), "TregNumberLic", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateLic"), "TdateLic", 40, 250

		DrawSchoolInfoParam obLanguage("SchoolInfo","kLicenseOrgan"), "T00LicenseOrganName", 40, 250

		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateCloseActionLic"), "TdateCloseActionLic", 40, 250

		OpenFormGroup obLanguage("SchoolInfo","kDecisionOnLicense")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00decisionLicenseOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00decisionLicenseDate", 40, 50
		CloseFormGroup

	ClosePanel

	OpenPanelEx obLanguage("SchoolInfo","kLicenseAES"), "licenseAES", "", True, "panel-info"
		DrawSchoolInfoParam obLanguage("SchoolInfo","kNumberBlankAESLic"), "TnumberLicAES", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kRegNumberLic"), "TregNumberLicAES", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateLic"), "TdateLicAES", 40, 250

		DrawSchoolInfoParam obLanguage("SchoolInfo","kLicenseOrgan"), "T00LicenseAESOrganName", 40, 250

		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateCloseActionLic"), "TdateCloseLicAES", 40, 250

		OpenFormGroup obLanguage("SchoolInfo","kDecisionOnLicense")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00decisionLicenseAESOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00decisionLicenseAESDate", 40, 50
		CloseFormGroup

	ClosePanel

	OpenPanelEx obLanguage("SchoolInfo","kCertificateAccreditation"), "certifAccreditation", "", True, "panel-info"
		DrawSchoolInfoParam obLanguage("SchoolInfo","kNumberAccreditationBlank"), "TnumberAccreditation", 40, 50
		DrawSchoolInfoParam obLanguage("SchoolInfo","kRegNumberCertificateAccreditation"), "TregNumAccreditation", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateCertificateAccreditation"), "TdateAccreditation", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kDateCloseActionCertificateAccreditation"), "TdateCloseAccred", 40, 250

		DrawSchoolInfoParam obLanguage("SchoolInfo","kAccreditationOrgan"), "T00accreditationOrgan", 40, 250
		DrawSchoolInfoParam obLanguage("SchoolInfo","kStatus"), "T00accreditationStatus", 40, 250

		
		OpenFormGroup obLanguage("SchoolInfo","kRenewCertificate")
			rw ISelect("T00accreditationRenewCertificate", Array(1, obLanguage("Common","kYes"), 2, obLanguage("Common","kNo")), 1)
		CloseFormGroup
			
		
		OpenFormGroup obLanguage("SchoolInfo","kDecisionAccreditation")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00decisionAccreditaionOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00decisionAccreditationDate", 40, 50
		CloseFormGroup


		OpenFormGroup obLanguage("SchoolInfo","ReIssuanceCertificates")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00accreditationRenewCertificateOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00accreditationRenewCertificateDate", 40, 50
			DrawSchoolInfoParam obLanguage("SchoolInfo","kRegistrationNumber"), "T00accreditationRenewCertificateNumber", 40, 50
		CloseFormGroup

		OpenFormGroup obLanguage("SchoolInfo","kSuspension")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00accreditationSuspensionOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00accreditationSuspensionDate", 40, 50
		CloseFormGroup

		OpenFormGroup obLanguage("SchoolInfo","kRenewal")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00accreditationRenewalOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00accreditationRenewalDate", 40, 50
		CloseFormGroup

		OpenFormGroup obLanguage("SchoolInfo","kDeprivation")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00accreditationDeprivationOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00accreditationDeprivatoinDate", 40, 50
		CloseFormGroup

		OpenFormGroup obLanguage("SchoolInfo","kStopAction")
			DrawSchoolInfoParam obLanguage("SchoolInfo","kOrder"), "T00accreditationStopActionOrder", 40, 50
			DrawSchoolInfoParam obLanguage("Common","kDate"), "T00accreditationStopActionDate", 40, 50
		CloseFormGroup
		
	ClosePanel
	
	%>