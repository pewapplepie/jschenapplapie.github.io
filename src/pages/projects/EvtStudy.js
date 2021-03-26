import React, { Component } from "react";
import MarkdownRender from "../../function/MarkDownRender.js";
import Cell from "../../assets/coursework/hw2_FDM.md";
var cell = require("../../assets/coursework/hw2_FDM.md");

function EvtStudy() {
  return <MarkdownRender source={Cell.source.join("")} />;
}

export default EvtStudy;
