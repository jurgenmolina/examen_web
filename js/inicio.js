date = new Date();
			year = date.getFullYear();
			month = date.getMonth() + 1;
			if (month == 4) {
				month = "Abril"
			}
			day = date.getDate();
			document.getElementById("fecha_aside").innerHTML = day + " de " + month + " de " + year;


var contenido = document.querySelector('#contenido')
var container = document.querySelector('#container')
		
		function traer(){
			fetch('https://carlosreneas.github.io/endpoints/noticias.json')
			.then(res => res.json())
			.then(data =>{

				// console.log(data[1].img)

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
		            </ul>

				 `

				for(let valor of data){

					if (valor.id === '4') {
				    	break;
				 	}

                contenido.innerHTML += `
                	

               		<article>
	                <h1 id="titulo">${ valor.titulo } - ${valor.categoria} - ${valor.fecha}</h1>
	                <p id="descripcion">${valor.descripcion}</p></hr>
	            	</article>
                
                `
            }
				
			})
		}
		