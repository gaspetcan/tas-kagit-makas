import React, { Component } from 'react'

class taskagitmakas extends Component {
    constructor(props) {
        super(props);
        this.state= {
            p1:"",
            p2:"",
            p1Score: 0,
            p2Score: 0,
            Text: "",
            justState: undefined,
        }
    }

    PReady = (Play) => {
        const x =Math.round(Math.random() *2)
        if(x === 0)
            Play = "Taş";
        if(x === 1)
            Play = "Kağıt";
        if(x ===2)
            Play = "Makas";
        return Play;
    }

    PCompare = (p1,p2,winText) => {
        winText = "";
        var p1Score,p2Score = 0;
        if (p1 == "Taş" && p2 == "Kağıt")
        {
            p2Score = p2Score + 1;
            winText = "P2 Win";
        }
        else if (p1 == "Taş" && p2 == "Makas")
        {
            p1Score = p1Score + 1;
            winText = "P1 Win";
        }
        else if (p1 == "Kağıt" && p2 == "Taş")
        {
            p1Score = p1Score + 1;
            winText = "P1 Win" ;
        }
        else if (p1 == "Makas" && p2 == "Kağıt")
        {
            p1Score = p1Score + 1;
            winText = "P1 Win";
        }
        else if (p1 == "Kağıt" && p2 == "Makas")
        {
            p2Score = p2Score + 1;
            winText = "P2 Win" ;
        }
        else if (p1 == "Makas" && p2 == "Taş")
        {
            p2Score = p2Score + 1;
            winText = "P2 Win";
        }
        else {
            winText = "No Winners";
        }
        return p1Score,p2Score,winText;
    }

    PSet = () => {
        this.setState({
            p1: this.PReady(this.state.p1),
            p2: this.PReady(this.state.p2)
            //Hocam burada PCompare için burada nasıl p1,p2,Text olarak fonksiyonu çalıştırabilirim
        })
    }

    render() {
        return (
            <div>
                <h1>P1 : {this.state.p1}</h1>
                <h1>P2 : {this.state.p2}</h1>
                <button onClick={this.PSet}>Start</button>
                <h1>Score Board</h1>
                <h2>P1:{this.state.p1Score} P2:{this.state.p2Score}</h2>
            </div>
        );
    }
}
export default taskagitmakas;


