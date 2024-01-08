import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { datacd } from './data';
import { datas } from './datas';
import exotic from './exotic.png'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: '100px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <img src={exotic} width="200" height="200" />
            </Grid>
            <Grid item xs={6} md={8}>
              <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '80px' }}>
                EXOTIC AUTO DEALER
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Box className="bgku" sx={{ width: '90%' }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="kendaraan Mobil" {...a11yProps(0)} />
              <Tab label="Kendaraan Motor" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
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
                                ID : {index.id}
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
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <React.Fragment>
                <CssBaseline />
                <Container maxWidth="100%">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      {datas.map((index) => (
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
                                ID : {index.id}
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
            </TabPanel>
          </SwipeableViews>
        </Box>
      </header>
    </div>
  );
}

export default App;
