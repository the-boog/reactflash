import React from 'react';
import {Container, Button,} from 'semantic-ui-react'
import Card from './Card';

const Cards = ({cards, remove, toggle}) => (
  <div>
    {
      cards.map( card => (
        <Card key={card.id} {...card} remove={remove} toggle={toggle}/>
        
      ))
    }
  </div>
);

export default Cards;

