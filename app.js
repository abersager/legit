import pjson from './package.json';
import express from 'express';
import debug from 'debug';

let log = debug(pjson.name);

let app = express();

app.set('port', process.env.PORT || 8000);

let server = app.listen(app.get('port'), () => {
  log('Express server listening on port ' + server.address().port);
});
