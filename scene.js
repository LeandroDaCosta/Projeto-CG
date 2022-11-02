
const scene = new THREE.Scene();
// Set the background color

 c = new THREE.OrthographicCamera( -2.0, 3.2, 2.4, -2.4, 1.0, 100 );
			c.position.set(5,0,5);
			c.lookAt(scene.position);
			
function criaCamera(op){
	switch (op){
		case 1:
			//camera do topo 
			const camera1 = new THREE.OrthographicCamera( -3.5, 3.2, 2.4, -2.4, 1.0, 100 );
			camera1.position.set(0,10,0);
			camera1.lookAt(scene.position);
			return camera1
		
			case 2:
				//camera frontal
				const camera2 = new THREE.OrthographicCamera( -3.5, 3.2, 20.4, -2.4, 1.0, 100 );
				camera2.position.set(10,0,0);
				console.log("FRONTAL");
				return camera2;
				
				case 3:
					//camera lateral
					const camera3 = new THREE.OrthographicCamera( -3.5, 3.2, 2.4, -2.4, 1.0, 100 );
					camera3.position.set(0,0,10);
				console.log("LADO");
				return camera3;
				default:
					c1 = new THREE.OrthographicCamera( -3.5, 3.2, 2.4, -2.4, 1.0, 100 );
			c1.position.set(10,3,10);
			c1.lookAt(scene.position);
			return c1;


	}




}






function cameraChanger(){
document.addEventListener("keydown",function (e){
	switch (e.key){
		case "1":
			console.log("TOP");
			c=criaCamera(1);
			
			break;
			case "2":
				c=criaCamera(2);	
			break;
			
			case "3":
				c=criaCamera(3);
			break;
			default :
			c=criaCamera(8)
			break ;
				

	}
}
)

}



cameraChanger();



			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
            
			function criaPlano(){
            var geometryFloor = new THREE.PlaneGeometry( 10, 10, 1, 1 );
	var materialFloor = new THREE.MeshBasicMaterial( { color:"#5F9F9F" } );
	var floor = new THREE.Mesh( geometryFloor, materialFloor );
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 90;
    scene.add( floor ); 
    
			}
criaPlano();

			const alvos=new THREE.Group();
	const group = new THREE.Group();

			const geometry = new THREE.BoxGeometry( 1,1, .41 );
			const material = new THREE.MeshBasicMaterial( { color: "pink" } );
			const cube = new THREE.Mesh( geometry, material );
            cube.position.x=20;
            cube.position.y=0;
			cube.position.y=0;
			const geometry1 = new THREE.BoxGeometry( 1,1, 1 );
			const material1 = new THREE.MeshBasicMaterial( { color: "red" } );
			const cube1 = new THREE.Mesh( geometry1, material1 );
            cube1.position.x=20;
			
            cube1.position.y=8.5;

			group.add(cube,cube1);
	scene.add(group);
			
		function criaAlvo(posicao)
{
	//essa funcao cria todos os elemetos do alvo  e coloca em um unico grupo
	const geometry2 = new THREE.CircleGeometry( 0.9, 100 );

	
			for (let i=0;i<=17;i++){ 
	
		switch (i) {
			case 0:
				var material = new THREE.MeshBasicMaterial( { color: "yellow" } );
				var circle = new THREE.Mesh( geometry2, material );
				circle.position.x=1.05;
				circle.position.y=1;
				circle.position.z=0.11;
				circle.scale.setLength(0.6);
				alvos.add(circle);
				
		
				break;

				case 1:
				var material = new THREE.MeshBasicMaterial( { color: "white" } );
				var circle = new THREE.Mesh( geometry2, material );
				circle.position.x=1;
				circle.position.y=1;
				circle.position.z=0;
				circle.scale.setLength(2.5);
				alvos.add(circle);
				
		
				break;
			
				case 2:
					var material = new THREE.MeshBasicMaterial( { color: "red" } );
					var circle = new THREE.Mesh( geometry2, material );
					circle.position.x=1.07;
				circle.position.y=1;
				circle.position.z=0.1;
				circle.scale.setLength(1);
					alvos.add(circle);
				
			
					break;
					case 3:
						var material = new THREE.MeshBasicMaterial( { color: "blue" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.01;
					circle.scale.setLength(1.5);
						alvos.add(circle);
					
				
						break;

						case 4:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.001;
					circle.scale.setLength(2.4);
						alvos.add(circle);
					
				
						break;


						case 5:
						var material = new THREE.MeshBasicMaterial( { color: "white" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.002;
					circle.scale.setLength(2.35);
						alvos.add(circle);
					
				
						break;

						case 6:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.003;
					circle.scale.setLength(2.25);
						alvos.add(circle);
					
				
						break;

						case 7:
						var material = new THREE.MeshBasicMaterial( { color: "white" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.004;
					circle.scale.setLength(2.0);
						alvos.add(circle);
					
				
						break;

						case 8:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1;
					circle.position.y=1;
					circle.position.z=0.005;
					circle.scale.setLength(1.97);
						alvos.add(circle);
				
				
						break;

						case 9:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.;
					circle.position.y=1;
					circle.position.z=0.02;
					circle.scale.setLength(1.2);
						alvos.add(circle);
					
				
						break;

						case 10:
						var material = new THREE.MeshBasicMaterial( { color: "blue" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.01;
					circle.position.y=1;
					circle.position.z=0.03;
					circle.scale.setLength(1.17);
						alvos.add(circle);
				
				
						break;

						case 11:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.13;
					circle.position.y=1;
					circle.position.z=0.2;
					circle.scale.setLength(0.5);
						alvos.add(circle);
					
				
						break;

						case 12:
						var material = new THREE.MeshBasicMaterial( { color: "yellow" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.139;
					circle.position.y=1;
					circle.position.z=0.21;
					circle.scale.setLength(0.48);
						alvos.add(circle);
					
				
						break;

						case 13:
							var material = new THREE.MeshBasicMaterial( { color: "black" } );
							var circle = new THREE.Mesh( geometry2, material );
							circle.position.x=1.07;
						circle.position.y=1;
						circle.position.z=0.12;
						circle.scale.setLength(.9);
							alvos.add(circle);
						
					
							break;


							case 14:
							var material = new THREE.MeshBasicMaterial( { color: "red" } );
							var circle = new THREE.Mesh( geometry2, material );
							circle.position.x=1.08;
						circle.position.y=1;
						circle.position.z=0.129;
						circle.scale.setLength(.87);
							alvos.add(circle);
						
					
							break;

							case 15:
						var material = new THREE.MeshBasicMaterial( { color: "black" } );
						var circle = new THREE.Mesh( geometry2, material );
						circle.position.x=1.145;
					circle.position.y=1;
					circle.position.z=0.22;
					circle.scale.setLength(0.20);
						alvos.add(circle);
					
				
						break;

						case 16:
							var material = new THREE.MeshBasicMaterial( { color: "yellow" } );
							var circle = new THREE.Mesh( geometry2, material );
							circle.position.x=1.153;
						circle.position.y=1;
						circle.position.z=0.23;
						circle.scale.setLength(0.18);
							alvos.add(circle);
						
					
							break;

							case 17:
							var material = new THREE.MeshBasicMaterial( { color: "black" } );
							var circle = new THREE.Mesh( geometry2, material );
							circle.position.x=1.156;
						circle.position.y=1;
						circle.position.z=0.24;
						circle.scale.setLength(0.03);
							alvos.add(circle);
							
							break;
							
							
						}
						
						
					}

					
					
					alvos.scale.setLength(0.9);
					alvos.position.x=0.0+1;
					alvos.position.y=0;
					alvos.position.z=0+1;
					scene.add( alvos);

					// const x = Math.cos(2 _ Math.PI _ i);
					// 	const y = Math.sin(2 _ Math.PI _ i);
					// 	for (let i=0;i<1;i+=0.2){
							
					// 		const alvoCopia=alvos.clone();
					// 		//alvo copia sao as copias de cada inimigo 
					// 		// alvoCopia.position.x = Math.cos(2 _ Math.PI _ i);
					// 		// alvoCopia.position.y = Math.sin(2 _ Math.PI _ i);
					// 		alvoCopia.position.x=i*5;
					// 		alvoCopia.position.z;
						
					// scene.add( alvoCopia);
					// }
				

}


// A funcao criaAlvo os elementosa funcao cria alvosjunta e agrupa os elementos do alvo 

criaAlvo();




const axesHelper=new THREE.AxesHelper(5);
scene.add(axesHelper);
	


			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.000;
				cube.rotation.y += 0.000;
			
				renderer.render( scene, c);
			};
            animate();

			

			