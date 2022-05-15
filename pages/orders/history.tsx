import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const columns : GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullname', headerName: 'Nombre Completo', width: 300},

    {
        field: 'paid',
        headerName: 'Pagado',
        description: 'Muestra información sobre el estado de la orden',
        width: 150,
        renderCell:(params: GridValueGetterParams) => {
            return( 
                params.row.paid 
                ? <Chip  color='success' label='Pagada' variant='outlined' />
                : <Chip  color='error' label='Pendiente' variant='outlined' />

            )
        }
    },
    {
        field: 'ir a la orden',
        headerName: 'Orden',
        width: 180,
        sortable: false,
        renderCell:(params: GridValueGetterParams) => {
            return( 
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always'>Ir a la orden</Link>
                </NextLink>
            )
        }

    }
]

const row = [
    {id: 1, paid: true, fullname: 'Luis Carlos Guerra'},
    {id: 2, paid: false, fullname: 'Margareth Elisa Herrera'},
    {id: 3, paid: true, fullname: 'Madelcy Gomez'},
    {id: 4, paid: false, fullname: 'Liz Marianne Guerra'},
    {id: 5, paid: true, fullname: 'Daphne Guerra Herrera'},
    {id: 6, paid: false, fullname: 'Luis Alejando Guerra'}
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes'>
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height:650, width:'100%' }}>
                <DataGrid 
                    rows={ row }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions = { [10] }
                />
            </Grid>

        </Grid>
    </ShopLayout>
    );
}

export default HistoryPage