dungeonPackApp.controller('charController', function (AuthFactory, $http, $window) {
  console.log('loaded charController');
  var _this = this;
  var authFactory = AuthFactory;
  _this.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load


  _this.logout = function () {
    authFactory.logout()
      .then(function (response) { // success
        authFactory.setLoggedIn(false);
        _this.username = '';
        $window.location.href = '/'; // forces a page reload which will update our NavController
      },

      function (response) { // error
        _this.message.text = 'Unable to logout';
        _this.message.type = 'error';
      });
  };


  _this.getAll = function(){
  $http.get('/journal/all').then(function (response) {
    console.log("Got a response from the DB", response.data);
    _this.journalList = response.data;
    return response.data;
  }).catch(function(err) {
    console.log('Error getting info from DB', err);
  });
  };

  _this.reset = function() {
    _this.newEntry = '';
  }

  _this.submit = function(entry) {
    newEntry = {};
    newEntry.entry = entry;
    newEntry.date = new Date;
    $http.post('/journal', newEntry);
    _this.newEntry = '';
    _this.getAll();

  }

  _this.deleteEntry = function(id) {
    console.log("Deleting", id);
    $http.delete('/journal/' + id).then(_this.getAll());
  }
  _this.getAll();

});
