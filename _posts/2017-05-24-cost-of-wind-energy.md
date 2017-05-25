---
layout: default
category: secret
description: Cost competitiveness analysis of a KiteX turbine
---

# Cost of wind turbines

A analysis of the competitiveness of KiteX systems vs traditional turbines.

## Cost of traditional wind turbines

Traditional cost of an installed wind turbine for different capacities.

| Rated Power   | Typical price | Price per watt | Example model                   |
| ------------- |--------------:| --------------:| ------------------------------- |
| 1 kW          | € 7,000       | € 7            | Zephyr Airdolphin Mark-Zero 24V |
| 10 kW         | € 60,000      | € 6            | FuturEnergy AirForce 10         |
| 100 kW        | € 500,000     | € 5            | Northern Power 100              |
| 1 MW          | € 2,000,000   | € 2            | Enercon E53/48/44               |
| 10 MW         | € 20,000,000  | € 2            | MHI-Vestas V164                 |

Most turbines are designed with a 25 year lifespan and an expected service cost of about 20% of the initial investment. The average capacity factor (the ratio between produced power and the potential power output if operating at rated power consistently) of modern turbine system is about 30%.

## Cost of KiteX turbines

| Rated Power   | Typical cost°        | Cost per watt°  | Example model |
| ------------- |---------------------:| ---------------:| ------------- |
| 100 kW        | € 120,000            | € 1.2           | KiteX k100    |
| 1 MW          | € 1,200,000          | € 1.2           | KiteX M1      |
| 10 MW         | € 6,000,000          | € 1.2           | KiteX M5      |

°Note that this is the total _cost_ of an installed system

Comparing the cost of a KiteX system with the market price of a corresponding traditional turbine indicates that there is room for a gross margin of approximately 40% in the 1 MW size, and significantly more in the case of the 100 kW size.

### Cost breakdown comparison

Breaking down the cost of producing and installing a conventional system on the one hand, compared to a KiteX system on the other, shows how the cost can be so much lower. We will be using the 1 MW model for this comparison.

| Component                            | Conventional 1 MW (k€)         | KiteX M1 (k€) |
|--------------------------------------|-------------------------------:|--------------:|
| Tower/tether                         | 337                            | 22            |
| Rotor/main wing + propellers         | 302                            | 132           |
| Gearbox                              | 165                            | -             |
| Generator                            | 44                             | 100           |
| Power converters                     | 64                             | 85            |
| Transformers                         | 46                             | 65            |
| Main bearing/swivel                  | 16                             | 50            |
| Ground station                       | -                              | 100           |
| Other                                | 307                            | 200           |
|                                      |                                |               |
| Foundation                           | 320                            | 32            |
| Grid connection                      | 220                            | 220           |
| Planning and misc.                   | 180                            | 180           |
| **Turbine incl. onshore foundation** | **2000**                       | **1186**      |

*Cost Assumption and things to note:*

* The main cost saving comes from the reduced cost of the tower, rotor and foundation.
* In this example we compared to a turbine with a gearbox and a relatively cheap generator. Note that since the generator in the kite system has a very high RPM it does not need a gearbox, and the combined generator-transmission system is much cheaper on the kite.
* Power electronics in the kite are more expensive since extra conversion steps are needed to transmit the power through the tether. Additionally when hovering electric power is sent _to_ to kite, so full bi-directional transformation capcity is needed.
* The price of the main wing and propellers for the kite system could drop with as much as 70% as production volume of carbon fiber components increases over the next 10 years.
* The ground station cost is a very rough estimate.     

We believe that most of the above cost scale linearly both down to 100 kW and up to a 5 MW system.
