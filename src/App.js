import React, { Component } from 'react'
import './App.css'
import furtuneCookie from './assets/biscoito.png'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            fortunePhrase: ""
        }
        this.phrases = [
            "The love of your life is right in front of your eyes.",
            "Behind this fortune is the love of my life.",
            "You have a secret admirer.",
            "Love, because it is the only true adventure.",
            "The love of your life will appear in front of you unexpectedly!",
            "An old love will come back to you.",
            "Your love life will soon be happy and harmonious.",
            "Follow what calls you.",
            "You’re intoxicating when you do what you love.",
            "Be passionate and totally worth the chaos.",
            "You will know it when you see it. It will know you when it sees you.",
            "Do what you love. The rest will fall into place.",
            "Follow what you love and see what turns up.",
            "The middle of the process is no place to determine the end of it.",
            "You should def go for it.",
            "Enter unknown territory.",
            "Everything that is was first a dream.",
            "Make self care a non-negotiable.",
            "Love yourself hard.",
            "Set yourself up to experience what you love.",
            "Focus on the magic of things; yourself.",
            "I am resilient.",
            "When you love yourself, people who don't love you back become less interesting.",
        ]

        this.randomPhrase = this.randomPhrase.bind(this)
    }

    randomPhrase(){
        let state = this.state
        let lengthPhrases = this.phrases.length
        let randomNumber = Math.floor(Math.random() * lengthPhrases)
        state.fortunePhrase = '"'+this.phrases[randomNumber]+'"'
        this.setState(state)
    }

    render(){
        return(
            <div className="container">
                <div className="box">
                    <img src={furtuneCookie} className="image" />
                    <Button title="Take a cookie" onClick={this.randomPhrase}/>
                    <h3>{this.state.fortunePhrase}</h3>
                </div>
            </div>
        )
    }
}

class Button extends Component {
    render(){
        return(
            <button className="button" onClick={this.props.onClick}>{this.props.title}</button>
        )
    }
}

export default App