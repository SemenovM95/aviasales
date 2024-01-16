interface FlightSegment {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number

}
interface TicketType {
  price: number
  carrier: string
  segments: FlightSegment[]
}

interface TicketProps {
  ticket: TicketType
}

export { TicketType, TicketProps }