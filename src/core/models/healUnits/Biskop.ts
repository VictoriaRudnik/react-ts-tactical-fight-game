import { HealerMassTarget } from '../../logic/interface/TypeBehavior/HealerMassTarget';
import { HealUnit } from './HealUnit'
import { Healing } from '../../logic/interface/ActionBehavior/Healing'
import {Unit} from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'



export class Biskop extends HealUnit {
  constructor() {
    super('Biskop', 130, 20, 25, new Healing(), new UnDefended(), new HealerMassTarget())
  }

  doAction(enemy: Unit[], healableUnits: Unit[]): void {
    // this.performHeal(enemy, attakableUnits);
    this.actionBehavior.doAction(healableUnits, this.heal)
  }
}
