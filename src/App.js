import React, { Component } from 'react';
import {Container, Header, Button} from 'semantic-ui-react';
import Cards from './Cards';
import CardForm from './CardForm';


class App extends Component {
    state = {
      cards: [
      { id: 1, question: "what is react?", answer: "a thing, that does stuff", showAnswer: false},
      { id: 2, question: "what is ruby?", answer: "a program that programs", showAnswer: false},
      { id: 3, question: "what is rails", answer: "the pure love of nature", showAnswer: false},
      ],
      
      };
    
  
    toggleAnswer = (id, showAnswer) => {
      let i = id
      let newState = Object.assign({}, this.state);
      newState.cards[i].showAnswer = !showAnswer
      this.setState(newState);
      
      }

      
      // this.setState({showAnswer: !this.state.showAnswer, }) 
  

  // let newState = Object.assign({}, this.state);
  // newState.recipes[1].title = "Tofu Stir Fry and other stuff";
  // this.setState(newState);

 
    removeCard = id => {
      const cards = this.state.cards.filter( card => {
        if (card.id!== id)
          return card
      });
      this.setState({cards: [...cards], });
    };

    getId = () => {
      return (this.state.cards.length + 1)   
    } 

    addCard = (cardData) => {
      let card = {id: this.getId(), showAnswer: true, ...cardData}
      this.setState({ cards: [card, ...this.state.cards, card],})

    }


    
    render() { 
    return (
      <Container>
        <Header>This is my App</Header>
        <br />
        <CardForm addCard={this.addCard} />
        <br />
        <Cards cards={this.state.cards} remove={this.removeCard} toggle={this.toggleAnswer} />
       
      </Container>
    );
  }
}

export default App;
