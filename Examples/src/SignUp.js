import { Typography, Box, Grid, TextField, Button, Link } from "@mui/material";
import { Container } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from "react";

function Copyright(props){
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color='inherit' href="https://megabrain.kr/">
        WebSite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUp() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      </Box>
      <Box component='form' sx={{mt: 3}} >
      <Grid container spacing={2}>
        <Grid item xs= {12}>
          <TextField
            autoComplete="user-name"
            name='userName'
            required
            fullWidth
            id="userName"
            label='User Name'
            autoFocus
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField 
            required
            fullWidth
            id='email'
            label='Email Address'
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required
            fullWidth
            id='password'
            label='Password'
            type='password'
            name="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControlLabel
            control={<Checkbox 
                        value='allow' 
                        color='primary' 
                      />}
            label='정보 제공에 동의합니다.'
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Sign In
          </Link>
        </Grid>
      </Grid>
      </Box>
      <Copyright sx={{mt:8, mb:4}}/>
    </Container>
  )
}

export default SignUp;