import React from 'react'

function Result({secretNum,term}) {
    let result ;

    if(term){
        if(term > secretNum){
            result = "Higher";
        }else if(term < secretNum){
            result = "Lower";
        }else if(term == secretNum){
            result ="yopee! correct";
        }else{
            result= "Enter valid input";
        }
    }
    
  return (
    <h3>You Guessed: {result}</h3>
  )
}

export default Result;