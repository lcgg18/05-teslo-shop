import NextLink from 'next/link';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../../components/layouts';


const RegisterPage = () => {
  return (
    <AuthLayout title='Registrarme'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} pb={2}>
            <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
          </Grid>
          <Grid item xs={12} >
            <TextField
              label='Nombre'
              type='text'
              variant='filled'
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label='Correo'
              type='email'
              variant='filled'
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label='Contraseña'
              type='password'
              variant='filled'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <Button  color='secondary' className='circular-btn' size='large' fullWidth>Registrarme</Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='end'>
            <NextLink href='/auth/login' passHref>
              <Link underline='always'>
                Ya tengo cuenta
              </Link>
            </NextLink>
          </Grid>
        </Grid>

      </Box>
    </AuthLayout>
  )
}

export default RegisterPage