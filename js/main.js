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
    updateState: function(dt, direction) {
      this.state += dt * direction
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
      return this.cable() * (this.rotationX + this.radius * Math.cos(this.phase + this.phaseOffset)) +
        (1-this.cable()) * this.baseX
    },
    ypos: function() {
      return this.cable() * (this.rotationY + this.radius * Math.sin(this.phase + this.phaseOffset)) +
        (1-this.cable()) * this.baseY
    },

    update: function(dt, stateDirection, windspeed) {
      this.updateState(dt, stateDirection)
      this.phase += dt * 3 * windspeed * this.transition()
      this.phase = this.phase > 2 * Math.PI ? this.phase - 2*Math.PI : this.phase

      this.transform({
        x: this.xpos(),
        y: this.ypos()
      })
      .transform({
        rotation: this.transition() * (this.phase + this.phaseOffset + Math.PI) / Math.PI * 180 + 180
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
      newKite.baseX = (typeof o.baseX !== 'undefined') ?  o.baseX : 100;
      newKite.baseY = (typeof o.baseY !== 'undefined') ?  o.baseY : 300;
      newKite.rotationX = (typeof o.rotationX !== 'undefined') ?  o.rotationX : 400;
      newKite.rotationY = (typeof o.rotationY !== 'undefined') ?  o.rotationY : 100;
      newKite.phaseOffset = (typeof o.phaseOffset !== 'undefined') ?  o.phaseOffset : 0;
      newKite.radius = (typeof o.radius !== 'undefined') ?  o.radius : 100;

      return newKite
    }
  }
})


// define document width and height
var width = 832, height = 400

// create SVG document and set its size
var draw = SVG('drawing').size(width, height)
draw.viewbox(0,0,width,height)

// draw background
var background = draw.rect(width, height).fill('#dde3e1')
var base = {x: 100, y: 350}

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
  .fill('#610699').stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#610699' })

var kite2 = draw.kite(kiteShapeScaled, {baseX: 200, phaseOffset: Math.PI})
  .fill('#610699').stroke({ width: 4, linecap: 'round', linejoin: 'round', color: '#610699' })


// tethers
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


// define inital player score
var powerGeneration = 0

// create text for the score, set font properties
var label1 = draw.text(powerGeneration+' kW').font({
  size: 32,
  family: 'Menlo, sans-serif',
  anchor: 'end',
  fill: '#fff'
}).move(width-10, 10)

var label2 = label1.clone().move(width-10, 40)

// Slider

var windspeed = 0.5

var sliderX = 600
var sliderYMax = 100
var sliderYMin = 300
var sliderXCurrent = 240

function sliderYcurrent() {
  return sliderYMin + windspeed
}

var sliderBase = draw.line(sliderX,sliderYMax,sliderX,sliderYMin).stroke({ width: 3, color: '#333', linecap: 'round', linejoin: 'round' })
// var sliderFill = draw.line(sliderX,sliderXCurrent,sliderX,sliderYMin).stroke({ width: 3, color: '#610699', linecap: 'round', linejoin: 'round' })
var sliderHandle = draw.circle(30).center(sliderX,sliderXCurrent).fill('#610699')

var windButton = draw.rect(40,40).center(sliderX, sliderYMin + 50).fill('#610699')
  .click(function() {
    windspeedTarget = Math.random()
    sliderHandle.animate().center(sliderX, sliderYMin + (sliderYMax - sliderYMin) * windspeedTarget)
  })

var stateDirection = 0
var windspeed = 1



// update is called on every animation step
function update(dt) {

  windspeed = (sliderHandle.cy() - sliderYMin) / (sliderYMax - sliderYMin)
  stateDirection = (windspeed < 0.9 && windspeed > 0.2) ? 1 : -1

  kite1.update(dt, stateDirection, windspeed)
  kite2.update(dt, stateDirection, windspeed)
  tether.setKitePositions(kite1.xpos(), kite1.ypos(), kite2.xpos(), kite2.ypos())

  line1.plot.apply(line1, tether.getMainTether())
  line2.plot.apply(line2, tether.getTether1())
  line3.plot.apply(line3, tether.getTether2())
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


SVG.on(document, 'keydown', function(e) {
  stateDirection = e.keyCode == 40 ? -1 : e.keyCode == 38 ? 1 : 0
  console.log(stateDirection);
  e.preventDefault()
})

SVG.on(document, 'keyup', function(e) {
  stateDirection = 0
  e.preventDefault()
})

// draw.on('click', function() {
//   if(vx === 0 && vy === 0) {
//     vx = Math.random() * 500 - 150
//     vy = Math.random() * 500 - 150
//   }
// })
