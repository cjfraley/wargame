Write out explicit find rules:
  Roll >=(6-tier), Takes an action

Up bonus for not having units

`python3 rules_assembler/scratch.py rules_con
fig/mvptest.yaml > test.md`
# External Documents
[Scratchpad for approved users](https://docs.google.com/spreadsheets/d/1SqPaM-jYs_t_nmvrggNWgCnIZnRa9HCgeLDSRLtYyLs/edit#gid=0)

# First playtest notes
Only need defense to defend but need attack and speed to be aggressive  
Stealing stuff  

## Things people enjoyed
- Hero vs basics choices
- Order of actions
- Forcing movement to prioritize stuff
- Everyone fighting in the center

# Considerations/Rules questions

- Is speed too emphasized? Makes it harder to be aggressive
- Can I better incentivize invading enemy territory
- The race to be able to cover water is both very important and very binary. Doesn't feel like you have much of a leg to stand on if you can't cross water when others can
- Do I want the center spire to give its own damage or does the impetus being on opponents work?
- Should there be a dedicated, easy way to gain speed? Spend X gold to get a boat
- Should buying multiple cards from the merchant be a single action?
- First playtest involved much less card usage than I was expecting
- Is it too much of a dominant strategy to spawn and then buff?

# Tasks and Goals
Goal: Climactic final showdowns.

How can I make HP, Attack, and Defense equal-ish in viability.
Goal: Shared world creation. Create an interesting army/nation with reasonable creative freedom and meaningful gameplay changes.
Goal: Simple grand strategy/4X fun.

# Unit base with some amount of customizability and space for a 25/28 mm miniature unit
## Rules and Strategy

Better establish why it's better to be captured than killed

~Figured out how to make placing a lot of tiles less of a drag?~
~- Engineering solution (complicated and expensive)~

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