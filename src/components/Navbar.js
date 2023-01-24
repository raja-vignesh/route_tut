import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    Container,
    Button,
} from "@mui/material";


import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import CareerBreadCrumbs from "./CareerBreadCrumbs";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const StyledLink = styled(Link)({

    textDecoration: 'none',
    color: '#fff',
    fontSize: 20
})

export const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    color: '#fff',
    fontSize: 20,
    "&.active": {
        background: 'navy',
        padding: 10,
        borderRadius: 5
    },
})


const Navbar = () => {
    return (
        <>
            <AppBar position="sticky">
                <Container>
                    <StyledToolbar>
                        <Typography variant="h5">Router 6.4 and above</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                            <StyledNavLink to='/'>Home</StyledNavLink>
                            <StyledNavLink to='about'> About</StyledNavLink>
                            <StyledNavLink to='contact'> Contact </StyledNavLink>
                            <StyledNavLink to='career'> Careers </StyledNavLink>
                        </Box>
                    </StyledToolbar>
                </Container>
            </AppBar>
            <Container sx={{p:2}}>
                <CareerBreadCrumbs />
            </Container>
            <Container sx={{p:2}}>
                <Outlet />
            </Container>
        </>
    )
}

export default Navbar