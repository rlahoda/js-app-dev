
function outer() {
  const a = "hi";
  const b = {hey: "howdy", stuff: "yo"};
  console.log(a);
  console.log(b);
  function inner(a,b) {
    console.log(a);
    console.log(b);
    a = "stuff";
    b = {time: "now", word: "love"};
    console.log(a);
    console.log(b);
    b.word = 'peace';
    console.log(a);
    console.log(b);
  }
  inner(a,b);
  console.log(a);
  console.log(b);
}
outer();
