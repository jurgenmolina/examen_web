

var contenido = document.querySelector('#contenido')
var container = document.querySelector('#container')
		
		function traer(){

			     	fetch('https://carlosreneas.github.io/endpoints/noticias.json')
					.then(res => res.json())
					.then(data =>{

				container.innerHTML +=  `  

					<ul class="slider">
		              <li id="slide1">
		                <img src="${ data[1].img }"/>
		              </li>
		              <li id="slide2">
		                <img src="${ data[2].img }"/>
		              </li>
		              <li id="slide3">
		                <img src="${ data[3].img }"/>
		              </li>
		              <li id="slide3">
		                <img src="${ data[3].img }"/>
		              </li>
		            </ul>
		            
		            <ul class="menu">
		              <li>
		                <a href="#slide1">1</a>
		              </li>
		              <li>
		                <a href="#slide2">2</a>
		              </li>
		               <li>
		                <a href="#slide3">3</a>
		              </li>
		              <li>
		                <a href="#slide4">4</a>
		              </li>
		            </ul>

				 `

				var numero = 0;

				for(let valor of data){


				 	numero++;

				 	let text = valor.detalle
					let result = text.replace("<p>", "");
					let resultado = result.replace("</p>", "");
					let resultx = resultado.replace("<p>", "");
					let resultado2 = resultx.replace("</p>", "");


                contenido.innerHTML += `
                	

               		<article class="articulo_noticia">
                  <h1 id="titulo">${ valor.titulo } - ${valor.categoria} - ${valor.fecha}</h1>
                  <p id="descripcion">${valor.descripcion} <a href="#" onclick="vermas${numero}('mas${numero}');
                  " id="mas${numero}">... [leer más]</a></p>
                  
                  <p id="desplegar${numero}" style="display:none;">
                  ${ resultado2 }
                  <a href="#" onclick="vermas${numero}('menos${numero}');" id="menos${numero}">... [leer menos]</a>
            		</p>
          			</article>
                `
            }
                })
	}


		window.onload = traer();

		
		function vermas1(id){
			if(id=="mas1"){
			document.getElementById("desplegar1").style.display="block";   
			document.getElementById("mas1").style.display="none"; 
			}
			else{
			document.getElementById("desplegar1").style.display="none";
			document.getElementById("mas1").style.display="inline";
			}
		}

		function vermas2(id){
			if(id=="mas2"){
			document.getElementById("desplegar2").style.display="block";   
			document.getElementById("mas2").style.display="none"; 
			}
			else{
			document.getElementById("desplegar2").style.display="none";
			document.getElementById("mas2").style.display="inline";
			}
		}

		function vermas3(id){
			if(id=="mas3"){
			document.getElementById("desplegar3").style.display="block";   
			document.getElementById("mas3").style.display="none"; 
			}
			else{
			document.getElementById("desplegar3").style.display="none";
			document.getElementById("mas3").style.display="inline";
			}
		} 

		function vermas4(id){
			if(id=="mas4"){
			document.getElementById("desplegar4").style.display="block";   
			document.getElementById("mas4").style.display="none"; 
			}
			else{
			document.getElementById("desplegar4").style.display="none";
			document.getElementById("mas4").style.display="inline";
			}
		} 
		