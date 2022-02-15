<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
    <html>
        <body>
            <h1><xsl:value-of select="name" /></h1>
            <xsl:apply-templates />
        </body>
    </html>
</xsl:template>
<xsl:template match="secondary-school">
    <a><xsl:value-of select="web" /></a>
</xsl:template>
<xsl:template match="cycle/name">
    <ul><li><xsl:value-of select="." /></li></ul>
</xsl:template>

</xsl:stylesheet>