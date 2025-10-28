.pragma library

.import "shapes/rounded-polygon.js" as RoundedPolygon
.import "shapes/corner-rounding.js" as CornerRounding
.import "geometry/offset.js" as Offset

var _circle = null
var _square = null
var _slanted = null
var _arch = null
var _fan = null
var _arrow = null
var _semiCircle = null
var _oval = null
var _pill = null
var _triangle = null
var _diamond = null
var _clamShell = null
var _pentagon = null
var _gem = null
var _verySunny = null
var _sunny = null
var _cookie4Sided = null
var _cookie6Sided = null
var _cookie7Sided = null
var _cookie9Sided = null
var _cookie12Sided = null
var _ghostish = null
var _clover4Leaf = null
var _clover8Leaf = null
var _burst = null
var _softBurst = null
var _boom = null
var _softBoom = null
var _flower = null
var _puffy = null
var _puffyDiamond = null
var _pixelCircle = null
var _pixelTriangle = null
var _bun = null
var _heart = null

var cornerRound15 = new CornerRounding.CornerRounding(0.15)
var cornerRound20 = new CornerRounding.CornerRounding(0.2)
var cornerRound30 = new CornerRounding.CornerRounding(0.3)
var cornerRound50 = new CornerRounding.CornerRounding(0.5)
var cornerRound100 = new CornerRounding.CornerRounding(1.0)

function getCircle() {
    if (_circle !== null) return _circle;
    _circle = circle();
    return _circle;
}

function getSquare() {
    if (_square !== null) return _square;
    _square = square();
    return _square;
}

function getSlanted() {
    if (_slanted !== null) return _slanted;
    _slanted = slanted();
    return _slanted;
}

function getArch() {
    if (_arch !== null) return _arch;
    _arch = arch();
    return _arch;
}

function circle() {
    return RoundedPolygon.RoundedPolygon.circle(10).normalized();
}

function square() {
    return RoundedPolygon.RoundedPolygon.rectangle(1, 1, cornerRound30).normalized();
}

function slanted() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.926, 0.970), new CornerRounding.CornerRounding(0.189, 0.811)),
        new PointNRound(new Offset.Offset(-0.021, 0.967), new CornerRounding.CornerRounding(0.187, 0.057)),
    ], 2).normalized();
}

function arch() {
    return RoundedPolygon.RoundedPolygon.rectangle(1, 1, CornerRounding.Unrounded, [cornerRound20, cornerRound20, cornerRound100, cornerRound100])
        .normalized();
}

class PointNRound {
    constructor(o, r = CornerRounding.Unrounded) {
        this.o = o;
        this.r = r;
    }
}

function doRepeat(points, reps, center, mirroring) {
    if (mirroring) {
        const result = [];
        const angles = points.map(p => p.o.minus(center).angleDegrees());
        const distances = points.map(p => p.o.minus(center).getDistance());
        const actualReps = reps * 2;
        const sectionAngle = 360 / actualReps;
        for (let it = 0; it < actualReps; it++) {
            for (let index = 0; index < points.length; index++) {
                const i = (it % 2 === 0) ? index : points.length - 1 - index;
                if (i > 0 || it % 2 === 0) {
                    const baseAngle = angles[i];
                    const angle = it * sectionAngle + (it % 2 === 0 ? baseAngle : (2 * angles[0] - baseAngle));
                    const dist = distances[i];
                    const rad = angle * Math.PI / 180;
                    const x = center.x + dist * Math.cos(rad);
                    const y = center.y + dist * Math.sin(rad);
                    result.push(new PointNRound(new Offset.Offset(x, y), points[i].r));
                }
            }
        }
        return result;
    } else {
        const np = points.length;
        const result = [];
        for (let i = 0; i < np * reps; i++) {
            const point = points[i % np].o.rotateDegrees(Math.floor(i / np) * 360 / reps, center);
            result.push(new PointNRound(point, points[i % np].r));
        }
        return result;
    }
}

function customPolygon(pnr, reps, center = new Offset.Offset(0.5, 0.5), mirroring = false) {
    const actualPoints = doRepeat(pnr, reps, center, mirroring);
    const vertices = [];
    for (const p of actualPoints) {
        vertices.push(p.o.x);
        vertices.push(p.o.y);
    }
    const perVertexRounding = actualPoints.map(p => p.r);
    return RoundedPolygon.RoundedPolygon.fromVertices(vertices, CornerRounding.Unrounded, perVertexRounding, center.x, center.y);
}
