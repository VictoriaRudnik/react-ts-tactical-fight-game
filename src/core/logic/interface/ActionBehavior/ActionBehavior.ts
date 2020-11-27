import { Unit } from '../../../models/units/Unit'

export interface ActionBehavior {
  doAction(unit: Unit[], impact?: number): Unit[]
}
