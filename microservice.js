const pg = require('pg');

var config = {
  host: "ec2-34-225-159-178.compute-1.amazonaws.com",
  user: "wafkmrwskosmvu",
  password: "216155b0d0503cb0601c13025bf1a5467bb727fc23bb60ff29f5f0c628624b9e",
  database: "d4ddj7altqepsr"
}

const pool = new pg.Pool(config);

pool.connect()
    .then(client => {
        return client.query('SELECT * FROM donation', [1])
            .then(res => {
                client.release();
                console.log(res.rows[0]);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
  }).finally(() => pool.end());