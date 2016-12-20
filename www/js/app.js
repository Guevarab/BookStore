(function(){

	var app = angular.module('bookApp',['ui.router']);

	app.controller('LibroController',function(){
		this.productos=books;
	});
	app.config(function($stateProvider) {

				$stateProvider
					.state('dashboard',{
						url:'/dashboard',
						templateUrl: 'templates/dashboard.html',
						controller: 'LibroController'
					})
					.state('dashboard.datos',{
						url:'/data',
						templateUrl: 'templates/data.html',
						controller: 'LibroController'
					})
					.state('dashboard.pedidos',{
						url:'/pedidos',
						templateUrl: 'templates/pedidos.html',
						controller: 'LibroController'
					})
					.state('dashboard.favoritos',{
						url:'/favorios',
						templateUrl: 'templates/favoritos.html',
						controller: 'LibroController'
					})
					.state('libros',{
						url:'/libros',
						templateUrl: 'templates/libros.html',
						controller: 'LibroController'
					})
				});
	var books=[{
			"id":"1",
			"titulo":"Manual de Entrenamiento para el piloto del automovilismo",
			"autor":"Ruben Cohen Grinvald",
			"editorial":"Esteban Sanz",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor alias quasi exercitationem! Repudiandae incidunt, culpa asperiores deserunt accusamus minima, perspiciatis dolorem aut tenetur voluptates non atque porro voluptas reprehenderit cupiditate.",
			imagenes: [
			{id:0,url:'img/libro1.jpeg'}
			]				
		},
		{
			"id":"2",
			"titulo":"Manual Practico de Automovilismo",
			"autor":"Miguel Zerolo",
			"editorial":"Garnier Hermanos",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi earum laudantium quaerat et doloribus, in quis qui molestiae beatae magni, quisquam maiores nisi veniam praesentium accusamus autem repellat totam esse.",
			imagenes: [
			{id:0,url:'img/libro2.jpeg'}
			]			
		},
		{
			"id":"3",
			"titulo":"Mapa: revista de automovilismo y turismo",
			"autor":"Universidad de texas",
			"editorial":"Universidad de texas",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima facilis, deleniti suscipit molestias. Quasi blanditiis ex saepe nisi officia reprehenderit iste iure aliquid consequuntur, quo magni id vitae quam eveniet.",
			imagenes: [
			{id:0,url:'img/libro3.jpeg'}
			]			
		},
		{
			"id":"4",
			"titulo":"Motores diesel rapidos para Automovilismo",
			"autor":"Peter Martin Heldt",
			"editorial":"Ramon Marques",
			"descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non in reiciendis laudantium autem fuga, officiis ad deserunt, ipsum, magnam earum ab nulla sunt quam doloribus quas. Incidunt, magni quasi reiciendis.",
			imagenes: [
			{id:0,url:'img/libro4.png'}
			]			
		}
		];


})();