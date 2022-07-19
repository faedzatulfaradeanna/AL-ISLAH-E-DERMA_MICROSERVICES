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

const client = new pg.Client(cs);

client.connect();

client.query('SELECT * FROM cars').then(res => {

    const data = res.rows;

    console.log('all data');
    data.forEach(row => {
        console.log(`Id: ${row.id} Name: ${row.name} Price: ${row.price}`);
    })

    console.log('Sorted prices:');
    const prices = R.pluck('price', R.sortBy(R.prop('price'), data));
    console.log(prices);

}).finally(() => {
    client.end()
});