import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import PhotoCamera from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const App = () => {
    return (
        <>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <AddAPhotoIcon/>
                <Typography variant="h6">
                Photo Album

                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                      Photo Album
                 </Typography>

                </Container>
            </div>
        </main>

         {/* <div>
            <Typography variant="h1">Hello, world!</Typography>
        </div> */}
        </>
       

    );
}

export default App;