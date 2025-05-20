<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Post Website</title>
</head>
<body>

  <h1>📝 Blog Post Website</h1>

  <p>This is a simple <strong>Blog Post Website</strong> built using Node.js, Express, MySQL, and EJS. Users can 
  <strong>sign up, log in, create blog posts, update them, and delete them</strong> as needed.</p>

  <hr>

  <h2 id="features">🚀 Features</h2>
  <ul>
    <li>User authentication (signup & login)</li>
    <li>Create, update, and delete blog posts</li>
    <li>Backend powered by <strong>MySQL</strong> and <strong>Express.js</strong></li>
    <li>Frontend rendered with <strong>EJS templates</strong></li>
  </ul>

  <h2 id="database-design">⚠️ Note on Database Design</h2>
  <p>In this project, each user currently has a <strong>separate table</strong> for their blog posts. 
  While this approach works, a <strong>better design</strong> would have been to create a single <code>posts</code> table and differentiate users' posts using a <code>user_id</code> foreign key.
  This change was considered, but the current implementation was kept for continuity.</p>

  <hr>

  <h2 id="getting-started">🛠️ Getting Started</h2>
  <p>To run this project locally:</p>

  <ol>
    <li><strong>Fork & Clone the Repository</strong>
      <pre><code>git clone https://github.com/your-username/blog-post-website.git
cd blog-post-website</code></pre>
    </li>

    <li><strong>Install Node.js and NPM</strong><br>
    If you don't already have them: <a href="https://nodejs.org/en/download" target="_blank">Download Node.js (includes npm)</a></li>

    <li><strong>Install Dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>

    <li><strong>Set Up MySQL Database</strong>
      <ul>
        <li>Create a new MySQL database</li>
        <li>Update your DB credentials in the <code>index.js</code> file (or wherever your connection is defined)</li>
      </ul>
    </li>

    <li><strong>Run the Server</strong>
      <pre><code>node index.js</code></pre>
      Or for easier development with auto-reloading:
      <pre><code>npx nodemon index.js</code></pre>
    </li>
  </ol>

  <hr>

  <h2 id="structure">📂 Folder Structure</h2>
  <pre>
├── views/          # EJS templates
├── public/         # Static assets (CSS, JS, images)
├── index.js        # Main server file
├── package.json
└── README.md
  </pre>

  <h2 id="future">📌 Future Improvements</h2>
  <ul>
    <li>Use a single posts table with <code>user_id</code> as a foreign key</li>
    <li>Add password hashing and session management</li>
    <li>Implement input validation and sanitization</li>
    <li>Add support for comments and likes</li>
  </ul>

  <h2 id="contact">📧 Contact</h2>
  <p>For any suggestions or questions, feel free to reach out via 
  <a href="https://github.com/your-username/blog-post-website/issues" target="_blank">GitHub issues</a> or submit a pull request.</p>

  <hr>

  <h3>🔗 Optional Enhancements</h3>
  <ul>
    <li>Add project badges using <a href="https://shields.io" target="_blank">shields.io</a></li>
    <li>Include screenshots or demo video</li>
    <li>Add a <a href="#live-demo">Live Demo</a> section if deployed</li>
    <li>Link your social media or portfolio</li>
  </ul>

  <details>
    <summary><strong>🔍 Click to view a Markdown version</strong></summary>
    <pre>
# 📝 Blog Post Website

This is a simple **Blog Post Website** built using Node.js, Express, MySQL, and EJS...
<!-- truncated for brevity -->
    </pre>
  </details>

</body>
</html>
