enum ActionTypes {
  ChangeText = 'Home.ChangeText',
}

export interface HomeState {
  text: string;
}

interface ChangeTextAction {
  type: ActionTypes.ChangeText;
  payload: string;
}

export const changeText = (text: string): ChangeTextAction => ({
  type: ActionTypes.ChangeText,
  payload: text,
});

export type HomeAction = ChangeTextAction;

const initialState: HomeState = {
  text: '',
};

export const homeReducer = (state: HomeState = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case ActionTypes.ChangeText:
      return { ...initialState, text: action.payload };
    default:
      return state;
  }
};
