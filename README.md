# 📝 React Feedback Form

A sleek and responsive feedback/comment form built using React and Formik. Users can submit their feedback with a name, remarks, and a rating. Submitted comments appear immediately, and all inputs are validated before submission.

---

## ✨ Features

- 💬 Live comment submission
- ✅ Form validation using Formik
- 🌟 Rating system (1–5)
- 💅 Clean, centered form design
- 📱 Fully responsive layout
- 🎨 Styled with custom CSS

---

## 📸 Screenshot

![Feedback Form Screenshot](./screenshot.png)



---

## 🚀 Demo

🔗 [Live Demo on GitHub Pages] (https://prasad-hg.github.io/react-feedback-form/)


---

## 🛠️ Technologies Used

- React
- Vite (or Create React App)
- Formik
- HTML5 + CSS3

---

## 🧠 How It Works

- The form has three fields: **username**, **remarks**, and **rating**
- All fields are **required**, validated via Formik
- On submit:
  - Data is added to the comment list dynamically
  - Form is reset
- Comments appear styled in a green-bordered box

---

## 🧑‍💻 Getting Started Locally

```bash
git clone https://github.com/your-username/react-feedback-form.git
cd react-feedback-form
npm install
npm run dev   # if Vite

🗂️ Folder Structure

/src
  ├── Comment.jsx
  ├── commentForm.jsx
  ├── Comment.css
/public
  ├── screenshot.png