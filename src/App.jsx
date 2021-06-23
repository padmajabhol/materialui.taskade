import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia,Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline/>s
        <AppBar position="relative">
            <Toolbar>
                <AddAPhotoIcon className={classes.icon}/>
                <Typography variant="h6">
                Photo Album

                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" style={{marginTop: '100px'}}>
                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                      Photo Album
                 </Typography>
                 <Typography variant="h5" align="center" color="textSecondary" paragraph>
                 hello everyone, this is a photo album and I m trying ti asdfghjkl zxcvbnm.
                 </Typography>
                 <div>
                     <Grid container spacing={2} justify="center">
                     <Grid item>
                         <Button variant="contained"
                         color="primary" >
                         See my photos.

                         </Button>
                     </Grid>
                     <Grid item>
                         <Button variant="outlined"
                         color="primary" >
                         Secondary action.

                         </Button>
                     </Grid>

                     </Grid>
                 </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} >
              {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={3}>
                   <Card className={classes.card}>
                   <CardMedia 
                   className={classes.cardMedia}
                       image="https://source.unsplash.com/random"
                       title="Image title"
                   />
                   <CardContent className={classes.CardContent}>
                       <Typography gutterBottom variant="h5">
                         Heading
                       </Typography>
                       <Typography gutterBottom variant="h8">
                         Media card
                       </Typography>
                   </CardContent>
                   <CardActions>
                      <Button size="small" color="primary">View</Button> 
                      <Button size="small" color="primary">View</Button>
                   </CardActions>
                   </Card>
               </Grid>
              ))}
            </Grid>

            </Container>
       
        </main>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
           Footer
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
            Something here to look like a footer.
        </Typography>

        </footer>

         {/* <div>
            <Typography variant="h1">Hello, world!</Typography>
        </div> */}
        </>
       

    );
}

export default App;