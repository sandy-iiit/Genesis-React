
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NewLogoImage from '../assets/images/Logo.ico';
import {Link} from "@mui/material";
import classes from './navbar.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import axiosConfiguration from "../config/axiosConfiguration";

const pages = [
    ['Home','/'],
    ['About Us','/aboutUs' ],
    ['Contact Us','/contactUs'],
    ['Services','/services'],
    ['Policies','/policies'],
]

function NavBar() {
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
    const type=useSelector((state)=>state.auth.type)
    const settingsPaths = type==="User"?['/profile']:['/profile', '/dashboard']; // Add respective paths here
    const settings = type==="User"?['Profile']:['Profile','DashBoard'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate=useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    async function handleClick() {
        await axiosConfiguration.post("/logout")
        navigate('/')
        window.location.reload();


    }

    return (
        <AppBar position="static"  sx={{ backgroundColor: '#3E54AE',height:'85px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <div style={{ height: '70px',backgroundColor:'white',borderRadius:'80px',marginTop:'5px' }}>
                        <img src={NewLogoImage} alt="New Logo" style={{ height: '58px' }} />

                    </div>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                               <NavLink to={page[1]} key={page[0]}> <MenuItem   onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page[0]}</Typography>
                                </MenuItem></NavLink>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },gap:'25px',marginLeft:'25px' }}>
                        {pages.map((page) => (
                            <NavLink  to={page[1]} key={page[0]}  className={classes.customLink} >
                              <Button
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{width:'130px', my: 2, color: 'white', display: 'block',fontSize:'20px',fontFamily:'sans-serif',textTransform: 'none',fontWeight:500,borderRadius:'80px',
                                        '&:hover': {
                                    backgroundColor:'white',
                                            color:'#3E54AE',

                                },
                                    textDecoration: 'none',

                                        }}
                            >
                                {page[0]}
                            </Button>
                            </NavLink>
                        ))}
                    </Box>


                    {isLoggedIn ?  <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <NavLink to={settingsPaths[index]} className={classes.customLink}>
                                            {setting}
                                        </NavLink>

                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">
                                    <button onClick={handleClick}  className={classes.login}>
                                        Logout
                                    </button>

                                </Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                        : <Typography textAlign="center">
                            <NavLink className={classes.login} to={"/login"}>Login/Signup</NavLink>
                        </Typography>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
