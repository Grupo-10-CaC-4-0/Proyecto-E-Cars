from flask import Flask, render_template, request, redirect

app = Flask(__name__)

#Muestra el Index
@app.route("/")
def cargar_pag_home():
    titulo="E-Cars - Página Principal"
    return render_template("index.html",titulo=titulo)
#Muestra la pagina de 0Km
@app.route("/catalogo0Km")
def cargar_pag_0km():
    titulo="E-Cars - Catalogo de 0 KM"
    return render_template("catalogo0Km.html",titulo=titulo)
#Muestra la pagina de Usados
@app.route("/catalogoUsados")
def cargar_pag_usados():
    titulo="E-Cars - Catalogo de Usados"
    return render_template("catalogoUsados.html",titulo=titulo)
#Muestra la pagina de Contacto
@app.route("/contacto")
def cargar_pag_contacto():
    titulo="E-Cars - Contacto"
    return render_template("contacto.html",titulo=titulo)

#CREATE
#1)Muestra el formulario para añadir un nuevo vehículo
@app.route("/nuevoVehiculo")
def cargar_pag_nuevo_vehiculo():
    titulo="E-Cars - Añadir un nuevo vehículo"
    return render_template("form_nuevoVehiculo.html",titulo=titulo)
#2)Añade el nuevo vehiculo
@app.route("/add_vehiculo", methods=["POST"])
def add_nuevo_vehiculo():
    tipo = request.form("tipo")
    precio = request.form("precio")
    modelo = request.form("modelo")
    marca = request.form("marca")
    kms = request.form("kms")
    modelo_detalle = request.form("modelo_detalle")
    anio = request.form("anio")
    cargar_nuevo_vehiculo(tipo=tipo,precio=precio, modelo=modelo, marca=marca, kms=kms, modelo_detalle=modelo_detalle,anio=anio)
    return redirect("/catalogoUsados")