const fancify = require(process.argv[2]);
const test = require("tape");

test("fancify adds ~*~ to received string", function(t) {
  t.equal(fancify("Hello"), "~*~Hello~*~");
  t.end();
});

test("fancify adds ~*~ to received string, and converts the string into ALLCAPS", function(t) {
  t.equal(fancify("Hello", true), "~*~HELLO~*~");
  t.end();
});

test("fancify adds ~!~ to received string", function(t) {
  t.equal(fancify("Hello", false, "!"), "~!~Hello~!~");
  t.end();
});

test("fancify", function(t) {
  t.equal(fancify("Wat"), "~*~Wat~*~", "Wraps a string in ~*~");
  t.equal(fancify("Wat", true), "~*~WAT~*~", "Optionally makes it allcaps");
  t.equal(
    fancify("Wat", false, "%"),
    "~%~Wat~%~",
    "Optionally allows to set the character"
  );
  t.end();
});
