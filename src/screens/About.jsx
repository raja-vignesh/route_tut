import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
    const [user, setUser] = useState('mario')

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <>
            <Typography variant='h3'>About</Typography>
            <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio recusandae amet expedita aliquid ut nemo, quasi consectetur cupiditate temporibus nihil blanditiis placeat velit cum rerum minima doloremque omnis eum error!</Typography>
            <Button variant='contained' onClick={() => setUser(null)} sx={{mt:3}}>Logout</Button>
        </>
    )
}

export default About