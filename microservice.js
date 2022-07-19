const { Client } = require('pg');

const client = new Client({
  connectionString: "process.env.postgres://wafkmrwskosmvu:216155b0d0503cb0601c13025bf1a5467bb727fc23bb60ff29f5f0c628624b9e@ec2-34-225-159-178.compute-1.amazonaws.com:5432/d4ddj7altqepsr",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM donation;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});