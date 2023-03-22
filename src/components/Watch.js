import React, { Component } from "react";

export default class Watch extends Component {
    constructor(props) {
        super(props);
        this.refSecond = React.createRef();
        this.refMinute = React.createRef();
        this.refHour = React.createRef();
        this.time = this.props.time;
        this.state = {};
        this.timer = null;
    }
    
    componentDidMount() {
        this.animateWatch()
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    animateWatch() {
        if (this.state) {
            this.timer = setInterval(() => {
                this.rotateWatchArroy()
            }, 1000)
        }
    }

    rotateWatchArroy() {
        if (this.state) {
            const deg = 6;
            const currentTime = this.calcTime(this.time);
            const hours = currentTime.slice(0, 2)
            const minutes = currentTime.slice(3, 5)
            const seconds = currentTime.slice(6, 8)

            this.setState({
                second: {transform : `rotateZ(${seconds * deg}deg)`},
                minute: {transform : `rotateZ(${minutes * deg}deg)`},
                hour: {transform : `rotateZ(${hours * 30}deg)`}
            })
        }
    }

    calcTime(zone) {
        const date = new Date();
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        const nd = new Date(utc + (3600000 * zone));
        return nd.toLocaleTimeString();
    }

    render() {
        return(
            <div className='watch'>
                <div className='name'>{this.props.elem.name}</div>
                <button className='close' onClick={() => this.props.remove(this.props.elem.id)}>X</button>
                <div className="hour">
                    <div className="hours" ref={this.refHour} style={this.state.hour}></div>
                </div>
                <div className="minute">
                    <div className="minutes" ref={this.refMinute} style={this.state.minute}></div>
                </div>
                <div className="second">
                    <div className="seconds" ref={this.refSecond} style={this.state.second}></div>
                </div>
            </div>
        )
    }
}