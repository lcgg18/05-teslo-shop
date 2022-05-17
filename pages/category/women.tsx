import { NextPage } from "next";
import { useProducts } from "../../hooks";
import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { FullScreenLoading } from "../../components/ui"
import { ProductList } from '../../components/products/ProductList';



const WomenPage: NextPage = () => {
    const { products, isLoading } = useProducts('/products?gender=women')

    return (
        <ShopLayout title={'Teslo-Shop - Women '} pageDescription={'Encuentra los mejores producto de Teslo para Ellas'} >
            <Typography variant='h1' component='h1' >Tienda</Typography>
            <Typography variant='h2' sx={{ mb: 1 }} >Productos para ellas</Typography>

            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }

        </ShopLayout>
    )
}
export default WomenPage;