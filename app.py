from flask import Flask, render_template, request, jsonify, send_file
from flask_cors import CORS  # Import CORS from flask_cors
import requests
import io
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud"
HEADERS = {
    "Accept": "image/png",
    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
    "Content-Type": "application/json",
}

def download_image(payload):
    response = requests.post(API_URL, headers=HEADERS, json=payload)
    image_bytes = response.content
    return image_bytes

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate_comic", methods=["POST"])
def generate_comic():
    try:
        text_input = request.json["text_input"]
        payload = {"inputs": text_input}
        image_bytes = download_image(payload)
        return send_file(io.BytesIO(image_bytes), mimetype='image/png')
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
