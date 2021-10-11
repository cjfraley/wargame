# First playtest notes
Player wants more punishment for occupying capital
Cards on basic for cost or all cards?
Should units be able to counterattack if they are knocked back and are not followed?
Clarify units can move after attack
Change: Can get gold from occupied mine
First turn gold is a major differentiator
More speed up cards
On the fly change: removed center spire damage
Buy speed?
Move before or after counterattack
On the fly change: no healing in capital
Give King of Tokyo a shot
People are into economic victory or advantage
Center Track: (Dice tower, stacked cubes)
Thematic pnemonic
Spawn, Gold, Action
Buff ruins?
Healing to action. Too weak at 1hp? Full heal for an action
Refilling the market being an action?
Action to swap cards out
Autorefill
Action to buy
Multi buy a single action?
Much less cards use than expected
Speed OP
Speed up for hero
Ocean barrier going down is very binary
Pacman style wraparound
Name: The Tower of Spugah
Bonking is confusing
Spawn and then buff too strong
Move thru to attack issue
Split speed and water passage cards
More attack cards
If you hold a capital can choose to kill one of their units
Create a unit for free, where?
Consistency in actions
Only need defense to defend but need attack and speed to be aggressive
Early win decision option
2 cards in ruins
Do you need the speed if attacking someone on a mountain
More territory invasion
Arms race to cross water
Bridge as part of your board
Stealing stuff
Debrief questions:
Anything that just feels like busy work?
Cards you'd like?
What were the highlights?
Hero vs basics choices
Order of actions
Forcing movement to prioritize stuff
Everyone fighting in thecenter
Frustrations?
# Tasks and Goals
Goal: Climactic final showdowns.

How can I make HP, Attack, and Defense equally-ish in viability.
Goal: Shared world creation. Create an interesting army/nation with reasonable creative freedom and meaningful gameplay changes.
Goal: Simple grand strategy/4X fun.

# Unit base with some amount of customizability and space for a 25/28 mm miniature unit
## Rules and Strategy

Better establish why it's better to be captured than killed

Figured out how to make placing a lot of tiles less of a drag?
- Engineering solution (complicated and expensive)

## Nation creation

### To experiment with the freedom of creativity, see how you would go about trying to create each of these

- Monster Hunters (Witchers or like the game)
- Inquisition
- Orc Horde
- Sauruman's commanded hordes
- Tomb Kings
- Cannonade empire
- Wood Elf Hippies
- Pokemon trainers
- Knights of the Round Table
- Hogwarts
- Mongols (fast attack)
- Dwarven fortresses


# Coding resources
https://www.codementor.io/@codementorteam/react-beginner-tutorial-building-a-board-game-from-scratch-ajjkqr62x
https://medium.com/@tylercmasterson/board-game-logic-in-react-199d6983fc23
https://semaphoreci.com/community/tutorials/dockerizing-a-python-django-web-application

# Alt game modes

Captured command points

Flag mode/bomb mode (flag and bomb takes mod slot)

## Basic info:

### Composition of World:

18 by 18, 324 squares (eventual plan to switch to hex system). See

### Types of Resources:
- Bones: Used for dark magic
- Crystals: Used for most magic. Found in crystal caves
- Wood/nature: Used as either a building material or for the natural energy of the forest
- Food: Gathered from farmland. Used to support troops
- Metal: Gathered from iron mountains. Build armor and advanced tools

## Unit Attributes

Some sort of leadership attribute to help solve the whole asynchronicity issue?

### In MVP
- Mod card slots
- Speed
- Attack
- Defense
- Health
- Required resources
- Range (num of tiles between target and this unit)

### Maybe added later
- Command distance (how many ally occupied tiles between this and furthest reinforcing army)
- Micro front, flank and rear defense
- Forest nullifying range attributes?

## Micro Game (Not in MVP)

Squad level tactical game.

## Practicality
- Micro conflict has to be less than an hour
- Autoresolve is quick but satisfying
- Reason to fight major battles in micro
- What's turn structure when micro game going on?
- Easy to stow away between sessions
- Create asynchronous online version
- How to make the world creation fast as possible/convenient

## Low priority
- Fun Tactility

# Random Ideas
- Heroes can retreat or stay and chance permadeath
- Dice controlled/zombie/horde faction (always autoresolves)
- How do you throw some more collaborative world building in there? History? Features?
- For world gen to matter and not be a chore, terrain must matter