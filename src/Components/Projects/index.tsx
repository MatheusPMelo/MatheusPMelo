import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { ProjectsContainer } from "./style";
import Repos from "./Repos";

const Projects: React.FC = () => {
    return(
        <ProjectsContainer>
            <Container>
                <Grid container spacing={3}>
                    <Grid 
                        justifyContent="center"
                        alignContent="center"
                        md={6}
                    >
                        <Repos/>
                    </Grid>
                    <Grid 
                    container
                    justifyContent="center"
                    alignContent="center"
                    md={6}
                    >
                        <Box>
                            <h1>Saudação</h1>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e </p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ProjectsContainer>
    )
}

export default Projects