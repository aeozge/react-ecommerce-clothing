import { categoriesReducer } from "./categories.reducer";
import CATEGORIES_INITIAL_STATE from './categories.reducer'
import CATEGORIES_ACTION_TYPES from './categories.types'

describe("categoriesReducer", () => {
  it("should return initial state", () => {
    expect(categoriesReducer(undefined, {})).toEqual({
      categories: [],
      error: null,
      isLoading: false,
    });
  });
});


test('should set isLoading to true if CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START action', () => {
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, {
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
      }).isLoading
    ).toBe(true);
  });