import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Body } from "./style";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 345,
    margin: "10px",
  },
});

const Home = () => {
  const classes = useStyles();

  const clients = [
    {
      name: "Rick",
      avatar:
        "https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg",
      site: "/client1",
    },
    {
      name: "Morty",
      avatar:
        "https://static.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20200519152019",
      site: "/client1",
    },
  ];
  return (
    <Body>
      {clients.map((client) => (
        <>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100"
                width="100"
                image={client.avatar}
                title={client.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {client.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </>
      ))}
    </Body>
  );
};

export default Home;
