# Instructions

## Macro Game

### 1. Set Up

#### 0. Create custom cards

If you want to add your own cards, write them out. If the players unanimously agree it can be part of the game, shuffle it into the mod card deck.

#### 1. Create nation

2. Draw 2 mod cards and place them on your army sheet as you wish.
1. Determine what resources you use for creating your units: Draw 6 random resource pips. Distribute as you wish on your 3 unit cost slots.

<!-- - Determine card points
  - 3 types of units. Start with these archetypes?
    - Tank
    - DPS
    - Special
    - And a single hero
- Shuffle unit mod cards
- Get starter cards
- Design units using starter cards
- Determine civ density. Let's say 3 settlements, 2 cities to start, 1 Capital
- Determine what resources you use for what -->

#### 2. Create world

<!-- 1. Place Capitals equidistant around board. Go around in a circle laying available tiles until board is full. -->
1. Place tiles onto board randomly, leaving central spire and player capitals uncovered. (simplification in process because atm this takes forever)
2. Go around in a circle. Each player may move up to 8 tiles total by swapping them and 1 gets swap per turn. Each tile moved to make the swap counts. So for example if you swap a 4 square ocean tile with 4 x 1 square tiles, that counts as moving 5 tiles. Rotating a tile in place counts as moving 1 tile. This continues until all players pass or everyone is out of moves.
<!-- TODO differentiate when it's "tile" and when it's "square" -->
<!-- Alternative. Takes forever and ever. Go in a circle placing tiles (including cities and settlements) until board is full. -->
1. Place mod cards face down on treasure hunting sheet.
1. Fill merchant sheet with 3 face up mod cards.
2. Place 1 of each unit type on your 3 settlements.
<!-- Clarify naming. Smallest settlements are camps.
Settlements are Capitals, Towns and Camps -->

### 2. Normal Play

#### On your turn

##### 1. Resource gathering <!-- I'd like to have players need to wait a turn to get resource but without trying to -->
1. Gather resources from all placed gatherers.

2. Gather 1 resource adjacent to each settlement, 2 adjacent to each city and 3
<!-- TODO determine limit on resource gatherers -->

##### 2. Handle your troops

1. Resolve tile effects like the center spire giving an automatic 1 point of damage
<!-- also considering `d6-3` -->
1. A unit may skip its movement to place a gatherer on its current location or pick up a mod card from an unpillaged ruin.
<!-- Should this have a resource cost? -->
3. Move units to a max distance of their speed. Mountains cost 2 moves to move across. Water costs 3. Canyons have no extra cost if moving parallel to the canyon but cost 4 when moved perpendicular.
  1. If necessary resolve combat
4. Cities may attack
5. Units on friendly capital, city or settlement may regain 1 hp up to their max.

##### 3. Build units
1. Choose surviving capital, cities or settlements to use for unit production.
  * Settlements can build a level 1 army
  * Cities can build a level 2 army or 2 x level 1 units
  * Capitals can build a level 3 unit or a level 2 and level 1 or 3 x level 1 units
1. Choose units to create with each location
1. Pay required resources to the bank

##### 4. Remove a tile from the game board.  
Remove the tile that has the minimum number of points based on the sum of the below characteristics. If multiple tiles are at minimum, you may choose which.
- Not on the edge of the surviving world - 100
- Occupied by an unused ruin or resource - 1
- Occupied by a resource gatherer - 2  
- Occupied by a city/capital/settlement - 3  
- Occupied by a unit - 4  

####  Combat
- Unless otherwise specified, only the primary attacking and defending army's special abilities are triggered
- If attacking a city. Defender adds cities defense points to defending army
- Ranged attackers can start combat from within their range attributes. Defending army can't cause any damage unless they have the range attribute and are within range.
- Cities have a range attribute of 2 and an attack of 3 when empty and grant the range attribute to any occupying friendly army.
- Capitals have a range attribute of 2 and an attack of 4 when empty and grant the range attribute to any occupying friendly army.
- Units in friendly location gain +2 to defense or attack.

1. Attacker declares attack, target and which units are reinforcing.
  - Units may reinforce if they are adjacent to the attacking or defending unit AND/OR if they are within their Range attribute of the attacking or defending army
2. Defender declares reinforcements with same rules as attackers.
1. Attacker rolls 1 die per attack point on attacking army and any allied army adjacent to target army. <!-- Do I want to instead make exploding 6s a card -->
1. Defender receives 1 point of damage per die rolled over the main defender's defense points or the highest defending reinforcement defense points. If there are more points of damage than remaining HP of the main defender, the defending player has to choose how to distribute the remaining damage points among reinforcing defending armies.
<!-- or the highest defense points of a reinforcing defending army -->
1. If the defender survives and attacker is within range, defender rolls 1 die per defense point of all defending unit's defense points.

1. Attacker receives 1 point of damage for every defense die rolled above the attacking army's speed points.
<!-- Alternative dice 2. Defender roll 1 die per defense point on defending army and any allied army adjacent to target army. -->
<!-- 3. Loser takes damage of difference
  - Reinforcing armies take remainder of damage after primary army is killed unless it's a ranged reinforcement -->
1. If the defender is reduced to 1/2 health, the defender moves off of the tile they were defending in the direction of the attacker's movement.
1. The attacker may move onto the defenders tile if the defender is pushed off or dies

### 3. How it ends

The game ends when only one nation survives.

