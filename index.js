const express = require('express');
const application = express();
const port = process.env.PORT || 5000;

application.set('view engine', 'ejs');
application.use(express.static('views/css'));

application.get('/', (req, res) => res.render('dashboard'));
application.get('/g', (req, res) => res.render('g'));
application.get('/g2', (req, res) => res.render('g2'));
application.get('/dashboard', (req, res) => res.render('dashboard'));
application.get('/login', (req, res) => res.render('login'));

application.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});