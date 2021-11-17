import React from "react";
import Button from "../../Button/Button";

const DesignerCard = (props:any) => {
    return (
        <div className="card">
        <div className="card-image">
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">Richard Barrett</p>
                <p className="subtitle is-6">r.barrett99@email.com</p>
            </div>
            </div>
            <div className="content">
            {props.description}
            <br />
            <a href={props.link}>
                <Button text="View Profile" onClick={() => {}} design="outline-primary" />
            </a>
            </div>
        </div>
        </div>
    );
    }

export default DesignerCard;