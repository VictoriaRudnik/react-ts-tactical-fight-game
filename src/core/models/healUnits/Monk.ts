import { HealerSingleTarget } from '../../logic/interface/TypeBehavior/HealerSingleTarget';
import { Healing } from '../../logic/interface/ActionBehavior/Healing'
import { HealUnit } from './HealUnit'
import { Unit } from '../units/Unit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'

export class Monk extends HealUnit {
  constructor() {
    super('Monk', 70, 20, 40, new Healing(), new UnDefended(), new HealerSingleTarget())
  }

  doAction(enemy: Unit[], attakableUnits: Unit[]): void {
    this.performHeal(enemy, attakableUnits)
  }
}
