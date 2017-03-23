---
layout: default
---

# Prototype Developments
We focus on quick iterations and creating simple prototypes that ideally only introduces a few new concepts in iteration. Here the main results are presented.

### SuperQ Position Controlled Outdoor Hover

**Marts 20th**
Our first autonomous flight in positional hover control mode. Position commands are send from our ground control software running on the laptop. The kite is aware of the tether point and takes any position commands and translate it into movement on the sphere of possible locations. Additional thrust in the direction of the tether towards the kite is added to keep a constant tether tension.

**[Video: Tethered Manual Flight  ](https://youtu.be/75YdklYrvOs)**

**[Video: Positional Ground Control](https://youtu.be/NPD7NFguqek)**

![Gif of SuperQ tethered positional flight mode outdoor](/images/SuperQPositionFlight.gif)


### SuperQ Tethered Indoor flight

**Marts 8th** First successful tethered flight of our kite that will be able to take of and land like a drone. We are working on optimizing the flight control software before we continue with outdoor testing. **[Video clip](https://youtu.be/QKZIdXsHDRg)**

![Gif of SuperQ flying indoor](/images/SuperQTetheredIndoor.gif)

### Experimental Drone Tech

**January 24th** Multiple drone prototypes (dual, quad-rotored and a flying wing), has been build over the past two months. Parts and construction material has now been ordered to start the build of a 1.4 meter combined kite and flying drone.


This is the first time we flew the Pixhawk (PX4) flight controller on a DJI 450 Flamewheel frame. This test was carried out under a study trip to Shenzhen, China to learn more about drone flight controllers.

![Gif of first Pixhawk Flight](/images/AK004DroneIndoor.gif)

We build a fixed wing autonomous drone in order to test the accuracy of the positioning system. While the positioning was satisfactory in early test. We did eventually encounter an error, which let to the crash while in autopilot mode.  

![Crashed fixed wing autonomous flight](/images/AK005FixedWingCrash.jpg)

We developed a simple prototype to test the stability of a dual rotor kite system while in hovering mode. While it was possible to stay in a controlled tethered hover we experienced large low frequency pitch oscillations. This could possibly be countered by active aerodynamic control surfaces, but we opted to use 4 rotors for the next generation prototype.

![Dual Rotor flight](/images/AK006DualRotor.jpg)


### Fixed Wing Kite

**November 1st** We believe that fixed wing (or hard kites) will be the most economical form of airborne energy due to their better Lift to Drag ratios and higher longevity. We succeeded in creating a radio controlled flying fixed wing kite gaining valuable practical insights into the flight dynamics of such a system and construction techniques. [detailed description]({% post_url 2016-11-01-FW001-first-radio-controled-fixed-wing-kite %}) **[Video clip](https://youtu.be/9TSOK74dM5k)**

![Gif of AK003 fixed wing flying](/images/AK003FixedWing.gif)


### Autonomous Flight control

**September 13th** One of the key technologies need to master kite wind energy is the ability to develop an active control system that's able to guide the kite autonomously following a given path. We succeesfully tested such a system with a two line soft-kite. The position was captured using a smartphone camera.  [detailed description]({% post_url 2016-09-13-AK002-first-self-flying-kite %}) **[Video clip](https://youtu.be/O_YaRTxpii8)**

![Gif of AK002 flying autonomously](/images/AK002Flying.gif)
