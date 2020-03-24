import React, {createElement} from "react";
import ReactDom from "react-dom";
import MenuSector from "./../MenuSelector";

it("renders without crashing", () => {
    const div = createElement("div")
    ReactDom.render(<MenuSector/>, div);
})