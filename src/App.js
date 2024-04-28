import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import HomePage from './pages/home';
import ExperiencePage from './pages/experiences';
import CertificationsPage from './pages/certifications';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import { Box } from '@mui/system';


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const MobileOpenContext = React.createContext();
export const IsClosingContext = React.createContext();

export function App() {
  const [currentPath, setCurrentPath] = React.useState('/');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleSelectSection = (path) => {
    setCurrentPath(path);
  };
  
  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    <MobileOpenContext.Provider value={{mobileOpen, setMobileOpen}}>
      <IsClosingContext.Provider value={{isClosing, setIsClosing}}>
        <Box sx={{ display: 'flex' }}>
            <Topbar />
            <Sidebar currentPath={currentPath} setCurrentPath={(path) => handleSelectSection(path)}/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experiences" element={<ExperiencePage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
      </IsClosingContext.Provider>
    </MobileOpenContext.Provider>
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}
