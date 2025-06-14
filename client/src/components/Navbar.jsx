import React from 'react'
import "../styles/components/Navbar.css"
import "../styles/components/subcomponents/searchbars/DrawerSearchbar.css";
import "../styles/components/subcomponents/searchbars/HeaderSearchbar.css";
import {AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import DrawerSearchBar from "./subcomponents/searchbars/DrawerSearchbar";
import HeaderSearchbar from "./subcomponents/searchbars/HeaderSearchbar";


const drawerWidth = 240;
const navItems = [
  {
    label:'Sobre Nosotros',
    relPath: "/nosotros"
  },
  /* {
    label: 'Contacto',
    relPath: "/contacto"
  } */];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // Prevent drawer from closing when clicking inside the DrawerSearchBar input
  const handleDrawerClick = (event) => {
    // If the click originated from inside the search bar, don't close the drawer
    if (
      event.target.closest('.search-bar-container') || // adjust selector to your DrawerSearchBar root class
      event.target.closest('input[type="text"]')
    ) {
      event.stopPropagation();
    } else {
      handleDrawerToggle();
    }
  };
  const drawer = (
    <Box id="nb-drawer" onClick={handleDrawerClick}
      sx={{
        height: "100%",
        textAlign:"center"
      }}
    >
      <Container className="logo-container">
        <img id="nb-isotype" src="../images/isotype_white_seethrough.png"/>
      </Container>
      <Divider/>
      <DrawerSearchBar></DrawerSearchBar>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton href={item.relPath} className="drawer-nav-link"
              sx={{
                color: "#FFF",
                textAlign: 'center'
                }}
            >
              <ListItemText primary={item.label}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box id="navbar"
      sx={{
        display: 'flex'
      }}
    >
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          padding:0
        }}
      >{/* HEADER */}
        <Toolbar id="nb-header"
          sx={{

          }}
        >
          {/* BURGER MENU */}
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{
              display: {
                md: 'none'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* HEADER LOGO */}
          <Button id="nb-logo-container" href="/">
            <img id="nb-imagotype" src="../images/imagotype_white_seethrough.png"/>
            <img id="nb-logotype" src="../images/logotype_white.png"/>
          </Button>
          {/* HEADER SEARCHBAR */}
          <Container id="nb-searchbar" sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
            <HeaderSearchbar/>
          </Container>
          {/* NAV LINKS */}
          <Box id="nb-link-list"
            sx={{
              display: {
                xs: 'none',
                md: 'block'
                }
            }}
          >
            {navItems.map((item) => (
              <Button className="nav-link" href={item.relPath} key={item.label}
                sx={{
                  color: "aliceblue",
                  fontWeight: 800,
                  marginRight: "20px"
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        {/* DRAWER NAV */}
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true}}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main"
        sx={{
          padding: 5
        }}
      >
      </Box>
    </Box>

  );
}
