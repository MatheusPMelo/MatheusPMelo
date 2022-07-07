import React from "react";

import { Container } from "@mui/system";
import { Grid } from "@mui/material";

import NavMenu from "../Header/Menu";
import { ContainerMenuMobile } from "./style";

const MenuMobile: React.FC = () => {
  return (
    <ContainerMenuMobile>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <NavMenu />
        </Grid>
      </Container>
    </ContainerMenuMobile>
  );
};

export default MenuMobile;
