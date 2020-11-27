import React from 'react'
import { Card } from '../card/Card'
import { Unit } from '../../core/models/units/Unit'
import './style.css'
import classNames from 'classnames'

export interface TeamProps {
  unitsTeam: Unit[]
  turnUnit: Unit
  round: Number
  handleAction: (turnUnit: Unit, unit: Unit) => void
  numberTeam: Number
  handleDefence: () => void
  className: string
  attakableUnits: Unit[]
  turnOrder: number
}

export const Team = ({
  unitsTeam,
  turnUnit,
  handleAction,
  round,
  numberTeam,
  handleDefence,
  className,
  attakableUnits,
  turnOrder,
}: TeamProps) => {
  const classNameButton =
    attakableUnits.length === 0 ? 'field-button-bright' : ''
  return (
    <div className={classNames('field_container-team-one', className)}>
      <div className="field_container-cards-team">
        {unitsTeam.map((item, index) => (
          <Card
            key={index}
            unit={item}
            turnUnit={turnUnit}
            onClick={handleAction}
            attakableUnits={attakableUnits}
          />
        ))}
      </div>
      {numberTeam === 1 && (
        <div className="field_container-button">
          <span>Round: {round}</span>
          {/* <span>{round}</span> */}
          <span className="team_span-turn">Turn order: {turnOrder}</span>
        </div>
      )}
      {numberTeam === 2 && (
        <div className={classNames("field_container-button",'field_container-button-size')}>
          <button
            className={classNames('field_button', classNameButton)}
            onClick={() => handleDefence()}
          >
            Defend
          </button>
        </div>
      )}
    </div>
  )
}
