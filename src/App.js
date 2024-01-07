import './App.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { datacd } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography gutterBottom variant="h4" component="div" style={{marginBottom: '100px'}}>
        EXOTIC AUTO DEALER
      </Typography>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="100%">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {datacd.map((index) => (
                  <Grid item xs={2} sm={4} md={4} key={index.id}>
                    <Card sx={{ maxWidth: 400 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={index.picture}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          {index.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                          {index.price}
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
