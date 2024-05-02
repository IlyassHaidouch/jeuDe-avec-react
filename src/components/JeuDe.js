import { Component } from 'react';

class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = {face:null, compteur: 0, end: false}
    }

    jouer = () => {
        let faceval = Math.floor(Math.random()*6+1); 
        this.setState({face: faceval, compteur: this.state.compteur+1, end: false})
        if(faceval == this.props.cache) {
            this.setState({end: true})
        }
    }

    init = () => {
        this.setState({face:null, compteur:0, end:false})
    }

    render() {
        return (
            <div>
                <img src={
                    this.state.face == null
                    ?"images/init.PNG"
                    :`images/face${this.state.face}.PNG`
                }/>
                <h1>jeu de Dé...</h1>
                <p>face : {this.state.face}</p>
                <p>Nombre d'essais : {this.state.compteur}</p>
                {
                    this.state.end
                    ?<div><p>Bravo! Vous avez trouvé la face cachée</p><button onClick={this.init}>Initialiser</button></div>
                    :<button onClick={this.jouer}>Jouer</button>
                }
            </div>
        )
    }
}
export default JeuDe;

//on a crée une classe appelée JeuDe hérite de la classe Component 