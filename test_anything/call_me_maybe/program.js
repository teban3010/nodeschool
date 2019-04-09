const repeatCallback = require(process.argv[2]);
const test = require("tape");

test("repeatCallback", function(t) {
  t.plan(2);
  repeatCallback(2, function() {
    t.pass("callback called");
  });
});
