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
    // console.log(action);
    // let guess;
    
    const diff = Math.abs(action.guess - state.correctAnswer);
    
    console.log('diff: ', diff);
    if (diff >= 50){
      // response = 'ICE COLD'
      return Object.assign({}, state, {
        response: 'ICE COLD',
        guessHistory: [...state.guessHistory, action.guess] 
      })
    } 
    else if (diff >= 30){
      // response = 'COLD'
      return Object.assign({}, state, {
        response: 'COLD',
        guessHistory: [...state.guessHistory, action.guess] 
      })
    } 
    else if (diff >= 10){
      // response = 'WARM'
      return Object.assign({}, state, {
        response: 'WARM',
        guessHistory: [...state.guessHistory, action.guess]  
    })
    } 
    else if (diff >= 1){
      // response ='HOT!!'
      return Object.assign({}, state, {
        response: 'HOT',
        guessHistory: [...state.guessHistory, action.guess]  
      })
    } 
    else if (diff === 0){
      // response = 'WINNER'
      return Object.assign({}, state, {
        response: 'WINNER',
        guessHistory: [...state.guessHistory, action.guess]  
      })
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