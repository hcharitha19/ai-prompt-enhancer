
# ✨ AI Prompt Enhancer

AI Prompt Enhancer is a full-stack machine learning project that transforms simple user prompts into detailed cinematic prompts for AI image generation tools like Midjourney, DALL-E and Stable Diffusion.

The project uses a Logistic Regression machine learning model to classify prompt styles and dynamically generates rich AI-art prompts using cinematic lighting, moods, camera angles, and artistic compositions.

---

# 🚀 Features

- Convert simple prompts into professional AI prompts
- Generate 3 unique enhanced prompts
- Dynamic cinematic styles
- Lighting, mood, and camera enhancement
- Style selection dropdown
- Input validation
- Copy prompt feature
- Responsive React frontend
- Flask backend API
- Machine learning integration
- Real-time prompt generation

---

# 🛠️ Technologies Used

## Frontend
- React.js
- Axios
- CSS

## Backend
- Flask
- Flask-CORS
- Python

## Machine Learning
- Scikit-learn
- Logistic Regression
- NLP Vectorization
- Joblib

---

# 📂 Project Structure

```text
ai-prompt-enhancer
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── app.py
├── generator.py
├── train_model.py
├── dataset.csv
├── model.pkl
├── requirements.txt
└── README.md
```

---

# ⚙️ Installation Steps

## 1️⃣ Clone Repository

```bash
git clone https://github.com/hcharitha19/ai-prompt-enhancer.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd ai-prompt-enhancer
```

---

## 3️⃣ Install Backend Dependencies

```bash
pip install flask flask-cors scikit-learn pandas joblib
```

---

## 4️⃣ Run Backend Server

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

## 5️⃣ Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 💡 Example Input

```text
robot 2077
```

---

# ✨ Example Output

```text
A cinematic depiction of robot 2077,
featuring futuristic environment,
with volumetric lighting,
captured in a cinematic composition,
creating vibrant futuristic energy.
The scene includes ultra realistic textures,
highly detailed environment elements,
professional color grading,
depth of field effects,
cinematic shadows,
sharp focus,
8k ultra HD quality,
professional digital art style,
highly immersive composition,
concept art quality rendering.
```

---

# 🔥 How It Works

1. User enters a simple prompt
2. Frontend sends request to Flask API
3. Logistic Regression model predicts prompt category
4. Backend dynamically generates cinematic prompt variations
5. Enhanced prompts are displayed in UI

---

# 🎯 Use Cases

- AI artists
- Graphic designers
- Prompt engineers
- Content creators
- Game designers
- Beginners learning prompt engineering

---

# 🛡️ Validation Features

The application handles:
- Empty input validation
- Special character validation
- Invalid prompt handling
- User-friendly error messages

---

# 📈 Future Improvements

- Hugging Face transformer integration
- Local LLM integration
- AI image generation support
- Prompt history
- User authentication
- Dark mode UI
- Advanced NLP enhancement

---

# 👩‍💻 Author

Charitha

---

# ⭐ Project Highlights

✅ Full-stack project  
✅ Machine learning integration  
✅ React frontend  
✅ Flask backend  
✅ Dynamic AI prompt generation  
✅ Beginner-friendly AI project  
✅ Professional UI/UX
````
