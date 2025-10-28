.pragma library

.import "rounded-polygon.js" as RoundedPolygon
.import "corner-rounding.js" as CornerRounding

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

function circle() {
    return RoundedPolygon.RoundedPolygon.circle(10).normalized();
}

function square() {
    return RoundedPolygon.RoundedPolygon.rectangle(1, 1, cornerRound30).normalized();
}
