import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
  text: string;
  isWaiting: boolean;
}

const initialState: HomeState = {
  text: '',
  isWaiting: false,
};

export const homeReducer = (state: HomeState = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActionTypes.ChangeText:
      return { ...state, text: action.payload };
    case HomeActionTypes.RequestRandomText:
      return { ...state, isWaiting: true };
    case HomeActionTypes.ReceiveRandomText:
      return { ...state, isWaiting: false, text: action.payload };
    default:
      return state;
  }
};
