import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  let dispatch = action => setState(reducer(state, action));

  return [state, dispatch];
}

