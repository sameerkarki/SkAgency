import { ReactLenis, useLenis } from 'lenis/react'

function Scroller({children}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{
        lerp: 0.04
    }}>
      {children}
    </ReactLenis>
  )
}

export default Scroller;
