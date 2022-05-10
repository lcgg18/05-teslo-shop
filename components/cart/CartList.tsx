import { FC } from 'react';
import NextLink from 'next/link';
import { initialData } from '../../database/products';
import { Box, Grid, Link, Typography, CardActionArea, CardMedia, Button } from '@mui/material';
import { ItemCounter } from '../ui';

const productsInCard = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
]

interface Props {
    editable?: boolean;
}

export const CartList:FC <Props> = ({ editable = false }) => {
    return (
        <>
            {
                productsInCard.map(product => (
                    <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            {/* TODO: llevar a al pagina del producto*/}
                            <NextLink href='/product/slug' passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images[0]}`}
                                            component='img'
                                            sx={{ borderRadius: '5px' }}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1' component='h5'>{product.title}</Typography>
                                <Typography variant='body1'>Talla: <strong>M</strong></Typography>

                                {
                                    editable ? <ItemCounter count={2} /> : <Typography variant='body1'>Cantidad:3</Typography>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
                            {
                                editable && (<Button color='secondary' variant='text'>Remover</Button>)
                            }
                            
                        </Grid>
                    </Grid>

                ))

            }
        </>

    )
}
