<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <cities>
            <xsl:apply-templates />
        </cities>
    </xsl:template>

<xsl:template match="city">
    <city>
        <xsl:attribute name="name">
            <xsl:value-of select="@city" />
        </xsl:attribute>
        <country><xsl:value-of select="@country" /></country>
        <museum><xsl:value-of select="@museum" /></museum>
    </city>
</xsl:template>

</xsl:stylesheet>