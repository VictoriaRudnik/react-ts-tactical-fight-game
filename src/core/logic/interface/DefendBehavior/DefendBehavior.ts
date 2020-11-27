import { Unit } from '../../../models/units/Unit'

export interface DefendBehavior {
  doDefend(damageEnemy: number): number
}
