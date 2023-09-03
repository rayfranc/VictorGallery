import { Box, Button, Typography } from "@mui/material";


export default function NextPageArrow(){
    return(<>

    <Box sx={{position:'fixed', top:'45%', left:{xs:'86%',sm:'93%',md:'95%', lg:'96.5%'}, zIndex:'1000'}}>
        <Button variant="contained" href="/#/events"> 
        <Typography fontFamily={'Anton'} style={{ fontSize:'2rem', writingMode:'vertical-lr', transform:'rotate(180deg)', textDecoration:'underline'}}>
            Eventos
        </Typography>
        </Button>
    </Box>
    </>)
}