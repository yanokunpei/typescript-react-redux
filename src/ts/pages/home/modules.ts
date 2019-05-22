enum ActionTypes {
  ChangeText = 'Home.ChangeText',
  RequestRandomText = 'Home.RequestRandomText',
  ReceiveRandomText = 'Home.ReceiveRandomText',
}

interface ChangeTextAction {
  type: ActionTypes.ChangeText;
  payload: string;
}

export const changeText = (text: string): ChangeTextAction => ({
  type: ActionTypes.ChangeText,
  payload: text,
});

interface RequestRandomText {
  type: ActionTypes.RequestRandomText;
}

export const requestRandomText = (): RequestRandomText => ({
  type: ActionTypes.RequestRandomText,
});

interface ReceiveRandomTextAction {
  type: ActionTypes.ReceiveRandomText;
  payload: string;
}

export const receiveRandomText = (text: string): ReceiveRandomTextAction => ({
  type: ActionTypes.ReceiveRandomText,
  payload: text,
});

export type HomeAction = ChangeTextAction | RequestRandomText | ReceiveRandomTextAction;

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
    case ActionTypes.ChangeText:
      return { ...state, text: action.payload };
    case ActionTypes.RequestRandomText:
      return { ...state, isWaiting: true };
    case ActionTypes.ReceiveRandomText:
      return { ...state, isWaiting: false, text: action.payload };
    default:
      return state;
  }
};
