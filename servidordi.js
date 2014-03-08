// obtener las  funcionaels deexress

var express = require("express");// configuacion del servidor
//configurar mi servidor

var app = express(); // variable que tenra todo lo del servidor

var consolidate = require("consolidate");// librreria para configurar vistas dinamicas
var dust = require("dustjs-linkedin");// motor para crear vistas dinamicas

app.listen(8081); // puerto se carga

//imprime en kla consola del servidor
console.log("accedio al servidor");
// despacha archivos  staticos
//app.use("/", express.static(__dirname +"/vistas"));// accede al archvo de manera statica
app.use("/css", express.static(__dirname +"/css"));// accede al archvo de manera statica
app.use("/imagenes", express.static(__dirname +"/imagenes"));// accede al archvo de manera statica
app.use("/videos", express.static(__dirname +"/videos"));// accede al archvo de manera statica

// hacemos que la pagina sea dinamico

// crear objetos para obtener funcionalidades

// configurar motor de vistas
app.set("view engine", "dust"); //vistas tendran extencion .dust
app.engine("dust", consolidate.dust);// indica el engine que se va usar
// indicamos la carpeta que contiene las vistas

app.set("views", __dirname + "/vistas");

//hacemos que el servidor  pueda leer los datos que recibe el cliente

app.use(express.urlencoded());

// servidor responda a peticiones GET
app.get("/index", function(request, response){
	
	//logica de como reponder a la peticion index
	response.render("index");
	
	
});

app.get("/formulario", function(request, response){
	
	//logica de como reponder a la peticion index
	response.render("formulario");
	
	
});
// responde a una peticion post
app.post("/suscribirse", function(request, response)
{
console.log("Email:",  request.body.email);	
response.render("respuesta",{
	asunto: "yo soy el servidor",
	email: request.body.email} );});
	
	
app.get("/suscribirse", function(request, response){
	
	//logica de como reponder a la peticion index
	response.render("respuesta");
	
	
});

// responde a una peticion post
app.post("/formulario", function(request, response)
{
console.log("Nombre:",  request.body.nombre);	
console.log("Email:",  request.body.email);
console.log("Website:",  request.body.website);	
console.log("Edad:",  request.body.edad);
console.log("Comentario:",  request.body.comentario);			
response.render("resp_form",{
	asunto: "yo soy el servidor",
	email: request.body.email,
	nombre: request.body.nombre,
	website: request.body.website,
	edad: request.body.edad,
	comentario: request.body.comentario
	
	
	
	} );
	
app.get("/formulario", function(request, response){
	
	//logica de como reponder a la peticion index
	response.render("formulario");
	
	
});	
	
	
	
	});
	



