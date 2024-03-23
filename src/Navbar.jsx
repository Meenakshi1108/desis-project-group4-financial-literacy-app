import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import './Navbar.css'; 

// Define the Navbar component
const Navbar = ({ isAuthenticated, handleLogout }) => {
    // Define state variable for the burning icon
    const [isBurning, setIsBurning] = useState(false);
    // Get the current location using useLocation hook from react-router-dom
    const location = useLocation();

    // Function to handle click on the fire icon
    const handleFireClick = () => {
        setIsBurning(!isBurning); // Toggle the burning state
    };

    // Render the Navbar component
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#769FCD' }} className='appbar'>
            <Toolbar className='toolbar'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" className="nav-link">Finzo</Link> {/* Link to home */}
                </Typography>
                {/* Button links for different sections */}
                <Button color="inherit">
                    <Link to="/resource" className={nav-link ${location.pathname === "/resource" ? "selected" : ""}}>Learn</Link>
                </Button> 
                <Button color="inherit" >
                    <Link to="/news" className={nav-link ${location.pathname === "/news" ? "selected" : ""}}>News</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/quiz" className={nav-link ${location.pathname === "/quiz" ? "selected" : ""}}>Quiz</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/blog" className={nav-link ${location.pathname === "/blog" ? "selected" : ""}}>Blog</Link>
                </Button>
                {/* Button to toggle fire icon */}
                <IconButton color="inherit" component={Link} to="/dailydose" onClick={handleFireClick}>
                    {isBurning ?    
                        <LocalFireDepartmentIcon style={{ color: '#fedf17' }} /> :
                        <WhatshotIcon />
                    }
                </IconButton>
                {/* Render logout button if authenticated, otherwise render login link */}
                {isAuthenticated ? (
                        <li><button onClick={handleLogout} className={nav-link ${location.pathname === "/blog" ? "selected" : ""}}>Logout</button></li>
                        ) : (
                        <li><Link to="/account">Login</Link></li>
                )}
            </Toolbar>
        </AppBar>
    );
};

// Export the Navbar component
export default Navbar;
