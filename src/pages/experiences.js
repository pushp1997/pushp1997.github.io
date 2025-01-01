import { Box, Toolbar } from "@mui/material";
import { drawerWidth } from '../constants';
import experiences from '../data/experiences';


const JobEntry = ({ title, company, duration, location, responsibilities }) => (
    <div>
        <h2>{title}</h2>
        <div className="w3-container w3-sand w3-leftbar" style={{marginBottom: '20px'}}>
            <p><em>{company}<br />{duration}<br />{location}</em></p>
            <ul>
            {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
            ))}
            </ul>
        </div>
    </div>
);


function ExperiencePage() {
    return (
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            {experiences.map((job, index) => (
                <JobEntry key={index} {...job} />
            ))}
        </Box>
    );
}

export default ExperiencePage;