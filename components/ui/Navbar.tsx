import NextLink from 'next/link'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'


export const Navbar = () => {
    const {asPath} = useRouter();

    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant="h6">Teslo |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{display:{xs:'none', sm:'block'}}}>
                    <NextLink href="/category/men" passHref>
                        <Link>
                            <Button color={ asPath === '/category/men' ? 'secondary': 'info'}>Hombre</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Link>
                            <Button color={ asPath === '/category/women' ? 'secondary': 'info'}>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kid" passHref>
                        <Link>
                            <Button color={ asPath === '/category/kid' ? 'secondary': 'info'}>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />


                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>

                        </IconButton>
                    </Link>
                </NextLink>
                <NextLink href="/menu" passHref>
                    <Link>
                        <Button>Menú</Button>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}
