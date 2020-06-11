import React, {Component} from 'react';
import classNames from 'classnames'
import './TrafficLight.css'

const GREEN = 0
const YELLOW = 1
const RED = 2

class TrafficLight extends Component{
    render(){
        const {currentColor} = this.props;
        return(
        <div className='TrafficLight'>
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })}/>
            <div className={classNames('bulb', 'yellow', {
                active: currentColor === YELLOW
            })}/>
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })}/>
        </div>
        )
    } 
}

export default TrafficLight;
