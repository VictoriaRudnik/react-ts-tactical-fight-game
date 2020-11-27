import { TypeBehavior } from '../../logic/interface/TypeBehavior/TypeBehavior'
import { DefendBehavior } from '../../logic/interface/DefendBehavior/DefendBehavior'
import { ActionBehavior } from '../../logic/interface/ActionBehavior/ActionBehavior'
import { Unit } from '../units/Unit'

export abstract class HealUnit extends Unit {
  private _heal: number
  private _actionBehavior: ActionBehavior
  constructor(
    name: string,
    maxHealthPoits: number,
    iniative: number,
    heal: number,
    actionBehavior: ActionBehavior,
    defendBehavior: DefendBehavior,
    typeBehavior: TypeBehavior
  ) {
    super(name, maxHealthPoits, iniative, defendBehavior, typeBehavior)
    this._heal = heal
    this._actionBehavior = actionBehavior
  }

  get heal(): number {
    return this._heal
  }
  set heal(heal: number) {
    this._heal = heal
  }

  get actionBehavior(): ActionBehavior {
    return this._actionBehavior
  }
  set actionBehavior(actionBehavior: ActionBehavior) {
    this._actionBehavior = actionBehavior
  }

  performHeal(ally: Unit[], healableUnits: Unit[]) {
    this.actionBehavior.doAction(ally, this.heal)
    return ally
  }
}
