require("../db/db");
const app = require('./app')

//require("./passport/local-auth")(app);

app.listen(app.get('port'), () =>{
  console.log("server listening on port", app.get('port'));
})
