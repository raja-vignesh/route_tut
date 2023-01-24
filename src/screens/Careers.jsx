import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CareerSList from '../components/CareerSList'

const Careers = () => {

    const StyledLink = styled(Link)({
        textDecoration: 'none',
        fontSize: 20
    })
   const careers = useLoaderData()
   console.log('Careers')
  return (
    <>
        <Typography variant='h3'>Careers</Typography>
        <Box sx={{pY:5}}>
        {
            careers.map((car) => {
                return (
                    <StyledLink to={car.id.toString()} key={car.id}>
                        <CareerSList title={car.title} location={car.location}/>
                    </StyledLink>
                )
            })
        }
        </Box>
    </>
  )
}

{/* <Typography variant='h4'>{car.title}</Typography>
                        <Typography variant='p'>{car.location}</Typography> */}

export const careersLoader = async () => {
    const res = await fetch('http://localhost:8000/careers')

    return res.json()
}

export default Careers