<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="cities">
        <xml>
            <xsl:apply-templates />
        </xml>
    

    <xsl:template match="cities">
        <cities>
            <xsl:attribute name="name">
                <xsl:value-of select="city" />
            </xsl:attribute>
        </cities>
    </xsl:template>

    <xsl:template match="city/museum">
        <museum><xsl:value-of select="." /></museum>
    </xsl:template>
    
</xsl:stylesheet>