<% ' © 2007-2012 IRTech. All rights reserved.
%>
<table class="print-block" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td>
<table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center">
            <br>
            <br>
            <b>
            Раздел 12. Распределение обучающихся с ограниченными возможностями здоровья и инвалидов
            по возрасту
            </b>
            <br>
            <br>
            <div align="right">
                Код по ОКЕИ: человек - 792</div>
        </td>
    </tr>
    <tr>
        <td>
            <table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="2"
                width="100%">
                <tr height="26" style='height: 20.1pt' align="center">
                    <td rowspan="3" height="106" width="330" style='height: 80.1pt; width: 247pt'>
                        Наименование</td>
                    <td rowspan="3" align='center'>
                        №<br>
                        строки</td>
                    <td rowspan="3" width="106" style='width: 80pt'>
                        Всего обучаю-щихся (сумма граф 4-7)</td>
                    <td colspan="4" width="424" style='width: 320pt'>
                        Из них в возрасте (число полных лет на 1 января <%=strShoolYearEnd%> года)</td>
                </tr>
                <tr height="40" style='height: 30.0pt' align="center">
                    <td width="106" style='width: 80pt'>
                        15 лет и моложе</td>
                    <td width="106" style='width: 80pt'>
                        16-17 лет</td>
                    <td width="106" style='width: 80pt'>
                        18-29 лет</td>
                    <td width="106" style='width: 80pt'>
                        30 лет и старше</td>
                </tr>
                <tr height="40" style='height: 30.0pt' align="center">
                    <td width="106" style='width: 80pt'>
                        <%=(strShoolYearEnd-16)%> и после-дующие годы</td>
                    <td width="106" style='width: 80pt'>
                        <%=(strShoolYearEnd-17)%>-<%=(strShoolYearEnd-18)%> г.г.</td>
                    <td width="106" style='width: 80pt'>
                        <%=(strShoolYearEnd-19)%>-<%=(strShoolYearEnd-30)%>  гг.</td>
                    <td width="106" style='width: 80pt'>
                        <%=(strShoolYearEnd-31)%> год и ранее</td>
                </tr>
                <tr height="18" style='height: 13.2pt' align="center">
                    <td height="18" width="330" style='height: 13.2pt; width: 247pt'>
                        1</td>
                    <td align='center'>
                        2</td>
                    <td width="106" style='width: 80pt'>
                        3</td>
                    <td width="106" style='width: 80pt'>
                        4</td>
                    <td width="106" style='width: 80pt'>
                        5</td>
                    <td width="106" style='width: 80pt'>
                        6</td>
                    <td width="106" style='width: 80pt'>
                        7</td>
                </tr>
                <tr height="35" style='height: 26.4pt' align="center">
                    <td align="left">
                        Из общей численности обучающихся:<br>
                         с ограниченными возможностями здоровья</td>
                    <td align='center'>
                        01</td>
                    <%Call DrawInputsWithTotals(1, 3, 7, 12, Array(3)) %>
                </tr>
                <tr height="21" style='height: 15.6pt' align="center">
                    <td align="left">
                         инвалидов</td>
                    <td align='center'>
                        02</td>
                    <%Call DrawInputsWithTotals(2, 3, 3, 12, Array(3)) %><td>X</td><td>X</td>
					<%Call DrawInputs(12, 2, 6, 7) %>
                </tr>
                <tr height="21" style='height: 15.6pt' align="center">
                    <td align="left">
                        детей-инвалидов</td>
                    <td align='center'>
                        03</td>
                    <%Call DrawInputsWithTotals(3, 3, 5, 12, Array(3)) %><td>X</td><td>X</td>
                </tr>
            </table>
        </td>
    </tr>
	<tr><td>
	
	</td></tr>
</table></td></tr><tr><td>
<br>
<TABLE BORDER=0 CELLPADDING=5>
	<TR>
		<TD NOWRAP>Должностное лицо, ответственное за<BR>предоставление статистической информации<BR>(лицо, уполномоченное предоставлять<BR>
		статистическую информацию от имени<BR>юридического лица)
		<BR><BR></TD>
		<TD ALIGN=CENTER>_______________________<BR>(должность)</TD>
		<TD ALIGN=CENTER>_______________________<BR>(Ф.И.О.)</TD>
		<TD ALIGN=CENTER>_________________<BR>(подпись)</TD>
	</TR>
	<TR>
		<TD>&nbsp;</TD>
		<TD ALIGN=CENTER>_______________________<BR>(номер контактного<BR>телефона)</TD>
		<TD ALIGN=CENTER COLSPAN=2>"____" __________________ <%=strShoolYearStart%> год<BR>(дата составления<br> документа)</TD>
	</TR>
	</TABLE><br/></td></tr>
</table>