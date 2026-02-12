import React, { useEffect, useState } from 'react';
import './App.css';
import './chartSetup';
import { fetchMetrics } from './services/api';
import CpuChart from './components/CpuChart';
import MemoryChart from './components/MemoryChart';
import UptimeStatus from './components/UptimeStatus';

function App() {
    const [metrics, setMetrics] = useState({
        uptime: 0,
        avgCpuLoad: 0,
        memoryUsagePercent: 0
    });

    useEffect(() => {
        const getMetrics = async () => {
            const data = await fetchMetrics();
            if (data) setMetrics(data);
        };

        getMetrics();
        const interval = setInterval(getMetrics, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h1>Service Monitoring Dashboard</h1>

            {metrics.avgCpuLoad > 80 && (
                <div className="alert alert-cpu">
                    ⚠️ High CPU Load: {metrics.avgCpuLoad}%
                </div>
            )}
            {metrics.memoryUsagePercent > 80 && (
                <div className="alert alert-memory">
                    ⚠️ High Memory Usage: {metrics.memoryUsagePercent}%
                </div>
            )}

            <div className="chart-container">
                <UptimeStatus uptime={metrics.uptime} />
            </div>

            <div className="charts-row">
                <div className="chart-container">
                    <CpuChart cpuLoad={metrics.avgCpuLoad} />
                </div>
                <div className="chart-container">
                    <MemoryChart memoryUsage={metrics.memoryUsagePercent} />
                </div>
            </div>
        </div>
    );
}

export default App;
