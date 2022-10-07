import React from 'react'
import Event from '../../components/Event'

export default function OctoSixthTwentyTwo() {
  return (
    <div>
        <Event 
            date = "10.12.22"
            title = "Sip & Paint"
            heading = "(BYOB)"
            subheading = "Hocus Pocus Themed"
            description = "On Wednesday, October 12th at 7pm, the Ivy is hosting a Hocus Pocus themed sip & paint night in honor of the new movie!  Liz the Art Wiz will be behind the broom and leading the spells. $40 gets you in the door and your art supplies, $50 upgrades your ticket to include appetizers and a beverage.  Tickets can be purchased at the link below or in person at The Ivy."
            image = "/images/events/10-12-22.jpg"
            tickets = "https://hocuspocuspainting.ezevent.com"
        />
    </div>
  )
}
