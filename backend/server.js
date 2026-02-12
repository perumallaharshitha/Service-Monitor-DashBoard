const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

function getCpuLoad() {
  const cpus = os.cpus();
  let idle = 0, total = 0;

  cpus.forEach(cpu => {
    for (type in cpu.times) {
      total += cpu.times[type];
    }
    idle += cpu.times.idle;
  });

  const usage = 1 - idle / total;
  return parseFloat((usage * 100).toFixed(2));
}

function getMemoryUsage() {
  const total = os.totalmem();
  const free = os.freemem();
  const usedPercent = ((total - free) / total) * 100;
  return parseFloat(usedPercent.toFixed(2));
}

app.get("/api/metrics", (req, res) => {
  res.json({
    uptime: Math.floor(process.uptime()), 
    avgCpuLoad: getCpuLoad(),
    memoryUsagePercent: getMemoryUsage(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
