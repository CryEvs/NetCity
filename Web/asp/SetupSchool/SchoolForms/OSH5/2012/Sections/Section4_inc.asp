<% ' © 2007-2008 IRTech. All rights reserved.
%>
<!-- таб.IV -->
<table class="print-block" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">
<b>Раздел 4. Сведения об обучающихся, окончивших образовательное учреждение или переведенных
    в следующий класс в
    <%=strShoolYearStart%> году</b> 
<br>
<br>
<div align="right">
    Код по ОКЕИ: человек - 792</div></td></tr><tr><td>
<table class="ThinTable" align="left" border="1" cellspacing="0" cellpadding="2"
    width="100%">
    <tr align="center" valign="middle">
        <td>
            Наименование
        </td>
        <td>
            №<br>
            строки
        </td>
        <td>
            4-5<br>
            классы
        </td>
        <%dim i
		for i = 6 to 16
			response.write("<td>" & i & "<br>класс</td>")
		next%>
    </tr>
    <tr align="center" valign="middle">
        <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
        <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
    </tr>
    <tr align="center" valign="middle">
        <td align="left">
            Численность обучающихся, окончивших данный класс и переведенных в следующий<br>
            класс весной или осенью
        </td>
        <td>
            01
        </td>
        <%
		for i = 3 to 14
			response.write("<td>" & IT(GetOshFieldName(4, 1, i), 4, 5 ) & "</td>")
		next%>
    </tr>
</table></td></tr><tr><td>
<!-- End Of таб.IV -->
<table align="left" cellpadding="2" width="48%">
    <tr>
        <td align="left">
            <br>
            <br>
            Численность обучающихся, получивших аттестат об основном общем образовании (чел)
        </td>
        <td align="center">
            (02)
        </td>
        <td align="center">
            <%=IT("T0402", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            Кроме того, численность обучающихся, получивших аттестат об основном общем
            <br>
            образовании в порядке экстерната или из выпуска прошлых лет (чел)
        </td>
        <td align="center">
            (03)
        </td>
        <td align="center">
            <%=IT("T0403", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            Численность обучающихся, получивших аттестат о среднем (полном) общем<br>
            образовании (чел)
        </td>
        <td align="center">
            (04)
        </td>
        <td align="center">
            <%=IT("T0404", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            <br>
            Кроме того, численность обучающихся, получивших аттестат о среднем (полном)<br>
            общем образовании в порядке экстерната или из выпуска прошлых лет (чел)
        </td>
        <td align="center">
            (05)
        </td>
        <td align="center">
            <%=IT("T0405", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            Кроме того, численность обучающихся выпускного класса, не получивших аттестат о<br>
            среднем (полном) общем образовании (чел)
        </td>
        <td align="center">
            (06)
        </td>
        <td align="center">
            <%=IT("T0406", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            Численность выпускников, допущенных к выпускным экзаменам (чел)
        </td>
        <td align="center">
            (07)
        </td>
        <td align="center">
            <%=IT("T0407", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;из них (из стр.07) участвовавшие в едином государственном экзамене (ЕГЭ) (чел)
        </td>
        <td align="center">
            (08)
        </td>
        <td align="center">
            <%=IT("T0408", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;&nbsp;из них (из стр.08)<br>
            &nbsp;&nbsp;&nbsp;численность выпускников, участвовавших в ЕГЭ по русскому языку (чел)
        </td>
        <td align="center">
            (09)
        </td>
        <td align="center">
            <%=IT("T0409", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.09) сдавшие ЕГЭ (чел)
        </td>
        <td align="center">
            (10)
        </td>
        <td align="center">
            <%=IT("T0410", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;&nbsp;&nbsp;численность выпускников, участвовавших в ЕГЭ по математике (чел)
        </td>
        <td align="center">
            (11)
        </td>
        <td align="center">
            <%=IT("T0411", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;&nbsp;&nbsp;&nbsp;из них (из стр.11) сдавшие ЕГЭ (чел)
        </td>
        <td align="center">
            (12)
        </td>
        <td align="center">
            <%=IT("T0412", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            Из численности обучающихся, получивших аттестат о среднем (полном) общем<br>
            образовании (стр.04 + стр.05), награждены:
            <br>
            &nbsp;золотой медалью "За особые успехи в учении" (чел)
        </td>
        <td align="center">
            (13)
        </td>
        <td align="center">
            <%=IT("T0413", 4, 5 )%>
        </td>
    </tr>
    <tr>
        <td align="left">
            &nbsp;серебряной медалью "За особые успехи в учении" (чел)
        </td>
        <td align="center">
            (14)
        </td>
        <td align="center">
            <%=IT("T0414", 4, 5 )%>
        </td>
    </tr>
</table></td></tr><tr><td>
<br></td></tr>
