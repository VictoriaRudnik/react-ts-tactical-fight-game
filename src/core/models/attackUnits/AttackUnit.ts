import { TypeBehavior } from '../../logic/interface/TypeBehavior/TypeBehavior';
import { DefendBehavior } from '../../logic/interface/DefendBehavior/DefendBehavior';
import { Unit } from '../units/Unit'
import {ActionBehavior} from "../../logic/interface/ActionBehavior/ActionBehavior";

export abstract class AttackUnit extends Unit {
  private _damage: number;
  private _actionBehavior: ActionBehavior;
  constructor(
    name: string,
    maxHealthPoits: number,
    iniative: number,
    damage: number,
    actionBehavior: ActionBehavior,
    defendBehavior: DefendBehavior,
    typeBehavior: TypeBehavior
  ) {
    super(name, maxHealthPoits, iniative, defendBehavior, typeBehavior)
    this._damage = damage;
    this._actionBehavior = actionBehavior;
  }

  get damage(): number {
    return this._damage
  }
  set damage(damage: number) {
    this._damage = damage
  }

  get actionBehavior(): ActionBehavior {
    return this._actionBehavior
  }
  set actionBehavior(actionBehavior: ActionBehavior) {
    this._actionBehavior = actionBehavior
  }
  

  performAttack(enemy: Unit[], attakableUnits: Unit[]) {
    this.actionBehavior.doAction(enemy, this.damage);
    return enemy;
  }
}
