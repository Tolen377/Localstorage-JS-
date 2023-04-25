function addItemLocalstorage() {
  let persona = {
    nombre: "Arturo Israel Tolentino Morales",
    edad: 23,
    correo: "israel.tolentino323@gmail",
    coords: {
      lat: 10,
      ln: -10,
    },
  };

  let nombre = "Kevin Garcia Dimas";

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("persona", JSON.stringify(persona));
}

function getItemLocalstorage() {
  if (localStorage.getItem("nombre") || localStorage.getItem("persona")) {
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));

    console.log("Nombre:" + nombre);
    console.log(persona);
  } else {
    console.log("********** No se encontro el recurso **********");
  }
}

function deleteItemLocalstorage() {
  localStorage.removeItem("nombre");
}

//addItemLocalStorage();
deleteItemLocalstorage();
getItemLocalstorage();
