import { Container, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerLayout = () => {
    return (
        <>
            <Typography variant='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ex sit dolores magni mollitia fuga, laudantium voluptatibus sunt minus soluta, maiores corrupti quibusdam quam velit debitis alias consectetur vitae praesentium?</Typography>
            <Container sx={{ p: 5 }}>
                <Outlet />
            </Container>
        </>
    )
}

export default CareerLayout