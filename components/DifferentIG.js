// NOT USING
// THIS GRAPHQL QUERY IS OUTDATED AND DOES NOT WORK ANYMORE

import React, { useState, useEffect } from "react";

const url =
  'https://www.instagram.com/graphql/query/?query_hash=56a7068fea504063273cc2120ffd54f3&variables={"id":6104504432,"first":6}'

export default function DifferentIG() {

    const [insta, setInsta] = useState([])

    useEffect(() => {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            const photosArray = data.data.user.edge_owner_to_timeline_media.edges;
            setInsta(photosArray);
          });
      }, [])

  return (
    <div>

        {insta.map((photo) => (
            <img src={photo.node.display_url} key={photo.node.id} />
        ))}

    </div>
  )
}
