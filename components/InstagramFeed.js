// NOT USING

import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramFeed() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <InstagramEmbed 
            url="https://www.instagram.com/reel/CgzRr1gvp6t/?igshid=YmMyMTA2M2Y=" 
            // width={328} 
            // width="50%"
            width={397}
        /> */}

        <InstagramEmbed 
            url="https://www.instagram.com/p/CfwrhntJQ8k/?igshid=YmMyMTA2M2Y=" 
            width={328} 
            // width="50%"
            // width={420}
        />

    </div>
  )
}
