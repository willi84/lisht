'use strict';

angular.module('lishtApp')
	.controller('ListCtrl', function ($scope) {

		var jsonListData = localStorage.getItem('GEILDANKE-lisht'),
			jsonColorData = localStorage.getItem('GEILDANKE-options');
		console.log(jsonListData);
		console.log(jsonColorData);
		if (jsonListData !== null) {
			$scope.lists = JSON.parse(jsonListData);
			// Debugging
			// console.log('Local storage data loaded');
		} else {
			// Debugging
			// console.log('JSON data loaded');
			$scope.lists = [
				{
					'hyperlinks': [
						{
							'name': 'twitter',
							'url': 'http://www.twitter.com'
						},
						{
							'name': 'dribbble',
							'url': 'http://dribbble.com'
						},
						{
							'name': 'codepen',
							'url': 'http://codepen.io'
						}
					]
				},
				{
					'hyperlinks': [
						{
							'name': 'Designer News',
							'url': 'https://news.layervault.com'
						},
						{
							'name': 'Smashing Magazine',
							'url': 'http://www.twitter.com'
						},
						{
							'name': 'Hackernews',
							'url': 'http://news.ycombinator.com'
						}
					]
				},
				{
					'hyperlinks': [
						{
							'name': 'Mail',
							'url': 'https://mail.google.com'
						},
						{
							'name': 'Kalender',
							'url': 'https://www.google.com/calendar'
						},
						{
							'name': 'kippt',
							'url': 'https://kippt.com/feed'
						}
					]
				}
			];
		}

		$scope.addListItem = function(index) {
			var newListItem = {
					name: $scope.lists[index].newItemName,
					url: $scope.lists[index].newItemURL
				},
				jsonListData = '';
			$scope.lists[index].hyperlinks.push(newListItem);
			$scope.lists[index].newItemName = '';
			$scope.lists[index].newItemURL = '';
			jsonListData = JSON.stringify($scope.lists);
			localStorage.setItem('GEILDANKE-lisht', jsonListData);
		};

		$scope.deleteListItem = function(index, parent) {
			var jsonListData = '';
			$scope.lists[parent].hyperlinks.splice(index, 1);
			jsonListData = JSON.stringify($scope.lists);
			localStorage.setItem('GEILDANKE-lisht', jsonListData);
		};

		$scope.activeClass = 'pink';

		$scope.colors = [
			{
				color: 'pink-dark'
			},
			{
				color: 'pink'
			},
			{
				color: 'red-dark'
			},
			{
				color: 'red'
			},
			{
				color: 'orange-dark'
			},
			{
				color: 'orange'
			},
			{
				color: 'yellow-dark'
			},
			{
				color: 'yellow'
			},
			{
				color: 'green-dark'
			},
			{
				color: 'green'
			},
			{
				color: 'blue-dark'
			},
			{
				color: 'blue'
			},
			{
				color: 'black-dark'
			},
			{
				color: 'black'
			},
			{
				color: 'black-light'
			}
		];
	});