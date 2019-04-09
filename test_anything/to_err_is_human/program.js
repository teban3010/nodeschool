const feedCat = require(process.argv[2]);
const test = require("tape");

test("feedCat", function(t) {
  t.plan(2);
  t.equal(feedCat("tuna"), "yum");
  t.throws(feedCat.bind(null, "chocolate"));
});
