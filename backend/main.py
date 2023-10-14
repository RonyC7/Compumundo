from flask import Flask, jsonify, request
from data import *
import base64
from PIL import Image
from io import BytesIO
import os
from flask_cors import CORS 
import datetime


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
@app.route('/carrito/<id>', methods=['PUT', 'DELETE'])
def manejar_carrito(id=None):
    if request.method == 'GET':
        # request.remote_addr
        return jsonify([c for c in carritos if c['remote_addr'] == request.remote_addr])
    elif request.method == 'POST':
        carritos.append({
            'remote_addr': request.remote_addr,
            'id': request.get_json()['id'],
            'cantidad': request.get_json()['cantidad']
        })
        return jsonify({'message': 'ok'})
    elif request.method == 'PUT':
        for i in range(len(carritos)):
            if carritos[i]['id'] == request.id and carritos[i]['remote_addr'] == request.remote_addr:
                carritos[i]['cantidad'] = request.get_json()['cantidad']
        return jsonify({'message': 'ok'})
    elif request.method == 'DELETE':
        pos = [i for i in range(len(carritos)) if carritos[i]['id'] == request.id and carritos[i]['remote_addr']]
        carritos.pop(pos)
        return jsonify({'message': 'ok'})





@app.route('/productos', methods=['GET', 'POST'])
def manejar_productos():
    if request.method == 'GET':
        ret = productos[:]

        for i in range(len(ret)):
            ret[i]['img'] = imagen2base64(os.path.join(rutaimagenes, ret[i]['imgname']))

        return jsonify(ret)
    
    
@app.route('/pedido', methods=['POST'])
def manejar_pedido(id=None):
    if request.method == 'POST':
        for j in range(len(carritos)):
            for i in range(len(productos)):
                if request.remote_addr == carritos[j]['remote_addr']:
                    if carritos[j]['id'] == productos[i]['id']:
                        if productos[i]['cantidad'] >= carritos[j]['cantidad']:
                            productos[i]['cantidad'] -= carritos[j]['cantidad']
                        else:
                            raise ValueError()


        pedidos.append({
            'fecha': str(datetime.datetime.now()),
            'carrito': [l for l in carritos if l['remote_addr'] == request.remote_addr]
        })

        return jsonify({'message': 'ok'})


if __name__ == '__main__':
    app.run(debug=True)
