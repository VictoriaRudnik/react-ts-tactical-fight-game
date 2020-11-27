import { UnitFactory } from '../src/core/models/units/UnitFactory'
import { getAttakableUnitsForMelee } from '../src/core/logic/functions/getAttakableUnitsForMelee'
import { Unit } from '../src/core/models/units/Unit'

describe('check Attakable Units For Melee Attack', () => {
  const getUnitsCoordinations = () => {
    const unitsCoordinations: Unit[][] = [
      [
        UnitFactory.create('Skeleton'),
        UnitFactory.create('Centaur'),
        UnitFactory.create('Bandit'),
      ],
      [
        UnitFactory.create('ElfArcher'),
        UnitFactory.create('SkeletonMage'),
        UnitFactory.create('Archimage'),
      ],
      [
        UnitFactory.create('Centaur'),
        UnitFactory.create('Skeleton'),
        UnitFactory.create('Skeleton'),
      ],
      [
        UnitFactory.create('ElfArcher'),
        UnitFactory.create('SkeletonMage'),
        UnitFactory.create('Archimage'),
      ],
    ]
    return unitsCoordinations
  }

  const getTurnUnitCoordination = () => {
  const turnUnitCoordination = [
    { indexRow: 2, indexColumn: 0 },
    { indexRow: 2, indexColumn: 1 },
    { indexRow: 2, indexColumn: 2 },
  ]
  return turnUnitCoordination
}

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][0]. All attakable units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[1][0],
        unitsCoordinations[1][1],
      ])
    )
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toHaveLength(2)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][1]. All attakable units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[1][0],
        unitsCoordinations[1][1],
        unitsCoordinations[1][2],
      ])
    )
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toHaveLength(3)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][2]. All attakable units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[1][1],
        unitsCoordinations[1][2],
      ])
    )
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toHaveLength(2)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][0]. Two units-enemies at the first line are dead, but others units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toEqual(expect.arrayContaining([unitsCoordinations[1][2]]))
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toHaveLength(1)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][1]. Two units-enemies at the first line are dead, but others units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toEqual(expect.arrayContaining([unitsCoordinations[1][2]]))

    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toHaveLength(1)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][2]. Two units-enemies at the first line are dead, but others units have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toEqual(expect.arrayContaining([unitsCoordinations[1][2]]))

    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toHaveLength(1)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][0]. All units-enemies at the first line dead, units at the second line have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    unitsCoordinations[1][2].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[0][0],
        unitsCoordinations[0][1],
      ])
    )

    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[0],
        unitsCoordinations,
        false
      )
    ).toHaveLength(2)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][1]. All units-enemies at the first line dead, units at the second line have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    unitsCoordinations[1][2].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[0][0],
        unitsCoordinations[0][1],
        unitsCoordinations[0][2],
      ])
    )

    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[1],
        unitsCoordinations,
        false
      )
    ).toHaveLength(3)
  })

  it('The function returns an array of units that can be attacked by a turnUnit with position [2][2]. All units-enemies at the first line dead, units at the second line have hp > 0', () => {
    const unitsCoordinations = getUnitsCoordinations()
    const turnUnitCoordination = getTurnUnitCoordination()
    unitsCoordinations[1][0].healthPoints = 0
    unitsCoordinations[1][1].healthPoints = 0
    unitsCoordinations[1][2].healthPoints = 0
    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toEqual(
      expect.arrayContaining([
        unitsCoordinations[0][1],
        unitsCoordinations[0][2],
      ])
    )

    expect(
      getAttakableUnitsForMelee(
        turnUnitCoordination[2],
        unitsCoordinations,
        false
      )
    ).toHaveLength(2)
  })
})
