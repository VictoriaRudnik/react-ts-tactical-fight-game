import { Mage } from '../../logic/interface/TypeBehavior/Mage';
import { AttackUnit } from './AttackUnit'
import { Attack } from '../../logic/interface/ActionBehavior/Attack'
import { Unit } from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'


export class Archimage extends AttackUnit {
  constructor() {
    super('Archimage', 90, 40, 40, new Attack(), new UnDefended(), new Mage())
  }

  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    this.actionBehavior.doAction(attakableUnits, this.damage);
  }
}
