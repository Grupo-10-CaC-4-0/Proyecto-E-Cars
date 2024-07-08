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
def cargar_nuevo_vehiculo(tipo,precio, modelo, marca, kms, modelo_detalle,anio):
    conexion = conectarMySQL()
    with conexion.cursor() as cursor:
        query = """
        INSERT INTO autos_usados (tipo,precio, modelo, marca, kms, modelo_detalle,anio) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query,(tipo,precio, modelo, marca, kms, modelo_detalle,anio))
        resultado = cursor
        conexion.commit()
        conexion.close()
        return resultado
    
