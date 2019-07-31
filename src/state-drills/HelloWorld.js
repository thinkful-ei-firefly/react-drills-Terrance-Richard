import React from 'react'

class HelloWorld extends React.Component {
    state = {who: 'World!'}

    handleFriend() {
        this.setState({
            who: 'Friend!'
        })
    };
    handleReact() {
        this.setState({
            who: 'React!'
        })
    };
    handleWorld() {
        this.setState({
            who: 'World!'
        })};

    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={() => this.handleFriend()}>Friend!</button>
                <button onClick={() => this.handleReact()}>React!</button>
                <button onClick={() => this.handleWorld()}>World!</button>
            </div>
        )
    }


}

export default HelloWorld
