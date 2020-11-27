import { Unit } from '../../models/units/Unit'

export class TurnedUnits {
  private _roundTurnUnit: Unit[]

  constructor(roundTurnUnit: Unit[]) {
    this._roundTurnUnit = roundTurnUnit
  }

  get roundTurnUnit(): Unit[] {
    return this._roundTurnUnit
  }

  set roundTurnUnit(roundTurnUnit: Unit[]) {
    this._roundTurnUnit = roundTurnUnit
  }
}
