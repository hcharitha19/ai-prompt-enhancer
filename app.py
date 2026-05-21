from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

from generator import generate_prompt

app = Flask(__name__)
CORS(app)

model = joblib.load("model.pkl")


@app.route("/")
def home():
    return "AI Prompt Enhancer Backend Running Successfully"


@app.route("/generate", methods=["POST"])
def generate():

    data = request.json

    user_prompt = data["prompt"]
    style = data["style"]

    category = model.predict([user_prompt])[0]

    prompts = []

    for i in range(3):

        enhanced_prompt = generate_prompt(
            user_prompt,
            style
        )

        prompts.append(enhanced_prompt
          )

    return jsonify({
        "category": category,
        "results": prompts
    })


if __name__ == "__main__":
    app.run(debug=True)