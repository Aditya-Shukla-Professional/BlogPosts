📝 Blog Post Website
====================

This is a simple **Blog Post Website** built using Node.js, Express, MySQL, and EJS. Users can **sign up, log in, create blog posts, update them, and delete them** as needed.

* * *

🚀 Features
-----------

*   User authentication (signup & login)
*   Create, update, and delete blog posts
*   Backend powered by **MySQL** and **Express.js**
*   Frontend rendered with **EJS templates**

⚠️ Note on Database Design
--------------------------

In this project, each user currently has a **separate table** for their blog posts. While this approach works, a **better design** would have been to create a single `posts` table and differentiate users' posts using a `user_id` foreign key. This change was considered, but the current implementation was kept for continuity.

* * *

🛠️ Getting Started
-------------------

To run this project locally:

**📢 Important:** This is a _student project_ hosted using free-tier services:

*   📦 Database: [FreeSQLDatabase.com](https://www.freesqldatabase.com)
*   🌐 Server Hosting: [Render.com](https://www.render.com)

Due to the nature of free hosting, the live demo links may not always work or could take a few moments to wake up.

  

1.  **Fork & Clone the Repository**
    
        git clone https://github.com/Aditya-Shukla-Professional/BlogPosts.git
        cd BlogPosts
    
2.  **Install Node.js and NPM**  
    If you don't already have them: [Download Node.js (includes npm)](https://nodejs.org/en/download)
3.  **Install Dependencies**
    
        npm install
    
4.  **Set Up MySQL Database**
    *   Create a new MySQL database
    *   Update your DB credentials in the `index.js` file
5.  **Run the Server**
    
        node index.js
    
    Or for easier development with auto-reloading:
    
        npx nodemon index.js
    

* * *

📂 Folder Structure
-------------------

├── views/          # EJS templates
├── public/         # Static assets (CSS, JS, images)
├── index.js        # Main server file
├── package.json
└── README.md
  

📌 Future Improvements
----------------------

*   Use a single posts table with `user_id` as a foreign key
*   Add password hashing and session management
*   Implement input validation and sanitization
*   Add support for comments and likes
*   Add encryption for sensitive data such as passwords and user IDs — currently there is no encryption applied, which is a security risk.

📧 Contact
----------

For any suggestions or questions, feel free to reach out via [GitHub issues](https://github.com/Aditya-Shukla-Professional/BlogPosts/issues) or submit a pull request.

* * *

### Connect with me:

<p align="left">
<a href="https://www.linkedin.com/in/aditya-shukla-8b3494341/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="aditya shukla" height="30" width="40" /></a>
</p>
