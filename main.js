const $grafica = document.getElementById('myChart');

const informamesa = document.querySelector('.info-mesas')
obtieneInfo()


function obtieneInfo(){
  const listamunicipios = document.getElementById('tipoConsultaDepartamento')
  const municipio = listamunicipios.value 
fetch(`https://censopoblacion.azurewebsites.net/API/indicadores/2/${municipio}`, {method: 'GET'})
.then (respuesta => respuesta.json())
.then(respuesta => JSON.parse(respuesta))
.then(response => {
const jsonCompleto = response
tablavotos(jsonCompleto)

})
}


function tablavotos(jsonCompleto){
  const listamunicipios = document.getElementById('tipoConsultaDepartamento')
  const municipio = listamunicipios.value 
  contenidopersonas.innerHTML = ''
  contenidopersonas.innerHTML += `

      <tr>
          <td>Índice de Masculinidad: </td>
          <td>${jsonCompleto.indice_masculinidad}</td>
      </tr>
      <td>Edad Promedio: </td>
      <td>${jsonCompleto.edad_promedio}</td>
      <tr>
      <td>Índice de Dependencia: </td>
      <td>${jsonCompleto.indice_dependencia}</td>
      </tr>
      <td>* Años promedio de estudio: </td>
      <td>${jsonCompleto.anios_prom_estudio}</td>
      <tr>
      <td>* Alfabetismo </td>
      <td>${jsonCompleto.alfabetismo}</td>   
    
      `
  

  contenidoviviendas.innerHTML = ''
  contenidoviviendas.innerHTML += `

      <tr>
          <td>Viviendas Particulares: </td>
          <td>${jsonCompleto.viviendas_part}</td>
      </tr>
        <td>Total de hogares: </td>
        <td>${jsonCompleto.total_hogares}</td>
      <tr>
        <td>Promedio de personas por hogar: </td>
        <td>${jsonCompleto.prom_personas_hogar}</td>
      </tr>
      <tr>
        <td>Porcentaje de jefas de hogar: </td>
        <td>${jsonCompleto.total_jefas_hogar}</td>
      </tr>
    
      `
       // /*Cambiar formato de este campo*/
      contenidopobsexo.innerHTML = ''
      contenidopobsexo.innerHTML += `
    
          <tr>
              <td>Hombres: </td>
              <td>${jsonCompleto.total_sexo_hombre}</td>
              <td>${jsonCompleto.porc_sexo_hombre}</td>   
          </tr>
            <td>Mujeres: </td>
            <td>${jsonCompleto.total_sexo_mujeres}</td>
            <td>${jsonCompleto.porc_sexo_mujeres}</td>   
        
          `
          contenidopobporedad.innerHTML = ''
          contenidopobporedad.innerHTML += `
        
              <tr>
                  <td>0-14 años: </td>
                  <td>${jsonCompleto.pob_edad_014}</td>
                  <td>${jsonCompleto.porc_edad_014}</td>   
              </tr>
              <tr>
                <td>15-64 años: </td>
                <td>${jsonCompleto.pob_edad_1564}</td>
                <td>${jsonCompleto.porc_edad_1564}</td>   
              </tr>
              <tr>
                <td>65 y más años: </td>
                <td>${jsonCompleto.pob_edad_65}</td>
                <td>${jsonCompleto.porc_edad_65}</td>   
              </tr>
              
              `
              contenidopobporarea.innerHTML = ''
              contenidopobporarea.innerHTML += `
            
                  <tr>
                      <td>Urbana: </td>
                      <td>${jsonCompleto.total_sector_urbano}</td>
                      <td>${jsonCompleto.porc_sector_urbano}</td>   
                  </tr>
                  <tr>
                    <td>Rural: </td>
                    <td>${jsonCompleto.total_sector_rural}</td>
                    <td>${jsonCompleto.porc_sector_rural}</td>   
                  </tr>
                  
                  `
                  contenidopobporpueblo.innerHTML = ''
                  contenidopobporpueblo.innerHTML += `
                
                      <tr>
                          <td>Maya: </td>
                          <td>${jsonCompleto.pob_pueblo_maya}</td>
                          <td>${jsonCompleto.porc_pueblo_maya}</td>   
                      </tr>
                      <tr>
                        <td>Garífuna: </td>
                        <td>${jsonCompleto.pob_pueblo_garifuna}</td>
                        <td>${jsonCompleto.porc_pueblo_garifuna}</td>   
                      </tr>
                      <tr>
                          <td>Xinka: </td>
                          <td>${jsonCompleto.pob_pueblo_xinca}</td>
                          <td>${jsonCompleto.porc_pueblo_xinca}</td>   
                      </tr>
                      <tr>
                          <td>Afrodescendiente/Creole/Afromestizo: </td>
                          <td>${jsonCompleto.pob_pueblo_afrodescendiente}</td>
                          <td>${jsonCompleto.porc_pueblo_afrodescendiente}</td>   
                      </tr>
                      <tr>
                          <td>Ladino: </td>
                          <td>${jsonCompleto.pob_pueblo_ladino}</td>
                          <td>${jsonCompleto.porc_pueblo_ladino}</td>   
                      </tr>
                      <tr>
                          <td>Extranjero: </td>
                          <td>${jsonCompleto.pob_pueblo_extranjero}</td>
                          <td>${jsonCompleto.porc_pueblo_extranjero}</td>   
                      </tr>
                      
                      `
                    
                        // const titulo = document.createElement('h3')
  // titulo.textContent = jsonMesas[0].D + ':'

  // const cantidadmesas = document.createElement('h4')
  // cantidadmesas.textContent = jsonMesas[0].MESASPRO
  if( municipio === '999'){

  const titulo2 = document.createElement('h3')
  titulo2.textContent = ('Nombre:')

  const nombre = document.createElement('h5')
  nombre.textContent = jsonCompleto.nombre


  // const nombre = document.createElement('h3')
  // nombre.textContent = jsonCompleto.nombre

  // const cantidadmesasno = document.createElement('h4')
  // cantidadmesasno.textContent = jsonMesas[0].MESASFALT

  const titulo3 = document.createElement('h3')
  titulo3.textContent = ('Total de Municipios:')

  const totalmunicipios = document.createElement('h5')
  totalmunicipios.textContent = jsonCompleto.total_lugares

  const titulo4 = document.createElement('h3')
  titulo4.textContent = ('Cabecera:')

  const cabecera = document.createElement('h5')
  cabecera.textContent = jsonCompleto.capital
  
  informamesa.innerHTML = ''
  // informamesa.appendChild(titulo)
  // informamesa.appendChild(cantidadmesas)
  informamesa.appendChild(titulo2)
  informamesa.appendChild(nombre)
  // informamesa.appendChild(cantidadmesasno)
  informamesa.appendChild(titulo3)
  informamesa.appendChild(totalmunicipios)
  informamesa.appendChild(titulo4)
  informamesa.appendChild(cabecera)
  } 
  else {
    const titulo2 = document.createElement('h3')
    titulo2.textContent = ('Nombre:')
  
    const nombre = document.createElement('h5')
    nombre.textContent = jsonCompleto.nombre
  
    informamesa.innerHTML = ''
    informamesa.appendChild(titulo2)
    informamesa.appendChild(nombre)

  }  

  graficaVotos()
  function graficaVotos(){
  let etiquetas = ['Maya','Garífuna','Xinka','Afrodescendiente/Creole/Afromestizo','Ladino','Extranjero']
  let cantidadvotos = [2627,184,46,86,173441,248]
  let colorfondo = ['rgba(117, 69, 145, 0.8)','rgba(117, 188, 145, 0.8)','rgba(26, 87, 193, 0.8)','rgba(26, 210, 193, 0.8)','rgba(26, 0, 193, 0.8)','rgba(26, 0, 19, 0.8)']
  // if(myChart){
  //   myChart.destroy()
  // }
  myChart = new Chart($grafica, {
    type: 'doughnut',
    data: {
        labels: etiquetas,
        datasets: [{
            label: 'Población por Pueblos',
            data: cantidadvotos,
            backgroundColor: colorfondo,
            borderColor: colorfondo,
            borderWidth: 1
        }]
    },
    options: {
      indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  }
}
  
