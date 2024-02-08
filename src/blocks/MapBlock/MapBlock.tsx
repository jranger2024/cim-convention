'use client'

import { GridContainer } from '@/components/GridContainer'
import { MapBlockRecord } from '@/types/generated'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export function MapBlock(props: MapBlockRecord) {
  let { anchorId, location } = props
  const position = { lat: location?.latitude, lng: location?.longitude }
  const apiKey = process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  return (
    <section id={anchorId || undefined} className="bg-brand-grey-25 py-12">
      <GridContainer>
        <APIProvider apiKey={apiKey}>
          <Map
            center={position}
            zoom={15}
            className="col-span-full min-h-[400px] rounded"
          >
            <Marker position={position} />
          </Map>
        </APIProvider>
      </GridContainer>
    </section>
  )
}
