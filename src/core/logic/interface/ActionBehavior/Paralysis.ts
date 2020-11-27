import { ActionBehavior } from './ActionBehavior'
import { Unit } from '../../../models/units/Unit'

export class Paralysis implements ActionBehavior {
  doAction(enemies: Unit[]): Unit[] {
    enemies.forEach((enemy: Unit) => {
      enemy.isParalyzed = true
    })
    return enemies
  }
}
