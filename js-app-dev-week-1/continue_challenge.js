for (var i = 0; i <= 100; i++) {
  console.log(i);
  if (i === 0 ||i % 3 != 0) {
    continue
  }
  console.log("Divisble by three.");
}
