function hi(name) {
  console.log('hi ' + name + '!');
}

(function(name) {
  console.log('hi ' + name + '!' + ' I am immediately invoked.');
})('Rob');

hi('Steve')
