import React from "react";
import "./LeftArc.css";
import Adres from "./Adres";
import Brand from "./Brand"

export default function LeftArc() {
  return (
    <section>
      <div className="leftarc">
        <Adres />
        <Brand />
        <div className="col-2"></div>
      </div>
    </section>
  );
}
