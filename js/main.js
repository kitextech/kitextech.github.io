;(function() {

  // creates handler, saves it
  function DragHandler(el){
    el.remember('_draggable', this)
    this.el = el
  }


  // Sets new parameter, starts dragging
  DragHandler.prototype.init = function(constraint, val){
    var _this = this
    this.constraint = constraint
    this.value = val
    this.el.on('mousedown.drag', function(e){ _this.start(e) })
    this.el.on('touchstart.drag', function(e){ _this.start(e) })
  }

  // transforms one point from screen to user coords
  DragHandler.prototype.transformPoint = function(event, offset){
      event = event || window.event
      var touches = event.changedTouches && event.changedTouches[0] || event
      this.p.x = touches.pageX - (offset || 0)
      this.p.y = touches.pageY
      return this.p.matrixTransform(this.m)
  }

  // gets elements bounding box with special handling of groups, nested and use
  DragHandler.prototype.getBBox = function(){

    var box = this.el.bbox()

    if(this.el instanceof SVG.Nested) box = this.el.rbox()

    if (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) {
      box.x = this.el.x()
      box.y = this.el.y()
    }

    return box
  }

  // start dragging
  DragHandler.prototype.start = function(e){

    // check for left button
    if(e.type == 'click'|| e.type == 'mousedown' || e.type == 'mousemove'){
      if((e.which || e.buttons) != 1){
          return
      }
    }

    var _this = this

    // fire beforedrag event
    this.el.fire('beforedrag', { event: e, handler: this })
    if(this.el.event().defaultPrevented) return;

    // prevent browser drag behavior as soon as possible
    e.preventDefault();

    // prevent propagation to a parent that might also have dragging enabled
    e.stopPropagation();

    // search for parent on the fly to make sure we can call
    // draggable() even when element is not in the dom currently
    this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc)
    this.p = this.parent.node.createSVGPoint()

    // save current transformation matrix
    this.m = this.el.node.getScreenCTM().inverse()

    var box = this.getBBox()

    var anchorOffset;

    // fix text-anchor in text-element (#37)
    if(this.el instanceof SVG.Text){
      anchorOffset = this.el.node.getComputedTextLength();

      switch(this.el.attr('text-anchor')){
        case 'middle':
          anchorOffset /= 2;
          break
        case 'start':
          anchorOffset = 0;
          break;
      }
    }

    this.startPoints = {
      // We take absolute coordinates since we are just using a delta here
      point: this.transformPoint(e, anchorOffset),
      box:   box,
      transform: this.el.transform()
    }

    // add drag and end events to window
    SVG.on(window, 'mousemove.drag', function(e){ _this.drag(e) })
    SVG.on(window, 'touchmove.drag', function(e){ _this.drag(e) })
    SVG.on(window, 'mouseup.drag', function(e){ _this.end(e) })
    SVG.on(window, 'touchend.drag', function(e){ _this.end(e) })

    // fire dragstart event
    this.el.fire('dragstart', {event: e, p: this.startPoints.point, m: this.m, handler: this})
  }

  // while dragging
  DragHandler.prototype.drag = function(e){

    var box = this.getBBox()
      , p   = this.transformPoint(e)
      , x   = this.startPoints.box.x + p.x - this.startPoints.point.x
      , y   = this.startPoints.box.y + p.y - this.startPoints.point.y
      , c   = this.constraint
      , gx  = p.x - this.startPoints.point.x
      , gy  = p.y - this.startPoints.point.y

    this.el.fire('dragmove', {
        event: e
      , p: p
      , m: this.m
      , handler: this
    })

    if(this.el.event().defaultPrevented) return p

    // move the element to its new position, if possible by constraint
    if (typeof c == 'function') {

      var coord = c.call(this.el, x, y, this.m)

      // bool, just show us if movement is allowed or not
      if (typeof coord == 'boolean') {
        coord = {
          x: coord,
          y: coord
        }
      }

      // if true, we just move. If !false its a number and we move it there
      if (coord.x === true) {
        this.el.x(x)
      } else if (coord.x !== false) {
        this.el.x(coord.x)
      }

      if (coord.y === true) {
        this.el.y(y)
      } else if (coord.y !== false) {
        this.el.y(coord.y)
      }

    } else if (typeof c == 'object') {

      // keep element within constrained box
      if (c.minX != null && x < c.minX) {
        x = c.minX
        gx = x - this.startPoints.box.x
      } else if (c.maxX != null && x > c.maxX - box.width) {
        x = c.maxX - box.width
        gx = x - this.startPoints.box.x
      } if (c.minY != null && y < c.minY) {
        y = c.minY
        gy = y - this.startPoints.box.y
      } else if (c.maxY != null && y > c.maxY - box.height) {
        y = c.maxY - box.height
        gy = y - this.startPoints.box.y
      }

      if(this.el instanceof SVG.G)
        this.el.matrix(this.startPoints.transform).transform({x:gx, y: gy}, true)
      else
        this.el.move(x, y)
    }

    // so we can use it in the end-method, too
    return p
  }

  DragHandler.prototype.end = function(e){

    // final drag
    var p = this.drag(e);

    // fire dragend event
    this.el.fire('dragend', { event: e, p: p, m: this.m, handler: this })

    // unbind events
    SVG.off(window, 'mousemove.drag')
    SVG.off(window, 'touchmove.drag')
    SVG.off(window, 'mouseup.drag')
    SVG.off(window, 'touchend.drag')

  }

  SVG.extend(SVG.Element, {
    // Make element draggable
    // Constraint might be an object (as described in readme.md) or a function in the form "function (x, y)" that gets called before every move.
    // The function can return a boolean or an object of the form {x, y}, to which the element will be moved. "False" skips moving, true moves to raw x, y.
    draggable: function(value, constraint) {

      // Check the parameters and reassign if needed
      if (typeof value == 'function' || typeof value == 'object') {
        constraint = value
        value = true
      }

      var dragHandler = this.remember('_draggable') || new DragHandler(this)

      // When no parameter is given, value is true
      value = typeof value === 'undefined' ? true : value

      if(value) dragHandler.init(constraint || {}, value)
      else {
        this.off('mousedown.drag')
        this.off('touchstart.drag')
      }

      return this
    }

  })

}).call(this);


SVG.Kite = SVG.invent({
  // Define the type of element that should be created
  create: 'polygon'

  // Specify from which existing class this shape inherits
, inherit: SVG.Polygon

  // Add custom methods to invented shape
, extend: {
    // current phase of the kite
    state: 0,
    phase: 0,
    kiteOrientation: Math.PI,
    updateState: function(dt, direction) {
      var speed = this.transition() > 0 ? 1 : 0.5
      this.state += speed * dt * direction
      this.state = Math.max( Math.min(this.state, 2), 0)
      return this
    },

    cable: function() {
      return Math.min(this.state, 1)
    },

    transition: function() {
      return Math.min( Math.max(this.state-1, 0), 1)
    },

    xpos: function() {
      return this.cable() * (this.rotationX + this.radius * Math.sin(this.phase)) +
        (1-this.cable()) * this.baseX
    },
    ypos: function() {
      return this.cable() * (this.rotationY - this.radius * Math.cos(this.phase)) +
        (1-this.cable()) * this.baseY
    },

    update: function(dt, stateDirection, windspeed) {
      this.updateState(dt, stateDirection)
      this.phase += dt * 3 * windspeed * this.transition()

      var phaseRemainder = this.phase%(2*Math.PI) - Math.PI
      var phaseBase = this.phase - phaseRemainder

      var kiteOrientationDiff
      if (stateDirection > 0 && this.transition() > 0) {
        kiteOrientationDiff = this.phase - this.kiteOrientation - Math.PI/2
      } else {
        kiteOrientationDiff = phaseBase - this.kiteOrientation
      }

      this.kiteOrientation += Math.abs(kiteOrientationDiff) < 8*dt ? kiteOrientationDiff : 8*dt * Math.sign(kiteOrientationDiff)

      this.transform({
        x: this.xpos(),
        y: this.ypos()
      })
      .transform({
        rotation: this.kiteOrientation*180/Math.PI // (this.transition() * phaseRemainder Math.PI) / Math.PI * 180
      })

      return this
    }
  }
  // Add method to parent elements
, construct: {
  // Create a wrapped polygon element
    kite: function(p, o) {
      // make sure plot is called as a setter
      var newKite = this.put(new SVG.Kite).plot(p || new SVG.PointArray)
      newKite.baseX = (typeof o.baseX !== 'undefined') ?  o.baseX : 200;
      newKite.baseY = (typeof o.baseY !== 'undefined') ?  o.baseY : 300;
      newKite.rotationX = (typeof o.rotationX !== 'undefined') ?  o.rotationX : 550;
      newKite.rotationY = (typeof o.rotationY !== 'undefined') ?  o.rotationY : 150;
      newKite.phase = (typeof o.phaseOffset !== 'undefined') ?  o.phaseOffset : 0;
      newKite.radius = (typeof o.radius !== 'undefined') ?  o.radius : 80;

      return newKite
    }
  }
})


var powerTower = {
  coords: [[0, 0], [-25, 20], [25, 20], [-10,50], [10, 50], [-30, 50], [30, 50], [0, 67], [-20, 100], [20, 100]]
, lines: [[1,5,2,3,4], [6,7,8], [4,9,5,4,10,5]]
, points: [2, 3, 6, 7]
, scale: 1.6
, cableOffset: 10

, construct: function(draw) {
    var g = draw.group()
    var pt = this

    this.coords = this.coords.map( function(coord){ return coord.map( function(e){return pt.scale*e }) })

    this.lines.map( function(line) {
      var lineCoords = line.map( function(cIndex) { return pt.coords[cIndex-1]})
      g.polygon().plot(lineCoords).fill('none').stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#444' })
    })

    this.points.map( function(pIndex) {
      var c = pt.coords[pIndex-1]
      g.circle(4).fill('#000').center(c[0], c[1]+pt.cableOffset)
    })

    return g
    }

, getAttachmentPoint: function(tower) {
    return [tower.x() + this.coords[6][0] , tower.y() + this.coords[6][1] + this.cableOffset]
  }
}


// define document width and height
var width = 832, height = 400
var purple = '#610699'

// create SVG document and set its size
var draw = SVG('drawing').size(width, height)
draw.viewbox(0,0,width,height)
draw.attr({preserveAspectRatio:"xMinYMin meet"})

// draw background
// var background = draw.rect(width, height).fill('none').
var base = {x: 280, y: 360}

// *** KITES ****
// Kite shape
var kiteShape = [[2, 30],[3, 8], [100, 8], [100,-3], [6, -8], [2, -60], [30, -60], [30, -66]]
for (var i=kiteShape.length-1; i >= 0; i-- ) {
  kiteShape.push([ -kiteShape[i][0], kiteShape[i][1]])
}
var scale = 0.5;
var kiteShapeScaled = kiteShape.map( function(p) {
  return p.map( function(e) {
    return scale*e
  })
})

var kite1 = draw.kite(kiteShapeScaled, {})
  .fill(purple).stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#610699' })

var kite2 = draw.kite(kiteShapeScaled, {baseX: 360, phaseOffset: Math.PI})
  .fill(purple).stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#610699' })


// *** Tethers ****
var tether = {
  mainRatio: 0.8, baseX: 0, baseY: 0, x1: 0, y1:0, x2: 0, y2: 0,

  setBase: function(x,y) {
    this.baseX = x
    this.baseY = y
  },
  setKitePositions: function(x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  },
  joinPosX: function() {
    return (this.x1+this.x2)/2 * (this.mainRatio) + this.baseX *(1-this.mainRatio)
  },
  joinPosY: function() {
    return (this.y1+this.y2)/2 * (this.mainRatio) + this.baseY *(1-this.mainRatio)
  },
  getMainTether: function(){
    return [this.baseX, this.baseY, this.joinPosX(), this.joinPosY()]
  },
  getTether1: function(){
    return [this.joinPosX(), this.joinPosY(), this.x1, this.y1]
  },
  getTether2: function(){
    return [this.joinPosX(), this.joinPosY(), this.x2, this.y2]
  }
}

tether.setBase(base.x, base.y)

var line1 = draw.line().stroke({ width: 3, color: '#222', linecap: 'round', linejoin: 'round' })
var line2 = line1.clone()
var line3 = line1.clone()

// BASE
draw.path('M -20 20 L 0 -14.641 L 20 20 z').center(base.x, base.y)
.fill(purple).stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#610699' })

// Line

// *** PowerTower ****
var pTower = powerTower.construct(draw).move(60,220)
var pTowerA = powerTower.getAttachmentPoint(pTower)

// base.x, base.y, pTowerA[0], pTowerA[1]
var qx = (base.x+pTowerA[0])/2
var qy = (base.y+pTowerA[1])/2+30
var cable = draw.path(`M${base.x},${base.y} Q${qx},${qy} ${pTowerA[0]},${pTowerA[1]}`)
.fill('none')
.stroke({ width: 2, linecap: 'round', linejoin: 'round', color: '#333' })

// Power Sign
var powerSignState = 0

var powerSign = draw.polygon('0,0 -6,17 -2,17 -8,34, 5,12 2,12 10,0').fill('#FF8C00')
.stroke({ width: 2, linecap: 'round', linejoin: 'round', color: '#FF8C00' })

var cableLength = cable.length()
function getCablePoint(powerState) {
  return cable.pointAt(powerState*cableLength)
}


// define inital player score
var powerGeneration = 0

// create text for the score, set font properties
var label1 = draw.text(powerGeneration+' kW').font({
  size: 32,
  // family: 'Menlo, sans-serif',
  anchor: 'end',
  fill: purple
}).move(width-10, 10)

var label2 = label1.clone().move(width-10, 40)

// Slider

var windspeed = 0.5

var sliderX = 812
var sliderYMax = 100
var sliderYMin = 330
var sliderXCurrent = 240

function sliderYcurrent() {
  return sliderYMin + windspeed
}

var sliderBase = draw.line(sliderX,sliderYMax,sliderX,sliderYMin).stroke({ width: 3, color: '#333', linecap: 'round', linejoin: 'round' })
var sliderHandleRadius = 15
var sliderHandle = draw.circle(sliderHandleRadius*2).center(sliderX,sliderXCurrent).fill('#610699')

sliderHandle.draggable({
  minX: sliderX-sliderHandleRadius
, minY: sliderYMax-sliderHandleRadius
, maxX: sliderX+sliderHandleRadius
, maxY: sliderYMin+sliderHandleRadius
})

var windspeeds = [2, 8, 15, 25, 12].map( function(e) { return e/25 })
var windspeedIndex = 0

// var windButton = draw.circle(40).center(sliderX, sliderYMin + 50).fill('#610699')


var label3 = label1.clone().text('Change wind speed').move(width-10, sliderYMin + 20)
.click(function() {
  windspeedTarget = windspeeds[windspeedIndex % windspeeds.length]
  windspeedIndex += 1
  sliderHandle.animate().center(sliderX, sliderYMin + (sliderYMax - sliderYMin) * windspeedTarget)
})
.attr({'cursor': 'pointer'})


function currentWindspeed() {
  return (sliderHandle.cy() - sliderYMin) / (sliderYMax - sliderYMin)
}

function powerOutput(ratio, cableState, transitionState) {
  if (cableState == 0) {
    return 0
  }

  if (cableState != 1) {
    return -0.1
  }

  if (ratio >= 0.2 && ratio < 0.5) {
    return ratio * 2 * transitionState
  } else  {
    return 1 * transitionState
  }
}


// update is called on every animation step
function update(dt) {

  var windspeed = currentWindspeed()
  var stateDirection = (windspeed < 0.9 && windspeed > 0.2) ? 1 : -1
  var output = powerOutput(windspeed, kite1.cable(), kite1.transition())
  powerSignState += dt * output
  powerSignState = (powerSignState+1)%1

  kite1.update(dt, stateDirection, windspeed)
  kite2.update(dt, stateDirection, windspeed)
  tether.setKitePositions(kite1.xpos(), kite1.ypos(), kite2.xpos(), kite2.ypos())

  line1.plot.apply(line1, tether.getMainTether())
  line2.plot.apply(line2, tether.getTether1())
  line3.plot.apply(line3, tether.getTether2())

  label1.text( (1000 * output).toFixed(0) + ' kW')
  label2.text( (25 * windspeed).toFixed(0) + ' m/s')

  let cp = getCablePoint(powerSignState)
  powerSign.center(cp.x, cp.y)
}

var lastTime, animFrame

function callback(ms) {
  // we get passed a timestamp in milliseconds
  // we use it to determine how much time has passed since the last call
  if (lastTime) {
    update((ms-lastTime)/1000) // call update and pass delta time in seconds
  }

  lastTime = ms
  animFrame = requestAnimationFrame(callback)
}

callback()

//
// SVG.on(document, 'keydown', function(e) {
//   stateDirection = e.keyCode == 40 ? -1 : e.keyCode == 38 ? 1 : 0
//   console.log(stateDirection);
//   e.preventDefault()
// })
//
// SVG.on(document, 'keyup', function(e) {
//   stateDirection = 0
//   e.preventDefault()
// })

// draw.on('click', function() {
//   if(vx === 0 && vy === 0) {
//     vx = Math.random() * 500 - 150
//     vy = Math.random() * 500 - 150
//   }
// })
