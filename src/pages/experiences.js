import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { drawerWidth } from '../constants';


function ExperiencePage() {
    return (
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <div>Experience Page</div>
        </Box>
    );
}

export default ExperiencePage;