export const HANDLE_GUESS = 'HANDLE_GUESS';
export const handleGuess = guess => ({
  type: HANDLE_GUESS, 
  guess
})

export const HANDLE_WHAT_CLICK = 'HANDLE_WHAT_CLICK';
export const handleWhatClick = () => ({
  type: HANDLE_WHAT_CLICK
})

export const HANDLE_GOT_IT = 'HANDLE_GOT_IT';
export const handleGotIt = () => ({
  type: HANDLE_GOT_IT
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
})