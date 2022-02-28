<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="cities">
        <xml>
            <xsl:apply-templates />
        </xml>
    </xsl:template>

    <xsl:template match="city">
        <name><xsl:vaue-of select="." /></name>
    </xsl:template>

    <xsl:template match="city">
        <country><xsl:vaue-of select="." /></country>
    </xsl:template>

    <xsl:template match="city">
        <museum><xsl:vaue-of select="." /></museum>
    </xsl:template>
</xsl:stylesheet>