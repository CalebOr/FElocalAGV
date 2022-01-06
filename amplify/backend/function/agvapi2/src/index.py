import json
import awsgi
import boto3
from flask_cors import CORS
import json
app = Flask(__name__)
client = boto3.client('cognito-idp')
BASE_ROUTE = '/agv'
CORS(app)

USER_POOL_ID = 'us-east-1_bjE8BO0XB'

@app.route(BASE_ROUTE, methods=['POST'])
def create_user():
    print('Entrando a metodo post')
    request_json = request.get_json()
    print(request_json)
    if request_json['action'] == 'agv':
        print('Hola Estoy en agv')
        return jsonify({'status': 200, 'message': 'Cmon I am here'})
    else:
        return jsonify({'status': 400, 'message': 'Funcion no encontrada'})
    



@app.route(BASE_ROUTE, methods=['GET'])
def list_users():
    print('Entrando a metodo get')
    return jsonify(message="Method GET response")

@app.route(BASE_ROUTE + '/<user_id>', methods=['GET'])
def get_user(user_id):
    print('Getting user data: ', user_id)
    return jsonify(message="Method GET response" + user_id)
@app.route(BASE_ROUTE , methods=['DELETE'])
def delete_user():
    print('Eliminando usuario: ')
    request_json = request.get_json()
    print(request_json)
    return jsonify(message="User deleted")
@app.route(BASE_ROUTE, methods=['PUT'])
def update_user():
    print('Actualizando user:')
    request_json = request.get_json()
    print(request_json)
    return jsonify(message="User updated")
def handler(event, context):
    print(event, context)
    return awsgi.response(app, event, context)