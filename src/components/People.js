import React from "react";

class People extends React.Component {
    handleClick() {
        console.log('Hello World');
    }

    render() {
        const { names } = this.props;

        return names ? (
            <section className="list" onClick={ this.handleClick }>
                    <ul className="list-group">
                    { names.map((name, i) => (
                        <li className="list-group-item" key={ i }>{ name }</li>
                    )) }
                    </ul> 
            </section>
        ) : <p>Hello World</p>
    }
}

 export default People;