<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="countries">
        <xml>
            <xsl:apply-templates />
        </xml>
    
    <xsl:template match="countries">
        <country>
            <xsl:attribute name="name">
                <xsl:value-of select="country" />
            </xsl:attribute>
        </country>
    </xsl:template>

    <xsl:template match="country/museum">
        <museum>
            <xsl:attribute name="museum">
                <xsl:value-of select="museum" />
            </xsl:attribute>

            <xsl:attribute name="city">
                <xsl:value-of select="museum" />
            </xsl:attribute> 

        </museum>
    </xsl:template>

    
</xsl:stylesheet>