import { useState } from 'react'
import { Container, Grid, Box,Paper, Typography, ImageList, ImageListItem, Button } from '@mui/material'
import {Masonry} from '@mui/lab'
import { styled } from '@mui/material/styles'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  animated , useSpring, useInView} from '@react-spring/web'
import '@fontsource/anton'
import '@fontsource/adamina'
import { AnimatedImg } from './components/AnimatedImg'

const itemData=[
  {
    img:'/KOLORO_1690570454726.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1690570879467.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1691349307558.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1692197003315.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1692572649715.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1693179410747.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1693179873568.jpg',
    title:'Espalda'
  },
  {
    img:'/KOLORO_1693238631026.jpg',
    title:'Espalda'
  },
  
]







function App() {

  return (
    <>
    <Container maxWidth="lg">
    <Grid container spacing={2}>
  <Grid item xs={12} md={7}>
   <Box sx={{pt:7,pb:2,textAlign:'center'}}>
      <Typography variant="h1" component="h1" sx={{fontFamily:'Anton', fontSize:'3rem'}}>
      
Victor Dominguez- Traveller
&  <span style={{color:'red'}}>Photographer</span>
      </Typography>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center'}}>
    <img src='/IMG_20230707_111434_896.jpg' style={{width:'90%',}} />
    </Box>
  </Grid>
  <Grid item xs={12} md={5} sx={{display:'flex', alignItems:'center'}}>
    <Box sx={{ display:'flex',flexDirection:'column',p:2, pt:'7vh'}}>
      <Typography variant='body1' sx={{fontFamily:'Adamina', fontSize:'1 rem'}}>
      Soy Victor Dominguez, fotógrafo de 23 años. Siempre he tenido un ojo para la belleza en el mundo que me rodea. Me fascina la luz natural y el poder que tiene para capturar la esencia de un momento. Empecé a tomar fotografías a una edad temprana, y rápidamente me di cuenta de que era mi pasión. Estudié fotografía en la universidad, donde aprendí las técnicas y el arte de la fotografía. Después de graduarme, comencé a trabajar como fotógrafo independiente. Mi trabajo ha sido publicado en revistas y periódicos de todo el mundo. También he ganado varios premios por mi fotografía. Siempre estoy buscando nuevas formas de expresarme a través de la fotografía. Me gusta experimentar con diferentes técnicas y estilos para crear imágenes únicas y memorables.
      </Typography>
      <Button variant="outlined" color="primary" sx={{mt:2}}>Contact</Button>
    </Box>
    

  </Grid>
</Grid>

      <Masonry  columns={{xs:1,md:2}}  spacing={4} sx={{overflow: 'hidden', pt:3, margin:0}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <AnimatedImg item={item}/>
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
    </>
  )
}

export default App
