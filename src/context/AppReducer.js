// the reducer is basically how we specify the applcation state changes in response to
// certain actions to the contex

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state, // receive the current state
        // send the state without the filtered transaction
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
