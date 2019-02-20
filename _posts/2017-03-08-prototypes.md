---
layout: default
---

# Prototype Developments
We focus on quick iterations and creating simple prototypes that ideally only introduces a few new concepts in iteration. Here the main results are presented.


### 24 hours continuous hover test at DTU Risø
**November 24th 2018**
We wanted to test the durability of our newly developed electronics, which is able to both send power to the kite and from the kite to the ground through the tether. The test was carried out over 24 hours at DTU Risø in Roskilde.
**[Video: 24 hours hover test](https://youtu.be/-1QjWeb71Zo)**
<video autoplay loop>
  <source src="/video/24hoursHover.mp4" type="video/mp4">
Your browser does not support the video tag. A video of the transition should be here.
</video>


### Two kites sharing the same tether
**January 24th 2018**
Having two kites sharing most of the same tether it's possible to quadruple the power output. This is the worlds dual kite flight although the kites needs to fly in opposite phase in order to achieve the efficiency gain.
**[Video: Dual kites looping](https://youtu.be/WOmom0_ziv0)**
<video autoplay loop>
  <source src="/video/dualLoop.mp4" type="video/mp4">
Your browser does not support the video tag. A video of the transition should be here.
</video>


### Autonomous looping
**August 24th 2017**
Finally completed full autonomous looping in crosswind flight. We still need to do a few more tweaks for the control algorithm, but soon we can move on to dual kite testig.
**[Video: Autonomous looping with HUD](https://youtu.be/Kbe4u23m5MM)**
<video autoplay loop>
  <source src="/video/autonomousLoop.mp4" type="video/mp4">
Your browser does not support the video tag. A video of the transition should be here.
</video>


### Physics simulation
**July 19th 2017**
To develop new control strategies and kite designs we have developed a new kite/drone physics simulation. **[Detailed description.](/blog/kite-energy-sim)**
<video autoplay loop>
  <source src="/video/kiteEnergySimulation.mp4" type="video/mp4">
Your browser does not support the video tag. A Video of a kite energy simulation would be here.
</video>

### Upgrade transition algorithms
**July 16th 2017**
We decided to try and improve the robustness of our transition algorithm (from hovering to flying like a kite/plane in the wind)
**[Video: Improved VTOL transition.](https://youtu.be/OlNdLrQOFSE)**
<video autoplay loop>
  <source src="/video/improvedVTOL.mp4" type="video/mp4">
Your browser does not support the video tag. A video of the transition should be here.
</video>


### SuperQ Position Controlled Outdoor Hover

**March 20th 2017**
Our first autonomous flight in positional hover control mode. Position commands are send from our ground control software running on the laptop. The kite is aware of the tether point and takes any position commands and translate it into movement on the sphere of possible locations. Additional thrust in the direction of the tether towards the kite is added to keep a constant tether tension.

**[Video: Tethered Manual Flight  ](https://youtu.be/75YdklYrvOs)**

**[Video: Positional Ground Control](https://youtu.be/NPD7NFguqek)**

![Gif of SuperQ tethered positional flight mode outdoor](/images/SuperQPositionFlight.gif)


### SuperQ Tethered Indoor flight

**March 8th 2017** First successful tethered flight of our kite that will be able to take of and land like a drone. We are working on optimizing the flight control software before we continue with outdoor testing. **[Video clip](https://youtu.be/QKZIdXsHDRg)**

![Gif of SuperQ flying indoor](/images/SuperQTetheredIndoor.gif)


### Fixed Wing Kite

**November 1st 2016** We believe that fixed wing (or hard kites) will be the most economical form of airborne energy due to their better Lift to Drag ratios and higher longevity. We succeeded in creating a radio controlled flying fixed wing kite gaining valuable practical insights into the flight dynamics of such a system and construction techniques. [detailed description]({% post_url 2016-11-01-FW001-first-radio-controled-fixed-wing-kite %}) **[Video clip](https://youtu.be/9TSOK74dM5k)**

![Gif of AK003 fixed wing flying](/images/AK003FixedWing.gif)


### Autonomous Flight control

**September 13th 2016** One of the key technologies need to master kite wind energy is the ability to develop an active control system that's able to guide the kite autonomously following a given path. We succeesfully tested such a system with a two line soft-kite. The position was captured using a smartphone camera.  [detailed description]({% post_url 2016-09-13-AK002-first-self-flying-kite %}) **[Video clip](https://youtu.be/O_YaRTxpii8)**

![Gif of AK002 flying autonomously](/images/AK002Flying.gif)
