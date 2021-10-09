import React, { PureComponent } from "react";
import './ColoBox.scss';
import ProTypes from 'prop-types';

class ColoBox extends PureComponent{
    render(){
        const {color}=this.props;
        return(
            <div
                style={{ backgroundColor: color }}
                className="color-box"
        ></div>
        );
    }
}

ColoBox.propTypes={
    color: ProTypes.string.isRequired,
};


export default ColoBox;