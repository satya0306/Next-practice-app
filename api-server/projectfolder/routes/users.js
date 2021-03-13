const userRoutes = (app, fs) => {
    // variables
    const dataPath = '/Users/admin/Desktop/Practice_Test/my-test/api-server/projectfolder/data/users.json';
  
    // READ
    app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
module.exports = userRoutes;