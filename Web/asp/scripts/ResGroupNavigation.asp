<% ' © 2007-2008 IRTech. All rights reserved.
Dim nMaxLen_GroupName
Dim bIsForService

Sub scriptResGroupNavigation()%>
	<script><!--
		function canSubmit() {
			var el = document.GroupEdit.GRNAME;
			el.value = trimStr(el.value);
			if( el.value == "" ){
				alert(language.Generic.ResourceGroups.kErrEmptyGroupName);
				el.focus(); return false;
			}
			<%If nItemCount > 1 Then%>
				prepareItemPosition();
			<%End If%>
			return true;
		}

		<%If nItemCount > 1 Then%>
			function createOption(name, value, shift)
			{
			  var i, arr, opt;

			  arr = value.split(',');
			  arr[1] = new Number(arr[1]) + shift;

			  name = trimStr(name);
			  for(i = 0; i < arr[1]; i++)
				name = '\xA0\xA0' + name;

			  return new Option(name, arr.join(','));
			}

			function moveItems(list, from, to, count, shift)
			{
			  var buf = new Array(), arr;
			  var i, gap_start, gap_size;

			  for(i = 0; i < count; i++)
			  {
				buf[2*i] = list[from+i].text;
				buf[2*i+1] = list[from+i].value;
			  }

			  if( to == from )
			  {
				for(i = 0; i < count; i++)
				{
				  list[from+i] = createOption(buf[2*i], buf[2*i+1], shift);
				}
			  }
			  else if( to > from )
			  {
				gap_start = from + count;
				gap_size = to - gap_start;
				for(i = 0; i < gap_size; i++)
				{
				  list[from+i] = createOption(list[gap_start+i].text, list[gap_start+i].value, 0);
				}
				for(i = 0; i < count; i++)
				{
				  list[to-count+i] = createOption(buf[2*i], buf[2*i+1], shift);
				}
			  }
			  else
			  {
				gap_start = to;
				gap_size = from - gap_start;
				for(i = 0; i < gap_size; i++)
				{
				  list[from+count-1-i] = createOption(list[from-1-i].text, list[from-1-i].value, 0);
				}
				for(i = 0; i < count; i++)
				{
				  list[to+i] = createOption(buf[2*i], buf[2*i+1], shift);
				}
			  }
			}

			function getItemID(value) {	return value.split(',')[0]; }
			function getItemLevel(value) { return parseInt(value.split(',')[1]); }

			function getItemPos(list, nID)
			{
			  for( var i = 0; i < list.length; i++ )
				if( getItemID(list[i].value) == nID  )
				  return i;
			  return -1;
			}

			function getBranchSize(list, nPos)
			{
				var level = getItemLevel(list[nPos].value);
			  for( var i = nPos + 1; i < list.length; i++ )
				if( getItemLevel(list[i].value) <= level  )
				  return (i-nPos);
			  return list.length-nPos;
			}

			function movePrev()
			{
			  var list = document.GroupEdit.GroupList.options, i, arr, nOldPos, nNewPos, nLevel, nBranchSize;

			  nOldPos = getItemPos(list, <%=strGroupID%>);
			  if( nOldPos <= 0 )  return;

			  nLevel = getItemLevel(list[nOldPos].value);
			  for( nNewPos = nOldPos - 1; nNewPos >= 0; nNewPos-- )
			  {
				if( getItemLevel(list[nNewPos].value) <= nLevel ) break;
			  }

			  if( getItemLevel(list[nNewPos].value) < nLevel ) nNewPos++;

			  if( nOldPos == nNewPos ) return;

			  nBranchSize = getBranchSize(list, nOldPos);

			  moveItems(list, nOldPos, nNewPos, nBranchSize, 0);
			  document.GroupEdit.GroupList.selectedIndex = nNewPos;
			  dataChanged();
			}

			function moveNext()
			{
			  var list = document.GroupEdit.GroupList.options, i, nOldPos, nNewPos, nLevel, nBranchSize;

			  nOldPos = getItemPos(list, <%=strGroupID%>);
			  if( nOldPos < 0 || nOldPos == list.length - 1 )  return;

			  nLevel = getItemLevel(list[nOldPos].value);
			  for( nNewPos = nOldPos + 1; nNewPos < list.length; nNewPos++ )
			  {
				if( getItemLevel(list[nNewPos].value) <= nLevel ) break;
			  }

			  if( nNewPos < list.length && getItemLevel(list[nNewPos].value) == nLevel )
				nNewPos += getBranchSize(list, nNewPos);

			  nBranchSize = getBranchSize(list, nOldPos);
			  if( nOldPos + nBranchSize == nNewPos ) return;

			  moveItems(list, nOldPos, nNewPos, nBranchSize, 0);
			  document.GroupEdit.GroupList.selectedIndex = nNewPos - nBranchSize;
			  dataChanged();
			}

			function moveUp()
			{
			  var list = document.GroupEdit.GroupList.options, i, nOldPos, nNewPos, nLevel, nBranchSize;

			  nOldPos = getItemPos(list, <%=strGroupID%>);
			  if( nOldPos < 0 || nOldPos == 0 )  return;

			  nLevel = getItemLevel(list[nOldPos].value);
			  if( nLevel == 0 )  return;

			  for( nNewPos = nOldPos + 1; nNewPos < list.length; nNewPos++ )
			  {
				if( getItemLevel(list[nNewPos].value) < nLevel )  break;
			  }

			  nBranchSize = getBranchSize(list, nOldPos);

			  moveItems(list, nOldPos, nNewPos, nBranchSize, -1);
			  document.GroupEdit.GroupList.selectedIndex = nNewPos - nBranchSize;
			  dataChanged();
			}

			function moveDown()
			{
			  var list = document.GroupEdit.GroupList.options, i, arr, nOldPos, nNewPos, nLevel, nBranchSize;

			  nOldPos = getItemPos(list, <%=strGroupID%>);
			  if( nOldPos <= 0 )  return;

			  nLevel = getItemLevel(list[nOldPos].value);
			  for( nNewPos = nOldPos - 1; nNewPos >= 0; nNewPos-- )
			  {
				if( getItemLevel(list[nNewPos].value) <= nLevel )  break;
			  }
			  if( nNewPos == nOldPos - 1 && getItemLevel(list[nNewPos].value) == nLevel - 1 )
				return;

			  nNewPos++;

			  nBranchSize = getBranchSize(list, nOldPos);

			  moveItems(list, nOldPos, nOldPos, nBranchSize, 1);
			  document.GroupEdit.GroupList.selectedIndex = nOldPos;
			  dataChanged();
			}

			function prepareItemPosition() {
				var form = document.GroupEdit;
				var list = form.GroupList.options;
				var nPos, i, nLevel, nLevel2, nNum = 1;

				nPos = getItemPos(list, <%=strGroupID%>);

				nLevel = getItemLevel(list[nPos].value);
				for(i = nPos - 1; i >= 0; i--) {
					nLevel2 = getItemLevel(list[i].value);

					if( nLevel2 < nLevel )
						break;
					else if( nLevel2 == nLevel )
						nNum++;
				}

				form.ParentGRID.value = (i >= 0) ? getItemID(list[i].value) : 0;
				form.GRNum.value = nNum;
			}
		<%End If%>

		function restoreSelection() {
			var list = document.GroupEdit.GroupList;
			list.selectedIndex = getItemPos(list.options, <%=strGroupID%>);
		}
	//--></script><%
End Sub

Sub onDrawPage()
	Dim i, strID

	If IsEmpty(bIsForService) Then bIsForService = False%>

	<FORM NAME="GroupEdit" METHOD="post" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PGRID",strGroupID, "ParentGRID",0, "GRNum",1, "ACT",strAct))%>
		<%If bIsForService Then rw "<INPUT TYPE=""hidden"" NAME=""GRNAME"" VALUE=""" & DB2Value(strGroupName) & """>"

		OpenBtnGroup
			Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
		CloseBtnGroup%>

		<div class="row">
			<div class="col-lg-6 col-md-8"><%
				If bIsForService Then
					Call DrawReadonlyRow(obLanguage("ResourceGroups","kGroupName"), strGroupName)
				Else
					Call DrawInputRow(obLanguage("ResourceGroups","kGroupName"), strGroupName, "GRNAME", "text", 45, nMaxLen_GroupName, "")
				End If%>
				
				<%If nItemCount > 1 Then
					OpenPanel obLanguage("ResourceGroups","kGroupPosition"), "groups", False%>
						<table class="table table-nobordered">
							<tr>
								<td>
									<select style="overflow-y: auto;" NAME="GroupList" SIZE="<%=nItemCount%>" onChange="restoreSelection()" class="form-control" disabled><%
										objRsGroups.MoveFirst

										While Not objRsGroups.EOF
											strID = CStr(objRsGroups("GROUPID"))
											Response.Write "<OPTION VALUE=""" & DB2Value(strID) & "," & CStr(objRsGroups("GROUPLEVEL")) & """"
											If strID = strGroupID Then Response.Write " SELECTED"
											Response.Write ">"
											For i = 1 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
											Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME")) & "</OPTION>"
											If strGroupID = "0" And strID = strParentGroupID Then
												Response.Write "<OPTION VALUE=""0," & (CLng(objRsGroups("GROUPLEVEL")) + 1) & """ SELECTED>"
												For i = 1 To CLng(objRsGroups("GROUPLEVEL")) + 1 : Response.Write "&nbsp;&nbsp;" : Next
												Response.Write obLanguage("ResourceGroups","kNewGroup") & "</OPTION>"
											End If

											objRsGroups.MoveNext
										WEnd%>
									</select>
								</td>
								<td>
									<table>
										<tr>
											<td>&nbsp;</td>
											<td align="center">
												<%Call ArrowUpButton("movePrev()", obLanguage("ResourceGroups","kShiftUp"))%>
											</td>
											<td>&nbsp;</td>
										</tr>
										<tr>
											<td><%
												If bIsForService Then%>&nbsp;<%Else
													Call ArrowLeftButton("moveUp()", obLanguage("ResourceGroups","kOneLevelUp"))
												End If%>
											</td>
											<td>&nbsp;</td>
											<td><%
												If bIsForService Then%>&nbsp;<%Else
													Call ArrowRightButton("moveDown()", obLanguage("ResourceGroups","kOneLevelDown"))
												End If%>
											</td>
										</tr>
										<tr>
											<td>&nbsp;</td>
											<td><%Call ArrowDownButton("moveNext()", obLanguage("ResourceGroups","kShiftDown"))%></td>
											<td>&nbsp;</td>
										</tr>
									</table>
								</td>
							</tr>
						</table><%
					ClosePanel
				End If%>
			</div>
		</div>
	</FORM><%
End Sub%>