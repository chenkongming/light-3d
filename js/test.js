	/**
 * @authorbobo / https://github.com/qiao
 */
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    var img="";
    var scene ;
    var spotLight=new Array() ;
    var lensFlare=new Array();
    var  flareColor=new Array();
    var pointColor;
     var pointLight;
			var camera;
			var renderer;
			var model;
			var animations;
			var kfAnimations = [ ];
			var kfAnimationsLength = 0;
			var loader = new THREE.ColladaLoader();
			var lastTimestamp = 0;
			var progress = 0;
	  var container;
	 var lightPosition;
	 var guanPosition=1;
     function changeLight1(){
		  scene.add(spotLight[1]);
		  scene.add(lensFlare[1]);
		  scene.remove(spotLight[2]);
		  scene.remove(spotLight[4]);
		  scene.remove(spotLight[3]);
		  scene.remove(spotLight[5]);
		 scene.remove(lensFlare[2]);
		 scene.remove(lensFlare[4]);
		 scene.remove(lensFlare[3]);
		 scene.remove(lensFlare[5]);
		lightPosition=1;
		changeGuan1();
	  }
	  function changeLight2(){
          scene.add(spotLight[2]);
		  scene.add(lensFlare[2]);
		   scene.remove(spotLight[1]);
		  scene.remove(spotLight[4]);
		  scene.remove(spotLight[3]);
		  scene.remove(spotLight[5]);
		  scene.remove(lensFlare[1]);
		  scene.remove(lensFlare[4]);
		  scene.remove(lensFlare[3]);
		  scene.remove(lensFlare[5]);
		  lightPosition=2;
		  changeGuan2();
	  }
	  function changeLight3(){
          scene.add(spotLight[3]);
		  scene.add(lensFlare[3]);
		  scene.remove(spotLight[1]);
		  scene.remove(spotLight[4]);
		  scene.remove(spotLight[2]);
		  scene.remove(spotLight[5]);
		 scene.remove(lensFlare[1]);
		 scene.remove(lensFlare[4]);
		 scene.remove(lensFlare[2]);
		 scene.remove(lensFlare[5]);
		 lightPosition=3;
		 changeGuan3();
	  }function changeLight4(){
          scene.add(spotLight[4]);
		  scene.add(lensFlare[4]);
		   scene.remove(spotLight[1]);
		  scene.remove(spotLight[2]);
		  scene.remove(spotLight[3]);
		  scene.remove(spotLight[5]);
		 scene.remove(lensFlare[1]);
		 scene.remove(lensFlare[2]);
		 scene.remove(lensFlare[3]);
		 scene.remove(lensFlare[5]);
		 lightPosition=4;
		 changeGuan4();
	  }function changeLight5(){
          scene.add(spotLight[5]);
		 scene.add(lensFlare[5]);
		  scene.remove(spotLight[1]);
		  scene.remove(spotLight[2]);
		  scene.remove(spotLight[3]);
		  scene.remove(spotLight[4]);
		 scene.remove(lensFlare[1]);
		 scene.remove(lensFlare[2]);
		 scene.remove(lensFlare[3]);
		 scene.remove(lensFlare[4]);
		lightPosition=5;
		changeGuan5();
	  }
	  
	  function changeGuan1(){
	  sp("1");
	  hp("2");
	  hp("3");
	  hp("4");
	  hp("5");
	  guanPosition=1;
	  }
	  function changeGuan2(){
	 	sp("2");hp("1");hp("3");hp("4");hp("5");guanPosition=2
	  }
	  function changeGuan3(){
	 sp("3");hp("1");hp("2");hp("4");hp("5");guanPosition=3
	  
	  }
	  function changeGuan4(){
	sp("4");hp("1");hp("2");hp("3");hp("5");guanPosition=4
		  }
	    function changeGuan5(){
	sp("5");hp("1");hp("2");hp("3");hp("4");guanPosition=5
	  
	  }

	 var flag=true;
	  function closeLight(){
	  if(flag){
	  document.getElementById("guan_zone").style.display="none";
	  document.getElementById("led_zone").style.display="block";
	   switch(guanPosition){
	  case 1:
	   changeLight1();
	  break;
	   case 2:
	   changeLight2();
	  break;
	   case 3:
	   changeLight3();
	  break;
	   case 4:
	   changeLight4();
	  break;
	   case 5:
	   changeLight5();
	  break;
	  }
	  flag=false;
	  }else{
	   document.getElementById("guan_zone").style.display="block";
	  document.getElementById("led_zone").style.display="none";
	  scene.remove(spotLight[lightPosition]);
	   scene.remove(lensFlare[lightPosition]);
	  flag=true;
	  
	  }
	 
	  }
function addLensFlare(img,id){
		spotLight[id] = new THREE.DirectionalLight(pointColor);
	    spotLight[id].position.set(0,-10, 20);
        spotLight[id].castShadow = true;
        spotLight[id].shadowCameraNear = 0.1;
        spotLight[id].shadowCameraFar = 100;
        spotLight[id].shadowCameraFov = 50;
        spotLight[id].distance = 0;
        spotLight[id].shadowCameraNear = 2;
        spotLight[id].shadowCameraFar = 200;
        spotLight[id].shadowCameraLeft = -100;
        spotLight[id].shadowCameraRight = 100;
        spotLight[id].shadowCameraTop = 100;
        spotLight[id].shadowCameraBottom = -100;
        spotLight[id].shadowMapWidth = 2048;
        spotLight[id].shadowMapHeight = 2048;
        var textureFlare0 = THREE.ImageUtils.loadTexture("textures/"+img);
		 flareColor[id] = new THREE.Color(0xffffff);
         lensFlare[id] = new THREE.LensFlare(textureFlare0, 1000, 0.0, THREE.AdditiveBlending, flareColor[id]);
        lensFlare[id].position.copy(spotLight[id].position);
		
            }
         addLensFlare("light01.png",'1');
		addLensFlare("light02.png",'2');
		 addLensFlare("light03.png",'3');
		addLensFlare("light04.png",'4');
		 addLensFlare("light05.png",'5');
		  var Model_Count=3;
  
    function init() {
        scene = new THREE.Scene();
        
         var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
		   renderer.setPixelRatio( window.devicePixelRatio);
			renderer.sortObjects = false;
		renderer.setClearColor( 0x2e2e2e);
        renderer.setSize(window.innerWidth, window.innerHeight);
      	var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.01, 1000 );
				camera.position.set( 0, -100, 0 );
				camera.lookAt( new THREE.Vector3(0, 100, 0) );
				// Scene
				scene = new THREE.Scene();
				pointLight = new THREE.PointLight( 0xffffff, 3);
				pointLight.position.set(100, 100, 100);
				scene.add( pointLight );
				pointLight1 = new THREE.PointLight( 0xffffff, 3);
				pointLight1.position.set(100, 0, 0);
				scene.add( pointLight1 );
		        pointLight = new THREE.PointLight( 0xffffff,2 );
	
		scene.add( pointLight );
      	var controls = new THREE.OrbitControls( camera );
		controls.minDistance =135; 
		controls.rotateSpeed=0.5;
		controls.zoomSpeed=0.5;
		controls.panSpeed=0.5;
        controls.maxDistance =300; 
	   container= document.getElementById("ThreeJS");
		var loading = document.getElementById("Loading");
	    container.appendChild( renderer.domElement );
		var loader = new THREE.ColladaLoader();
        var mesh;
        loader.load("models/qita.dae", function (result) {
            mesh = result.scene;
			animations = result.animations;
				kfAnimationsLength = animations.length;
            mesh.scale.set(1, 1, 1);
            scene.add(mesh);
			for ( var i = 0; i < kfAnimationsLength; ++i ) {
				  var animation = animations[ i ];
				  var kfAnimation = new THREE.KeyFrameAnimation( animation );
					  kfAnimation.timeScale = 1;
					  kfAnimations.push( kfAnimation );
				}
					   $("#play").click(function(){start();$("#play").hide();$("#stop").show();});
				    $("#stop").click(function(){_Stop();$("#play").show();$("#stop").start();});
				animate( lastTimestamp );
				Count();
        });
		 var mesh;
        loader.load("models/dengzhu.dae", function (result) {
            mesh = result.scene;
			animations = result.animations;
			          mesh.scale.set(1, 1, 1);
                 scene.add(mesh);
				Count();
        });
		
		
		 var mesh;
        loader.load("models/boli.dae", function (result) {
			    mesh = result.scene;
				animations = result.animations;
			          mesh.scale.set(1, 1, 1);
					 
                 scene.add(mesh);
				SetDaeopacity(mesh, 0.35)
				Count();
        });
		
	
		
		/*	  var meshs = {};
		function Add_guan(dae, ID) {
			  var loader = new THREE.ColladaLoader();
              loader.load('models/' + dae + '.dae',function ( collada ) {
                model = collada.scene;
				var modelMaterial=new THREE.MeshLambertMaterial({color:0xe80b0b});
				 model.name = "mesh_" + ID;
                meshs[ID] = model;
				setposition();
			    meshs[ID].visible =false;
				SetDaeopacity(meshs[ID], 0.35);
				animations = collada.animations;
				  scene.add(model, modelMaterial);
				  Count();
				
				});
	              };
			Add_guan("boli", '1');*/
			
      sp = function (MName) {
		  var Mname = "#changeM_" + MName;
            meshs[MName].visible = true;
            renderer.render(scene, camera);
        }
      hp = function (MName) {
			    var Mname = "#changeM_" + MName;
            meshs[MName].visible = false;
            renderer.render(scene, camera);
        }
		function setposition(){
			model.scale.x = model.scale.y = model.scale.z = 1 
			// 1/8 scale, modeled in cm
	                model.position.set(0,0,0);
	          }
		function Count(){Model_Count--;
		       if (Model_Count == 0) {
                loading.innerHTML="Loading Finish!";
                loading.parentNode.removeChild(loading);
                $("#start").show();}
				  
				  }
	
/*function SetDaeopacity(colladaobj, opacityscale) {
							if (colladaobj.children.length > 0) {
								for (var k = 0; k < colladaobj.children.length; k++) {
									SetDaeopacity(colladaobj.children[k], opacityscale);
								}
							}
							else {
								if (typeof (colladaobj.material) == 'object') {
									colladaobj.material.opacity = opacityscale;
									colladaobj.material.transparent = true;
								}
					
						   }
		                }*/
function SetDaeopacity(mesh, opacityscale) {
        if (mesh.children.length > 0) {
            for (var k = 0; k < mesh.children.length; k++) {
                SetDaeopacity(mesh.children[k], opacityscale);
            }
        }
        else {
            if (typeof (mesh.material) == 'object') {
                mesh.material.opacity = opacityscale;
                mesh.material.transparent = true;
            }

        } 
    }
         render();
function render() {
             controls.update();
			pointLight.position.copy( camera.position );
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        	}
function animate( timestamp ) {

				var frameTime = ( timestamp - lastTimestamp ) * 0.001;

				if ( progress >= 0 && progress < 48 ) {

					for ( var i = 0; i < kfAnimationsLength; ++i ) {

						kfAnimations[ i ].update( frameTime );

					}
				} else if ( progress >= 48 ) {

					for ( var i = 0; i < kfAnimationsLength; ++i ) {

						kfAnimations[ i ].stop();

					}
					progress = 0;
					start();

				}
				pointLight.position.copy( camera.position );

				progress += frameTime;
				lastTimestamp = timestamp;
				renderer.render( scene, camera );
			
				requestAnimationFrame( animate );

			}
			 function _Stop() {
				    for ( var i = 0; i < kfAnimationsLength; ++i ) {
					var animation = kfAnimations[i];
					for ( var h = 0, hl = animation.hierarchy.length; h < hl; h++ ) {
						  var keys = animation.data.hierarchy[ h ].keys;
						  var sids = animation.data.hierarchy[ h ].sids;
						  var obj = animation.hierarchy[ h ];
						  if ( keys.length && sids ) {
							    for ( var s = 0; s < sids.length; s++ ) {
								var sid = sids[ s ];
								var next = animation.getNextKeyWith( sid, h, 0 );
								if ( next ) next.apply( sid );

							}
							obj.matrixAutoUpdate = false;
							animation.data.hierarchy[ h ].node.updateMatrix();
							obj.matrixWorldNeedsUpdate = true;
						}

					}
					animation.loop = false;
					animation.stop();
							}
			        };
	function start() {

				for ( var i = 0; i < kfAnimationsLength; ++i ) {
		              var animation = kfAnimations[i];
					  for ( var h = 0, hl = animation.hierarchy.length; h < hl; h++ ) {
 					     	var keys = animation.data.hierarchy[ h ].keys;
						    var sids = animation.data.hierarchy[ h ].sids;
						    var obj = animation.hierarchy[ h ];
						    if ( keys.length && sids ) {
							for ( var s = 0; s < sids.length; s++ ) {
								var sid = sids[ s ];
								var next = animation.getNextKeyWith( sid, h, 0 );
								if ( next ) next.apply( sid );
							}
							obj.matrixAutoUpdate = false;
							animation.data.hierarchy[ h ].node.updateMatrix();
							obj.matrixWorldNeedsUpdate = true;
						}
					}
					animation.loop = false;
					animation.play();

				}

			}
    };
	
	
    window.onload = init;