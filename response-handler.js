//const fs = require('fs');
// import fs from 'fs';

//when using promises
//const fs = require('fs').promises;
import fs from 'fs/promises';

import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const resHandler = (req, res, next) => {
    // fs.readFile('my-page.html', 'utf8', (err, data) => {
    //   res.send(data);
    // });

    //how to use globally defined variables when using es6
    //res.sendFile(path.join(__dirname, "my-page.html"));

    //using promises in core API functions, instead of callback, we can chain like promises
    fs.readFile('my-page.html', 'utf8')
    .then((data) => {
        res.send(data);
      })
      .catch(err => {
          console.log(err)
      });

}

//export default resHandler;