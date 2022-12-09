import React from "react";
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Card = ({id,name,website}) =>{
    var link=`https://robohash.org/${id}?size=200x200`;
    return(
        <div className="tc grow bg-light-gray br3 pa2 ma2 dib bw2 shadow-5 mv4 w-100 w-50-m w-25-l mw5">
            <img src={link} alt="Loading......" />
            <div>
                <h4>
                    {name}
                </h4>

                <p>
                    {/* <Link to="link"> Check more detail here </Link>  */}
                    website: {website}
                </p>
            </div>
        </div>
    );
}

export default Card;