---
layout: default
title: {{ site.name }}
---

## Wind Catcher
Wind Catcher is a revolutionary new one-of-a-kind wind turbine. It is lighter, more powerful and easier to use than any other wind power system and weighs just 10kg!

![KiteX Van Shot](/images/KiteXWindCatcherVanFrog.jpeg)
 
 
* **Portable**: Easily packed up and carried, setup in 15 minutes by one person
* **Powerful**: Charge eBikes, electronics, appliances to backup batteries
* **Constant**: Works during the day and night, even at low 8mph speeds
* **Eco-friendly**: Clean renewable energy, using recycled plastics throughout
* **Lightweight**: Weighs only 10kg (22lbs), using strong glassfiber rods, and EPS foam
* **Compatible**: Works with portable generators like Jackery, Goal Zero, Bluetti etc.,
 
 

![Unique Selling Points](/graphics/UniqueSellingPointsBlack.png)

Very easy to transport and is designed to run quietly
We've designed Wind Catcher for your adventure. When you need it, simply unpack it, set it up and start generating power. Wind Catcher is made with lightweight 2 meter long glass-fiber elements. Everything can be stored and transported with ease.
We made Wind Catcher to emit a very low noise. It’s not silent like solar panels, but 20 meters away you won’t hear it, as it blends into nature and we've used state of the art aeroacoustics simulation tools.

**Works in low wind**  
We've designed Wind Catcher to start producing power in low winds, unlike other small wind-turbines.  Wind Catcher Lite will start making usable energy e.g. charging a laptop (50W) at around 4 meters pr. second [9 mph] wind speed.
This means you don't have to camp in the most windy places to start producing usable power.  The larger version of Wind Catcher will make 600W at 8 m/s [18mph] wind.

![Power Curve](/graphics/PowerCurve.png)

### Technical Overview

| Specification  | value |  
|:-----------------------|:----------------------------------|
| **Rated Power** | 200W (Windcatcher Lite, 5.5m/s), 600W (Windcatcher, 7.5 m/s) |
| **Single blade mass**  | 0.2 kg  |
| **Turbine with anchors mass**  | 10 kg |
| **Voltage** | 19.8-22.8V (Windcatcher Lite), 42.0-45.6V (Windcatcher) |
| **Wind speed (Operational Range)**  | 2 - 15 m/s. Survival, 15 - 22 m/s |
| **Rotational Speed (max)**  | 140 RPM |
| **Noise Levels**  | we need to measure this |
| **Hub Height**  | 4.0 m |
| **Swept Area**  | 9.42 m^2 |
| **Rotor Diameter**  | 2.05 m |
| **Anchors Holding Force**  | 40 kg (minimum) |
| **Number of Rotating Blades**  | 3 |
| **Gear Ratio**  | 1 to 23.4 |
| **Generator Nominel Torque**  | 2.2 Nm |
| **Weather Rating**  | Rain/snow proof. Electronics controller box not submersible. IP54 rated. |
| **Full rated power temperature range**  | -10 to 30 deg C |

 


## HookUp Guide

### HookUp Basic
One of the easiest ways to get started with using wind catcher is by plugging the portable wind turbine directly into the PV port of a portable power station. The main thing to consider is that the DC voltage of your wind catcher should be less than the maxmium rating of your portable power station. 
![HookUpGuideBasic](/graphics/HookUpGuideBasic.png)


### HookUp Parrallel Connection
One of the cool ways to use wind catcher is by hooking it up in parallel with a solar panel such that you have the opptunity to capture clean energy night and day!. Just remember to use blocking diodes such that the current is not reversed through the solar panel or wind turbine! We can also supply these blocking diodes build into an MC4 to MC4 plug. 
![HookUpGuideParrallelConnection](/graphics/HookUpGuideParrallelConnection.png)


### HookUpAdvanced
If you already have a battery system or just want more modularity compared to using a portable power station, then it's possible to connect the system to a generic MPPT charge controller and it will take care of keeping your batteries charged. You can not use a PWM charge controller unless it includes a current limiting device. 
![HookUpAdvanced](/graphics/HookUpAdvanced.png)          


## WindcatcherLabels 
Wind catcher employs an innovative design in order to make it super lightweight. The overhung rotor blades are inspired by looping kites and thier power are transfered through the lines to the main gear. The gear increases the rotational speed and drives the permanent magnet brussless direct current motor (PM BLDC). Below we added an illustration showing the different maing of components.
![WindcatcherLabels](/graphics/WindcatcherLabels.png)


## Size 
Wind catcher is build around the use of high performance composite rods manucatured in 2 meter sections. 2 meter is the longest length that can easily be shiped by regular mail. These sections are extremely tought and weather resistant. This has resulting in a 2 meter rotor radius and a tower height of 4 meters. Certainly much larger than any other portable wind turbine and larger than most small wind turbines that can be brought online and installed without a crane.
![Turbine2DMeasurements](/graphics/Turbine2DMeasurements.png)
        

## Anchoring
Anchoring the turbine is fairly important. Each anchor need to be able to withstand an pulling force in the direction of the guywire of at least 40 kg / 88 lb / 392 N if you want to used the turbine though it's entire operational range. The anchors that comes with the kit are designed for these loads if incerted to the specified depth for the given anchor. 

### Topview
In order to ensure that the load carry capacity of the guy wires isn't exceeded it's important to evenly space out the guy wires.
![AnchroingTopview](/graphics/AnchroingTopview.png)
![AnchroingDifferentScenairos](/graphics/AnchroingDifferentScenairos.png)    


### Sloping terrain
The turbine can be setup on gound that's up to 12 (deg) inclinded. The belts at the bottom are adjustable to account of the difference in required guy wire length.
![AnchoringSlope](/graphics/AnchoringSlope.png)         



## Turbine Control

### Wind Catcher Turbine Control.
Wind catcher employs a sofisticated control architecture for it's size. In order to pack so much power per mass we need a control system that would be able to accurately control the rotational speeed of the turbine in all wind speeds. We included a build in batter into the control box such that the turbine has a place to put excess power in case of the external batteries doesn't accept any more power. The power of the wind can quickly change and the build in-battery can also absorb some of this variation. 

Finally this type of control allows us to optimised the rotational speed of the turbine for any given wind speed increasing power output significantly. 
![WindcatcherControlBox](/graphics/WindcatcherControlBox.png)


### SmallWindTurbineControl
A small wind turbine does not typically come with a build in control system. Often a specialised wind turbine MPPT/PWM Controller with both a battery and dump load. Since the turbine needs a place to dump it's power if it's windy, but the batteries are already charged.
![SmallWindTurbineControl](/graphics/SmallWindTurbineControl.png)


## Structural comparison
KiteX Wind Catcher transfer the loads from the blades through the blade lines to the gear and from the gear through the guy wires to the ground. Using tension means the turbine is extremely lightweight. This gives a number of benefits:
![KeypointsComparison](/graphics/KeypointsComparison.png)
       

<section class="compatibilityChart" markdown="1">


## Power Station Compatibility 
We have listed the most common portable power stations. Check the electric speficications if your product is not on the list. 


#### Blueetti

|                      | AC 200 ![AC200](/images/pps/AC200.png) | EB240 ![EB240](/images/pps/EB240.png) |   AC50 ![AC50](/images/pps/AC50.png) |
|:---------------------|:----------------------------------|:----------------------------------| :---------------------------------|
| ![Wind Catcher Lite](/images/WindCatcherBreeze.png) | Not Compatible                     | Charging speed: 222 W             | Charging speed: 120W              |
| ![Wind Catcher](/images/WindCatcherStorm.png) | Charging speed: 530 W             | Charging speed: 444 W             | Not Compatible                    |

#### Jackery

|                      | Jackery 1000 ![Jackery 1000](/images/pps/Jackery1000.png) | Jackery 500 ![Jackery 500](/images/pps/Jackery500.png)    | Jackery 240 ![Jackery 240](/images/pps/Jackery240.png)  |
|:---------------------|:----------------------------------|:----------------------------------| :---------------------------------|
| ![Wind Catcher Lite](/images/WindCatcherBreeze.png) | Charging speed: 200W              | Charging speed: 200 W             | Charging speed: 100W              |
| ![Wind Catcher](/images/WindCatcherStorm.png) | Not Compatible                    | Not Compatible                    | Not Compatible                    |

#### Ecoflow

|                      | Delta 1300 ![Delta 1300](/images/pps/Delta1300.png)                      | r600  Delta 1300 ![r600](/images/pps/r600.png) |
|:---------------------|:----------------------------------|:----------------------------------|
| ![Wind Catcher Lite](/images/WindCatcherBreeze.png) | Charging speed: 222 W             | Charging speed: 200 W             | 
| ![Wind Catcher](/images/WindCatcherStorm.png) | Charging speed: 444 W             | Not Compatible                    |

#### Goal Zero

|                      | Yeti 1500x ![Yeti 1500x](/images/pps/Yeti1500x.png)                      | 
|:---------------------|:----------------------------------|
| ![Wind Catcher Lite](/images/WindCatcherBreeze.png) | Charging speed: 266 W           | 
| ![Wind Catcher](/images/WindCatcherStorm.png) | Charging speed: 600 W             |


## Wind Catcher electric specifications

|                        | ![Wind Catcher Lite](/images/WindCatcherBreeze.png) | ![Wind Catcher](/images/WindCatcherStorm.png) | 
|:-----------------------|:----------------------------------|:-----------------------------------|
| **Output Voltage (V)** | 19.8 - 22.8 V                     | 42.0 - 45.6 V                      |
| **Rated Power (W)**    | 200 W                             | 600 W                              |
| **Maximum Current**    | 20 A                              | 20 A                               |

The onboard protection circuit will shut off in case you try to pull more than 20 A. It's not intented to be used as a feature of regulation so please make sure that your system draws less than 20 A from Wind Catcher.


#### Output port 
Wind Catcher comes with a XT90 Output port. Included in the kit is the following adapters:
- XT90 to MX4
- XT90 to 8MM DC barrel connector used on Goalzero and Jackery. 

We also sell an optional Anderson Powerpole adapter.


</section>