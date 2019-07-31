import React from 'react'

class RouletteGun extends React.Component {

    state = {
        chamber: null,
        spinningTheChamber: false,
        bulletInChamber: 8
    }

    handleTrigger() {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(() => {this.setState({
            chamber: Math.ceil(Math.random() * 8),
            spinningTheChamber: false
        })}, 2000);
    };

    getMessage() {
        console.log(this.state)
        if (this.state.spinningTheChamber) {
            return 'Spinning the chamber and pulling the trigger! . . .'
        }
        else if (this.state.chamber === this.state.bulletInChamber) {
                return 'BANG!!!'
        }
        else {
            return "You're safe!"
        }
    }


    render() {
        return (
            <div>
                <p>{this.getMessage()}</p>
                <button onClick={() => this.handleTrigger()} >Pull the trigger!</button>
            </div>
        )
    }
    
}

export default RouletteGun
