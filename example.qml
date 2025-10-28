import QtQuick
import QtQuick.Window
import "src/shapes/corner-rounding.js" as CornerRounding
import "src/shapes/rounded-polygon.js" as RoundedPolygon
import "src/shapes/morph.js" as Morph
import "src/material-shapes.js" as MaterialShapes

Window {
    id: root
    title: "Shape Morph Demo"
    color: "#211F21"
    width: radius * 2 + padding * 2
    height: radius * 2 + padding * 2
    visible: true
    onClosing: Qt.quit()

    property double padding: 50
    property double shapePadding: 12

    //////////////////////////////// Begin juicy part ////////////////////////////////
    property double radius: 50

    property var shapeGetters: [
        MaterialShapes.getCircle,
        MaterialShapes.getSquare,
        MaterialShapes.getSlanted,
        MaterialShapes.getArch,
        MaterialShapes.getFan,
        MaterialShapes.getArrow,
        MaterialShapes.getSemiCircle,
        MaterialShapes.getOval,
        MaterialShapes.getPill,
        MaterialShapes.getTriangle,
        MaterialShapes.getDiamond,
        MaterialShapes.getClamShell,
        MaterialShapes.getPentagon,
        MaterialShapes.getGem,
        MaterialShapes.getSunny,
        MaterialShapes.getVerySunny,
        MaterialShapes.getCookie4Sided,
        MaterialShapes.getCookie6Sided,
        MaterialShapes.getCookie7Sided,
        MaterialShapes.getCookie9Sided,
        MaterialShapes.getCookie12Sided,
        MaterialShapes.getGhostish,
        MaterialShapes.getClover4Leaf,
        MaterialShapes.getClover8Leaf,
        MaterialShapes.getBurst,
        MaterialShapes.getSoftBurst,
        MaterialShapes.getBoom,
        MaterialShapes.getSoftBoom,
        MaterialShapes.getFlower,
        MaterialShapes.getPuffy,
        MaterialShapes.getPuffyDiamond,
        MaterialShapes.getPixelCircle,
        MaterialShapes.getPixelTriangle,
        MaterialShapes.getBun,
        MaterialShapes.getHeart
    ]
    property int shapeIndex: 0
    property int nextShapeIndex: 1
    property var morph: new Morph.Morph(shapeGetters[shapeIndex](), shapeGetters[nextShapeIndex]())
    property real morphProgress: 0
    Behavior on morphProgress {
        id: morphBehavior
        NumberAnimation {
            duration: 350
            easing.type: Easing.BezierSpline
            easing.bezierCurve: [0.42, 1.67, 0.21, 0.90, 1, 1]
        }
    }

    // The actual shape
    Canvas {
        id: canvas
        z: 2
        anchors.fill: parent
        property real progress: root.morphProgress
        onProgressChanged: requestPaint()
        
        onPaint: {
            var ctx = getContext("2d")
            ctx.fillStyle = "#685496"
            ctx.clearRect(0, 0, width, height)
            if (!root.morph) return
            const cubics = root.morph.asCubics(root.morphProgress)
            if (cubics.length === 0) return

            const size = root.radius * 2
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
    //////////////////////////////// End juicy part ////////////////////////////////

    // Background circle
    Rectangle {
        z: 1
        anchors.fill: parent
        anchors.margins: root.padding - root.shapePadding
        width: radius * 2 + 50
        height: height
        radius: height / 2
        color: "#C7B3FC"
    }

    // Text
    Text {
        z: 3
        anchors {
            horizontalCenter: parent.horizontalCenter
            top: parent.top
            topMargin: 8
        }
        color: "#E6E1E3"
        text: "Shape " + (root.shapeIndex+1) + " → " + (root.nextShapeIndex+1) + " / " + root.shapeGetters.length
        font.pixelSize: 16
    }

    // Automatic morphing
    Timer {
        id: morphTimer
        interval: 700
        running: true
        repeat: true
        onTriggered: {
            root.morphProgress = 1;
        }
    }
    onMorphProgressChanged: {
        if (root.morphProgress === 1) {
            // Morph animation finished, advance to next shape
            root.shapeIndex = (root.shapeIndex + 1) % root.shapeGetters.length;
            root.nextShapeIndex = (root.shapeIndex + 1) % root.shapeGetters.length;
            root.morph = new Morph.Morph(root.shapeGetters[root.shapeIndex](), root.shapeGetters[root.nextShapeIndex]());
            morphBehavior.enabled = false; // prevent shake
            root.morphProgress = 0;
            morphBehavior.enabled = true;
        }
    }
}

