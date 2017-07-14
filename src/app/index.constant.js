(function(){
	'use strict';

	var CONSTANT = {
		API: 'http://localhost:8888',
    // API: 'https://artside.herokuapp.com'
	};

	angular.module('artside')
		.constant('CONSTANT', CONSTANT);
	
})();