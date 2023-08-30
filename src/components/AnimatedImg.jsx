import * as React from 'react'
import { useInView, animated } from '@react-spring/web'

import { buildInteractionObserverThreshold } from '../helpers/threshold'

export const AnimatedImg = ({ item }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-45% 0px -45% 0px',
      amount: buildInteractionObserverThreshold(),
    }
  )

  return (
    <animated.img ref={ref}
            style={{maxWidth:'100%',...springs}}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
  )
}