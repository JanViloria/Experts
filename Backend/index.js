

//Creación de un experto
/*db.collection("experts").add({
  Name: "Mario",
  Location: "B/quilla, Atlántico, Colombia",
  Services: [{},{}],
  Cel: "3015391210",
  DNI: "182965",
  Bio: "Que tal soy Mario",
  ContactLink: "www.123.com",
  Occupation: "Abogado",
  Photo: "www.photo.com"
})
.then(()=>{
  console.log("Documento creado");
})
.catch((error)=>{
  console.log("Error al crear el documento ", error);
})*/

//Leer un experto
db.collection("experts").doc("daHLCh3heO7Rt1xBM8m7").get()
.then((doc)=>{
  if(doc.exists){
    console.log(doc.data());
  }else{
    console.log("Documento no existe");
  }
})
.catch((error)=>{
  console.log("Error al leer el documento ", error);
})