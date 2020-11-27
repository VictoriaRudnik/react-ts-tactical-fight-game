import { TypeBehavior } from '../../logic/interface/TypeBehavior/TypeBehavior'
import { DefendBehavior } from '../../logic/interface/DefendBehavior/DefendBehavior'

export abstract class Unit {
  private _name: string
  private _healthPoints: number
  private _maxHealthPoints: number
  private _iniative: number
  private _defendBehavior: DefendBehavior
  private _typeBehavior: TypeBehavior
  private _isParalyzed: boolean

  constructor(
    name: string,
    maxHealthPoints: number,
    iniative: number,
    defendBehavior: DefendBehavior,
    typeBehavior: TypeBehavior
  ) {
    this._name = name
    this._healthPoints = maxHealthPoints
    this._iniative = iniative
    this._defendBehavior = defendBehavior
    this._typeBehavior = typeBehavior
    this._isParalyzed = false
    this._maxHealthPoints = maxHealthPoints
  }

  get healthPoints(): number {
    return this._healthPoints
  }
  set healthPoints(hp: number) {
    this._healthPoints = hp
  }

  get defendBehavior(): DefendBehavior {
    return this._defendBehavior
  }
  set defendBehavior(defendBehavior: DefendBehavior) {
    this._defendBehavior = defendBehavior
  }

  get isParalyzed(): boolean {
    return this._isParalyzed
  }
  set isParalyzed(isParalyzed: boolean) {
    this._isParalyzed = isParalyzed
  }

  get name(): string {
    return this._name
  }
  set name(name: string) {
    this._name = name
  }

  get maxHealthPoints(): number {
    return this._maxHealthPoints
  }
  set maxHealthPoints(maxHealthPoints: number) {
    this._maxHealthPoints = maxHealthPoints
  }

  get iniative(): number {
    return this._iniative
  }
  set iniative(iniative: number) {
    this._iniative = iniative
  }

  get typeBehavior(): TypeBehavior {
    return this._typeBehavior
  }
  set typeBehavior(typeBehavior: TypeBehavior) {
    this._typeBehavior = typeBehavior
  }

  abstract doAction(enemy: Unit[], attakableUnits: Unit[]): void

  defend(damage: number): number {
    const reducedDamage = this.defendBehavior.doDefend(damage)
    return reducedDamage
  }
  getAttacableUnits(unitCoordinations: Unit[][], turnUnit: Unit): Unit[] {
    const attacableUnits = this.typeBehavior.getAttakableUnits(
      unitCoordinations,
      turnUnit
    )
    return attacableUnits
  }
}
