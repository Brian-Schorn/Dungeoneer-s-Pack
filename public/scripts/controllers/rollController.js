dungeonPackApp.controller('rollController', function (AuthFactory, $http, $window) {
  console.log('loaded rollController');
  var _this = this;
  var authFactory = AuthFactory;
  var API = "https://rolz.org/api/?";
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

  _this.reset = function () {
    _this.showResults = false;
    _this.die.numberOf = 1;
    _this.die.mod = 0;
  }

  _this.modUp = function() {
    console.log(_this.die.mod)
    _this.die.mod++;
  }

  _this.modDown = function() {
    console.log(_this.die.mod)
    _this.die.mod--;
  }

  _this.numberOfUp = function() {
    console.log(_this.die.numberOf)
    _this.die.numberOf++;
  }

  _this.numberOfDown = function() {
    console.log(_this.die.numberOf)
    if(_this.die.numberOf > 1){
    _this.die.numberOf--;
  }
  }


  _this.rollIt = function (sides) {
    _this.showResults = true;
    console.log(sides);
    return $http.get(API + _this.die.numberOf + "d" + sides + ".json").then(function(response){
      console.log('Got a response from the API', response.data);
      _this.input = response.data.input;
      _this.modifier = _this.die.mod;
      _this.result = response.data.result + _this.die.mod;
      _this.details = response.data.details;
      return response.data
    }).catch(function (err) {
      console.log('Error getting info from API', err);
    });
  }



});
