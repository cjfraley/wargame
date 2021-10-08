# Instructions

## Macro Game

### 1. Set Up

#### 1. Create nation

2. Draw 1 mod cards and place it on your army sheet.

#### 2. Create world
<!-- XXX Do I want to use the ocean aisles? -->

1. Fill shop sheet with 3 cards. Roll a die per card to determine prices.
1. Fill ruins sheet with face down cards.
1. Go around the circle, with each player placing their quadrant tile in their chosen orientation.
2. If necessary, split the remaining panels and place them on the board

#### 3. Initial unit placement

1. Place hero on capital and 1 unit adjacent to capital

##### Panel description
Contains:
- 1 merchant
- 1 ruin
- 1 capital (centered)
- 3 resource gathering points
<!-- TODO add photos or drawings to doc of WIP panels -->
<!-- TODO add cursed earth to panels -->

### 2. Normal Play

#### On your turn
<!-- XXX If you hold the center spire you may move one edge of the board inward -->
##### 1. Build units
1. You may build units on the capital for a cost in gold equal to the mod cards on the army +1. If capital is occupied, you may place it on an adjacent square if it does not have the range to attack an enemy from there.
<!-- Better to require open capital in order to make healing a hard decision? -->
1. Pay required resources to the bank.

##### 2. Resource gathering <!-- I'd like to have players need to wait a turn to get resource but without trying to -->
1. Gather 1 gold from all placed gatherers if unoccupied (including by friendly units)
1. Take 1 gold for capital if unoccupied (including by friendly units)
<!-- TODO determine limit on resource gatherers -->

##### 3. Handle your troops

1. Resolve tile effects like the center spire giving an automatic 1 point of damage and medics healing 1 point
1. A unit may skip its movement to take 1 of the following actions on their current location:
  - place a gatherer on a gold mine
  - pick up a mod card from an unpillaged ruin
  - buy a mod card from a merchant
  - take over an existing gold mine
  - take 2 gold from an occupied player's capital
  - take 1 mod card from an occupied capital's treasury
  - Heal 2 points if on capital
1. Mod card handling:
  - Newly acquired mod cards can be placed onto army or into treasury.
  - You may skip your entire movement phase to rearrange cards between your army and treasury.
<!-- Should this have a resource cost? -->
3. Move units to a max distance of their speed. Mountains cost 2 moves to move across. Water costs 3.
  1. If necessary resolve combat
4. Capital may attack
5. Units on friendly capital may regain 1 hp up to their max.
<!-- XXX Does this create a dominant strategy of stacking the high defense units behind attacking units? -->
####  Combat
- If attacking a capital with defending army, defender adds 2 to their defense points up to a max of 6.
- Ranged attackers can start combat from within their range attribute. Defending army can't cause any damage unless they have the range attribute and are within range.
- Capitals have a range attribute of 2 and an attack of 2 when empty.
- Capitals with a unit in them grant the range attribute to any occupying friendly army.
- Units in forests are immune to ranged attacks
- Defenders on mountains gain an extra defense point up to a max of 6.

1. Attacker declares attack, target and which units are reinforcing.
  - Units may reinforce if they are adjacent to the primary attacking or defending unit AND/OR if they are within their Range attribute of the attacking or defending army
2. Defender declares reinforcements with same rules as attackers.
1. Attacker rolls 1 die per attack point on attacking army and any allied army adjacent to target army. <!-- Do I want to instead make exploding 6s a card -->
1. Defender receives 1 point of damage per die rolled <= the main defender's defense points or the highest defending reinforcement defense points. If there are more points of damage than remaining HP of the main defender, the defending player has to choose how to distribute the remaining damage points among reinforcing defending armies.
<!-- XXX or the highest defense points of a reinforcing defending army -->
1. If the defender survives and attacker is within range, defender rolls 1 die per defense point of all defending unit's defense points.
1. Attacker receives 1 point of damage for every defense die rolled above the attacking army's speed points.
1. If the defender is reduced to 1/2 health, the defender moves off of the tile they were defending in the direction of the attacker's movement.
1. The attacker may move onto the defenders tile if the defender is pushed off or dies. If they do so, they gain a random mod card from the defender's treasury.

### 3. How it ends

The game ends when only one nation survives or when any nation holds the center spire for 5 continuous turns. These can be different units but must continuous be held by the same nation.
<!-- XXX Econ victory at 20 gold? -->
Nations are eliminated when their capital is occupied, they hold no camps and they have no remaining units.

# Notes

Diagonals are not valid in terms of movement or reinforcement. It is a combination of a vertical and horizontal movement.

## Captured units

Captured units are put off the board and are considered to be in the capital dungeons. Any occupying units can choose to release any number of units from the dungeons. Released units go to adjacent tiles.

The owner of the dungeon can offer to ransom captured units to their owners.

## Tiles with effects

Woods: units in woods can't be damaged at range.

### Tiles with effects if starting there
- Center Spire:
  Take 1 damage
  <!-- also considering `d6-3` -->
- Medic:
  Gain 1 health (up to the max health)

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
