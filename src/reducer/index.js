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
    const diff = Math.abs(action.guess - state.correctAnswer);
    const guesses = [...state.guessHistory, action.guess];
    const counter = (state.guessCounter + 1); 
    

    if (diff >= 50){
      return Object.assign({}, state, {
        response: 'ICE COLD',
        guessHistory: guesses,
        guessCounter: counter
      })
    } else if (diff >= 30){
      return Object.assign({}, state, {
        response: 'COLD',
        guessHistory: guesses,
        guessCounter: counter 
      })
    } else if (diff >= 10){
      return Object.assign({}, state, {
        response: 'WARM',
        guessHistory: guesses,
        guessCounter: counter 
      })
    }  else if (diff >= 1){
      return Object.assign({}, state, {
        response: 'HOT',
        guessHistory: guesses,
        guessCounter: counter   
      })
    } else if (diff === 0){
      return Object.assign({}, state, {
        response: 'WINNER',
        guessHistory: guesses,
        guessCounter: counter 
      })
    } 

    return Object.assign({}, state, {
      currentGuess: action.guess,
      guessHistory: guesses,
        guessCounter: counter
    })
  }

  if( action.type === NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: (Math.floor(Math.random() * 100) + 1)
    })
  }

  return state;
};

export default reducer;