<%
Const kOpened = "1"
Const kClosed = "0"
Const kChecked = "1"
Const kUnchecked = "0"
Const kEnabled = "0"
Const kDisabled = "1"



%>            <tr><td bgcolor="#FFFFFF" VALIGN="TOP" NOWRAP>
				<%
					Response.Write soXML.transformNode(soXSL)
					If soXML.parseError.errorCode<>0 Then
						Response.Write soXML.parseError.reason
					End If 
				%>
				  </td>
			  </tr>
