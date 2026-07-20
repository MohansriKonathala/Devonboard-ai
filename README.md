# 🍃 FoodFlow AI

> An AI-powered food waste reduction platform that helps users make smarter decisions about surplus food through intelligent recommendations, recipe suggestions, donation guidance, and environmental impact insights.

---

## 📖 Overview

FoodFlow AI is a web application built to address one of the world's biggest sustainability challenges—**food waste**.

Instead of letting edible food go to waste, FoodFlow AI uses Artificial Intelligence to analyze the user's food description and provides practical recommendations to maximize food utilization.

The platform helps users:

- 🍽️ Reduce food waste
- 🧑‍🍳 Discover recipe ideas
- 🤝 Donate excess food
- 🌍 Understand environmental impact
- 📊 Track sustainability metrics

---

## ✨ Features

### 🧠 AI Food Analysis

Users can enter a description of available food, and FoodFlow AI analyzes it to provide:

- Waste Risk Assessment
- Estimated Shelf Life
- Best Recommended Action
- Recipe Suggestions
- Donation Advice
- Environmental Impact

---

### 🍳 Smart Recipe Suggestions

Instead of throwing away food, the AI recommends recipes that can be prepared using the available ingredients.

---

### 🤝 Food Donation Guidance

FoodFlow AI encourages food donation by suggesting donation as an alternative whenever appropriate.

The current version includes a mock NGO tracking interface to demonstrate the future workflow.

---

### 🌍 Environmental Impact Dashboard

The application visualizes how food-saving decisions contribute toward sustainability.

It includes:

- Meals Saved
- CO₂ Reduction
- Waste Reduction Score

---

### 📈 Interactive Dashboard

The platform provides an engaging user experience with:

- Animated statistics
- Modern glassmorphism UI
- AI recommendation cards
- Interactive action modal
- Loading animations

---

## 🛠 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI

- Google Gemini API

### UI

- Lucide React Icons
- Framer Motion

---

## 📂 Project Structure

```
foodflow-ai/
│
├── app/
│   ├── api/
│   │   └── foodflow/
│   │       └── route.ts
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── ai/
│   │   ├── AIInput.tsx
│   │   ├── AskFoodFlowAI.tsx
│   │   ├── ActionModal.tsx
│   │   ├── RecommendationCards.tsx
│   │   ├── ImpactCards.tsx
│   │   ├── NGOTrackingModal.tsx
│   │   └── ThinkingLoader.tsx
│   │
│   └── ...
│
├── public/
├── styles/
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/foodflow-ai.git
```

### 2. Navigate to the Project

```bash
cd foodflow-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a file named:

```
.env.local
```

Add your Gemini API Key:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

### 5. Run the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🚀 How It Works

### Step 1

User enters a food description.

Example:

```
I have cooked rice, tomatoes and carrots.
```

---

### Step 2

The request is sent to the Gemini API.

---

### Step 3

Gemini analyzes the food and returns:

- Waste Risk
- Shelf Life
- Best Action
- Recipes
- Donation Advice
- Environmental Impact

---

### Step 4

FoodFlow AI converts the response into interactive cards and dashboards for the user.

---

## 🌍 Future Scope

FoodFlow AI is designed to grow into a complete food sustainability platform.

Future enhancements include:

- 📷 Image-based food recognition
- 🎤 Voice input
- 📍 Nearby NGO integration
- 🗺️ Live donation tracking
- 🛒 Grocery inventory management
- 📅 Expiry reminders
- 👨‍👩‍👧 Household food management
- 📊 Community sustainability analytics
- 🏪 Restaurant and supermarket integration
- 📱 Mobile application

---

## 🎯 Problem Statement

Globally, millions of tons of edible food are wasted every year while many people continue to face food insecurity.

FoodFlow AI aims to bridge this gap by helping individuals make informed decisions about surplus food using Artificial Intelligence.

---

## 💡 Solution

FoodFlow AI combines AI-powered analysis with sustainability-focused recommendations to encourage:

- Better food utilization
- Smarter cooking
- Responsible donations
- Reduced environmental impact

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is created for educational and hackathon purposes.

Feel free to explore, learn from, and improve the project.

---

## 👨‍💻 Author

**Mohansri K**

B.Tech Computer Science Engineering

Passionate about AI, Full Stack Development, and building technology for social impact.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

### "Reducing food waste, one smart decision at a time." 🌱
