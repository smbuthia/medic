angular.module('inboxServices').factory('AnalyticsActions',
  function() {
    'use strict';

    function createSingleValueAction(type, valueName, value) {
      var action = {
        type: type,
        payload: {}
      };
      action.payload[valueName] = value;
      return action;
    }

    return function(dispatch) {

      function createSetSelectedAnalyticsAction(value) {
        return createSingleValueAction('SET_SELECTED_ANALYTICS', 'selected', value);
      }

      return {
        setSelectedAnalytics: function(selected) {
          dispatch(createSetSelectedAnalyticsAction(selected));
        }
      };
    };
  }
);
