const express = require('express');
const router = express.Router();
const { getMetrics } = require('../monitor');

router.get('/', (req, res) => {
    const metrics = getMetrics();
    res.json(metrics);
});

module.exports = router;
