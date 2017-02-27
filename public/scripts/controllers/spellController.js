dungeonPackApp.controller('spellController', function (AuthFactory, $http, $window, $sce) {
  console.log('loaded spellController');
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

//Retrieves all spells from database
  _this.getAll = function(){
  $http.get('/spell/all').then(function (response) {
    console.log("Got a response from the DB", response.data);
    _this.spellList = response.data;
    return response.data;
  }).catch(function(err) {
    console.log('Error getting info from DB', err);
  });
};

//Brings up spell description
_this.moreInfo = function(spellInfo){
  _this.focusSpell = {};
  console.log("Clicked:", spellInfo.name);
  _this.focusSpell = spellInfo
  _this.focusSpell.desc = $sce.trustAsHtml(spellInfo.desc);
  if(spellInfo.higher_level){
    _this.focusSpell.higher_level = $sce.trustAsHtml(spellInfo.higher_level);
  }
}


_this.reset = function(){
  _this.focusSpell = null;
  _this.search = '';
  _this.searchSchool = '';
  delete _this.searchDomain;
  _this.searchClass = '';
  _this.searchLevel = '';
  _this.getAll();

}
//Display all spells on load
  _this.getAll();




});
