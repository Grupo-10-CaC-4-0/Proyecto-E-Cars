import pymysql

def conectarMySQL():
    host="localhost"
    user="root"
    clave="root"
    db="vehiculos"
    return pymysql.connect(host=host,user=user,password=clave,database=db)