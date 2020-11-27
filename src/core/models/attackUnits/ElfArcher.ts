import { AttackUnit } from './AttackUnit'
import { Attack } from '../../logic/interface/ActionBehavior/Attack'
import { Unit } from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'
import {Range} from '../../logic/interface/TypeBehavior/Range'

export class ElfArcher extends AttackUnit {
  constructor() {
    super('Elf Archer', 90, 60, 40, new Attack(), new UnDefended(), new Range())
  }

  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    this.performAttack(enemy, attakableUnits)
  }
}
