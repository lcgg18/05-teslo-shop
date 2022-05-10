import NextLink from 'next/link';
import { Card, CardContent, Grid, Typography, Divider, Box, Button, Link } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen de la Orden</Typography>

            <Grid container mt={4}>
                <Grid item xs={12} sm={7}>
                     <CartList /> 
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1' mb={1}>Dirección de entrega</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link underline='always'>
                                     Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <Typography >Luis Carlos Guerra</Typography>
                            <Typography >Calle 53 # 49 - 88</Typography>
                            <Typography >Valledupar; 200005</Typography>
                            <Typography >Colombia</Typography>
                            <Typography >+57 3005001234</Typography>


                            <Divider sx={{ my: 1 }} />
                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline='always'>
                                     Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            
                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button 
                                    color='secondary' 
                                    className='circular-btn' 
                                    fullWidth
                                >
                                    Confirmar Orden
                                </Button>

                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}





export default SummaryPage