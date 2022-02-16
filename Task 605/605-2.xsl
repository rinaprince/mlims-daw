<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <xml>
            <xsl:apply-templates />
        </xml>
    </xsl:template>

    <xsl:template match="museum/name">
        <name>
            <xsl:value-of select="." />
        </name>
    </xsl:template>

    <xsl:template match="museum">
        <museum>
            <xsl:attribute name="city">
                <xsl:value-of select="location" />
            </xsl:attribute>

            <xsl:attribute name="country">
                <xsl:value-of select="location" />
            </xsl:attribute>
        </museum>
    </xsl:template>

</xsl:stylesheet>