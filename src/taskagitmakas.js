import React, { Component } from 'react'

class taskagitmakas extends Component {
    constructor(props) {
        super(props);
        this.state={
            p1:"",
            p2:"",
            p1S:0,
            p2S:0,
            wText:""
        }
    }

    gameOn = () => {
        const symbol = ["Taş","Kağıt","Makas"]
        const hand1 = symbol[Math.floor(Math.random()*symbol.length)];
        const hand2 = symbol[Math.floor(Math.random()*symbol.length)];
        var wText = "";
        let p1Score = 0;
        let p2Score = 0;
        switch(hand1)
            {case "Taş":
                if(hand2 === "Kağıt")
                    {wText = "P2 Win";
                     p2Score = p2Score +1}
                else if(hand2 === "Makas")
                    {wText = "P1 win";
                    p1Score = p1Score + 1}
                else if(hand2 === "Taş")
                    {wText = "Same"; }
                break
            case "Kağıt":
                if(hand2 === "Makas")
                    {wText = "P2 Win";
                    p2Score = p2Score +1}
                else if(hand2 === "Taş")
                    {wText = "P1 win";
                    p1Score = p1Score + 1}
                else if(hand2 === "Kağıt"){
                    wText = "Same";
                    }
                break
            case "Makas":
                if(hand2 === "Taş")
                    {wText = "P2 Win";
                    p2Score = p2Score +1}
                else if(hand2 === "Kağıt")
                    {wText = "P1 win";
                    p1Score = p1Score + 1}
                else if(hand2 === "Makas"){
                    wText = "Same";
                }
                break
            }
            this.setState({
                p1: hand1,
                p2: hand2,
                wText: wText,
                p1S : this.state.p1S + p1Score,
                p2S : this.state.p2S + p2Score,
            })
    }


    render() {
        return (
            <div>
                <div class="game">
                    <h1>Rock Paper Scissors</h1>
                    <h1>Score Board</h1>
                    <h1>{this.state.p1S} || {this.state.p2S}</h1>
                    <div class="playerZone">
                        <img class="player-left" src={`./${this.state.p1}.png`}></img>
                        <img class="player-right" src={this.state.p2 + `.png`}></img>
                    </div>
                    <h1>{this.state.wText}</h1>
                    <button class="action-button shadow animate blue" onClick={this.gameOn}>Start</button>
                </div>
            </div>
        );
    }
}
export default taskagitmakas;


