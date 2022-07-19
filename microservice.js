const pg = require('pg');
const R = require('ramda');

const app = express();
app.use(cors());

var connect = pg.createPool({
    host: "ec2-34-225-159-178.compute-1.amazonaws.com",
    user: "wafkmrwskosmvu",
    password: "216155b0d0503cb0601c13025bf1a5467bb727fc23bb60ff29f5f0c628624b9e",
    database: "d4ddj7altqepsr"
  });

app.get('/', (req, res) => {
res.send('hello world!');
console.log('Running');
});
  
app.get('/display', (req, res) => {
var micro_username = req.query.username;
  
console.log("username: " + micro_username);
  
connect.getConnection(function (err, connection) {
    if (err) { res.send('Error Database Connection'); }
    else {
        var sql = "SELECT * FROM donation";
        connect.query(sql, function (err, result) {
          if (err) { throw err; }
          else {
            res.send(result);
          }
        connection.release();
        });
      }
    });
    });
  
  
app.listen(process.env.PORT, () => {
    console.log('Example app listening to port 4005');
});