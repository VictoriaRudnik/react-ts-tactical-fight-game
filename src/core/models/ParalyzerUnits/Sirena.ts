import { Paralysis } from '../../logic/interface/ActionBehavior/Paralysis'
import { Paralyzer } from '../../logic/interface/TypeBehavior/Paralyzer'
import { ParalyzerUnit } from './ParalyzerUnit'
import { UnDefended } from '../../logic/interface/DefendBehavior/UnDefended'
import { Unit } from '../units/Unit'

export class Sirena extends ParalyzerUnit {
  constructor() {
    super('Sirena', 80, 20, new Paralysis(), new UnDefended(), new Paralyzer())
  }

  doAction(enemy: Unit[]): void {
    this.performParalyze(enemy)
  }
}
