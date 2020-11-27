import { ActionBehavior } from '../../logic/interface/ActionBehavior/ActionBehavior';
import { TypeBehavior } from '../../logic/interface/TypeBehavior/TypeBehavior'
import { DefendBehavior } from '../../logic/interface/DefendBehavior/DefendBehavior'
import { Unit } from '../units/Unit'
// import {ActionBehavior}

export abstract class ParalyzerUnit extends Unit {
  private _actionBehavior: ActionBehavior
  constructor(
    name: string,
    maxHealthPoits: number,
    iniative: number,
    actionBehavior: ActionBehavior,
    defendBehavior: DefendBehavior,
    typeBehavior: TypeBehavior
  ) {
    super(name, maxHealthPoits, iniative, defendBehavior, typeBehavior)
    this._actionBehavior = actionBehavior
  }

  get actionBehavior(): ActionBehavior {
    return this._actionBehavior
  }
  set actionBehavior(actionBehavior: ActionBehavior) {
    this._actionBehavior = actionBehavior
  }
  performParalyze(enemy: Unit[]) {
    this.actionBehavior.doAction(enemy)
    return enemy
  }
}
