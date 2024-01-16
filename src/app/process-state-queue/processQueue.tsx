export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.forEach(el => {
    if (Number.isInteger(el)) {
      finalState = el;
    } else if (el instanceof Function) {
      finalState = el(finalState);
    }
  });
  return finalState;
}

