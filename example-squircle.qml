import QtQuick
import QtQuick.Window
import "material-shapes.js" as MaterialShapes
import "shapes/corner-rounding.js" as CornerRounding
import "geometry/offset.js" as Offset

Window {
    id: root
    title: "Custom shape: Squircle"
    color: "#211F21"
    width: radius * 2 + padding * 2
    height: radius * 2 + padding * 2
    visible: true
    onClosing: Qt.quit()

    property double radius: 50
    property double padding: 50
    property double shapePadding: 12

    //////////////////////////////// Begin juicy part ////////////////////////////////
    ShapeCanvas {
        id: shapeCanvas
        z: 2
        anchors.centerIn: parent
        implicitWidth: root.radius * 2
        implicitHeight: root.radius * 2
        color: "#BDAAEF"
        // Nonzero smoothing of corner rounding gives squircle shape
        roundedPolygon: MaterialShapes.customPolygon([
            new MaterialShapes.PointNRound(new Offset.Offset(1.225, 1.060), new CornerRounding.CornerRounding(0.211, 1.25)),
            new MaterialShapes.PointNRound(new Offset.Offset(-0.216, 1.050), new CornerRounding.CornerRounding(0.207, 1.25)),
            new MaterialShapes.PointNRound(new Offset.Offset(-0.216, -0.216), new CornerRounding.CornerRounding(0.207, 1.25)),
            new MaterialShapes.PointNRound(new Offset.Offset(1.225, -0.216), new CornerRounding.CornerRounding(0.211, 1.25)),
        ], 1).normalized();
    }
    //////////////////////////////// End juicy part ////////////////////////////////

    // Text
    Text {
        z: 3
        anchors {
            horizontalCenter: parent.horizontalCenter
            top: parent.top
            topMargin: 8
        }
        color: "#E6E1E3"
        text: "Custom Squircle Shape"
        font.pixelSize: 16
    }
}

