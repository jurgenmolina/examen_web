var tecnologia = document.querySelector('#tecnologia')

	function traerAside2(){
			fetch('https://carlosreneas.github.io/endpoints/categoria_tecnologia.json')
			.then(res2 => res2.json())
			.then(data2 =>{


				for(let valor of data2){

					
                tecnologia.innerHTML += `
                	

               		
          		<p id="titulo">${ valor.titulo}</p>
                
                `
            }	


            })

		}

		window.onload = traerAside2();