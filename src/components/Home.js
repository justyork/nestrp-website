import React from "react";
import {NavLink} from "react-router-dom";

export default class Home extends React.Component{

    pageType = 'home';
    constructor(props) {
        super(props);
        this.state = {
            was: props['pageType']
        }
        if(!props['noUpdate'])
            this.updateType()
    }

    render() {
        return (
            <React.Fragment>
                <NavLink to="/play" >
                    <div className="play-icon play-ab">
                        <div className="play-icon-big"></div>
                        <div className="play-icon-middle"></div>
                        <div className="play-icon-small play-icon-tr-1 main"></div>
                        <div className="play-icon-small play-icon-tr-2 alt "></div>
                        <div className="play-icon-small play-icon-tr-3 alt "></div>
                    </div>
                </NavLink>
            </React.Fragment>
        );
    }
    updateType() {
        this.props.updateType({pageType: this.pageType, pageFrom: this.state.was})
    }

}
