import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { drawerWidth, menuItems } from '../constants';
import { MobileOpenContext, IsClosingContext } from '../App';

const Sidebar = ({ currentPath, setCurrentPath }) => {
  const navigate = useNavigate();
  const {setIsClosing} = useContext(IsClosingContext);
  const {mobileOpen, setMobileOpen} = useContext(MobileOpenContext);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Avatar
        alt="Pushp Vashisht"
        src="https://drive.google.com/uc?id=1KKQYuL9ITyLJfUKnRYX4Tn8Rr9pxUNy4"
        sx={{ width: 150, height: 150, margin: '20px auto'}}
      />
      <Divider />
      <List spacing={3}>
        {/* Map over menuItems array to generate list items */}
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={currentPath === item.path}
              onClick={() => {
                setCurrentPath(item.path);
                // Check if the path is an external link, then use window.location.href
                if (item.path.startsWith('http')) {
                  window.location.href = item.path;
                } else {
                  navigate(item.path);
                }
              }}
            >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
