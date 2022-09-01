import React from 'react'
import Event from '../../components/Event'

export default function EventTemplate() {
  return (
    <div>
        <Event 
            date = "9.25.22"
            title = "Kai is 1"
            heading = "This is a heading"
            subheading = "This is a subheading"
            description = "Kai Nova went one full time around the sun!"
            image = "/images/events/ribbon-cutting.png"

        />
    </div>
  )
}
