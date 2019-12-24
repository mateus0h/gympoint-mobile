export function questionHelpOrder(question, idStudent) {
  return {
    type: '@helpOrder/QUESTION_HELP_ORDER',
    payload: { question, idStudent },
  };
}
