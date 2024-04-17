
function buscar() {

  document.getElementById("resultado").innerHTML = ''
  asd = document.getElementById("Info").value

  alert("Recibimos tu consulta")

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };


  let url = "http://ergast.com/api/f1/drivers/" + asd + ".json"

  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));



  mostrarDatos()



}

function mostrarDatos(data) {
  const mostrarDatos1 = (data => {
    console.log(Drivers)

    infoPiloto = ` ${MRData.DriverTable.Drivers[0]}`

    document.getElementById("resultado").innerHTML = infoPiloto
  }
  )
}