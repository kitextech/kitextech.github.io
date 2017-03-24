---
layout: default
title: {{ site.name }}
---

**Latest: Marts 20th**
Our first autonomous flight in positional hover control mode. Position commands are send from our ground control software running on the laptop. The kite is aware of the tether point and takes any position commands and translate it into movement on the sphere of possible locations. Additional thrust in the direction of the tether towards the kite is added to keep a constant tether tension. **[Video: Tethered Manual Flight  ](https://youtu.be/75YdklYrvOs)**, **[Video: Positional Ground Control](https://youtu.be/NPD7NFguqek)**

![Gif of SuperQ tethered positional flight mode outdoor](/images/SuperQPositionFlight.gif)

## What are you making?
We build a new type of wind turbine that consists of very large fixed wing kites that can generate energy using a fraction of the material a traditional wind turbine requires. This translates to lower costs and simpler maintenance.

### How does it work?

A stiff kite made of carbon fibre and sized like a small plane is connected via a kilometre long tether to a base station and flies some 200 meters above the sea. The wind causes the kite to fly around in large circles at speeds significantly faster than the wind.

![Kite Energy Concept](/images/workPart1@2x.png){:class="width50percent"}

On the wings of the kite are mounted small turbines that are made to rotate when the kite flies through the air. They are connected to generators that produce electricity, which is then sent down the wire to the base station

![Kite Energy Concept](/images/workPart2@2x.png){:class="width50percent"}

When the wind drops or there is a storm coming, the kite automatically flies down to the base station in the manner of a quadcopter.

![Kite Energy Concept](/images/workPart3@2x.png){:class="width50percent"}


The kite then stays on the base station until the weather conditions improve, at which point it will fly back out, again automatically, to its normal position and start generating power again.

![Kite Energy Concept](/images/workPart4@2x.png){:class="width50percent"}

## Pitch
We have applied to YCombinator, a Silicon Valley accelerator program, to join the summer 2017 batch. The application gives a good overall insight into what we are doing, in order not duplicate the description and for those interested in the actual application we have decided to put it online as is [S2017 batch Application ](http://kitex.tech/yc-2017S/).

In case you have unanswered technical questions we have tried to answer most of them on up front [critical questions](http://kitex.tech/critical-questions/)

### Why are kites better?
Traditional wind turbines are often the preferred solutions when creating new power plants due their low price per watt and low environmental impact. **Using kites as a mean of capturing wind energy has the potential to significantly reduce the cost of energy, not just compared to other renewable sources.**

![Kite Energy Concept](/images/sweptArea.png){:class="width50percent"}

The amount of energy that you can extract from the wind is broadly proportional to the **swept area** (the area that e.g. the wings of a wind turbine cover as they rotate). Using a large kite tethered to the ground you can cover the same swept area as the wings of a traditional windmill using a significantly lighter support structure. The tether replaces most of the tower and foundation, as well as the inner parts of the wings (which capture very little energy).

### Computing power

While kites have been used to harness the power of the wind for utilitarian purposes since ancient times (lifting men, pulling cargo etc) wind power stations using kites are only appearing now. This is due in large part to the fact that they, especially the most efficient variants, require relatively sophisticated computer control systems. The dramatic fall in the cost of computing power makes kite energy a much more viable approach than just a decade ago. Combined with recent strides in materials technology makes this a very exciting and rewarding time to develop kite energy.

## Our Purpose
We will be promoting and developing kite technology in order to create a future where renewable energy is the most cost effective option. Cheaper energy will help societies reduce the average amount of "hard" work required to sustain a given living standard, freeing up time for more valuable pursuits. We find the reflections in these answers quite interesting: [Quora - if energy was free](https://www.quora.com/If-energy-was-free-and-renewable-how-would-the-economy-be-fundamentally-different-from-what-it-is-now)

In order to promote this future the company KiteX will be focusing on research and development of kite-systems and we will be disseminating our findings to the largest extent possible, while ensuring that viability of our own business.

## <a name="team-link" class="anchor"></a>Team

### Andreas Bruun Okholm
I have a mixed design, mechanical and aerospace degree from the Technical University of Denmark and University of Adelaide. Doing my master degree I created a smartphone based wind measuring tool, which provide value adding functionality to traditional wind meters and most importantly allows kite-surfers (and other wind users) to share ultra local wind information. I worked on this project (called Vaavud) for 3 years doing both hardware and software development. We managed to create the most sold smartphone wind meter in the world -- and the first one to measure wind direction.

I have for a long time been fascinated by the power of kites, and been using them for surfing for the past 10+ years. Being able to work with kites is really fascinating and I find that it allows me to make use of most of my toolset: mechanical engineering, aerodynamics, programming, startups and most importantly it gives a feeling of making a positive impact.

![Wind meter testing in Norway]({{ site.github.url }}/images/AndreasNorway.jpg)

### Gustaf Kugelberg

An avid kitesurfer since 8 years, my educational background is in pure and applied mathematics, with a touch of liberal arts -- I took a M. Sc. Eng. in technical physics, and studied mathematics, Archaeology, Greek, Latin, Russian and Japanese on the side.

I have worked as a management consultant at Oliver Wyman, helped launch a small but very successful compensation consultancy, advised startups in industries ranging from construction innovations to mineral prospecting and for the last 5 years I have also been developing software, most notably for Vaavud, mentioned above, and Realm.

![Gustaf in Amman, Jordan]({{ site.github.url }}/images/profilephoto.jpg)


### Want to team up?
Do you share our vision for a the kite powered future? Get in touch!


## Key Advisors

### Mac Gaunaa
Mac Gaunaa is a senior researcher at Technical University of Denmark department of Wind Energy working with wind turbine aerodynamics and aeroelasticity. Mac has a PhD in fluid mechanics, has 19 years of experience with fluid dynamics and aerodynamics, and is one of a few researchers in Denmark with experience in aerodynamics and performance modeling of energy kite systems.

### Marc Münzer
Marc has over 10 years of experience working with intellectual property. Further Marc has PhD in electromechanical systems design and a background in fluid mechanics.

### Rolf Østergaard
With over 25 years of electronic hardware development experience. Rolf has a huge professional network and is a valuable critical resource when it comes to strategic decisions and anything electronic.


## <a name="progress-link" class="anchor"></a>Progress
Our path towards commercially viable kite energy is designed with the philosophy of dealing with the most difficult problems first - a complete autonomous self-starting and landing kite. Steps 1 and 2 below are the progressions towards this.

1. Create an autonomously flying kite (**Achieved**)
2. Create a fixed wing flying kite (**Achieved**)
3. Create a tethered drone that can take off and land autonomously ((**Work in progress**)
4. Combine 2 and 3 into a completely autonomous kite
5. Add energy generation
6. Scale it up to commercially viable proportions

We try to keep a updated [List of prototype developments](/prototypes).


## Competitive landscape

While there are currently 100+ organisations involved in airborne wind energy [reference](http://energykitesystems.net/AWEstakeholders/index.html) in varying fields and stages, few have reached commercial viability. These three companies in particular stand out:

* Makani. Founded in 2006. Developing a hard wing with mounted generators and engines for control and power generation. Should be starting a trial with a 600 kW version in Hawaii very soon. Investment in 2006 and 2008 of a combined of 15 million USD [reference](http://www.itechpost.com/articles/9658/20130523/google-x-makani-power-make-traditional-wind-energy-obsolete.htm). [website](https://www.google.com/makani/). [wikipedia](https://en.wikipedia.org/wiki/Makani_Power).  
* Ampyx Power. Founded in 2008. Developing a hard wing, sailplane line, kite with ground based generator. Total investment of at least 4.5 million euro [reference](https://www.ampyxpower.com/partners). [website](https://www.ampyxpower.com).
* SkySails. Founded in 2001. Developing a soft kite with ground based generator. Has experience from developing a 300 m2 kite for pulling cargo ships. Investment in research in kite related activities to date 50 million euros [reference](http://www.skysails.info/english/power/development/). [website](http://www.skysails.info/).


## <a name="contact-link" class="anchor"></a>Contact

![Office, Founders House Copenhagen]({{ site.github.url }}/images/OfficePanorama.jpg)

```
KiteX c/o Founders House
Njalsgade 21G, 7th floor,
2300 Copenhagen S

Company Name: KiteX IVS
CVR: DK38029126
Mail: andreas at kitex.tech
```
