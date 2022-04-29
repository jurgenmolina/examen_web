var deportes = document.querySelector('#deportes')

	function traerAside(){
			fetch('https://carlosreneas.github.io/endpoints/categoria_deporte.json')
			.then(res2 => res2.json())
			.then(data2 =>{

				for(let valor of data2){

					if (valor.id === 6) {
 						deportes.innerHTML += `
                	

               		
          				<p id="titulo"><a href="noticia6.html">${ valor.titulo}</a></p>
                
                `
					}else{
						 deportes.innerHTML += `
                	

               		
          		<p id="titulo">${ valor.titulo}</p>
                
                `
					}

               
            }	


            })

		}

		window.onload = traerAside();