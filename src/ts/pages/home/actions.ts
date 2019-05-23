export enum HomeActionTypes {
  ChangeText = 'Home.ChangeText',
  RequestRandomText = 'Home.RequestRandomText',
  ReceiveRandomText = 'Home.ReceiveRandomText',
}

interface ChangeTextAction {
  type: HomeActionTypes.ChangeText;
  payload: string;
}

export const changeText = (text: string): ChangeTextAction => ({
  type: HomeActionTypes.ChangeText,
  payload: text,
});

interface RequestRandomText {
  type: HomeActionTypes.RequestRandomText;
}

export const requestRandomText = (): RequestRandomText => ({
  type: HomeActionTypes.RequestRandomText,
});

interface ReceiveRandomTextAction {
  type: HomeActionTypes.ReceiveRandomText;
  payload: string;
}

export const receiveRandomText = (text: string): ReceiveRandomTextAction => ({
  type: HomeActionTypes.ReceiveRandomText,
  payload: text,
});

export type HomeAction = ChangeTextAction | RequestRandomText | ReceiveRandomTextAction;
