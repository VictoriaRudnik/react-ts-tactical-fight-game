import { Unit } from '../../models/units/Unit'

export  const getUnitCoordinarion = (unitCoordinations: Unit[][], turnUnit: Unit) => {
  let indexRow: number = 0
  let indexColumn: number = 0
  unitCoordinations.forEach((rowArray: Unit[], index: number) => {
    let indexRowArray = index
     rowArray.forEach((unit: Unit, index: number) => {
      if (unit === turnUnit) {
        indexColumn = index
        indexRow = indexRowArray
      
      }
    })
  })
  return { indexRow: indexRow, indexColumn: indexColumn }
}