import { HANDLE_GUESS, HANDLE_WHAT_CLICK, HANDLE_GOT_IT, NEW_GAME } from '../actions';

const initialState = {
  currentGuess: -1,
  correctAnswer: (Math.floor(Math.random()*100) + 1),
  what: false,
  newGame: false, 
  response: 'Make your Guess!', 
  guessCounter: 0,
  guessHistory: []
}

const reducer = (state=initialState, action) => {
  
  if (action.type === HANDLE_WHAT_CLICK) {
    return Object.assign({}, state, {what: true })
  }
  
  if (action.type === HANDLE_GOT_IT) {
    return Object.assign({}, state, {what: false })
  }
  
  if (action.type === HANDLE_GUESS) {
    let response, guess;
    
    const diff = Math.abs(guess - this.state.correctAnswer);
        
    if (diff >= 50){
      response = 'ICE COLD'
    } 
    else if (diff >= 30){
      response = 'COLD'
    } 
    else if (diff >= 10){
      response = 'WARM'
    } 
    else if (diff >= 1){
      response ='HOT!!'
    } 
    else if (diff === 0){
      response = 'WINNER'
    } 

    return Object.assign({}, state, {
      currentGuess: action.guess,
      guessCounter: (state.guessCounter + 1),
      guessHistory: [...state.guessHistory, action.guess ] 
    })
  }

  else if( action.type === NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: (Math.floor(Math.random() * 100) + 1)
    })
  }

  return state;
};

export default reducer;
// { handleGuess, handleWhatClick, handleGotIt, newGame } 