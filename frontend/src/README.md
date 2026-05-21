# ✨ AI Prompt Enhancer

AI Prompt Enhancer is a full-stack machine learning project that transforms simple user prompts into detailed cinematic prompts for AI image generation tools like Midjourney, DALL-E, and Stable Diffusion.

---

## 🚀 Features

- Convert simple prompts into professional AI prompts
- Generate 3 different enhanced prompts
- Dynamic cinematic styles
- Lighting, mood, camera angle enhancement
- Style selection dropdown
- Input validation
- Copy prompt feature
- Responsive React frontend
- Flask backend API
- Logistic Regression model integration

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Flask
- Flask-CORS
- Python

### Machine Learning
- Scikit-learn
- Logistic Regression
- NLP basics

---

## 📂 Project Structure

```text
ai-prompt-enhancer
│
├── frontend/
├── app.py
├── generator.py
├── train_model.py
├── dataset.csv
├── model.pkl
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation Steps

### 1️⃣ Clone Repository

```bash
git clone https://github.com/hcharitha19/ai-prompt-enhancer.git
```

### 2️⃣ Install Backend Dependencies

```bash
pip install flask flask-cors scikit-learn pandas joblib
```

### 3️⃣ Run Backend

```bash
python app.py
```

### 4️⃣ Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 💡 Example Input

```text
robot 2077
```

---

## ✨ Example Output

```text
A cinematic depiction of robot 2077,
featuring futuristic environment,
with volumetric lighting,
captured in a cinematic composition,
creating vibrant futuristic energy.
```

---

## 🎯 Future Improvements

- Hugging Face transformer integration
- Local LLM support
- Image generation integration
- User authentication
- Prompt history
- Dark mode UI

---

## 👩‍💻 Author

Charitha