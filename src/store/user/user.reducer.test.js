import { userReducer } from "./user.reducer";

describe("userReducer", () => {
  it("should return initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      currentUser: null,
    });
  });
});
