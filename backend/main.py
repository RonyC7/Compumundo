from flask import Flask, jsonify, request
from data import *
import base64
from PIL import Image
from io import BytesIO
import os
from flask_cors import CORS 


app = Flask(__name__)
CORS(app)


rutaimagenes = os.path.join(os.getcwd(), 'images')
#  './images/'

def imagen2base64(ruta_imagen:str):
    with open(ruta_imagen, 'rb') as imagen_archivo:
        imagen_binaria = imagen_archivo.read()
        imagen_codificada = base64.b64encode(imagen_binaria).decode('utf-8')
    return imagen_codificada


def guardar_imagen_desde_base64(base64_string, ruta_destino):
    imagen_binaria = base64.b64decode(base64_string)
    imagen = Image.open(BytesIO(imagen_binaria))
    extension = imagen.format.lower()
    ruta_destino_con_extension = f"{ruta_destino}.{extension}"
    imagen.save(ruta_destino_con_extension)
    return ruta_destino_con_extension


@app.route('/carrito', methods=['GET', 'POST'])
def manejar_carrito():
    if request.mathod == 'GET':
        # request.remote_addr
        return jsonify([c for c in carritos if c['remote_addr'] == request.remote_addr][0])
    elif request.method == 'POST':
        carritos.append({
            'remote_addr': request.remote_addr,
            'id': request.get_json()['productid'],
            'cantidad': 'a'
        })
        return jsonify({'message': 'ok'})


@app.route('/productos', methods=['GET', 'POST'])
def manejar_productos():
    if request.method == 'GET':
        ret = productos[:]

        for i in range(len(ret)):
            ret[i]['img'] = imagen2base64(os.path.join(rutaimagenes, ret[i]['imgname']))

        return jsonify(ret)
    # elif request.method == 'POST':
    #     # {
    #     #     "title": "Lenovo Yoga",
    #     #     "price": 5000,
    #     #     "category": "Laptops",
    #     #     "cantidad": 22,
    #     #     'img': 'aduahdiuwhdiuawbadwc8yuhb3q'
    #     # }

    #     data = request.get_json()
    #     data['imgname'] = guardar_imagen_desde_base64(data['img'], ruta_destino=rutaimagenes + '')

    #     productos.append({

    #     })

    #     productos.append(request.get_json())
    #     return jsonify({'message': 'producto agregado con éxito'})


if __name__ == '__main__':
    app.run(debug=True)
