import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from "lodash";



function mean(passIn) {

    return _.round(_.sum(passIn)/passIn.length);
}


export default (props) => {
    
    return (
    
        <div>
            <Sparklines height = {120} width = {160} data = {props.passIn}>
                    <SparklinesLine color = {props.color} />
                    <SparklinesReferenceLine type = "mean" />
            </Sparklines>
            <div>{mean(props.passIn)} {props.dimension}</div>
        </div>
        
    )
    
    
}