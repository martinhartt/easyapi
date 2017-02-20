from flask import Flask, request, jsonify
app = Flask(__name__)
from spacyparse import parse

@app.route("/")
def index():
    return "Hello World!"

@app.route("/parse", methods=['POST'])
def dependency():
    text = request.form.get('text')

    print(text)
    result = parse(text)

    return jsonify(data=result)

if __name__ == "__main__":
    app.run()
