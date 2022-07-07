import React from "react";
import { Grid } from "@mui/material";

const NavMenu: React.FC = () => {
  const menu = [
    {
      title: "Início",
      url: "#",
    },
    {
      title: "Sobre mim",
      url: "#about-me",
    },
    {
      title: "Currículo",
      url: "#resume",
    },
  ];
  return (
    <ul>
      {menu.map((item, id) => (
        <Grid>
          <li key={id}>
            <a href={item.url}>{item.title}</a>
          </li>
        </Grid>
      ))}
    </ul>
  );
};

export default NavMenu;
