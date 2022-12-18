import dynamic from "next/dynamic"
// disable server side rendering for map component
// https://nextjs.org/docs/advanced-features/dynamic-import

const Map = dynamic(() => import('./LeafletMap'), {
    ssr: false,
})

export default Map