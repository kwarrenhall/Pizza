describe ('pizza', function() {
  it("creates a new pizza order with the given properties", function() {
  var testPizza = new Pizza("Large", "Pepperoni", "Mushroom");
  expect(testPizza.size).to.equal("Large");
  expect(testPizza.topping1).to.equal("Pepperoni");
  expect(testPizza.topping2).to.equal("Mushroom");
  });
  it("adds the price method to the pizza constructor", function() {
  var testPizza = new Pizza("Large", "Pepperoni", "Mushroom");
  expect(testPizza.price()).to.equal(13);
  });
});
