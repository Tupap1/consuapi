document.getElementById("Info").innerHTML=''

function buscar(){

    
alert("ya recibimos tu consulta")

const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  

  let url = "http://ergast.com/api/f1/drivers" + 

  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));  
  }