import React from "react";

function UptimeStatus({ uptime }) {
  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div>
      <h3>Service Uptime</h3>
      <p>{formatUptime(uptime)}</p>
    </div>
  );
}

export default UptimeStatus;
