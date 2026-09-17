<?xml version="1.0" encoding="windows-1251"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<xsl:variable name="SPACE" select="'&#160;'"/>
		<xsl:variable name="ONE_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="TWO_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="THREE_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="FOUR_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:variable name="FIVE_IDENT" select="'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;'"/>
		<xsl:for-each select="Project/Chapter">
			<xsl:apply-templates select="." mode="chk_imgTheoretical"/>
			<xsl:if test="Opened='1'">
				<xsl:for-each select="Section">
					<xsl:value-of select="$ONE_IDENT"/>
					<A>
						<xsl:attribute name="HREF">JavaScript:openCurrSection('<xsl:value-of select="../@ID"/>','<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="sc_pimg"/>'); return false;</xsl:attribute> 
						<xsl:attribute name="onclick">JavaScript:openCurrSection('<xsl:value-of select="../@ID"/>','<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="sc_pimg"/>'); return false;</xsl:attribute>
						<IMG>
							<xsl:attribute name="NAME">sc<xsl:value-of select="@ID"/></xsl:attribute> 
							<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="sc_img"/></xsl:attribute> 
							<xsl:attribute name="BORDER">0</xsl:attribute> 
							<xsl:attribute name="ALIGN">TOP</xsl:attribute>
						</IMG>     
					</>
					<xsl:value-of select="$SPACE"/>
					<xsl:value-of select="@Name"/><BR/>
					<xsl:if test="Opened='1'">
						<xsl:for-each select="Lesson">
							<xsl:value-of select="$TWO_IDENT"/>
							<A>
								<xsl:attribute name="HREF">JavaScript:openCurrLsn('<xsl:value-of select="../../@ID"/>','<xsl:value-of select="../@ID"/>','<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="ls_pimg"/>'); return false;</xsl:attribute> 
								<xsl:attribute name="onclick">JavaScript:openCurrLsn('<xsl:value-of select="../../@ID"/>','<xsl:value-of select="../@ID"/>','<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="ls_pimg"/>'); return false;</xsl:attribute>
								<IMG>
									<xsl:attribute name="NAME">ls<xsl:value-of select="@ID"/></xsl:attribute> 
									<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="ls_img"/></xsl:attribute> 
									<xsl:attribute name="BORDER">0</xsl:attribute> 
									<xsl:attribute name="ALIGN">TOP</xsl:attribute>
								</IMG>     
							</A> Урок <xsl:value-of select="@Name"/><BR/>
							<xsl:if test="Opened='1'">
								<xsl:for-each select="Page">
									<xsl:choose>
										<xsl:when test="count(Assignment) &gt; 0">
											<xsl:value-of select="$FOUR_IDENT"/>
										</xsl:when>
										<xsl:otherwise>
											<xsl:value-of select="$THREE_IDENT"/>
										</xsl:otherwise>
									</xsl:choose>
									<xsl:choose>
										<xsl:when test="count(Assignment) &gt; 0">
											<IMG>
												<xsl:attribute name="NAME">sc<xsl:value-of select="@ID"/></xsl:attribute> 
												<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="chk_img"/></xsl:attribute> 
												<xsl:attribute name="BORDER">0</xsl:attribute> 
												<xsl:attribute name="ALIGN">TOP</xsl:attribute>
											</IMG>
											<xsl:value-of select="@Name"/><BR/>
											<xsl:for-each select="Assignment">
												<xsl:value-of select="$FIVE_IDENT"/>
												<IMG>
													<xsl:attribute name="NAME">sc<xsl:value-of select="@ID"/></xsl:attribute> 
													<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="chk_img"/></xsl:attribute> 
													<xsl:attribute name="BORDER">0</xsl:attribute> 
													<xsl:attribute name="ALIGN">TOP</xsl:attribute>
												</IMG> Упражнение <xsl:value-of select="text()"/><BR/>
											</xsl:for-each>
										</xsl:when>
										<xsl:otherwise>
											<IMG>
												<xsl:attribute name="NAME">sc<xsl:value-of select="@ID"/></xsl:attribute> 
												<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="chk_img"/></xsl:attribute> 
												<xsl:attribute name="BORDER">0</xsl:attribute> 
												<xsl:attribute name="ALIGN">TOP</xsl:attribute>
											</IMG>
											<xsl:value-of select="@Name"/><BR/>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:for-each>
							</xsl:if>
						</xsl:for-each>
					</xsl:if>
				</xsl:for-each>
			</xsl:if>
		</xsl:for-each>
	</xsl:template>

  <xsl:template match="*" mode="ch_img">
    <xsl:choose>
      <xsl:when test="Section">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='ch'] and @ID=/Project/CurrChapterID">
                <xsl:text>bminussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bminus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:when>  
          <xsl:otherwise>
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='ch'] and @ID=/Project/CurrChapterID">
                <xsl:text>bplussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bplus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:choose>
          <xsl:when test="/Project[CurrElemType='ch'] and @ID=/Project/CurrChapterID">
            <xsl:text>plleafsel.gif</xsl:text>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>plleaf.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="*" mode="sc_img">
    <xsl:choose>
      <xsl:when test="Lesson">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='sc'] and @ID=/Project/CurrSectionID">
                <xsl:text>bminussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bminus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:when>  
          <xsl:otherwise>
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='sc'] and @ID=/Project/CurrSectionID">
                <xsl:text>bplussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bplus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:choose>
          <xsl:when test="/Project[CurrElemType='sc'] and @ID=/Project/CurrSectionID">
            <xsl:text>plleafsel.gif</xsl:text>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>plleaf.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="*" mode="ls_img">
    <xsl:choose>
      <xsl:when test="Page">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='ls'] and @ID=/Project/CurrLessonID">
                <xsl:text>bminussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bminus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:when>  
          <xsl:otherwise>
            <xsl:choose>
              <xsl:when test="/Project[CurrElemType='ls'] and @ID=/Project/CurrLessonID">
                <xsl:text>bplussel.gif</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                <xsl:text>bplus.gif</xsl:text>
              </xsl:otherwise>
            </xsl:choose>  
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:choose>
          <xsl:when test="/Project[CurrElemType='ls'] and @ID=/Project/CurrLessonID">
            <xsl:text>plleafsel.gif</xsl:text>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>plleaf.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
		
  <xsl:template match="*" mode="ch_pimg">
    <xsl:choose>
      <xsl:when test="Section">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:text>bplus.gif</xsl:text>
          </xsl:when>  
          <xsl:otherwise>
            <xsl:text>bminus.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>plleaf.gif</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template> 
  
  <xsl:template match="*" mode="sc_pimg">
    <xsl:choose>
      <xsl:when test="Lesson">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:text>bplus.gif</xsl:text>
          </xsl:when>  
          <xsl:otherwise>
            <xsl:text>bminus.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>plleaf.gif</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template> 

  <xsl:template match="*" mode="ls_pimg">
    <xsl:choose>
      <xsl:when test="Page">
        <xsl:choose>
          <xsl:when test="Opened='1'">
            <xsl:text>bplus.gif</xsl:text>
          </xsl:when>  
          <xsl:otherwise>
            <xsl:text>bminus.gif</xsl:text>
          </xsl:otherwise>
        </xsl:choose>  
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>plleaf.gif</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template> 

  <xsl:template match="*" mode="chk_img">
	<xsl:choose>
		<xsl:when test="Checked = 1">
			<xsl:text>checked_box.gif</xsl:text>
		</xsl:when>  
		<xsl:otherwise>
			<xsl:text>plleaf.gif</xsl:text>
		</xsl:otherwise>
	</xsl:choose>
  </xsl:template>

	<xsl:template match="*" mode="chk_imgTheoretical">
		<xsl:variable name="SPACE" select="'&#160;'"/>
		<xsl:choose>
			<xsl:when test="/Project/Chapter[1]=current()">		
				<IMG>
					<xsl:attribute name="NAME">TheoreticalChapter<xsl:value-of select="@ID"/></xsl:attribute> 
					<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="chk_img"/></xsl:attribute> 
					<xsl:attribute name="BORDER">0</xsl:attribute> 
					<xsl:attribute name="ALIGN">TOP</xsl:attribute>
				</IMG>
				<xsl:value-of select="$SPACE"/>
				<i><b>
					<xsl:value-of select="@Name"/>
					<BR/>
				</b></i>
			</xsl:when>
			<xsl:otherwise>
				<A>
					<xsl:attribute name="HREF">JavaScript:openCurrChapter('<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="ch_pimg"/>'); return false;</xsl:attribute> 
					<xsl:attribute name="onclick">JavaScript:openCurrChapter('<xsl:value-of select="@ID"/>','<xsl:apply-templates select="." mode="ch_pimg"/>'); return false;</xsl:attribute>
					<IMG>
						<xsl:attribute name="NAME">ch<xsl:value-of select="@ID"/></xsl:attribute> 
						<xsl:attribute name="SRC">/images/Common/<xsl:apply-templates select="." mode="ch_img"/></xsl:attribute> 
						<xsl:attribute name="BORDER">0</xsl:attribute> 
						<xsl:attribute name="ALIGN">TOP</xsl:attribute>
					</IMG>
				</A>
				<xsl:value-of select="$SPACE"/>				
				<xsl:value-of select="@Name"/>
				<BR/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	</xsl:template>
</xsl:stylesheet>
