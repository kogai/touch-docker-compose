const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res)=> {
  console.log('requested.');
  res.status(200).send({
    myStatus: 'ok',
  });
});
app.use(router);
app.set('port', 3000);

app.listen(app.get('port'), ()=> {
  console.log(`Server has start on PORT: ${app.get('port')} to 3008`);
});
