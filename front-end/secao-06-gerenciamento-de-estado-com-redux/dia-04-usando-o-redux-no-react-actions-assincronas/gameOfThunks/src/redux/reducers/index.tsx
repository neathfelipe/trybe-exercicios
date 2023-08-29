// ./src/redux/reducers/characterReducer.ts
import { CharacterType } from '../../types';

const initialState = {
  isLoading: false,
  character: '',
  error: null,
};

function characterReducer(
  state = initialState,
  action: { type: string; character: CharacterType; error: string; },
) {
  switch (action.type) {
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        character: action.character,
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default characterReducer;
