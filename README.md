# Respira Frontend

AI-powered respiratory disease detection interface built using React.

---

## Overview

Respira is an AI-driven respiratory disorder detection system that analyzes lung sound recordings using a CRNN (Convolutional Recurrent Neural Network) model. The frontend provides an intuitive interface for doctors and patients to upload lung sound recordings, view prediction results, manage patient records, and monitor respiratory health.

The system supports diseases such as:

- Asthma
- COPD
- Pneumonia
- Healthy respiratory conditions

The frontend communicates with a Flask backend that performs preprocessing, Mel Spectrogram generation, and CRNN-based classification.

---

## Features

- Doctor and Patient authentication
- Interactive dashboards
- Lung sound upload interface
- AI-powered disease prediction display
- Confidence score visualization
- Patient management system
- Prescription and medication logs
- Responsive UI
- Real-time prediction workflow

---

## Tech Stack

### Frontend
- React
- JavaScript 
- Axios

### Backend
- Flask
- PyTorch
- Librosa

### AI Model
- CRNN (CNN + LSTM)

### Hardware Integration
- Arduino UNO
- MAX4466 Microphone Amplifier

---

## Project Architecture

```text
Frontend (React)
        ↓
Flask API
        ↓
Audio Preprocessing
        ↓
Mel Spectrogram Generation
        ↓
CRNN Model Prediction
        ↓
Prediction Results + Confidence Scores
```

---

## Installation

### Clone Repository

```bash
git clone <your-repository-link>
cd respira-frontend
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

or

```bash
npm start
```

---

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

---

## Folder Structure

```text
src/
│
├── components/
├── pages/
├── services/
├── assets/
├── routes/
├── hooks/
├── context/
└── utils/
```

---

## System Workflow

1. User uploads lung sound recording
2. Audio sent to Flask backend
3. Backend preprocesses audio using Librosa
4. Mel Spectrogram generated
5. CRNN model predicts disease
6. Prediction returned to frontend
7. Results displayed with confidence score

---

## Datasets Used

- ICBHI Respiratory Sound Database
- Kaggle Respiratory Sound Dataset

---

## Software Interfaces

- Landing Page
- Doctor Dashboard
- Patient Dashboard
- Upload Interface
- Disease Prediction Result Page
- Medication Logs
---


