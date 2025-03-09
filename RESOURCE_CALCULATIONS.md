# Resource Calculation Reference

This document explains how resources are calculated in the Middle Age Multiverse game. It includes the formulas used for all resources and special mechanics like sleep deprivation.

## Time Allocation Basics

The game operates on a percentage-based time allocation system where players distribute 100% of their time across five activities:
- Study
- Work
- Social
- Rest
- Exercise

Each percentage point represents `0.01 * 24 hours = 0.24 hours` per day, or `1.68 hours` per week.

## Base Resource Effects per Activity

Each activity has direct effects on resources based on allocation percentage. These are the base rates for each percentage point allocated:

| Activity | Energy | Stress | Money | Knowledge | Social |
|----------|--------|--------|-------|-----------|--------|
| Study    | -0.2   | +0.2   | 0     | +10       | -0.5   |
| Work     | -0.3   | +0.5   | +5    | +0.5      | 0      |
| Social   | -0.1   | -0.5   | -2    | +0.5      | +5     |
| Rest     | +0.5   | -0.3   | 0     | 0         | 0      |
| Exercise | -0.2   | -0.5   | 0     | 0         | +1     |

### Calculation Formula

For each resource and activity:
```
DailyEffect = ActivityImpact * (AllocationPercentage / 100)
```

Example: If a player allocates 20% to Study, the Knowledge gained per day would be:
```
Knowledge = 10 * (20 / 100) = +2 per day
```

## Sleep Benefits and Penalties

Sleep hours are calculated from Rest allocation:
```
SleepHours = (24 * RestPercentage) / 100
```

Sleep effects are then applied based on hours:

| Sleep Hours | Energy Effect | Stress Effect |
|-------------|---------------|---------------|
| < 3 hours   | -10           | +20           |
| 3-4.9 hours | -4            | +6            |
| 5-5.9 hours | -2            | +4            |
| 6-6.9 hours | -1            | +2            |
| 7+ hours    | +10           | -5            |

Note: Good sleep (7+ hours) provides a significant bonus to energy recovery and stress reduction.

These effects are applied daily, in addition to the normal resource calculations.

## Special Events and Choices

Events and player choices can modify resources directly with one-time effects or create ongoing effects:

### One-time Effects
Event choices apply immediate adjustments to resources:
```
ResourceValue += ChoiceEffect
```

### Ongoing Effects
Some event choices can create ongoing effects that modify resource calculations:
```
ResourceValue += OngoingEffect * (AllocationPercentage / 100)
```

Example: Accepting a part-time job might give a bonus of +2 money per work allocation point.

## Resource Limits

Resources have minimum and maximum constraints:
- Energy: 0-100
- Stress: 0-100
- Money: 0-Infinity
- Knowledge: 0-Infinity
- Social: 0-Infinity

Values are automatically capped at these limits.

## Weekly Calculations

The game shows weekly time commitments (hours per week) for each activity:
```
HoursPerWeek = (24 hours * 7 days * AllocationPercentage) / 100
```

## Skills and Resource Modifiers

Skills unlocked through gameplay can modify resource effects:
- Efficiency skills reduce resource costs
- Productivity skills increase resource gains
- Specialized skills create new resource interactions

The modifiers from skills are applied after the base calculations.
