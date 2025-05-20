# 📝 Blog Post Website

This is a simple **Blog Post Website** built using Node.js, Express, MySQL, and EJS. Users can **sign up, log in, create blog posts, update them, and delete them** as needed.

## 🚀 Features

- User authentication (signup & login)
- Create, update, and delete blog posts
- Backend powered by **MySQL** and **Express.js**
- Frontend rendered with **EJS templates**

## ⚠️ Note on Database Design

In this project, each user currently has a **separate table** for their blog posts.  
While this approach works, a **better design** would have been to create a single `posts` table and differentiate users' posts using a `user_id` foreign key.  
This change was considered, but the current implementation was kept for continuity.

---

## 🛠️ Getting Started

To run this project locally:

### 1. Fork & Clone the Repository

```bash
git clone https://github.com/your-username/blog-post-website.git
cd blog-post-website
2. Install Node.js and NPM
If you don't already have them:

Download Node.js (includes npm)

3. Install Dependencies
bash
Copy
Edit
npm install
4. Set Up MySQL Database
Create a new MySQL database

Update your DB credentials in the index.js file (or wherever your connection is defined)

5. Run the Server
bash
Copy
Edit
node index.js
or for easier development with auto-reloading:

bash
Copy
Edit
npx nodemon index.js
📂 Folder Structure
csharp
Copy
Edit
├── views/          # EJS templates
├── public/         # Static assets (CSS, JS, images)
├── index.js        # Main server file
├── package.json
└── README.md
📌 Future Improvements
Use a single posts table with user_id as a foreign key

Add password hashing and session management

Implement input validation and sanitization

Add support for comments and likes

📧 Contact
For any suggestions or questions, feel free to reach out via GitHub issues or pull requests.

vbnet
Copy
Edit

You can personalize it by replacing `your-username` in the clone URL and adding your contact info or social media/GitHub links at the bottom if you'd like.

Let me know if you want badges, project screenshots, or a deployed link section too!
