
var container = document.querySelector('#container')
		
		function traer(){

			     	fetch('https://carlosreneas.github.io/endpoints/noticia_6.json')
					.then(res => res.json())
					.then(data =>{

				container.innerHTML +=  `  

					<ul class="slider">
		              <li id="slide1">
		                <img src="${ data.img }"/>
		              </li>
		            </ul>
		            
		            <ul class="menu">
		              <li>
		                <a href="#slide1">1</a>
		              </li>
		            </ul>

				 `

				var numero = 1;

				
					

				 	let text = data.detalle
					let result = text.replace("<p>", "");
					let resultado = result.replace("</p>", "");
					let resultx = resultado.replace("<p>", "");
					let resultado2 = resultx.replace("</p>", "");


                container.innerHTML += `
                	

               		<article class="articulo_noticia">
                  <h1 id="titulo">${ data.titulo } - ${data.categoria} - ${data.fecha}</h1>
                  <p id="descripcion">${data.descripcion} <a href="#" onclick="vermas${numero}('mas${numero}');
                  " id="mas${numero}">... [leer más]</a></p>
                  
                  <p id="desplegar${numero}" style="display:none;">
                  ${ resultado2 }
                  <a href="#" onclick="vermas${numero}('menos${numero}');" id="menos${numero}">... [leer menos]</a>
            		</p>
          			</article>
                `
            
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