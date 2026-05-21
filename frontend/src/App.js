import React, { useState } from "react";
import axios from "axios";

function App() {

  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("fantasy");

  const examples = [
    "dragon castle",
    "future city",
    "robot warrior",
    "beautiful waterfall",
    "cyberpunk street"
  ];

  const generatePrompt = async () => {

    const cleanedPrompt = prompt.trim();

    const validPattern = /^[a-zA-Z0-9\s]+$/;

    if (
      cleanedPrompt === "" ||
      cleanedPrompt.length < 3 ||
      !validPattern.test(cleanedPrompt)
    ) {

      alert("Please enter valid words only");

      return;
    }

    setLoading(true);

    setResults([]);

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/generate",
        {
          prompt: cleanedPrompt,
          style: style
        }
      );

      setResults(response.data.results);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }

    setLoading(false);
  };

  const copyPrompt = (text) => {

    navigator.clipboard.writeText(text);

    alert("Prompt copied!");
  };

  const randomExample = () => {

    const random =
      examples[Math.floor(Math.random() * examples.length)];

    setPrompt(random);
  };

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f4f7fb",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <div style={{
        maxWidth: "900px",
        margin: "auto"
      }}>

        <h1 style={{
          textAlign: "center",
          color: "#222"
        }}>
          ✨ AI Prompt Enhancer
        </h1>

        <p style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px"
        }}>
          Transform simple ideas into professional AI image prompts
        </p>

        <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}>

          <input
            type="text"
            placeholder="Enter your image idea..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
              minWidth: "250px"
            }}
          />

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          >

            <option value="fantasy">Fantasy</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="realistic">Realistic</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>

          </select>

          <button
            onClick={generatePrompt}
            style={{
              padding: "15px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#4f46e5",
              color: "white",
              cursor: "pointer"
            }}
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            onClick={randomExample}
            style={{
              padding: "15px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#10b981",
              color: "white",
              cursor: "pointer"
            }}
          >
            Try Example
          </button>

        </div>

        {results.map((item, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              marginBottom: "25px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>

              <h2 style={{
                color: "#4f46e5"
              }}>
                Prompt {index + 1}
              </h2>

              <span style={{
                background: "#e0e7ff",
                color: "#4338ca",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "14px"
              }}>
                {style}
              </span>

            </div>

            <p style={{
              lineHeight: "1.8",
              color: "#333"
            }}>
              {item.prompt}
            </p>

            <button
              onClick={() => copyPrompt(item.prompt)}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "8px",
                background: "#10b981",
                color: "white",
                cursor: "pointer"
              }}
            >
              Copy Prompt
            </button>

            <h3 style={{
              marginTop: "20px",
              color: "#222"
            }}>
              Reasoning
            </h3>

            <p style={{
              color: "#666"
            }}>
              {item.reasoning}
            </p>

          </div>

        ))}

        <p style={{
          textAlign: "center",
          color: "#888",
          marginTop: "40px"
        }}>
          Built using React, Flask, Logistic Regression and NLP
        </p>

      </div>

    </div>
  );
}

export default App;