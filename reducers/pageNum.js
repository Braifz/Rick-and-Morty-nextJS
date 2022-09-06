import { NEXT_PAGE, PREV_PAGE } from "../actions/pageNum";

export const initialState = {
  page: 1,
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        state.page = state.page + 1
      }

    case PREV_PAGE:
      return {};
  }
};
