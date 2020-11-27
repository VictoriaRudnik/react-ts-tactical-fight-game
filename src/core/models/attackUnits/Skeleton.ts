import { Melee } from '../../logic/interface/TypeBehavior/Melee';
import { Attack } from '../../logic/interface/ActionBehavior/Attack'
import { AttackUnit } from './AttackUnit'
import {Unit} from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'
// import {Range} from '../../logic/interface/TypeBehavior/Range'



export class Skeleton extends AttackUnit {
  constructor() {
    super('Skeleton', 100, 50, 25, new Attack(), new UnDefended(), new Melee())
  }
  
  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    this.performAttack(enemy, attakableUnits);
  }
}
