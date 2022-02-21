<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*" />

    <xsl:template match="/">
        <places>
            <xsl:apply-templates />
        </places>
    </xsl:template>

<xsl:template match="museum">
    <place type="museum">
       <location>
           <xsl:attribute name="name">
               <xsl:value-of select="@city" />
               <xsl:value-of select="@country" />
           </xsl:attribute>
       </location>
       <name><xsl:value-of select="name" /></name>
    </place>
</xsl:template>

</xsl:stylesheet>