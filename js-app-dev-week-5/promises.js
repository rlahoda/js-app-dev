$(document).ready(function() {
  const nameToSearch = encodeURIComponent('Ervin Howell');
  function searchUsers() {
    return new Promise(function(resolve, reject) {
      $.get('http://jsonplaceholder.typicode.com/users?name=' + nameToSearch, function(result) {
        console.log(result);
        resolve(result);
      });
    });
  }
  $('#userSearch').on('click', function() {
    searchUsers()
      .then(function(value) {
        return value;
      });
      // console.log();
  });
} )
