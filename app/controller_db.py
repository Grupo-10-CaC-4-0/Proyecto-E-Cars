from db import conectarMySQL

# Read -> SELECT
def mostrarTipos(tipo):
    # conexion mysql
    conexion = conectarMySQL()
    productos = []
    with conexion.cursor() as cursor:
        # Create a new record
        sql = """SELECT * FROM autos_usados WHERE tipo=%s ORDER BY id"""
        cursor.execute(sql,(tipo))
        productos = cursor.fetchall()
        conexion.commit()
        conexion.close()
        return productos
# Create -> INSERT
def cargar_nuevo_vehiculo(tipo,ruta_imagen, imagen_alt ,precio, modelo, marca, kms, modelo_detalle,anio):
    conexion = conectarMySQL()

    with conexion.cursor() as cursor:
        query = """
        INSERT INTO autos_usados (tipo,rutaImagen, imagenAlt ,precio, modelo, marca, kms, modelo_detalle,año) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query,(tipo,ruta_imagen, imagen_alt ,precio, modelo, marca, kms, modelo_detalle,anio))
        resultado = cursor
        conexion.commit()
        conexion.close()
        return resultado

# Read -> SELECT
def obtener_vehiculos():
    # Conexión MySQL
    conexion = conectarMySQL()
    vehiculos = []
    with conexion.cursor() as cursor:
        query = """SELECT * FROM autos_usados"""
        cursor.execute(query)
        vehiculos = cursor.fetchall()
        conexion.commit()
        conexion.close()
        return vehiculos
        
#---------------------------------------------------------
#	Agregado para mostrar todos los vehiculos de la bd
#       Se puede editar o borrar cada uno (elegido)
#---------------------------------------------------------
# - Muestro todos los vehiculos de la base
def todosLosAutos():
    conexion = conectarMySQL()
    autos = []
    with conexion.cursor() as cursor:
        sql = """SELECT * FROM autos_usados ORDER By marca"""
        cursor.execute(sql)
        autos = cursor.fetchall()
        conexion.commit()
        conexion.close()
        return autos

# 1) Obtrner el auto a Editar    
def obtener_auto_por_id(id):
    conexion = conectarMySQL()
    auto = None
    with conexion.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM autos_usados WHERE id = %s", (id,))
        auto = cursor.fetchone()
    conexion.close()
    return auto

# 2) realizar el Update en MySQL
def actualizar_auto(id, marca, modelo, precio, modelo_detalle, tipo, kms, año):
    conexion = conectarMySQL()
    with conexion.cursor() as cursor:
        cursor.execute("UPDATE autos_usados SET marca=%s, modelo=%s, precio=%s, modelo_detalle=%s, tipo=%s, kms=%s, año=%s WHERE id = %s",(marca, modelo, precio, modelo_detalle, tipo, kms, año, id))
        auto = cursor
    conexion.commit()
    conexion.close()
    return auto

# Delete
def eliminar_auto(id):
    conexion = conectarMySQL()
    with conexion.cursor() as cursor:
        cursor.execute("DELETE FROM autos_usados WHERE id = %s", (id))
        result = cursor
    conexion.commit()
    conexion.close()
    return result
    
