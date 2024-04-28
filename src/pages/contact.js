import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { drawerWidth } from '../constants';


function ContactPage() {
    return (
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <div>Contact Page</div>
        </Box>
    );
}

export default ContactPage;