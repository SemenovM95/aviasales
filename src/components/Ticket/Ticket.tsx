import { add, format } from 'date-fns'

import type { TicketProps } from './Ticket.d'
import style from './Ticket.module.scss'

export default function Ticket({ ticket }: TicketProps) {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__heading}>
        <span className={style.ticket__price}>{ticket.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} ₽</span>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
      </div>
      <div className={style.ticket__segments}>
        {ticket.segments.map((segment) => (
          <div className={style.ticket__segment} key={`${segment.origin}${segment.duration}`}>
            <div className={style.ticket__segmentData}>
              <span className={`${style.ticket__segmentDataCell} ${style.ticket__segmentDataCellHeading}`}>
                {segment.origin} - {segment.destination}
              </span>
              <span className={style.ticket__segmentDataCell}>
                {`${format(new Date(segment.date), 'HH:mm')} - ${format(
                  new Date(add(new Date(segment.date), { minutes: segment.duration })),
                  'HH:mm'
                )}`}
              </span>
            </div>
            <div className={style.ticket__segmentData}>
              <span className={`${style.ticket__segmentDataCell} ${style.ticket__segmentDataCellHeading}`}>В пути</span>
              <span className={style.ticket__segmentDataCell}>{`${Math.floor(segment.duration / 60)}ч ${Math.floor(
                segment.duration % 60
              )}м`}</span>
            </div>
            <div className={style.ticket__segmentData}>
              <span className={`${style.ticket__segmentDataCell} ${style.ticket__segmentDataCellHeading}`}>
                {!segment.stops.length
                  ? 'Без пересадок'
                  : `${segment.stops.length} пересад${
                    (segment.stops.length > 4 && 'ок') || (segment.stops.length > 1 && 'ки') || 'ка'
                  }`}
              </span>
              <span className={style.ticket__segmentDataCell}>
                {segment.stops.length ? segment.stops.join(', ') : ''}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
