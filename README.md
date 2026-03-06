# Gidy Profile Page – Frontend

This is the frontend implementation of the Gidy Profile Page technical assessment.

The application displays a user's profile and allows editing profile details, managing skills, education, and certifications.

---

## Live Demo

Frontend URL:
https://gidy-assignment-frontend.vercel.app

Backend API:
https://gidy-assignment-backend.onrender.com

---

## Tech Stack

- React
- Vite
- Axios
- CSS
- Component Based Architecture

---

## Features

- View profile information
- Edit profile bio
- Add/Edit skills
- Endorse skills
- Add education
- Add certifications
- Dynamic UI updates using API

---

## Project Structure

```
src
│
├── components
│   ├── AddSkillsModal.jsx
│   ├── AddEducationModal.jsx
│   ├── EditBioModal.jsx
│
├── pages
│   └── ProfilePage.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```


## Innovation Feature

An additional **Skill Endorsement feature** was implemented to enhance the interactivity of the profile.

Users can endorse skills on the profile, which increases the endorsement count dynamically. The frontend communicates with the backend API to update the endorsement count and refresh the UI.

This feature demonstrates:

- Real-time UI updates
- API interaction using Axios
- Component-based architecture in React
- State management for updating skill endorsements


Another innovation implemented in this project is a **centralized API service layer**.
Instead of calling APIs directly inside components, a dedicated `api.js` service was created to manage all API requests using Axios.

Benefits of this approach:

- Improves code maintainability
- Makes API calls reusable across components
- Keeps UI components clean and focused on presentation
- Makes it easier to scale the application if new APIs are added

Example:

```javascript
const API = axios.create({
  baseURL: "https://gidy-assignment-backend.onrender.com/api"
});


---

## API Integration

All API calls are handled through Axios.

Example:

```javascript
const API = axios.create({
  baseURL: "https://gidy-assignment-backend.onrender.com/api",
});
```

Endpoints used:

```
GET /api/profile
PUT /api/profile
POST /api/skills/:skillId/endorse
```

---

## Running Locally

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Application will run on:

```
http://localhost:5173
```

---

## Deployment

Frontend is deployed on **Vercel**.

Deployment URL:

https://gidy-assignment-frontend.vercel.app

---

## Author

Oshin Lilani  
GitHub: https://github.com/Oshinlilani
