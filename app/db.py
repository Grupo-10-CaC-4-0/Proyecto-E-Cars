import pymysql

def conectarMySQL():
    host="localhost"
    user="root"
    # clave=""
    clave="admin1234"
    db="vehiculos"
    return pymysql.connect(host=host,user=user,password=clave,database=db)