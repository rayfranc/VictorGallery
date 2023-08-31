import { useSpring, animated } from "@react-spring/web"
import { Typography } from "@mui/material"

export default function Events(){
    const [spring, api] = useSpring(
        () => ({
          from: { x: window.innerWidth,
            },
          to: ()=>{
            api.start({
                x:0
            })
          }
          
        }),
        []
      )
    return (<>
    <animated.div style={{...spring}}>
    <Typography variant="h1" component={'h1'} style={{}}>
        Ray1
    </Typography>
    </animated.div>
    </>)
}