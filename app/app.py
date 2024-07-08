from flask import Flask, render_template

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
def pag_contacto():
    titulo="E-Cars - Contacto"
    return render_template("contacto.html",titulo=titulo)