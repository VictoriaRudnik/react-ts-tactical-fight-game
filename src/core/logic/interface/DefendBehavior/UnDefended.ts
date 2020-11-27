import { DefendBehavior } from './DefendBehavior'

export class UnDefended implements DefendBehavior {
  
  doDefend(damage: number): number {
    return damage
  }
}
