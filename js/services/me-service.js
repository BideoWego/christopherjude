// ----------------------------------------
// MeService
// ----------------------------------------


ChristopherJude.factory('MeService',
  ['$http', function($http) {

    var _me;

    return {
      get: function() {
        if (_me) {
          return _me;
        } else {
          return $http.get('/data/site.json')
            .then(function(response) {
              console.log(response);
              _me = response.data.me;
              return _me;
            });
        }
      }
    };

  }]);



