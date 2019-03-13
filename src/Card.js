import React from 'react';
import {Button} from 'semantic-ui-react';


  const Card = ({id, question, answer, showAnswer, remove, toggle, }) => (
    
   
    <div>
      <Button size="mini" onClick={() => toggle(id - 1)} >{ question} </Button>
      <Button size="mini" onClick={() => remove(id)} >DELETED</Button>
      {showAnswer ? <Button size="massive">{answer}</Button>  : null }
     
    </div>
  )

  
 

export default Card;

    