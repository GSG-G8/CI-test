/* We split the server out into a different file so that our tests don't hang
because the server is listening still */
const app = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
