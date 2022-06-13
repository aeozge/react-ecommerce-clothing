
test("silly test to be Success", () => {
  expect("hello").toBe("hello");
});

const deneme = {
  greetings: "hello",
  times: 2,
  isTalking: false,
};

test("2 times hello test", () => {
  const wrapper = { ...deneme }.times;
  expect(wrapper).toEqual(2);
});
test("greetings should be hello", () => {
  const wrapper = { ...deneme }.greetings;
  expect(wrapper).toBe("hello");
});

test("should talk action", () => {
  const wrapper = { ...deneme }.isTalking;
  expect(wrapper).toBe(false);
});




