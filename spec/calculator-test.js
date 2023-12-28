it("should calculate the monthly rate correctly", function () {
  const values = { amount: 15000, years: 12, rate: 4.7 };
  expect(calculateMonthlyPayment(values)).toEqual("136.49");
});

it("should return a result with 2 decimal places", function () {
  const values = { amount: 100, years: 1, rate: 14.5 };
  expect(calculateMonthlyPayment(values)).toEqual("9.00");
});
