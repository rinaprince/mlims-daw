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
<xsl:template match="seconary-school">
<table border="1">
    <tr><th><xsl:value-of select="@NISA" /></th></tr>
    <td><tr><xsl:value-of select="@DAW"/></tr></td>
    <td><tr><xsl:value-of select="@MSN"/></tr></td>
</table>
</xsl:template>

</xsl:stylesheet>