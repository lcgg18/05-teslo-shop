import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { FC } from "react";

interface Props{
    count: number;
}

export const ItemCounter:FC<Props> = ({count}) => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            <RemoveCircleOutline />
        </IconButton>
        <Typography sx={{width: 40, textAlign: 'center'}}>
           {count}
        </Typography>
        <IconButton>
            <AddCircleOutline />
        </IconButton>
    </Box>
  )
}
