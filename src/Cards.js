import React from "react";
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./Card";

const Cards = ({ robots }) => {
    let n = robots.length;
    var arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(<Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            website={robots[i].website}
        />);
    }

    // console.log(robots);

    return (
        <div className="tc">
            {
                arr
            }
        </div>
    );
}

export default Cards;