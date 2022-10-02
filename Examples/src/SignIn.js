import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from "react";
import { Checkbox, FormControlLabel, Typography, Box, Link, Grid } from "@mui/material";

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

function SignIn() {

  return (
      <Container maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component='h1' variant="h5">
            Sign in
          </Typography>
          <TextField
            label="Email"
            margin='normal'
            required
            fullWidth
            name='email'
            id='email'
            autoComplete='email'
            autoFocus
          />
          <TextField label="Password"
            margin='normal'
            required
            fullWidth
            name='password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            color='info'
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant='body2'>
                Forgot password
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {'Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{mt:8, mb:4}} />
      </Container>
  )
}

export default SignIn;