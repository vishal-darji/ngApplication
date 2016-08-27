angular.module('myApp',['ui.router'],function(){})
		.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
			      $urlRouterProvider.otherwise('/home');
			    	$stateProvider
				      .state('home', {
				        url: '/',
				        templateUrl:'./html/templates/default.html'
				        
				      })
				      .state('vegetables', {
				        url: '/',
				        templateUrl:'./html/templates/vegetables.html'
				        
				      })
				      .state('fruits', {
				        url: '/',
				        templateUrl:'./html/templates/fruits.html'
				        
				      })
				      .state('grains', {
				        url: '/',
				        templateUrl:'./html/templates/grains.html'
				        
				      })

			
		}])

		.controller('myController',function($scope,$state,$location){
			$scope.myMessage="Farm Fresh";
			$scope.testfunction="check";
			$scope.getCurrentState = function(tab)
			 {
			 		this.state = $state;
			 		
			 		console.log(this.state.current.name);
			 		return tab == this.state.current.name;

			 }

			

		})
		

		.directive('student',function(){
			var directive
			var directive={};
			directive.restrict = 'E';
			//directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
   			directive.scope = {student: "=name"};
			directive.compile = function(element, attributes) {
		    element.css("border", "1px solid #cccccc");
		      
		      //linkFunction is linked with each element with scope to get the element specific data.
		      var linkFunction = function($scope, element, attributes) {
		         element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
		         element.css("background-color", "#ff00ff");
		      }
		      return linkFunction;
		   }
		   return directive;

		});
