import orderActionTypes from "./order.types";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActionTypes.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case orderActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case orderActionTypes.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case orderActionTypes.ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDetailReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case orderActionTypes.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderActionTypes.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case orderActionTypes.ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case orderActionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case orderActionTypes.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderActionTypes.ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActionTypes.ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      };
    case orderActionTypes.ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case orderActionTypes.ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderActionTypes.ORDER_DELIVER_RESET:
      return {};

    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderActionTypes.ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case orderActionTypes.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case orderActionTypes.ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderActionTypes.ORDER_LIST_MY_RESET:
      return { orders: [] };

    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderActionTypes.ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case orderActionTypes.ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case orderActionTypes.ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
