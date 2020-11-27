import { UnitFactory } from '../../models/units/UnitFactory'
import { Unit } from '../../models/units/Unit'

export const createTeam = () => {
  let firstTeam: Unit[][] = []
  let secondTeam: Unit[][] = []

  const unitNames = [
    'Skeleton',
    'Centaur',
    'Bandit',
    'ElfArcher',
    'SkeletonMage',
    'Archimage',
    'Monk',
    'Biskop',
    'Sirena',
  ]

  const column = 3
  const rownTeam = 2

  const createRandomTeam = (team: Unit[][]) => {
    for (let i = 0; i < rownTeam; i++) {
      team[i] = []
      for (let j = 0; j < column; j++) {
        let randomNumber = Math.floor(Math.random() * unitNames.length)
        team[i][j] = UnitFactory.create(unitNames[randomNumber])
      }
    }
    return team
  }

  firstTeam = createRandomTeam(firstTeam)
  secondTeam = createRandomTeam(secondTeam)

  return { firstTeam, secondTeam }
}
