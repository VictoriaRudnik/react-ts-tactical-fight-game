export class Round {
  private _round: number

  constructor() {
    this._round = 1
  }

  get round(): number {
    return this._round
  }

  set round(round: number) {
    this._round = round
  }
}
