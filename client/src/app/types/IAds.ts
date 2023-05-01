interface MapCoordinates {
  center: number[]
  zoom: number
}

interface IMeetingPoint {
  placemarkCoordinates: number[]
  mapCoordinates: MapCoordinates
  fullName: string
}

export interface IAds {
  name: string | null
  photo: string[] | null
  video: string | null
  description: string | null
  meetingPoint: IMeetingPoint | null
  price: number | null
  tags: string[]
}
