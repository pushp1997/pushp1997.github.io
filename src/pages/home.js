import { Typography, Toolbar } from "@mui/material";
import { Grid, Box, Button } from "@mui/material";
import { drawerWidth } from '../constants';
import { blue } from '@mui/material/colors';
import { FileDownload } from "@mui/icons-material";


function HomePage() {
    return (
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography paragraph className="MuiTypography-h2">Hi!</Typography>

                    <Typography paragraph>
                        I'm a passionate Software Engineer currently pursuing my MSc in Computing Science at University College
                        Cork. With a love for programming and an eagerness to stay up-to-date with the latest technologies, I'm
                        always looking for new challenges to tackle. I have over three years of industry experience, which you
                        can learn more about in the Experience section of my website.
                    </Typography>

                    <Typography paragraph>
                        Beyond my geeky pursuits, I also enjoy expressing myself through music, and you might catch me singing or
                        streaming spotify in my free time. I'm also fascinated by mobile devices and enjoy tinkering with them,
                        experimenting with custom ROMs and rooting to unlock their full potential.
                    </Typography>

                    <Typography paragraph>
                        Feel free to explore my website and get in touch if you'd like to connect or learn more about my work!
                    </Typography>
                </Grid>

                <Grid xs={10}>
                    <Box
                        sx={{
                            width: '100%',
                            bgcolor: blue[50]
                        }}
                    >
                        <Typography paragraph>
                            <i>If you can't explain it to a six year old, you don't understand it yourself.</i><br />
                                - Albert Einstein
                        </Typography>
                    </Box>
                    <Button 
                        variant="contained"
                        href="https://github.com/pushp1997/resume/releases/latest/download/resume.pdf"
                        startIcon={<FileDownload />}
                        download={true}
                    >
                        Download Resume
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;