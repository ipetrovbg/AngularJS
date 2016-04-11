/// <reference path="angular.js" />

var myApp = angular
		.module("mySearc", [])
			.controller('searchController', function ($scope){

				var emploees = [
					{name: "Petar", dateOfBirth: new Date("1989, 8, 27"), gender: "Male", salary: 559.99},
					{name: "Iva", dateOfBirth: new Date("1989, 2, 27"), gender: "Female", salary: 6659.99},
					{name: "Natalia", dateOfBirth: new Date("1986, 8, 27"), gender: "Female", salary: 499.99},
					{name: "Niki", dateOfBirth: new Date("1981, 7, 17"), gender: "Male", salary: 869.99}
				];

				$scope.emploees = emploees;
				
		});
