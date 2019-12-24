import produce from 'immer';

const INITIAL_STATE = {
  helpOrder: null,
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrder/QUESTION_HELP_ORDER': {
        draft.helpOrder = action.payload.helpOrder;
        break;
      }

      default:
    }
  });
}
