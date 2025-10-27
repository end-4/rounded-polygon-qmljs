import QtQuick
import QtQuick.Window
import "corner-rounding.js" as CornerRounding
import "rounded-polygon.js" as RoundedPolygon
import "morph.js" as Morph

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

    property var morph: {
        const rectangle = RoundedPolygon.RoundedPolygon.fromNumVertices(
            5, root.radius, root.width / 2, root.height / 2, 
            new CornerRounding.CornerRounding(root.radius / 3)
        )
        const star = RoundedPolygon.RoundedPolygon.star(
            7, root.radius, root.radius / 2, 
            new CornerRounding.CornerRounding(root.radius / 15), null, null, 
            root.width / 2, root.height / 2
        )
        return new Morph.Morph(star, rectangle)
    }
    property real morphProgress: mouseArea.containsMouse ? 1 : 0
    Behavior on morphProgress {
        NumberAnimation {
            duration: 350
            easing.type: Easing.BezierSpline
            easing.bezierCurve: [0.42, 1.67, 0.21, 0.90, 1, 1] // M3 Expressive fast spring curve
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
            
            // No morph available
            if (!root.morph) return
            
            // Get current shape cubics
            const cubics = root.morph.asCubics(root.morphProgress)
            if (cubics.length === 0) return

            // Draw the shape
            ctx.beginPath()
            ctx.moveTo(cubics[0].anchor0X, cubics[0].anchor0Y) // Start at first anchor point

            // Connect all subsequent curves
            for (const cubic of cubics) {
                ctx.bezierCurveTo(
                    cubic.control0X, cubic.control0Y,
                    cubic.control1X, cubic.control1Y,
                    cubic.anchor1X, cubic.anchor1Y
                )
            }
            
            ctx.fill()
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
        text: "pls click"
        font.pixelSize: 16
    }

    // Interaction
    MouseArea {
        id: mouseArea
        anchors.fill: parent
        acceptedButtons: Qt.LeftButton
        cursorShape: Qt.PointingHandCursor
    }
}

