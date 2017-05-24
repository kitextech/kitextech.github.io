---
layout: default
category: secret
description: The story of how we didn't get in to Y Combinator (this time)
---

# Cost of wind turbines turbines

A analysis of the competitiveness of a kiteX vs a traditional turbine.

## Cost of traditional wind turbines

Traditional cost of a installed wind turbine for different sizes.

| Rated Power   | Typical cost  | Cost per watt  | Example model                   |
| ------------- |--------------:| --------------:| ------------------------------- |
| 1 kW          | € 7,000       | € 7            | Zephyr Airdolphin Mark-Zero 24V |
| 10 kW         | € 60,000      | € 6            | FuturEnergy AirForce 10         |
| 100 kW        | € 500,000     | € 5            | Northern Power 100              |
| 1,000 kW      | € 2,000,000   | € 2            | Enercon E53/48/44               |
| 10,000 kW     | € 20,000,000  | € 2            | MHI-Vestas V164                 |

Most turbines is designed with a 20 year lifespan and an expected service cost of about 20% of the initial investment. Further on average the capacity factor (the ratio between produced power and the potential power output if operating at rated power consistently) of modern turbine installation is between 30 and %.

## Cost of KiteX turbines

| Rated Power   | Typical cost ' | Cost per watt ' | Example model |
| ------------- |---------------------:| ---------------:| ------------- |
| 100 kW        | € 120,000             | € 1.2           | KiteX k100          |
| 1,000 kW      | € 1,200,000            | € 1.2           | KiteX M1            |

' Cost without profit for the turbine. We are of cause not going to sell them this cheaply..!


### Cost breakdown comparison

Let's try and compare a typical wind turbine with a KiteX wind turbine to understand give a better insight to why our system can be so much cheaper. We will compare the 1MW model


| Component | Conventional 1 MW (k€) | KiteX M1 (k€) |
|-----------|-------------------------------:|--------------:|
| Tower / Tether | 337 | 22|
| Rotor / Main wing + Propellers | 302 | 132|
| Gearbox | 165 | - |
| Generator | 44 | 100 |
| Power converters | 64 | 85 |
| Transformers | 46 | 65 |
| Main bearing/swivel | 16 | 50 |
| Ground station | - | 100 |
| Other | 307 | 200 |
|  |  |  |
| Foundation | 320 | 32 |
| Grid connection | 220 | 220 |
| Planning and misc. | 180 | 180 |
| **Turbine incl. onshore foundation** | **2000** | **1186** |

*Cost Assumption and things to note:*

* Main cost saving comes from the reduced cost of the tower, rotor and foundation.
* In this example we compared to a turbine with a gearbox and a "cheap" generator. This motor plus generator system of the kite system should be much cheaper since it's operated at much higher RPM.  
* Power electronics in the Kite is more expensive since extra conversion steps is needed to transmit the power through the tether and full bi-directional transformation i needed for the hovering phase.
* The price for the main wing and propellers for the kite could drop with as much as 70% as production volume of carbon fiber components increases over the next 10 years.
* Tether prices is purely based on the cost a standard aluminium single core power cables plus the required Dyneema line for tension.
* The ground station cost is a very rough estimate.     

We believe that most of the above cost scale linearly both down to 100 kW and up to a 5 MW system.
