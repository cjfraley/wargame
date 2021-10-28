##### 1. Recruit units
You may build units on your capital if your capital is unoccupied (including by friendly forces).
1. Pay to the bank the number of mod cards on the unit +1 gold.
1. Place your new unit on your capital. It may start moving this turn but no additional units can be built that turn (if not allowed by a mod card).

##### 2. Gather gold
1. Take 1 gold from the bank for each, placed gatherer if unoccupied (including by friendly units)
1. Take 1 gold from the bank if your capital is unoccupied (including by friendly units and newly created units)
<!-- TODO determine limit on resource gatherers -->

##### 3. Handle your troops

1. Resolve start of turn tile effects:
  - Center Spire:
    Take 1 damage
    <!-- also considering `d6-3` -->
  - Medic:
    Gain 1 health (up to the max health)
1. A unit may skip its movement and attack to take 1 of the following actions on their current location:
  - Place a gatherer on a gold mine
  - Pick up a mod card from an unpillaged ruin
  - Buy a mod card from a merchant
  - Refill the merchant
  - Take over an existing gold mine
  - Take 2 gold from an occupied capital's player
  - Take 1 mod card from an occupied capital's extra cards
	- Heal completely on capital
	- Heal completely heal 1/2 your max health on medic space up to full health
1. Mod card handling:
  - Newly acquired mod cards can be placed onto your hero, your regular unit or your extra cards slot.
  - You may skip moving any units to rearrange cards between your hero, regular soldiers and extra cards.
<!-- Should this have a resource cost instead? -->
3. Move units and/or declare attacks. Players can move their units to one adjacent tile per speed point. This does not include diagonals (that's 1 vertical and 1 horizontal movement). Moving onto a mountain costs 2 speed points, moving onto an ocean costs 3. This does mean that you will need a mod card on a unit for it to be able to cross the ocean into other player's territory.
  - The player moving units can potentially start [combat](####Combat).
		- A unit may attack either by moving into the same square as an enemy unit or by moving within their range of an enemy unit and declaring an attack on that unit.
			- A unit must be able to move onto the square they are attacking
		- A unit cannot move after attacking even if they have extra movement points left.
		- A unit cannot attack while passing through a friendly unit.
<!-- 4. Capital may attack by itself if unoccupied. -->
<!-- 5. Units on friendly capital may regain 1 hp up to their max. -->
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
1. Defending side receives 1 point of damage per attack die which rolls above or equal to the highest defense points among defender and defending reinforcements.
	- If the defender or defending reinforcements are in their own home capital, they may add 2 to that number up to a max of 6.
	- Damage must first go to the primary defender and then may be distributed as the defending player wishes among defending reinforcements.
	- No defending unit may receive more damage than its current health. Any defender with their health brought to 0 is considered dead and is removed from the board.
1. If the primary defender is reduced to 1/2 health or below, the primary defender moves off of the tile they were defending in the direction of the attacker's movement.
	- If there is an army on the defender's side in the way, they can be "bumped" in the same direction.
	- If there is an enemy army in the way, the primary defender is dead and removed from the game.
1. If the primary defender survives and the primary attacker is within range, the defender may choose to counterattack:
  - The defender rolls 1 die per the highest defense points among the primary defender and defending reinforcements. If the defender or defending reinforcements are in their own home capital, they may add 2 to that number up to a max of 6.
1. Attacker receives 1 point of damage for every defense die rolled above the attacking army's speed points.

1. The attacker may move onto the defenders tile if the defender is pushed off or dies.

##### Combat Notes
<!-- - Capitals with a unit in them grant +2 to range attribute to any occupying friendly army. -->
- Units in forests are immune to ranged attacks
<!-- - Unoccupied capitals have a range attribute of 2, a defense of 2 and an attack of 2 when empty. -->
- Defenders on mountains gain an extra defense point up to a max of 6.
- Ranged units on mountains gain an extra attack point