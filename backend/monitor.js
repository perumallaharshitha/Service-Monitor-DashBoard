const os = require('os');

function getMetrics() {
    const uptime = os.uptime();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memoryUsagePercent = ((usedMem / totalMem) * 100).toFixed(2);

    const cpus = os.cpus();
    const cpuLoad = cpus.map(cpu => {
        const total = Object.values(cpu.times).reduce((acc, t) => acc + t, 0);
        const idle = cpu.times.idle;
        return ((1 - idle / total) * 100).toFixed(2);
    });
    const avgCpuLoad = (cpuLoad.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / cpuLoad.length).toFixed(2);

    return {
        uptime,
        memoryUsagePercent,
        avgCpuLoad
    };
}

module.exports = { getMetrics };
