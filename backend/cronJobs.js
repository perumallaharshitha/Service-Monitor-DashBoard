const cron = require('node-cron');
const fs = require('fs');
const { getMetrics } = require('./monitor');

cron.schedule('* * * * *', () => {  
    const metrics = getMetrics();
    const logData = JSON.stringify({ ...metrics, timestamp: new Date() }, null, 2);
    fs.writeFileSync('./logs/metrics.json', logData);
    console.log('Metrics logged at', new Date());
});
