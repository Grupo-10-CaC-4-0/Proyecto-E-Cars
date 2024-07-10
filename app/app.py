from flask import Flask, render_template
from datetime import date, datetime
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

# @app.route('/catalogoUsados')
# def catalogoUsados():
    # titulo = "E-Cars - Catalogo Usados"
    # return render_template("catalogoUsados.html", titulo=titulo)


@app.route('/catalogoUsados/<tipo>')
def catalogoUsados(tipo):
    prod = mostrarTipos(tipo)
    return render_template("catalogoUsados.html", productos=prod)
    # return render_template("catalogoUsados.html", title=basicInfo(tipo),  productos=prod)


#Muestra la pagina de Contacto
@app.route("/contacto")
def pag_contacto():
    titulo="E-Cars - Contacto"
    return render_template("contacto.html",titulo=titulo)


@app.route("/catalogoedicion")
def catalogoedicion():
    titulo="E-Cars - Catalogo Edición"
    return render_template("catalogoedicion.html",titulo=titulo)