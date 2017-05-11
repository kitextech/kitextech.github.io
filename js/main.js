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
      return this.cable() * (this.rotationX + 100 * Math.cos(this.phase)) +
        (1-this.cable()) * this.baseX
    },
    ypos: function() {
      return this.cable() * (this.rotationY + 100 * Math.sin(this.phase)) +
        (1-this.cable()) * this.baseY
    },

    update: function(dt) {

      this.phase += dt * this.transition()
      this.phase = this.phase > 2 * Math.PI ? this.phase - 2*Math.PI : this.phase

      this.transform({
        x: this.xpos(),
        y: this.ypos()
      })
      .transform({
        rotation: this.transition() * this.phase / Math.PI * 180
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

      return newKite
    }
  }
})


// define document width and height
var width = 1000, height = 400

// create SVG document and set its size
var draw = SVG('drawing').size(width, height)
draw.viewbox(0,0,width,height)

var base = {x: 100, y: 280}
var kite = {x: 300, y: 120, width:100, height: 10, rotation: 0, radius:100, velocity:1}

// draw background
var background = draw.rect(width, height).fill('#dde3e1')

// define kite width and height
var kite1 = draw.kite([[-kite.width/2,-kite.height/2], [0,kite.height/2], [kite.width/2,-kite.height/2]], {})
  .fill('#f00')
  // .center(kite.x,kite.y) //.dx(kite.radius)
  .stroke({ width: 3, linecap: 'round', linejoin: 'round' })
  .rotate(kite.rotation)

// draw line
var line = draw.line(base.x, base.y, kite.x, kite.y)
line.stroke({ width: 3, color: '#222', linecap: 'round', linejoin: 'round' })

var kite2 = draw.rect(30,30)
kite2.animate(4000).move(200,200).loop()

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
var stateDirection = 0


// update is called on every animation step
function update(dt) {
  // move the ball by its velocity
  kite.rotation += kite.velocity * dt

  kite1
  .updateState(dt, stateDirection)
  .update(dt)

  line.plot(base.x, base.y, kite1.xpos(), kite1.ypos())
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

draw.on('click', function() {
  if(vx === 0 && vy === 0) {
    vx = Math.random() * 500 - 150
    vy = Math.random() * 500 - 150
  }
})

function reset() {
  // visualize boom
  boom()

  // reset speed values
  vx = 0
  vy = 0

  // position the ball back in the middle
  ball.animate(100).center(width/2, height/2)

  // reset the position of the paddles
  paddleLeft.animate(100).cy(height/2)
  paddleRight.animate(100).cy(height/2)
}
