from db import conectarMySQL


# Read -> SELECT
def mostrarTipos(tipo):
    # conexion mysql
    conexion = conectarMySQL()
    productos = []
    with conexion.cursor() as cursor:
        # Create a new record
        sql = """SELECT * FROM tabla_autos WHERE tipo=%s ORDER BY id"""
        cursor.execute(sql,(tipo))
        productos = cursor.fetchall()
        conexion.commit()
        conexion.close()
        return productos
