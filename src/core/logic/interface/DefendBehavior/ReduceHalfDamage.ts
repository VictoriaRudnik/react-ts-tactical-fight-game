import { DefendBehavior } from './DefendBehavior'

export class ReducedHalfDamage implements DefendBehavior {
  doDefend(damage: number): number {
    const reducedDamage: number = damage * 0.5
    return reducedDamage
  }
}
