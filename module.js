angular.module('myApp', ['ngMessages', 'ngAnimate'])
	.controller('myCtrl', function($http, $sce) {
		var vm = this;
		vm.searchingDiv = false;
		vm.trustSrc = function(src) {
		  return $sce.trustAsResourceUrl(src);
		};

		vm.formSubmit = function(tag) {
			vm.results = null;
			document.getElementById('inputText').value = '';
			vm.searchingDiv = true;
			var url = "https://api.flickr.com/services/rest";
			var request = {
			    method: 'flickr.photos.search',
			    api_key: '5bab27af3a0be31e242ef48d19c5d96a',
			    tags: tag,
			    format: 'json',
			    nojsoncallback: 1
			};

			$http({
				method: 'GET',
				url: url,
				params: request
			})
			.then(function(response) {
				if (response.data.photos) {
					vm.results = response.data.photos.photo;
					vm.tagger = tag;
				} 
				else {
					console.log('request error');
				}
			}, function(response) {
				console.log('error: ', response);
			})
			.finally(function() {
				vm.searchingDiv = false;
			});
		}
	});