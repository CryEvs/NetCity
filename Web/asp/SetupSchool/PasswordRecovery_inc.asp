<% ' © 2013 IRTech. All rights reserved.
Dim objQuestion

Sub DrawQuestionsSelect()
	Set objQuestion = new Questions
	OpenFormGroup obLanguage("Common","kChoseControlQuestion")
	Call DrawSelectArr(objQuestion.DefaultQuestionList, "Questions", 0, null, "QuestionChanged()")
	CloseFormGroup
End Sub

Sub DrawCustomQuestionInput()
	Call DrawInputRow( obLanguage("SetupSchool","kControlQuestion"), "", "RecoveryQuestion", "text", 36, 50, "") 
End Sub

Sub DrawAnswerInput()
	Call DrawInputRowEx( obLanguage("Messages","kAnswerToQuestionForPswRecovery"), "", "RecoveryAnswer", "password", 36, 50, DB2HTML_BR(obLanguage("Messages","kComentToAnswerToQuestionForPswRecovery")), "autofocus")
End Sub

Sub DrawPasswordRecoveryScripts()
		Dim objQuestions, isContains
		Set objQuestions = New Questions
		%><script>
			$(document).ready(function () {
		<%
		IF IsDull(strQuestion) THEN
			%>
				$("[name=RecoveryQuestion]").parent().parent().hide();
				});
			</script>
			<%
			EXIT SUB
		END IF
		isContains = objQuestions.ContainsValue(strQuestion)
		%>
			$("[name='RecoveryAnswer']").val("<%=strAnswer %>");
		<%
		IF isContains THEN 
			%>
					$("[name=RecoveryQuestion]").parent().parent().hide();
					$("select[name='Questions']>option:contains('<%=strQuestion %>')").prop("selected", true);
			<%
		ELSE
			%>
					$("[name='RecoveryQuestion']").val('<%=strQuestion %>');
					$("select[name='Questions']>option:contains('<%=obLanguage("Login","AskYouOwnQuestion") %>')").prop("selected", true);
			<%
		END IF
		%>
				});
			</script>
		<%
End Sub

Class Questions
	Public DefaultQuestionList

	Private Sub Class_Initialize()
		DefaultQuestionList = GetControlQuestionList()
	End Sub

	Public Function GetQuestionsKeys()
		Dim i,questionsKeys,dimension
		dimension = Ubound(DefaultQuestionList,2)
		Redim questionsKeys(dimension)

		For i =0 To dimension
			questionsKeys(i) = DefaultQuestionList(0,i)
		Next
		GetQuestionsKeys = questionsKeys
	End Function

	
	Public Function GetQuestionsValues()
		Dim i,questionsValues,dimension
		dimension = Ubound(DefaultQuestionList,2)
		Redim questionsValues(dimension)
		For i =0 To dimension
			questionsValues(i) = DefaultQuestionList(1,i)
		Next
		GetQuestionsValues = questionsValues
	End function

	Public Function ContainsKey(key)
		Dim isContains, questionsKeys
		questionsKeys = GetQuestionsKeys()
		isContains = Filter(questionsKeys, key)
		IF IsDull(isContains) THEN 
			ContainsKey = False
		ELSE
			ContainsKey = True
		END IF
	End Function

	Public Function ContainsValue(value)
		Dim isContains, questionsValues
		questionsValues = GetQuestionsValues()
		isContains = Filter(questionsValues, value)
		IF UBound(isContains) = -1 THEN 
			ContainsValue = False
		ELSE
			ContainsValue = True
		END IF
	End Function

	Private Function GetControlQuestionList()
		Dim questions(1,8)

		questions(0,0) = 0
		questions(0,1) = 1
		questions(0,2) = 2
		questions(0,3) = 3
		questions(0,4) = 4
		questions(0,5) = 5
		questions(0,6) = 6
		questions(0,7) = 7
		questions(0,8) = 8

		questions(1,0) = obLanguage("Common","kUnselected")
		questions(1,1) = obLanguage("Login","YourMotherMaidenName")
		questions(1,2) = obLanguage("Login","PetName")
		questions(1,3) = obLanguage("Login","FavoriteDish")
		questions(1,4) = obLanguage("Login","ParentsZip")
		questions(1,5) = obLanguage("Login","GrandmaBirtday")
		questions(1,6) = obLanguage("Login","PassportNumber")
		questions(1,7) = obLanguage("Login","FavoritePhoneNumber")
		questions(1,8) = obLanguage("Login","AskYouOwnQuestion")

		GetControlQuestionList = questions
	End Function
End Class
%>
