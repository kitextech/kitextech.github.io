---
layout: default
---

# Critical Questions

## How does it work?

A rigid wing made of composite material is connected via a conducting tether to the ground station. The wing is flying through the air about 10 times faster than the wind speed generating a large lift force which keeps the wing afloat and pushes the wing forward.

![Kite Energy Concept](/images/workPart1@2x.png){:class="width50percent"}

On the wing are mounted small turbines that are made to rotate when the kite flies through the air. They are connected to generators that produce electricity, which is then sent down the wire to the ground station.

![Kite Energy Concept](/images/workPart2@2x.png){:class="width50percent"}

When the wind drops or there is a storm coming, the kite automatically flies down to the base station in the manner of a quadcopter.

![Kite Energy Concept](/images/workPart3@2x.png){:class="width50percent"}

The kite then stays on the base station until the weather conditions improve, at which point it will fly back out, again automatically, to its normal position and start generating power again.

![Kite Energy Concept](/images/workPart4@2x.png){:class="width50percent"}

## Do you have any scientific support for claiming that dual kites is significantly more efficient?
The potential benefits of putting two kites on a single tether have been known for some time. It first appeared in the very first patent about high altitude wind energy in 1976 (1) and was described as the so-called ‘dancing planes’ concepts.

The efficiency advantages of a dual kite system stem mostly from being able to keep the main part of the tether still, instead of having it fly through the air, creating significant drag. It has been modeled in detail by Mario Zanon, Sébastien Gros, Joel Andersson and Moritz Diehl (2). With their assumptions a system to generate 3MW would in a dual kite configuration require total surface area of 45 m2 compared to 150 m2 for a single kite system. The advantage of a dual kite system decreases for very large system.

## Are there any existing patents standing in your way?
As mentioned above the idea of onboard power generation (even using two kites) has been known since 1976 and the patents covering the general concept has expired.

One potentially challenging patent is one submitted by Makani Power (now owned by Google) in 2013 (3) describing an energy kite with onboard power generation, which is able to take off and land, on a "perch", like a drone using its generators "in reverse" to provide thrust. We do believe we can adapt our solution to avoid infringing the patent, but some uncertainty still exist.

It seems that especially Google is currently trying their best to protect their investment through obfuscation by submitting a lot of patents. Historically very few of the thousands of patents within wind engineering have had any impact (4), (5).

We do recognize the importance of intellectual property and have and advisor to the team with more than 10 years of IP experience and a PhD in electromechanics and aerodynamics.

## Don't kites use too much space?
The energy production per area is an interesting question. Italian researchers have estimated that airborne wind energy systems could increase energy production per unit of land by a factor of 5 to 15 times, but it's not very clear how they arrive at those numbers (7). Until further research has been done on the topic we expect output will be in the same order of magnitude. Interestingly enough for traditional windmills the output per land area does not vary with their size [Stiesdal (in Danish) ](https://ing.dk/blog/bliver-vindmoellerne-ved-med-at-vokse-del-ii-192275).

In any case our primary focus is reducing the cost per unit of energy, not increasing the power generated per unit of land.

## What happens when the wind stops blowing?

The short answer is that the kite autonomously flies back down to the base station and stays there until the wind picks up again. This is a tough problem, but one that has been solved - numerous drone systems of various types can do this.

## What happens when a storm hits?
The kite itself will in normal operations be flying at speeds of up to 80 m/s (just like a sailboat outpaces the wind), much faster than the average storm speeds. _Flying_ the kite during high wind speeds is thus mostly not a problem, but _landing_ it in a controlled manner might be more difficult, for example if it needs maintenance or winds increase further. So it is most likely preferable to land the kites before the wind speeds gets too high.

Rotary aircrafts (as helicopters and the kite) are able to land in quite adverse conditions as shown in this video by the Danish Air Force. [Helicopter landing at rough sea during a storm](https://youtu.be/ptem1zpHD_s)

Traditional wind turbines also shut down in case of stormy weather (25 m/s typically) to protect them from damage.

## What about lightning strikes?
Kites will be susceptible to lightning and would need to be protected in a similar fashion to general aviation airplanes. By making the body conducting and isolating the critical electronics sufficiently it is possible to lead the current around the critical components.

## Surely icing conditions must be a problem?
Over icing of the kite would be quite problematic as it could lead to a loss of control. Icing is however also a problem for traditional wind turbines as it leads to less efficient airfoils and results in reduced power output. The most well tested solution is to install an electric heating system in the blades to keep the surface temperature above zero. Given the amount of heat needed to be dissipated from the electrical converters in an airborne generator (kite) it's not unlikely there could be some kind of synergy. An advantage our system has compared to traditional wind mills is that it is smaller and can be serviced on ground level.

## With the cost of Solar energy is falling exponentially, is wind energy passé?
Whether solar or wind is the better option mostly depends on the amount of wind and sun available at a given site. If solar cells continue to drop in price then this will mean that the balance point will move, but there is no reason to believe that either technology will become obsolete. 

## Will the system be robust enough to be economical?
This is perhaps the most critical questions of all. Even though modern wind turbines are also very complex machines a kite wind turbine is on the face of it significantly more complex, especially a dual kite system.

There is no reason to believe it is impossible however, it all comes down to "at what R&D cost?". On the positive side, most components will be much smaller and much cheaper than equivalent wind turbine versions, making component replacement much cheaper.

## Isn't it quite dangerous?
For the foreseeable future these kite systems will mainly be operated in very sparsely populate areas (deserts, offshore) so the risk of injury is extremely low. With time as confidence and operating hours increase it is not unlikely that the kite turbines could be used over e.g. farm land, much like self driving cars and various drones gain acceptance.

## Won't the kite be too heavy with the generators onboard?
The first thing to note is that the turbines onboard the kite will be spinning at a much higher rate than those in a traditional wind turbines, which means that for a given power output they can be made much smaller.

Secondly, while it may seem counterintuitive, the weight of the kite as it is flying and generating energy does not impact the power generated (as a first order approximation) (6). However while in hovering mode, on its way to or from the base, the mass constraint is a serious concern.

This is one of the challenging aspects of the project as the serious weight restrictions means components needs to be carefully selected and designed. On the positive side, viable multi-rotor (drone) systems constantly grow in size and Makani already showed in 2015 that they could hover a 600 kW kite (video)[https://vimeo.com/141280416].    

## Will aviation authorities allow kite wind mills?
Ampyx power (Netherlands), Kitemill (Norway) and Makani (USA) have all been allowed to perform tests with commercial scale tether lengths, so it seems there is a willingness from the aviation agencies to be cooperative in finding solutions.   

## How long time will it take to develop?
With an Elon Musk timeline the kite would be producing energy mega watts by 2020; realistically add a year or two.

## What will be the R&D cost
In order to get to a commercially viable system some industry estimates are in the order of 100 M USD, which is in line with our own calculations. For comparison, the development costs for the latest iteration of the largest offshore wind turbines (by Siemens and Vestas) are on the order of 500 M USD. We expect to be able to cover a large part of this through government grants.

## References

1. Payne, Peter R., and Charles McCutchen. "Self-erecting windmill." U.S. Patent No. 3,987,987. 26 Oct. 1976.

2. Zanon, Mario, et al. "Airborne wind energy based on dual airfoils." IEEE Transactions on Control Systems Technology 21.4 (2013): 1215-1222.

3. Vander Lind, Damon. "Kite ground station and system using same." U.S. Patent No. 8,888,049. 18 Nov. 2014.

4. Garud, Raghu, and Peter Karnøe. "Bricolage versus breakthrough: distributed and embedded agency in technology entrepreneurship." Research policy 32.2 (2003): 277-300.
APA

5. Squaillace, Roberta. "Technology and Market Dynamics in the Wind Energy Sector: Do First Mover Advantages Exist? An Exploratory Analysis on the Level of (National) Innovation Systems." Druid Academy Conference. 2012.

6. Cherubini, Antonello, et al. "Airborne Wind Energy Systems: A review of the technologies." Renewable and Sustainable Energy Reviews 51 (2015): 1461-1476.

7. Fagiano, Lorenzo, Mario Milanese, and Dario Piga. "Optimization of airborne wind energy generators." International Journal of robust and nonlinear control 22.18 (2012): 2055-2083.
