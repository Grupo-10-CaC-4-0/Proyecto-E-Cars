import re

def validar_cantidad_caracteres(texto, min, max):
    return min <= len(texto) <= max

def validar_anio(anio):
    return anio.isdigit() and 1901 <= int(anio) <= 2024

def validar_numero_positivo(valor):
    return valor.isdigit() and int(valor) > 0

def validar_url_imagen(url):
    url_imagen_regex = re.compile(
        r'^(?:http|ftp)s?://'  
        r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|'  # dominio
        r'localhost|'
        r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|'
        r'\[?[A-F0-9]*:[A-F0-9:]+\]?)'
        r'(?::\d+)?'
        r'(?:/?|[/?]\S+)?'
        r'\.(?:jpg|jpeg|png|gif|bmp|tiff|webp)$',
        re.IGNORECASE
    )
    return re.match(url_imagen_regex, url) is not None

def validar_radio(valor):
    tipos_de_vehiculo = [
    "Hatchback",
    "Utilitario",
    "Electrico",
    "Sedán",
    "SUV",
    "Camioneta",
    "Cabriolet",
    "Van",
    "Compacto",
    "Pick Up",
    "Camión"]
    return valor in tipos_de_vehiculo

def validar_vehiculo(marca, modelo, anio, kms, precio, ruta_imagen, modelo_detalle, tipo_vehiculo):
    errores = []
    if not validar_cantidad_caracteres(marca, 1, 30):
        errores.append("La <strong>marca</strong> debe contener entre 1 y 30 caracteres.")
    if not validar_cantidad_caracteres(modelo, 1, 30):
        errores.append("El <strong>modelo</strong> debe contener entre 1 y 30 caracteres.")
    if not validar_anio(anio):
        errores.append("Debe ingresar un <strong>año entre 1901 y 2024</strong>.")
    if not validar_numero_positivo(kms):
        errores.append("Debe ingresar un número válido para los <strong>kilómetros</strong>.")
    if not validar_numero_positivo(precio):
        errores.append("Debe ingresar un número válido para el <strong>precio</strong>.")
    if not validar_url_imagen(ruta_imagen):
        errores.append("Debe ingresar una <strong>URL válida</strong> para la imagen.")
    if not validar_cantidad_caracteres(modelo_detalle, 0, 500):
        errores.append("El <strong>detalle del modelo</strong> debe contener entre 0 y 500 caracteres.")
    if not validar_radio(tipo_vehiculo):
        errores.append("Debe seleccionar un <strong>tipo de vehículo</strong>.")
    return errores

