// obtener las  funcionaels deexress

var express = require("express");// configuacion del servidor
//configurar mi servidor

var app = express(); // variable que tenra todo lo del servidor
app.listen(8081); // puerto se carga

//imprime en kla consola del servidor
console.log("accedio al servidor");
// despacha archivos  staticos
app.use("/", express.static(__dirname +"/vistas"));// accede al archvo de manera statica
app.use("/css", express.static(__dirname +"/css"));// accede al archvo de manera statica
app.use("/imagenes", express.static(__dirname +"/imagenes"));// accede al archvo de manera statica
app.use("/videos", express.static(__dirname +"/videos"));// accede al archvo de manera statica

// hacemos que la pagina sea dinamico

// crear objetos para obtener funcionalidades

var consolidate = require("consolidate");// librreria para configurar vistas dinamicas
var dust = require("dustjs-linked");// motor para crear vistas dinamicas
// configurar motor de vistas
app.set("view engine", "dust"); //vistas tendran extencion .dust
app.enging("dust", consolidate.dust);// indica el engine que se va usar
// indicamos la carpeta que contiene las vistas

app.set("view", __dirname + "/vistas");


