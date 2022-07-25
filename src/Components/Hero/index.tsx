import * as React from 'react';

import { Container } from "@mui/system";
import { Grid } from "@mui/material";

import { Typewriter } from "react-simple-typewriter";
import { HeroContainer } from "./style";


const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container>
        <Grid container spacing={3}>
            <Grid 
                item
                sm={6}
                xs={12}
                md={6}
            >


            <h3>Texto de saudação</h3>
            <h1>
              <Typewriter
                words={["Texto de Saudação"]}
                typeSpeed={150}
                cursor
                cursorStyle="_"
              />
            </h1>
            <h2>
                Desenvolvedor Full-Stack
            </h2>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            md={6}

            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
          >
            <h1>
                M
            </h1>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
