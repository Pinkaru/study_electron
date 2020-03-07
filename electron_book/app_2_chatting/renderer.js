import React from "react";

export class Mycomponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            clickCount: 0
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }

    render() {
        const {clickCount} = this.state;
        return (
            <div>
                <span>Click count:</span>
                <span>{clickCount}</span>
                <button onClick={this.handleOnClick}>click me</button>
            </div>
        );
    }
}