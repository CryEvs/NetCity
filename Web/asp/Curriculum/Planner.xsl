<?xml version="1.0" encoding='windows-1251'?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<xsl:variable name="ONE_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="TWO_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="THREE_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:for-each select="PlannerTree/Plan">
			<xsl:sort select="PlanName" data-type="text"/>
			<p>
				<xsl:attribute name="style">display: inline;</xsl:attribute>
				<xsl:attribute name="NAME">pl_p_<xsl:value-of select="PlanID"/></xsl:attribute>

				<button>
					<xsl:attribute name="type">button</xsl:attribute>
					<xsl:attribute name="class">btn btn-default btn-xs</xsl:attribute>
					<xsl:attribute name="style">height: auto;</xsl:attribute>
					<xsl:attribute name="NAME">pl_btn_<xsl:value-of select="PlanID"/></xsl:attribute>
					<xsl:choose>
						<xsl:when test="Units[Unit]">
							<xsl:attribute name="onclick">
								openCurrPlan('<xsl:value-of select="PlanID"/>'); return false;
							</xsl:attribute>
						</xsl:when>
					</xsl:choose>
					<span>
						<xsl:attribute name="aria-hidden">true</xsl:attribute>
						<xsl:attribute name="class">
							<xsl:apply-templates select="." mode="plan_button_img"/>
						</xsl:attribute>
					</span>
				</button>
				<a>
					<xsl:attribute name="class">PLPLAN</xsl:attribute>
					<xsl:attribute name="HREF">JavaScript:setCurrElement('<xsl:value-of select="PlanID"/>', 0, 0, 'pl', this.text);return false;</xsl:attribute>
					<xsl:attribute name="onclick">JavaScript:setCurrElement('<xsl:value-of select="PlanID"/>', 0, 0, 'pl', this.text);return false;</xsl:attribute>
					<xsl:attribute name="onmouseover">self.status='kXSLChoose'; return true;</xsl:attribute>
					<xsl:attribute name="onmouseout">self.status=''; return true;</xsl:attribute>
					<xsl:value-of select="PlanName"/> - <xsl:number value="sum(./Units/Unit/Lessons/Lesson/Hours)" format="1"/><xsl:value-of select="NLetterHours"/>
				</a>
			</p>
			<br/>
			<xsl:if test="Opened='1'">
				<xsl:for-each select="Units/Unit">
					<xsl:sort select="NUnitInPlan" data-type="number"/>
					<xsl:value-of select="$ONE_IDENT"/>

					<p>
						<xsl:attribute name="style">display: inline;</xsl:attribute>
						<xsl:attribute name="NAME">un_p_<xsl:value-of select="UnitID"/></xsl:attribute>
						<button>
							<xsl:attribute name="type">button</xsl:attribute>
							<xsl:attribute name="class">btn btn-default btn-xs</xsl:attribute>
							<xsl:attribute name="style">height: auto;</xsl:attribute>
							<xsl:attribute name="name">un_btn_<xsl:value-of select="UnitID"/></xsl:attribute>
							<xsl:choose>
								<xsl:when test="Lessons[Lesson]">
									<xsl:attribute name="onclick">
										JavaScript:openCurrUnit(<xsl:value-of select="../../PlanID"/>,<xsl:value-of select="UnitID"/>); return false;
									</xsl:attribute>
								</xsl:when>
							</xsl:choose>
							<span>
								<xsl:attribute name="aria-hidden">true</xsl:attribute>
								<xsl:attribute name="class">
									<xsl:apply-templates select="." mode="unit_button_img"/>
								</xsl:attribute>
							</span>
						</button>
						<a>
							<xsl:attribute name="class">PLUNIT</xsl:attribute>
							<xsl:attribute name="HREF">
								JavaScript:setCurrElement(<xsl:value-of select="../../PlanID"/>,<xsl:value-of select="UnitID"/>, 0, 'un', this.text);return false;
							</xsl:attribute>
							<xsl:attribute name="onclick">
								JavaScript:setCurrElement(<xsl:value-of select="../../PlanID"/>,<xsl:value-of select="UnitID"/>, 0, 'un', this.text);return false;
							</xsl:attribute>
							<xsl:attribute name="onmouseover">self.status='kXSLChoose'; return true;</xsl:attribute>
							<xsl:attribute name="onmouseout">self.status=''; return true;</xsl:attribute>
							<xsl:value-of select="NUnitInPlanText"/>: <xsl:value-of select="UnitName"/> - <xsl:number value="sum(./Lessons/Lesson/Hours)" format="1"/><xsl:value-of select="NLetterHours"/>
						</a>
					</p>
					<br/>
					<xsl:if test="Opened='1'">
						<xsl:for-each select="Lessons/Lesson">
							<xsl:sort select="NLessonInUnit" data-type="number"/>
							<xsl:value-of select="$TWO_IDENT"/>

							<p style="display: inline;">
								<xsl:attribute name="NAME">ls_p_<xsl:value-of select="LessonID"/></xsl:attribute>
								<button>
									<xsl:attribute name="type">button</xsl:attribute>
									<xsl:attribute name="class">btn btn-default btn-xs</xsl:attribute>
									<xsl:attribute name="style">height: auto;</xsl:attribute>
									<xsl:attribute name="name">ls_btn_<xsl:value-of select="LessonID"/></xsl:attribute>
									<span>
										<xsl:attribute name="aria-hidden">true</xsl:attribute>
										<xsl:attribute name="class">
											glyphicon glyphicon-education
										</xsl:attribute>
									</span>
								</button>

								<a>
									<xsl:attribute name="class">PLLESSON</xsl:attribute>
									<xsl:attribute name="HREF">JavaScript:setCurrElement(<xsl:value-of select="../../../../PlanID"/>,<xsl:value-of select="../../UnitID"/>, <xsl:value-of select="LessonID"/>, 'ls', this.text);return false;</xsl:attribute>
									<xsl:attribute name="onclick">JavaScript:setCurrElement(<xsl:value-of select="../../../../PlanID"/>,<xsl:value-of select="../../UnitID"/>, <xsl:value-of select="LessonID"/>, 'ls', this.text);return false;</xsl:attribute>
									<xsl:attribute name="onmouseover">self.status='kXSLChoose'; return true;</xsl:attribute>
									<xsl:attribute name="onmouseout">self.status=''; return true;</xsl:attribute>
									<xsl:value-of select="NLessonInUnitText"/>: <xsl:value-of select="LessonName"/> (<xsl:value-of select="Hours"/><xsl:value-of select="NLetterHours"/>)
								</a>
							</p>
							<br />
						</xsl:for-each>
					</xsl:if>
				</xsl:for-each>
			</xsl:if>
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="*" mode="plan_button_img">
		<xsl:choose>
			<xsl:when test="Units[Unit]">
				<xsl:choose>
					<xsl:when test="Opened='1'">
						<xsl:text>glyphicon glyphicon-folder-open</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:text>glyphicon glyphicon-folder-close</xsl:text>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>glyphicon glyphicon-file</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="*" mode="unit_button_img">
		<xsl:choose>
			<xsl:when test="Lessons[Lesson]">
				<xsl:choose>
					<xsl:when test="Opened='1'">
						<xsl:text>glyphicon glyphicon-folder-open</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:text>glyphicon glyphicon-folder-close</xsl:text>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>glyphicon glyphicon-file</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

</xsl:stylesheet>



