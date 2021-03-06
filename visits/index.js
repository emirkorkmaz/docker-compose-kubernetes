const express = require('express');
const redis = require('redis');

const app = express();
const redis_client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

redis_client.set('visits', 0);

app.get('/', (req, res) => {
    redis_client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        redis_client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});