import { Melee } from '../../logic/interface/TypeBehavior/Melee';
import { AttackUnit } from './AttackUnit'
import { Attack } from '../../logic/interface/ActionBehavior/Attack'
import { Unit } from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'



export class Centaur extends AttackUnit {
  constructor() {
    super('Centaur', 150, 50, 50, new Attack(), new UnDefended(), new Melee())
  }

  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    this.performAttack(enemy, attakableUnits)
  }
}
