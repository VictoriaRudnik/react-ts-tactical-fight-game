import React from 'react'
import './style.css'
import { getImageCard } from '../../core/logic/getImageCard'
import classNames from 'classnames'
import { Unit } from '../../core/models/units/Unit'
import { UnDefended } from '../../core/logic/interface/DefendBehavior/UnDefended'

export interface CardProps {
  unit: any
  turnUnit: Unit
  onClick: (turnUnit: Unit, unit: Unit) => void
  attakableUnits: Unit[]
}

export const Card = ({
  unit,
  turnUnit,
  onClick,
  attakableUnits,
}: CardProps) => {
  const imageCard = getImageCard(unit.name)

  const isParalyzed = unit.isParalyzed ? 'card_image-paralyzed' : ''
  const isDefended = !(unit.defendBehavior instanceof UnDefended)
    ? 'card_image-defended'
    : ''
  const className = unit.healthPoints <= 0 ? 'card_image-hidden' : ''
  const classNameBright = unit === turnUnit ? 'card_image-bright' : ''
  const classNameAttakableUnintsBright = attakableUnits.includes(unit)
    ? 'card_image-attacable-units-bright'
    : ''

  return (
    <div
      className={classNames(
        'card_container',
        className,
        classNameBright,
        classNameAttakableUnintsBright,
        isDefended,
        isParalyzed
      )}
      onClick={() => onClick(turnUnit, unit)}
    >
      <div className="card_name-unit">{unit.name}</div>
      <div className="card_div-image-unit">
        <img
          className={classNames('card_image-unit', className)}
          src={imageCard}
          alt={imageCard}
        ></img>
      </div>
      <div>
        <div className="card_hp-unit">hp: {unit.healthPoints}</div>
        <div className="card_hp-unit">
          damage: <span className="card_span-damage">{unit.damage || 0}</span>
        </div>
        <div className="card_hp-unit">
          heal: <span className="card_span-heal">{unit.heal || 0}</span>{' '}
        </div>
      </div>
    </div>
  )
}
