import { Sirena } from '../ParalyzerUnits/Sirena'
import { Biskop } from '../healUnits/Biskop'
import { Monk } from '../healUnits/Monk'
import { Archimage } from '../attackUnits/Archimage'
import { SkeletonMage } from '../attackUnits/SkeletonMage'
import { ElfArcher } from '../attackUnits/ElfArcher'
import { Skeleton } from '../attackUnits/Skeleton'
import { Centaur } from '../attackUnits/Centaur'
import { Bandit } from '../attackUnits/Bandit'

export class UnitFactory {
  public static create(type: String) {
    switch (type) {
      case 'Skeleton':
        return new Skeleton()
      case 'Centaur':
        return new Centaur()
      case 'Bandit':
        return new Bandit()
      case 'ElfArcher':
        return new ElfArcher()
      case 'SkeletonMage':
        return new SkeletonMage()
      case 'Archimage':
        return new Archimage()
      case 'Monk':
        return new Monk()
      case 'Biskop':
        return new Biskop()
      case 'Sirena':
        return new Sirena()

      default:
        throw new Error('Wrong unit type passed.')
    }
  }
}
