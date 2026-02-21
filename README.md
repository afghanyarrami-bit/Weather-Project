# 🌤 Weather App

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WeatherAPI](https://img.shields.io/badge/WeatherAPI-Live-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

**A simple weather app built with Vanilla JavaScript and WeatherAPI**

</div>

---

## 👤 About

A clean and simple **Weather App** built with pure HTML, CSS, and JavaScript — no frameworks used. The user types a city name, clicks Search, and the app fetches **real live weather data** from the [WeatherAPI.com](https://www.weatherapi.com/) and displays it on screen.

> ⚠️ **Note:** This project uses a **real API key** from WeatherAPI.com. Do NOT share your API key publicly on GitHub — store it safely in a `.env` file or remove it before pushing.

---

## ✨ Features

- 🔍 **City Search** — Type any city name and click Search
- 🌡 **Temperature** — Shows current temperature in °C
- 💧 **Humidity** — Displays humidity percentage
- 💨 **Wind Speed** — Shows wind speed in km/h
- 🌙 **Weather Icon** — Shows weather condition icon
- ☁️ **Condition Text** — Shows condition like "Clear", "Cloudy", etc.
- ⚠️ **Error Handling** — Shows message if city is not found or input is empty
- 🖼 **Sky Background** — Beautiful sky image as background

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling & layout |
| JavaScript (ES6+) | API fetch, DOM manipulation, logic |
| WeatherAPI.com | Live weather data source |

---

## 📁 Project Structure

```
weather-project/
│
├── 📁 Images/          # Background sky image
├── script.js           # All JavaScript logic & API call
├── style.css           # All styling
└── Weather.html        # Main HTML page
```

---

## ⚙️ Installation

No installation needed! This is a plain HTML/CSS/JS project.

**1. Clone the repository**

```bash
git clone https://github.com/afghanyarrami-bit/weather-project.git
```

**2. Open the project**

```bash
cd weather-project
```

**3. Open in browser**

Just double-click `Weather.html` or open it with **Live Server** in VS Code.

---

## 🔑 API Setup

This project uses **WeatherAPI.com** for live weather data.

**Step 1** — Go to [weatherapi.com](https://www.weatherapi.com/) and create a free account

**Step 2** — Copy your API key from the dashboard

**Step 3** — Replace the key in `script.js`:

```javascript
// script.js line 2
const apiKey = "YOUR_API_KEY_HERE";
```

> ⚠️ **Important:** Never push your real API key to GitHub! It is free to get a new one from WeatherAPI.com anytime.

---

## 🌍 How It Works

```
User types city name (e.g. "Zurich")
        ↓
Clicks Search button
        ↓
JavaScript calls WeatherAPI:
https://api.weatherapi.com/v1/current.json?key=...&q=Zurich
        ↓
API returns live weather data (JSON)
        ↓
App displays: Temperature, Humidity, Wind Speed, Condition
```

---

## 📸 Screenshot

> Add your screenshot here

```markdown
![Weather App Screenshot](<img width="2716" height="1387" alt="Image" src="https://github.com/user-attachments/assets/6219f1a0-e6c6-4ab4-a259-01606acd1814" />)
```

---

## 📬 Contact

**Ramin Afghanyar** — Junior Front-End Developer 🇨🇭 Switzerland

[![GitHub](https://img.shields.io/badge/GitHub-afghanyarrami--bit-black?style=flat&logo=github)](https://github.com/afghanyarrami-bit)
[![Email](https://img.shields.io/badge/Email-afghanyarrami@gmail.com-red?style=flat&logo=gmail)](mailto:afghanyarrami@gmail.com)

---

## 📄 License

MIT License © 2025 Ramin Afghanyar
