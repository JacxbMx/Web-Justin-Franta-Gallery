// Sketchfab Viewer API: add/remove/show/hide Annotations, annotations events
var version = '1.12.1';
var uid = '09da511280304366bfd008906e3dd863';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
var geoBase = 7;
var varianteMuebles1 = 354; // id muebles 1
var varianteMuebles2 = 463; // id muebles 2
var galeriaJustin = 659;
var galeriaFranta = 1003;
var galeriaVacia = 604;
var roof1madera = 1412;
var roof2acero = 1467;
var floor1marmol = 1522;
var floor2madera = 1537;
var currentgalery = 0;
var botones2 = document.getElementById('botones2');

const textures = {
    'albedo-madera': {
      url: 'https://i.imgur.com/3fiT9TC.jpg',
      name: 'albedo-madera',
      uid: null
    },
    'albedo-marmol': {
      url: 'https://i.imgur.com/KFfWcou.jpg',
      name: 'albedo-marmol',
      uid: null
    }
  };

var error = function error() {
  console.error('Sketchfab API error');
};
var success = function success(api) {
  api.start(function () {
    api.addEventListener('viewerready', function () {
      api.getAnnotationList(function (p, list) {
        var l = list.length;
        var i = l;
        
      });

      api.getSceneGraph(function (err, result) {
        if (err) {
          console.log('Error getting nodes');
          return;
        } // get the id from that log
        console.log(result);
        //api.hide(varianteMuebles1);
        api.hide(varianteMuebles2);
        api.hide(galeriaFranta);
        api.hide(galeriaJustin); 
        api.hide(roof1madera);
        //api.hide(roof2acero);
        api.hide(floor1marmol);
        //api.hide(floor2madera);
        //api.hide(geoBase);
        //api.hide(galeriaVacia);

        document.getElementById("variante1").style.color = '#3b61ae'; // al inciio el boton furniture 2 es el que esta activo
        document.getElementById("gallery1").style.color = '#3b61ae';

        document.getElementById("variante2").style.color = '#ffffff'; // al inciio el boton furniture 2 es el que esta activo
        document.getElementById("gallery2").style.color = '#ffffff';


        document.getElementById("botonjustin").style.color = '#999999';
        document.getElementById("botonfranta").style.color = '#999999';

      
        
      });

      
      
      var transitionningToAnnotation = false;
      var annotationChange = false;
      api.addEventListener('camerastart', function () {
        if (annotationChange !== false && annotationChange !== -1) {
          transitionningToAnnotation = true;
          console.log('camera annotation start');
        } else {
          console.log('camerastart');
        }
      });
      api.addEventListener('camerastop', function () {
        if (annotationChange !== false && annotationChange !== -1 && transitionningToAnnotation) {
          console.log('camera annotation stop, Annotation Displayed');
        } else if (transitionningToAnnotation) {
          console.log('camera stop, Annotation Display Interrupted');
        } else {
          console.log('camerastop');
        }
        annotationChange = false;
        transitionningToAnnotation = false;
      });
      api.addEventListener('annotationFocus', function (info) {
        console.log('annotationFocus', info);
      });
      api.addEventListener('annotationBlur', function (info) {
        console.log('annotationBlur', info);
      });
      api.addEventListener('annotationMouseEnter', function (info) {
        console.log('annotationMouseEnter', info);
      });
      api.addEventListener('annotationMouseLeave', function (info) {
        console.log('annotationMouseLeave', info);
      });
      api.addEventListener('annotationSelect', function (info) {
        if (annotationChange !== info) {
          console.log('annotationSelect', info);
          annotationChange = info;
          console.log(document.getElementById("imagen").outerHTML)
          var newImgElement1 = document.createElement("img");
          newImgElement1.id = "imagen";
          newImgElement1.src = "https://i.imgur.com/GwYAiUa.jpg"; //franta massai
        
          var newImgElement2 = document.createElement("img");
          newImgElement2.id = "imagen";
          newImgElement2.src = "https://i.imgur.com/vfWm83n.jpg";//justin cognition114structures
          
          var newImgElement3 = document.createElement("img");
          newImgElement3.id = "imagen";
          newImgElement3.src = "https://i.imgur.com/xKZSQph.jpg";// F capata
         
          var newImgElement4 = document.createElement("img");
          newImgElement4.id = "imagen";
          newImgElement4.src = "https://i.imgur.com/1naZzc1.jpg";//JA cognition130 seeking
          
          var newImgElement5 = document.createElement("img");
          newImgElement5.id = "imagen";
          newImgElement5.src = "https://i.imgur.com/nx1iuax.jpg";// JA cognition141 the miracle
          
          var newImgElement6 = document.createElement("img");
          newImgElement6.id = "imagen";
          newImgElement6.src = "https://i.imgur.com/Rji7P9S.jpg";// F cheval
          
          var newImgElement7 = document.createElement("img");
          newImgElement7.id = "imagen";
          newImgElement7.src = "https://i.imgur.com/jB6CNhY.jpg";//F femme debout
          
          var newImgElement8 = document.createElement("img");
          newImgElement8.id = "imagen";
          newImgElement8.src = "https://i.imgur.com/HNhZetL.jpg";//JA cognition23 vegetarian
          
          var newImgElement9 = document.createElement("img");
          newImgElement9.id = "imagen";
          newImgElement9.src = "https://i.imgur.com/O1K3pnh.jpg";//franta INFO
          
          var newImgElement10 = document.createElement("img");
          newImgElement10.id = "imagen";
          newImgElement10.src = "https://i.imgur.com/GZ6XSt6.jpg";//xr room

          var newImgElement11 = document.createElement("img");
          newImgElement11.id = "imagen";
          newImgElement11.src = "https://i.imgur.com/5C0caWH.jpg"; // JA cognition 18 new york 
        
          var newImgElement12 = document.createElement("img");
          newImgElement12.id = "imagen";
          newImgElement12.src = "https://i.imgur.com/Q6bOK7T.jpg";// JA 77 goo evil

          var newImgElement13 = document.createElement("img");
          newImgElement13.id = "imagen";
          newImgElement13.src = "https://i.imgur.com/sDsWPKk.jpg";//JA 278

          var newImgElement14 = document.createElement("img");
          newImgElement14.id = "imagen";
          newImgElement14.src = "https://i.imgur.com/9TTPqUM.jpg";//JA 198

          var newImgElement15 = document.createElement("img");
          newImgElement15.id = "imagen";
          newImgElement15.src = "https://i.imgur.com/6f8kOLZ.jpg";//JA INFO

          
          
          if(currentgalery == 2){ //franta switchCase
            switch(annotationChange){
              case 18://xr room
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement10.outerHTML;

                 //los botones se ocultan cuando sale una anotacion
                 document.getElementById("gallery1").style.display = "none";
                 document.getElementById("gallery2").style.display = "none";
                 document.getElementById("variante1").style.display = "none";
                 document.getElementById("variante2").style.display = "none";
                 document.getElementById("imagen_barra").style.display = "none";
                
                 break;
              case 2://franta description
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement9.outerHTML;
                 
                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";
                
                break;
              case 3://franta massai
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement1.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 6:// F capata
                  document.getElementById("image-id").style.display = 'flex';
                  document.getElementById("imagen").outerHTML = newImgElement3.outerHTML;

                  //los botones se ocultan cuando sale una anotacion
                 document.getElementById("gallery1").style.display = "none";
                 document.getElementById("gallery2").style.display = "none";
                 document.getElementById("variante1").style.display = "none";
                 document.getElementById("variante2").style.display = "none";
                 document.getElementById("imagen_barra").style.display = "none";

                break;
              case 14:// F cheval
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement6.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 16://F femme debout
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement7.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              
              default:
              document.getElementById("image-id").style.display = 'none';

              //cuando no hay anotacion los botones se muestran
              document.getElementById("gallery1").style.display = "inline";
              document.getElementById("gallery2").style.display = "inline";
              document.getElementById("variante1").style.display = "inline";
              document.getElementById("variante2").style.display = "inline";
              document.getElementById("imagen_barra").style.display = "inline";
                break;
            }
          }

          if(currentgalery == 1){ // justin
            switch(annotationChange){
              case 18://XR ro
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement10.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

                break;
              case 2://JA INFO
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement15.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

                break;
              case 3:// JA cognition 18 new york
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement11.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 4://JA cognition 114
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement2.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 7:// JA 77 goo evil
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement12.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 8:// //JA cognition130 seeking
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement4.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 13://JA 141
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement5.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 16://JA 278
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement13.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 10://JA 198
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement14.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              case 9://JA 23
                document.getElementById("image-id").style.display = 'flex';
                document.getElementById("imagen").outerHTML = newImgElement8.outerHTML;

                //los botones se ocultan cuando sale una anotacion
                document.getElementById("gallery1").style.display = "none";
                document.getElementById("gallery2").style.display = "none";
                document.getElementById("variante1").style.display = "none";
                document.getElementById("variante2").style.display = "none";
                document.getElementById("imagen_barra").style.display = "none";

              break;
              default:
              document.getElementById("image-id").style.display = 'none';

              //cuando no hay anotacion los botones se muestran
              document.getElementById("gallery1").style.display = "inline";
              document.getElementById("gallery2").style.display = "inline";
              document.getElementById("variante1").style.display = "inline";
              document.getElementById("variante2").style.display = "inline";
              document.getElementById("imagen_barra").style.display = "inline";
                break;
            }
          }
          
          
          
        }
      });

      document.getElementById("boton").addEventListener('click', function(){
        document.getElementById("image-id").style.display = 'none';

         //cuando se cierra la anotacion los botones se muestran
         document.getElementById("gallery1").style.display = "inline";
         document.getElementById("gallery2").style.display = "inline";
         document.getElementById("variante1").style.display = "inline";
         document.getElementById("variante2").style.display = "inline";
         document.getElementById("imagen_barra").style.display = "inline";
      });

      document.getElementById("variante1").addEventListener('click', function(){
        document.getElementById("variante1").style.color = '#3b61ae';
        document.getElementById("variante2").style.color = '#ffffff';
        api.show(varianteMuebles1);
        api.hide(varianteMuebles2);
      });
      document.getElementById("variante2").addEventListener('click', function(){
        document.getElementById("variante1").style.color = '#ffffff';
        document.getElementById("variante2").style.color = '#3b61ae';
        api.show(varianteMuebles2);
        api.hide(varianteMuebles1);
      });
      document.getElementById("botonjustin").addEventListener('click', function(){
        //window.location.href = "https://d31an8m86elzvk.cloudfront.net";
        document.getElementById("botonjustin").style.color = '#000000';
        document.getElementById("botonfranta").style.color = '#999999';
        api.show(galeriaJustin);
        api.hide(galeriaFranta);
        api.hide(galeriaVacia);
        currentgalery = 1; //este valor controla que switch se ejecuta para manejar las anotaciones
        //botones2.style.display = "inline";
        
      });
      document.getElementById("botonfranta").addEventListener('click', function(){
        document.getElementById("botonjustin").style.color = '#999999';
        document.getElementById("botonfranta").style.color = '#000000';
        api.show(galeriaFranta);
        api.hide(galeriaJustin);
        api.hide(galeriaVacia);
        currentgalery = 2; //este valor controla que switch se ejecuta para manejar las anotaciones
      });
      document.getElementById("gallery2").addEventListener('click', function(){
        document.getElementById("gallery1").style.color = '#ffffff';
        document.getElementById("gallery2").style.color = '#3b61ae';
        api.show(floor1marmol);
        api.hide(floor2madera);
        api.hide(roof2acero);
        api.show(roof1madera);
        /*api.getMaterialList((err, materials) => {
            console.log(materials);
            materialSuelo = materials[38]; //id del suelo
            for(const texture in textures){
              api.addTexture(textures[texture].url,(err,uid) =>{
                  if(!err){
                    
                      textures[texture].uid = uid;
                      window.console.log(`Registered new texture, ${textures[texture].name}, uid: ${uid}`);
                      let materialToUpdate = materialSuelo;
                      materialToUpdate.channels.AlbedoPBR.texture.uid = textures["albedo-madera"].uid;
                      materialToUpdate.channels.AlbedoPBR.enable = true;

                      api.setMaterial(materialToUpdate, () => {
                          window.console.log('Updated material.');
                        });
                        //switchPiso = 1;
                  
                }
              });
            }
        });*/
      });

      document.getElementById("gallery1").addEventListener('click', function(){
        document.getElementById("gallery2").style.color = '#ffffff';
        document.getElementById("gallery1").style.color = '#3b61ae';
        api.hide(floor1marmol);
        api.show(floor2madera);
        api.show(roof2acero);
        api.hide(roof1madera);
        /*api.getMaterialList((err, materials) => {
            console.log(materials);
            materialSuelo = materials[38]; //id suelo
            for(const texture in textures){
              api.addTexture(textures[texture].url,(err,uid) =>{
                  if(!err){
                    
                      textures[texture].uid = uid;
                      window.console.log(`Registered new texture, ${textures[texture].name}, uid: ${uid}`);
                      let materialToUpdate = materialSuelo;
                      materialToUpdate.channels.AlbedoPBR.texture.uid = textures["albedo-marmol"].uid;
                      materialToUpdate.channels.AlbedoPBR.enable = true;

                      api.setMaterial(materialToUpdate, () => {
                          window.console.log('Updated material.');
                        });
                        //switchPiso = 1;
                  
                }
              });
            }
        });*/
      });
      document.addEventListener('keydown', function (event) {
        if (event.which === 65) {
          // pressed 'a' it unselect
          api.unselectAnnotation();
        }
        if (event.which === 66) {
          // pressed 'b' it unselect
          api.showAnnotationTooltip(function () {
            console.log('tooltip showed');
          });
        }
        if (event.which === 67) {
          api.hideAnnotationTooltip(function () {
            console.log('tooltip hidden');
          });
        }
      });
      
      api.addEventListener('viewerready', function () {
        
        api.getSceneGraph(function (err, result) {
          if (err) {
            console.log('Error getting nodes');
            return;
          }
          console.log(result);
        });
        api.getCameraLookAt(function (err, camera) {
          api.createAnnotation([-0.16144215216577174, -3.867954799445659, 0.8214845269137563], [0.1229991557663267, -3.5779795878788656, -0.5151466147866559], camera.position, camera.target, 'mytitle1', 'mytext1 (https://image)[image]', function (index) {
            console.log('added hotspot: ' + index);
          });
          api.createAnnotation([-0.16144215216577174, -3.867954799445659, 0.8214845269137563], [0.1229991557663267, -3.5779795878788656, -0.5151466147866559], camera.position, camera.target, 'mytitle2', 'mytext2 (https://image)[image]', function (indexCreated) {
            console.log('added hotspot: ' + indexCreated);
            api.removeAnnotation(indexCreated);
          });
          api.updateAnnotation(1, {
            title: 'updatedTitle',
            content: 'updatedContent'
          }, function (err, annotation) {
            console.log(annotation);
          });
          api.getAnnotation(1, function (err, annotation) {
            console.log(annotation);
          });
        });
      });
    });
  });
};
client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1,
  ui_ar: 0,
  ui_watermark: 0,
  ui_infos: 0,
  ui_vr: 0,
  ui_stop: 0,
  ui_fullscreen: 0,
  ui_inspector: 0
  
});
//////////////////////////////////
// GUI Code
//////////////////////////////////
function initGui() {
  var controls = document.getElementById('controls');
  var buttonsText = '';
  document.getElementById("image-id").style.display = 'none';
  //buttonsText += '<button id="a0">Select annotation 0 without moving camera</button>';
  //buttonsText += '<button id="a1">Select annotation 1 without camera animation</button>';
  //controls.innerHTML = buttonsText;
}
initGui();

//////////////////////////////////
// GUI Code end
//////////////////////////////////