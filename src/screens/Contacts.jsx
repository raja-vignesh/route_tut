import styled from '@emotion/styled'
import { Box, Typography,Button, Container } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StyledLink = styled(NavLink)({
    textDecoration: 'none',
    color: '#fff',
    fontSize: 20,
    "&.active": {
        background: 'navy',
    },
    background: '#1876D1',
    paddingTop:10,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:10,
    borderRadius: 5,
})

const Contacts = () => {
    return (
        <>
            <Typography variant='h3'>Contacts</Typography>
            <Typography variant='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio recusandae amet expedita aliquid ut nemo, quasi consectetur cupiditate temporibus nihil blanditiis placeat velit cum rerum minima doloremque omnis eum error!</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap: '50px',my:5 }}>
                <StyledLink to='mail'> Mail Us</StyledLink>
                <StyledLink to='phone'> Call Us </StyledLink>
            </Box>

            <Container sx={{p:5}}>
                <Outlet />
            </Container>
        </>
    )
}

export default Contacts