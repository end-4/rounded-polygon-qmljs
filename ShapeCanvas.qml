import QtQuick
import "shapes/morph.js" as Morph
import "material-shapes.js" as MaterialShapes

Canvas {
    id: root
    property real progress: 0
    property color color: "#685496"
    property var morph: null
    onProgressChanged: requestPaint()
    
    onPaint: {
        var ctx = getContext("2d")
        ctx.fillStyle = root.color
        ctx.clearRect(0, 0, width, height)
        if (!root.morph) return
        const cubics = root.morph.asCubics(root.progress)
        if (cubics.length === 0) return

        const size = Math.min(root.width, root.height) / 2
        const offsetX = root.width / 2 - size / 2
        const offsetY = root.height / 2 - size / 2

        ctx.save()
        ctx.translate(offsetX, offsetY)
        ctx.scale(size, size)

        ctx.beginPath()
        ctx.moveTo(cubics[0].anchor0X, cubics[0].anchor0Y)
        for (const cubic of cubics) {
            ctx.bezierCurveTo(
                cubic.control0X, cubic.control0Y,
                cubic.control1X, cubic.control1Y,
                cubic.anchor1X, cubic.anchor1Y
            )
        }
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}