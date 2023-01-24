import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <Typography variant='h3'>Page Not Found</Typography>
        <Typography variant='p'> Go to <Link to='/'>Home Page</Link></Typography>
    </>
  )
}

export default NotFound