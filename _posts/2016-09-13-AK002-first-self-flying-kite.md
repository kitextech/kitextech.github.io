---
layout: default
category: prototypes
---

### Autonomous Kite 002 **[Video clip](https://youtu.be/O_YaRTxpii8)**
On September the 13th, 2016 we managed to carry out the first successful autonomous flight - Check out the video link above.

The system consists of a kite, a motorized kite steering system, a laptop for control and a smartphone for video tracking.
![Image of AK002 Setup]({{ site.github.url }}/images/AK002Setup.jpg)

**Significant mechanical parts:**

* The kite is two lined foil kite HQ Symphony PRO 1.3. The kite were chosen for being the smallest high quality foil kite available. Being so small meant the pull would be the least powerful giving the stepper motor the best chance for staying in control. Thanks to [Dragestedet - Symphony](http://dragestedet.dk/product.asp?product=4179) for aiding in selecting the best kite. Chose the rainbow color options for best standout against the sky and grass.
* Ronstan Series 20 Orbit blocks. Weighting only 9 grams each these 250 kg (working load) pulleys are light enough not to fall down and effecting the control in light wind and strong enough for the most serious gust.
* NEMA-17 42BYGHW811 Stepper motor. This seems to be one of the most powerful (High torque and high speeds) NEMA-17 Steppers available. High Rated Current, Low Resistance and phase Inductance! [ArduinoTech.dk stepper](https://arduinotech.dk/shop/stepper-motor-nema17-42byghw811/) sells this motor incredible cheap seems to deliver reliably.
* Solid storm anchors with the eye close to the ground. While this isn't a specific model we have been very happy with the performance of these *camping* storm anchors [Campingshop.dk](http://www.campingshop.dk/stormanker-med-oeje.aspx)

![Image of AK002 Drive Assembly]({{ site.github.url }}/images/AK002KiteDriveAssembly.png) Write me if you want to get some of the Fusion 360 CAD files.


**Significant electronics parts:**

* EPS8266 Adafruit Huzzah - A full featured easy to use WIFI microcontroller. [Flikto.de](https://www.flikto.de/products/adafruit-huzzah-esp8266-breakout) Everything has been working smoothly Once we figured out that we couldn't power it reliably from the laptop USB Power source and instead used a LiPo battery while being connected with a serial connection with a FTDI cable.
* Arduino Pro Mini 3V 8Mhz. A left over component we had - we will choose a more powerful microcontroller for the stepper motor control next time. Like a Teensy 3.2 or faster.
* DRV8825 Stepper motor driver. These drivers are cheap and can handle up to 2.2 Amps and 45 Volt, which is a lot for the small package and price.
* 120 W DC Boost Converter [ebay.co.uk](http://www.ebay.co.uk/itm/272121657453) Perhaps a bit overkill for this application (in terms of current), but it allowed me to get a 38 Volt stepper drive current cheaply.
* Batteries - we have been using a 14.4 Volt 1.5 Ah Lithium-ion battery from a Bosch powertool as the main Motor supply. Could be replaced by a 4 cell lithium-polymer battery. For the logic electronics we have been using a 2000 mAh (ish) 3.7 V single cell lithium-polymer battery from a Power bank.

We also used a Macbook Air and an iPhone 6, but really any laptop and a reasonably powerful smartphone would do.

#### Data flow

The camera observes the position of the kite and estimates the coordinate that best the describes the current position of the kite. This data is sent over Websocket connection over WIFI to the laptop. In a browser windows the tracking data can be observed in realtime and the kite position can be extrapolated in case of shorter tracking problems. The required control input is calculated and send off the ESP8266 microcontroller (also through a websocket over WIFI). From here the information goes to the Arduino which is solely responsible for controlling the step timing of the stepper motor. See the information flow diagram below

![Image of the AK002 dataflow]({{ site.github.url }}/images/AK002DataFlow.jpg)

#### Source code and more can be found under the specific projects

* [ESP8266 Websocket and i2c master code](https://github.com/aokholm/KiteXEspWsSlave)
* [Arduino Pro Mini i2c slave and stepper controller](https://github.com/aokholm/KiteXFastStepper) we simplified the AccelStepper library and optimized it for this use case. Large performance gains by precomputing the acceleration profile. Up from 2000 to 8000 steps per second.
* [iOS GPU Accelerated Kite Tracking app](https://github.com/aokholm/KiteXKiteVideoTracking) Thanks to Brad Larson for providing this wonderful framework for doing video manipulation [GPUImage2](https://github.com/BradLarson/GPUImage2)
* [Mission Control - Node.js websocket server and web interface and path following algorithms](https://github.com/aokholm/KiteXMissionControl)
* [Kite AI Neural Netowrk - not in use](https://github.com/aokholm/KiteXAI) Using a neural network to the control kite. It does work in the simulator, but currently not in use as we opted for using a pure pursuit path following algorithm instead.
