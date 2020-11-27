import { ActionBehavior } from './ActionBehavior'
import { Unit } from '../../../models/units/Unit'

export class Healing implements ActionBehavior {
  doAction(allies: Unit[], heal: number): Unit[] {
    allies.forEach((ally: Unit) => {
      ally.healthPoints = ally.healthPoints + heal
      if (ally.healthPoints > ally.maxHealthPoints) {
        ally.healthPoints = ally.maxHealthPoints
      }
    })
    return allies
  }
}
