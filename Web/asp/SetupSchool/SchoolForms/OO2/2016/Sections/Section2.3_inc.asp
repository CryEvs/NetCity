<% ' © 2007-2017 IRTech. All rights reserved. %>

<table class="print-block" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
			<div align="center"><b>2.3. Максимальная скорость доступа к Интернету</b></div>
			<div align="center">(заполняют организации, имеющие доступ к Интернету (подраздел 2.1 стр. 05 гр. 3>0))</div>
			<br>

			<table class="ThinTable" align="center">
				<tr align="middle" valign="center">
					<td align="left">Укажите по каждой строке  графы 3 код, соответствующий следующим интервалам максимальной скорости доступа к Интернету:</td>
				</tr>
				<tr>
					<td>
						<table class="ThinTable">
							<tr align="middle" valign="center">
								<td align="left">ниже 256 Кбит/сек – код 1;</td>
								<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
								<td align="left">30.1-100.0 Мбит/сек – код 6;</td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">256 -511 Кбит/сек – код 2;</td>
								<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
								<td align="left">выше 100 Мбит/сек – код 7;</td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">512 Кбит/сек – 999 Кбит /сек – код 3;</td>
								<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
								<td align="left">не используется – код 0</td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">1.0-1.9 Мбит/сек – код 4;</td>
								<td></td>
								<td></td>
							</tr>
							<tr align="middle" valign="center">
								<td align="left">2.0-30.0 Мбит/сек – код 5;</td>
								<td></td>
								<td></td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<br>

			<table class="ThinTable" align="left" border=1 cellpadding=3 cellspacing=0 width="100%">
				<tr align="middle" valign="center">
					<td>Наименование показателя</td>
					<td>№ строки</td>
					<td>Код</td>
				</tr>
				<tr align="middle" valign="center"><td>1</td><td>2</td><td>3</td></tr>
				
				<tr align="middle" valign="center">
					<td align="left">&nbsp;Максимальная скорость доступа к  Интернету </td>
					<td>01</td>
					<td><%=IT("T02.30103", 4, 5)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						в том числе по типам доступа:<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						максимальная скорость фиксированного проводного доступа к Интернету  <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(модемное подключение через коммутируемую телефонную линию,  ISDN связь,  цифровая абонентская линия (технология  xDSL и т.д.), другая <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						кабельная связь (включая выделенные линии, оптоволокно и др.)
					</td>
					<td>02</td>
					<td><%=IT("T02.30203", 4, 5)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						максимальная скорость фиксированного беспроводного доступа к Интернету<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(спутниковая связь, фиксированная беспроводная связь (например, Wi-Fi, WiMAX)
					</td>
					<td>03</td>
					<td><%=IT("T02.30303", 4, 5)%></td>
				</tr>
				<tr align="middle" valign="center">
					<td align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						максимальная скорость мобильного доступа к Интернету <br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(через любое устройство: портативный компьютер или мобильный сотовый телефон и т. д.)
					</td>
					<td>04</td>
					<td><%=IT("T02.30403", 4, 5)%></td>
				</tr>
			</table>
		</td>
	</tr>
</table>