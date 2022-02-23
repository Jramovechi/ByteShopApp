import * as React from "react";
import "./Item.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function Item({ data }) {
  return (
    <Card sx={{ maxWidth: 355 }} className="Card">
      <CardMedia
        className="imgProduct"
        component="img"
        height="280"
        image={data.image}
        alt="Product"
      />
      <CardContent className="textCard">
        <Typography gutterBottom variant="h5" component="div">
          Product: {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {data.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: $ {data.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
