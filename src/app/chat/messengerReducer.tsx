export const initialState = {
  selectedId: 0,
  messages: ['Hello', '', ''],
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId
      };
    }
    case 'edited_message': {
      state.messages[action.contactId] = action.message;  
      return {
        ...state
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

