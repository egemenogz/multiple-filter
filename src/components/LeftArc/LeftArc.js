import React from "react";
import "./LeftArc.css";
import Adres from "./Adres";
import Brand from "./Brand";
import Color from "./Colors";
import Point from "./Point";
import searchButton from "../../data/SearchButton";
import Button from "@mui/material/Button";

export default function LeftArc() {
  return (
    <section>
      <div className="leftarc">
        <div className="col-2">
          <Adres />
          <Brand />
          <Color />
          <Point />
          <div className="button">
            <Button variant="contained" sx={{ backgroundColor: "black" }}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
