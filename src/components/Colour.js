import { Component } from "react";

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { colours } = this.props;

        this.setState({
            index: (this.state.index + 1) % colours.length,
        });
    }

    render() {
        const { index } = this.state;
        const { colours } = this.props;

        const colour = colours[index];

        return (
            <div onClick={ this.handleClick } style={{
                width: "200px",
                height: "200px",
                background: colour,
            }} />
        );
    }
}

export default Colours;