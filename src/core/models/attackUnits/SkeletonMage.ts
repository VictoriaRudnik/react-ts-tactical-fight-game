import { Mage } from '../../logic/interface/TypeBehavior/Mage';
import { AttackUnit } from './AttackUnit'
import {Attack} from '../../logic/interface/ActionBehavior/Attack'
import {Unit} from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'

export class SkeletonMage extends AttackUnit {
  constructor() {
    super('Skeleton Mage', 50, 40, 20, new Attack(), new UnDefended(), new Mage())
  }
  
  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    // this.performAttack(enemy, attakableUnits);
    this.actionBehavior.doAction(attakableUnits, this.damage);
    // return [enem;
  }
}
