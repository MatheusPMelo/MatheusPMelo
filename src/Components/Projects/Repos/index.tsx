import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { StyImg } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Repos: React.FC = () => {
  const Repos = [
    {
      images: "../../../Assets/img/payment.png",
      linkRepo: "https://github.com/MatheusPMelo/Payment-elegant",
    },
    {
      images: "../../../Assets/img/payment.png",
      linkRepo: "https://github.com/MatheusPMelo/Payment-elegant",
    },
    {
      images: "../../../Assets/img/payment.png",
      linkRepo: "https://github.com/MatheusPMelo/Payment-elegant",
    },
  ];


  return (
    <Container>
      {window.innerWidth <= 500 ? (
        <Grid alignContent="center" justifyContent="center" container>
            {Repos.map((item, id) => (
              <Grid item key={id} xs={12}>
                <a href={item.linkRepo} target="_blank">
                  <StyImg>
                    <img src={item.images} />
                    <div className="opacity"></div>
                  </StyImg>
                </a>
              </Grid>
            ))}
        </Grid>
      ) : (
        <Grid alignContent="center" justifyContent="center" container>
          {Repos.map((item, id) => (
            <>
              <Grid item key={id} md={6}>
                <a href={item.linkRepo} target="_blank">
                  <StyImg>
                    <img src={item.images} />
                    <div className="opacity"></div>
                  </StyImg>
                </a>
              </Grid>
            </>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Repos;
