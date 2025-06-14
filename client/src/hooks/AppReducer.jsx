export const initialState = {
  
};

export default function appReducer(state, action) {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: action.payload, gameOver: false };
    case 'SELECT_CARD': {
      const updatedSelection = [...state.selectedCards, action.payload];
      return { ...state, selectedCards: updatedSelection };
    }
    case 'CHECK_MATCH': {
      const [first, second] = state.selectedCards;
      const firstCard = state.cards.find(card => card.uid === first);
      const secondCard = state.cards.find(card => card.uid === second);

      const isMatch = firstCard && secondCard && firstCard.id === secondCard.id;
      const matchedCards = isMatch
        ? [...state.matchedCards, first, second]
        : [...state.matchedCards];

      const allMatched = matchedCards.length === state.cards.length;

      return {
        ...state,
        matchedCards,
        selectedCards: [],
        attempts: state.attempts + 1,
        isRunning: allMatched ? false : state.isRunning,
        gameOver: allMatched,
      };
    }
    case 'RESET_GAME':
      return { ...initialState, cards: action.payload };
    case 'TICK':
      return { ...state, timer: state.timer + 1 };
    case 'START_TIMER':
      return { ...state, isRunning: true };
    case 'STOP_TIMER':
      return { ...state, isRunning: false };
    default:
      return state;
  }
}
