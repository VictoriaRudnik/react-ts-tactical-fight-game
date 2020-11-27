import { ActionBehavior } from './ActionBehavior'
import { Unit } from '../../../models/units/Unit'

export class Attack implements ActionBehavior {
  doAction(enemies: Unit[], damage: number): Unit[] {
    enemies.forEach((enemy: Unit) => {
      const hp: number = enemy.healthPoints - enemy.defend(damage)
      enemy.healthPoints = hp > 0 ? hp : 0
    })

    return enemies
  }
}
