from flask import Flask, render_template, request, redirect
from validaciones import validar_vehiculo
from controller_db import *

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
@app.route("/catalogoUsados/<tipo>")
def cargar_pag_usados(tipo):
    titulo="E-Cars - Catalogo de Usados"
    autos = mostrarTipos(tipo)
    return render_template("catalogoUsados.html",titulo=titulo,autos=autos)
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
    return render_template("form_nuevoVehiculo.html",titulo=titulo, errores=[], datos={})
#2)Añade el nuevo vehiculo
@app.route("/add_vehiculo", methods=["POST"])
def add_nuevo_vehiculo():
    titulo="E-Cars - Añadir un nuevo vehículo"
    tipo = request.form.get("tipo")
    ruta_imagen = request.form.get("ruta_imagen")
    modelo = request.form.get("modelo")
    precio = request.form.get("precio")
    marca = request.form.get("marca")
    kms = request.form.get("kms")
    modelo_detalle = request.form.get("modelo_detalle")
    anio = request.form.get("anio")
    imagen_alt = f"{marca} {modelo} {anio}"

    errores = validar_vehiculo(marca, modelo, anio, kms, precio, ruta_imagen, modelo_detalle, tipo)
    if errores:
        return render_template('form_nuevoVehiculo.html',titulo=titulo, errores=errores, datos=request.form)

    try:
        mensaje = "El vehículo ha sido añadido exitosamente"
        titulo="E-Cars - Éxito al cargar el vehículo"
        cargar_nuevo_vehiculo(tipo=tipo, ruta_imagen=ruta_imagen, imagen_alt=imagen_alt, precio=precio, modelo=modelo, marca=marca, kms=kms, modelo_detalle=modelo_detalle, anio=anio)
        return render_template("envioExitoso.html", titulo=titulo, mensaje=mensaje)
    except Exception as e:
        errores.append(f'Error al añadir el vehículo: {str(e)}')
        return render_template('form_nuevoVehiculo.html',titulo=titulo, errores=errores, datos=request.form)

#Prueba para ver vehículos
@app.route("/pruebaCatVehiculos")
def cargar_pag_cat_vehiculo():
    vehiculos = obtener_vehiculos()
    titulo="E-Cars - Vehiculos"
    return render_template("muestraCatVehiculos.html", titulo=titulo, vehiculos=vehiculos)

#-------------------------------------------------
#      Agregado para la edición y borrado de datos
#-------------------------------------------------
@app.route("/manejoDatos")
def manejoDatos():
    title = "Manejo de Datos"
    autos = todosLosAutos()
    return render_template("manejoDatos.html", title=title, autos=autos)

@app.route("/editar_auto/<int:id>")
def editar_prod(id):
    title = "Editar Auto"
    auto = obtener_auto_por_id(id)
    return render_template("editar_auto.html", title=title, auto=auto)

@app.route('/borrar_auto/<int:id>')
def delete_prod(id):
    eliminar_auto(id)
    return redirect("/")

@app.route("/update_auto", methods=['POST'])
def update_prod():
    id_edit = request.form['auto_id']
    marca_edit = request.form['auto_marca']
    modelo_edit = request.form['auto_modelo']
    precio_edit = request.form['auto_precio']
    detalle_edit = request.form['auto_detalle']
    tipo_edit = request.form['auto_tipo']
    kms_edit = request.form['auto_kms']
    anio_edit = request.form['auto_anio']
    actualizar_auto(id_edit, marca_edit, modelo_edit, precio_edit, detalle_edit, tipo_edit, kms_edit, anio_edit)
    return redirect("/manejoDatos")
