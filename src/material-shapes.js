.pragma library

.import "shapes/point.js" as Point
.import "shapes/rounded-polygon.js" as RoundedPolygon
.import "shapes/corner-rounding.js" as CornerRounding
.import "geometry/offset.js" as Offset
.import "graphics/matrix.js" as Matrix

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

var rotateNeg45 = new Matrix.Matrix();
rotateNeg45.rotateZ(-45);
var rotateNeg90 = new Matrix.Matrix();
rotateNeg90.rotateZ(-90);
var rotateNeg135 = new Matrix.Matrix();
rotateNeg135.rotateZ(-135);

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

function getFan() {
    if (_fan !== null) return _fan;
    _fan = fan();
    return _fan;
}

function getArrow() {
    if (_arrow !== null) return _arrow;
    _arrow = arrow();
    return _arrow;
}

function getSemiCircle() {
    if (_semiCircle !== null) return _semiCircle;
    _semiCircle = semiCircle();
    return _semiCircle;
}

function getOval() {
    if (_oval !== null) return _oval;
    _oval = oval();
    return _oval;
}

function getPill() {
    if (_pill !== null) return _pill;
    _pill = pill();
    return _pill;
}

function getTriangle() {
    if (_triangle !== null) return _triangle;
    _triangle = triangle();
    return _triangle;
}

function getDiamond() {
    if (_diamond !== null) return _diamond;
    _diamond = diamond();
    return _diamond;
}

function getClamShell() {
    if (_clamShell !== null) return _clamShell;
    _clamShell = clamShell();
    return _clamShell;
}

function getPentagon() {
    if (_pentagon !== null) return _pentagon;
    _pentagon = pentagon();
    return _pentagon;
}

function getGem() {
    if (_gem !== null) return _gem;
    _gem = gem();
    return _gem;
}

function getSunny() {
    if (_sunny !== null) return _sunny;
    _sunny = sunny();
    return _sunny;
}

function getVerySunny() {
    if (_verySunny !== null) return _verySunny;
    _verySunny = verySunny();
    return _verySunny;
}

function getCookie4Sided() {
    if (_cookie4Sided !== null) return _cookie4Sided;
    _cookie4Sided = cookie4();
    return _cookie4Sided;
}

function getCookie6Sided() {
    if (_cookie6Sided !== null) return _cookie6Sided;
    _cookie6Sided = cookie6();
    return _cookie6Sided;
}

function getCookie7Sided() {
    if (_cookie7Sided !== null) return _cookie7Sided;
    _cookie7Sided = cookie7();
    return _cookie7Sided;
}

function getCookie9Sided() {
    if (_cookie9Sided !== null) return _cookie9Sided;
    _cookie9Sided = cookie9();
    return _cookie9Sided;
}

function getCookie12Sided() {
    if (_cookie12Sided !== null) return _cookie12Sided;
    _cookie12Sided = cookie12();
    return _cookie12Sided;
}

function getGhostish() {
    if (_ghostish !== null) return _ghostish;
    _ghostish = ghostish();
    return _ghostish;
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

function fan() {
    return customPolygon([
        new PointNRound(new Offset.Offset(1.004, 1.000), new CornerRounding.CornerRounding(0.148, 0.417)),
        new PointNRound(new Offset.Offset(0.000, 1.000), new CornerRounding.CornerRounding(0.151)),
        new PointNRound(new Offset.Offset(0.000, -0.003), new CornerRounding.CornerRounding(0.148)),
        new PointNRound(new Offset.Offset(0.978, 0.020), new CornerRounding.CornerRounding(0.803)),
    ], 1).normalized();
}

function arrow() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.500, 0.892), new CornerRounding.CornerRounding(0.313)),
        new PointNRound(new Offset.Offset(-0.216, 1.050), new CornerRounding.CornerRounding(0.207)),
        new PointNRound(new Offset.Offset(0.499, -0.160), new CornerRounding.CornerRounding(0.215, 1.000)),
        new PointNRound(new Offset.Offset(1.225, 1.060), new CornerRounding.CornerRounding(0.211)),
    ], 1).normalized();
}

function semiCircle() {
    return RoundedPolygon.RoundedPolygon.rectangle(1.6, 1, CornerRounding.Unrounded, [cornerRound20, cornerRound20, cornerRound100, cornerRound100]).normalized();
}

function oval() {
    const scaleMatrix = new Matrix.Matrix();
    scaleMatrix.scale(1, 0.64);
    return RoundedPolygon.RoundedPolygon.circle()
        .transformed((x, y) => scaleMatrix.map(new Offset.Offset(x, y)))
        .transformed((x, y) => rotateNeg45.map(new Offset.Offset(x, y)))
        .normalized();
}

function pill() {
    // TODO: use customPolygon version so the shape is more aligned
    return RoundedPolygon.RoundedPolygon.rectangle(1, 0.804, cornerRound100, [cornerRound100, cornerRound100, cornerRound100, cornerRound100], 0.5, 0.5)
        .transformed((x, y) => rotateNeg45.map(new Offset.Offset(x, y)))
        .normalized();
}

function triangle() {
    return RoundedPolygon.RoundedPolygon.fromNumVertices(3, 1, 0.5, 0.5, cornerRound20)
        .transformed((x, y) => rotateNeg90.map(new Offset.Offset(x, y)))
        .normalized();
}

function diamond() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.500, 1.096), new CornerRounding.CornerRounding(0.151, 0.524)),
        new PointNRound(new Offset.Offset(0.040, 0.500), new CornerRounding.CornerRounding(0.159)),
    ], 2).normalized();
}

function clamShell() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.171, 0.841), new CornerRounding.CornerRounding(0.159)),
        new PointNRound(new Offset.Offset(-0.020, 0.500), new CornerRounding.CornerRounding(0.140)),
        new PointNRound(new Offset.Offset(0.170, 0.159), new CornerRounding.CornerRounding(0.159)),
    ], 2).normalized();
}

function pentagon() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.500, -0.009), new CornerRounding.CornerRounding(0.172)),
        new PointNRound(new Offset.Offset(1.030, 0.365), new CornerRounding.CornerRounding(0.164)),
        new PointNRound(new Offset.Offset(0.828, 0.970), new CornerRounding.CornerRounding(0.169)),
        new PointNRound(new Offset.Offset(0.172, 0.970), new CornerRounding.CornerRounding(0.169)),
        new PointNRound(new Offset.Offset(-0.030, 0.365), new CornerRounding.CornerRounding(0.164)),
    ], 1).normalized();
}

function gem() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.5, 1.023), new CornerRounding.CornerRounding(0.241, 0.778)),
        new PointNRound(new Offset.Offset(-0.005, 0.792), new CornerRounding.CornerRounding(0.208)),
        new PointNRound(new Offset.Offset(0.073, 0.258), new CornerRounding.CornerRounding(0.228)),
        new PointNRound(new Offset.Offset(0.5, 0.000), new CornerRounding.CornerRounding(0.241, 0.778)),
        new PointNRound(new Offset.Offset(0.927, 0.258), new CornerRounding.CornerRounding(0.228)),
        new PointNRound(new Offset.Offset(1.005, 0.792), new CornerRounding.CornerRounding(0.208)),
    ], 1).normalized();
}

function sunny() {
    return RoundedPolygon.RoundedPolygon.star(
        8, 1, 0.8, cornerRound15
    ).normalized();
}

function verySunny() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.500, 1.080), new CornerRounding.CornerRounding(0.085)),
        new PointNRound(new Offset.Offset(0.358, 0.843), new CornerRounding.CornerRounding(0.085)),
    ], 8).normalized();
}

function cookie4() {
    return customPolygon([
        new PointNRound(new Offset.Offset(1.237, 1.236), new CornerRounding.CornerRounding(0.258)),
        new PointNRound(new Offset.Offset(0.500, 0.918), new CornerRounding.CornerRounding(0.233)),
    ], 4).normalized();
}

function cookie6() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.723, 0.884), new CornerRounding.CornerRounding(0.394)),
        new PointNRound(new Offset.Offset(0.500, 1.099), new CornerRounding.CornerRounding(0.398)),
    ], 6).normalized();
}

function cookie7() {
    return RoundedPolygon.RoundedPolygon.star(7, 1, 0.75, cornerRound50)
        .transformed((x, y) => rotateNeg90.map(new Offset.Offset(x, y)))
        .normalized();
}

function cookie9() {
    return RoundedPolygon.RoundedPolygon.star(9, 1, 0.8, cornerRound50)
        .transformed((x, y) => rotateNeg90.map(new Offset.Offset(x, y)))
        .normalized();
}

function cookie12() {
    return RoundedPolygon.RoundedPolygon.star(
        12, 1, 0.8, cornerRound50
    ).normalized();
}

function ghostish() {
    return customPolygon([
        new PointNRound(new Offset.Offset(0.5, 0.0), new CornerRounding.CornerRounding(1.0)),
        new PointNRound(new Offset.Offset(1.0, 0.0), new CornerRounding.CornerRounding(1.0)),
        new PointNRound(new Offset.Offset(1.0, 1.14), new CornerRounding.CornerRounding(0.254, 0.106)),
        new PointNRound(new Offset.Offset(0.575, 0.906), new CornerRounding.CornerRounding(0.253)),
        new PointNRound(new Offset.Offset(0.425, 0.906), new CornerRounding.CornerRounding(0.253)),
        new PointNRound(new Offset.Offset(0.0, 1.14), new CornerRounding.CornerRounding(0.254, 0.106)),
        new PointNRound(new Offset.Offset(0.0, 0.0), new CornerRounding.CornerRounding(1.0)),
    ], 1).normalized();
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
