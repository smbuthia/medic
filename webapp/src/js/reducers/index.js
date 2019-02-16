var _ = require('underscore');

(function() {
  var initialState = {
    cancelCallback: null,
    enketoStatus: {
      edited: false,
      saving: false,
      error: null
    },
    selectMode: false,
    selected: null
  };

  module.exports = function(state, action) {
    if (typeof state === 'object' && Object.keys(state).length === 0) {
      state = initialState;
    }

    switch (action.type) {
      case 'SET_CANCEL_CALLBACK':
        return Object.assign({}, state, { cancelCallback: action.payload.cancelCallback });
      case 'SET_ENKETO_STATUS':
        return Object.assign({}, state, {
          enketoStatus: Object.assign({}, state.enketoStatus, action.payload.enketoStatus)
        });
      case 'SET_SELECT_MODE':
        return Object.assign({}, state, { selectMode: action.payload.selectMode });
      case 'SET_SELECTED':
        return Object.assign({}, state, { selected: action.payload.selected });
      case 'SET_SELECTED_PROPERTY':
        return Object.assign({}, state, {
          selected: Object.assign({}, state.selected, action.payload.selected)
        });
      case 'ADD_SELECTED_MESSAGE':
        return Object.assign({}, state, {
          selected: Object.assign({}, state.selected, {
            messages: state.selected.messages.concat(action.payload.message)
          })
        });
      case 'REMOVE_SELECTED_MESSAGE':
        var filteredMessages = _.filter(state.selected.messages, function(message) {
          return message.id !== action.payload.id;
        });
        return Object.assign({}, state, {
          selected: Object.assign({}, state.selected, { messages: filteredMessages })
        });
      default:
        return state;
    }
  };
}());
