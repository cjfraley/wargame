# Instructions

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Instructions](#instructions)
		- [1. Set Up](#1-set-up)
			- [1. Create nation](#1-create-nation)
			- [2. Create world](#2-create-world)
			- [3. Initial unit placement](#3-initial-unit-placement)
		- [2. Normal Play](#2-normal-play)
			- [On your turn](#on-your-turn)
				- [1. Build units](#1-build-units)
				- [2. Resource gathering](#2-resource-gathering)
				- [3. Handle your troops](#3-handle-your-troops)
			- [Combat](#combat)
				- [Combat Notes](#combat-notes)
		- [3. How it ends](#3-how-it-ends)
	- [Unit start stats](#unit-start-stats)

<!-- /TOC -->

### 1. Set Up

#### 1. Create nation

2. Draw 1 mod cards and place it on your army sheet.

#### 2. Create world
<!-- XXX Do I want to use the ocean aisles? -->

1. Fill the shop sheet with cards face up. Roll a die per card to determine their prices.
1. Fill ruins sheet with face down cards.
1. Go around the circle, with each player placing their quadrant panel in their chosen orientation.
2. If necessary, split the extra quadrant panels between the players and place them on the board in the same order.

#### 3. Initial unit placement

1. Place your hero unit on the capital and 1 regular unit adjacent to the capital

<!-- ##### Panel description
Contains:
- 1 merchant
- 1 ruin
- 1 capital (centered)
- 3 resource gathering points -->
<!-- TODO add photos or drawings to doc of WIP panels -->
<!-- TODO add cursed earth to panels -->

### 2. Normal Play

#### On your turn
##### 1. Build units
You may build units on your capital if your capital is unoccupied (including by friendly forces).
1. Pay to the bank the number of mod cards on the unit +1 gold.
1. Place your new unit on your capital. It may start moving this turn but no additional units can be built that turn (if not allowed by a mod card).

##### 2. Resource gathering
1. Take 1 gold from the bank for each unoccupied, placed gatherer if unoccupied (including by friendly units)
1. Take 1 gold from the bank if your capital is unoccupied (including by friendly units)
<!-- TODO determine limit on resource gatherers -->

##### 3. Handle your troops

1. Resolve start of turn tile effects:
  - Center Spire:
    Take 1 damage
    <!-- also considering `d6-3` -->
  - Medic:
    Gain 1 health (up to the max health)
1. A unit may skip its movement to take 1 of the following actions on their current location:
  - Place a gatherer on a gold mine
  - Pick up a mod card from an unpillaged ruin
  - Buy a mod card from a merchant
  - Refill the merchant
  - Take over an existing gold mine
  - Take 2 gold from an occupied player's capital
  - Take 1 mod card from an occupied capital's treasury
1. Mod card handling:
  - Newly acquired mod cards can be placed onto your hero, your regular unit or your extra cards slot.
  - You may skip moving any units to rearrange cards between your hero, regular soldiers and extra cards.
<!-- Should this have a resource cost instead? -->
3. Move units and/or declare attacks. Players can move their units to one adjacent tile per speed point. This does not include diagonals (that's 1 vertical and 1 horizontal movement). Moving onto a mountain costs 2 speed points, moving onto an ocean costs 3. This does mean that you will need a mod card on a unit for it to be able to cross the ocean into other player's territory.
  - The player moving units can potentially make attacks which start [combat](####Combat). A unit may attack either by moving into the same square as an enemy unit or by moving within their range of an enemy unit and declaring an attack on that unit. A unit cannot move after attacking even if they have extra movement points left.
4. Capital may attack by itself if unoccupied.
5. Units on friendly capital may regain 1 hp up to their max.
<!-- XXX Does this create a dominant strategy of stacking the high defense units behind attacking units? -->

####  Combat

1. Attacker declares attack, target and which attacking units are reinforcing.
  * Units may reinforce on an attack if they:
    - Have not attacked or reinforced an attack this turn
    - Are adjacent to the primary attacking or defending unit AND/OR if they are within their Range attribute of the attacking or defending army
2. Defender declares reinforcements with same rules as attackers.
  * Units may reinforce on defense if they:
    - Have not defended or reinforced a defense this turn
    - Are adjacent to the primary attacking or defending unit AND/OR if they are within their Range attribute of the attacking or defending army
1. Attacker rolls 1 attack die per attack point on the attacking army and all reinforcing attackers.
1. Defending side receives 1 point of damage per attack die which rolls above or equal to the highest defense points among defender and defending reinforcements. If the defender or defending reinforcements are in their own home capital, they may add 2 to that number up to a max of 6. Damage must first go to the primary defender and then may be distributed as the defeneder wishes among defending reinforcements. No defending unit may receive more damage than its current health. Any defender with their health brought to 0 is considered dead and is removed from the board.
1. If the primary defender survives, they may choose to counterattack:
  - The defender rolls 1 die per the highest defense points among the primary defender and defending reinforcements. If the defender or defending reinforcements are in their own home capital, they may add 2 to that number up to a max of 6.
1. Attacker receives 1 point of damage for every defense die rolled above the attacking army's speed points.
1. If the primary defender is reduced to 1/2 health or below, the primary defender moves off of the tile they were defending in the direction of the attacker's movement. If there is an army on the defender's side in the way, they can be "bumped" in the same direction. If there is an enemy army in the way, the primary defender is dead and removed from the game.
1. The attacker may move onto the defenders tile if the defender is pushed off or dies.

##### Combat Notes
- Capitals with a unit in them grant +2 to range attribute to any occupying friendly army.
- Units in forests are immune to ranged attacks
- Unoccupied capitals have a range attribute of 2, a defense of 2 and an attack of 2 when empty.
- Defenders on mountains gain an extra defense point up to a max of 6.
- Ranged units on mountains gain an extra attack point

### 3. How it ends

The game ends when only one nation survives or when any nation can occupy the center spire for 5 continuous turns. These can be different units but must continuously be held by the same nation.
  - A unit could move off and a second could move on in the same turn and remain continuous.
  - If a unit is knocked off the center spire on an opponents turn and then regains the center spire on their next turn, it is no longer considered continuous.
  - If a unit is killed by the spire itself, and another moves on to the center spire in the same turn, it is considered continuous.
<!-- XXX Econ victory at 20 gold? -->
Nations are eliminated when their capital is occupied and they have no remaining units.

<!-- ## Captured units

Captured units are put off the board and are considered to be in the capital dungeons. Any occupying units can choose to release any number of units from the dungeons. Released units go to adjacent tiles.

The owner of the dungeon can offer to ransom captured units to their owners. -->


## Unit start stats

* Hero
  - Health: 5
  - Defense: 3
  - Attack: 3
  - Speed: 2
* Reg
  - Health: 3
  - Defense: 2
  - Attack: 1
  - Speed 2
