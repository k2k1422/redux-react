import React from 'react';
import editIcon from "../icons/edit_icon.svg";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={editIcon} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="edit" />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    }
    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (<Cat mouse={mouse} />)} />
            </div>
        );
    }
}

export default MouseTracker;