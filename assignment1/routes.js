function createHtml(res, title, writeBody) {
  res.write('<html>');
  res.write(`<head><title>${title}</title></head>`);
  writeBody(res);
  res.write('</html>');
}

const users = ['Paul', 'Leto', 'Stilgar', 'Jessica'];

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  switch (url) {
    case '/':
      createHtml(res, 'Welcome', () => {
        res.write('<h1>Welcome to my web site!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input name="username" type="text">');
        res.write('<button type="submit">Create User</button>');
        res.write('</form>');
      });
      res.end();
      break;

    case '/users':
      createHtml(res, 'Users', () => {
        res.write('<h1>Users</h1>');
        res.write('<ul>');
        users.forEach((u) => res.write(`<li>${u}</li>`));
        res.write('</ul>');
      });
      res.end();
      break;

    case '/create-user':
      if (method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const userName = parsedBody.split('=')[1];
          console.log(`User '${userName} created!`);
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
      }
      break;

    default:
      createHtml(res, 'Not Found', (r) => r.write('<h1>Route not found!</h1>'));
      res.end();
      break;
  }
}

exports.handler = requestHandler;
