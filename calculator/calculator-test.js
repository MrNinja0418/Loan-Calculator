describe("calculateMonthlyPayment tests", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = {
      amount: 7000,
      years: 5,
      rate: 6.5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("136.96");
  });

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 15000,
      years: 3,
      rate: 7.4,
    };
    expect(calculateMonthlyPayment(values)).toEqual("465.90");
  });

  it("should be able to hand expensive loans", function () {
    const values = {
      amount: 100000,
      years: 10,
      rate: 5.5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("1085.26");
  });
});
