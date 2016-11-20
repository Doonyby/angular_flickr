angular.module('myApp', [])
	.controller('myCtrl', function($http) {
		var vm = this;

		vm.embedUrl = "http://www.youtube.com/embed/";
		
		vm.trustSrc = function(src) {
		  return $sce.trustAsResourceUrl(src);
		};

		vm.formSubmit = function(tag) {
			vm.tag = tag;
			var url = "";
			var request = {
			  apikey: "7ad26a9061e966c98dba50a926fcb00bea4b6388",
		      text: text,
		      outputMode: 'json',
		      showSourceText: '1',
		      jsonp: "JSON_CALLBACK"
			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			})
			.then(function(result) {
				console.log(result.data);
				vm.results = result.data;
			}, function(result) {
				console.log('error: ', result);
			});
		}
	});