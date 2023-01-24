import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {

  const { id } = useParams()
  console.log(id)
  const careerDetail = useLoaderData()
  return (
    <>
      <Divider sx={{ py: 1 }} />
      <Box sx={{py:1}}>
        <Typography variant='h5' >{careerDetail.title}</Typography>
        <Typography variant='h6' color='grey'>{careerDetail.salary}</Typography>
        <Typography variant='subtitle1' color='grey'>{careerDetail.location}</Typography>
      </Box>
    </>
  )
}


export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const response = await fetch(`http://localhost:8000/careers/${id}`)

  if (!response.ok) {
    throw new Error('Career details not found')
  }
  return response.json()
}

export default CareerDetails