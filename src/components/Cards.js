import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from './images/event.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>
       <div className="heading">
      <h1 className='text-center my-5' style={{
      color: '#D51828',
      backgroundColor: '#000000'
     }}>Gallery</h1>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item style={{
              backgroundColor:'#000000',
            }}>
            <img src={image} width={800} height={400} 
            />

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{
              backgroundColor:'#000000',
            }}>
            <img src={image} width={400} height={400} />

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{
              backgroundColor:'#000000',
            }}>
            <img src={image} width={400} height={400} />

          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{
              backgroundColor:'#000000',
            }}>
            <img src={image} width={800} height={400} />

          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

