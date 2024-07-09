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
    
    
