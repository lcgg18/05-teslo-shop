import NextLink from 'next/link';
import { Card, CardContent, Grid, Typography, Divider, Box, Link, Chip } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de orden 114211425' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Orden: ABC123</Typography>
            {/* <Chip
                sx={{my:2}}
                label='Pendiente de pago'
                variant='outlined' 
                color='error'
                icon={<CreditCardOffOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label='La Orden ya fue pagada'
                color='success'
                variant='outlined'
                icon={<CreditScoreOutlined />}
            />
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
                                {/* TODO */}
                                <h1>Pagar</h1>
                                <Chip
                                    sx={{ my: 2 }}
                                    label='La Orden ya fue pagada'
                                    color='success'
                                    variant='outlined'
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}





export default OrderPage