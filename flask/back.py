from flask import Flask, jsonify, request
from flask_cors import CORS
from ml import calc


app = Flask(__name__)
CORS(app)

@app.route('/post', methods=['POST'])
def post_example():
    data = request.json
    msg=data.get('input_data')
    res=calc(msg)
    print(res)
    return (res)

if __name__ == '__main__':
    app.run(debug=True)
