import React from 'react';

const UptimeStatus = ({ uptime }) => {
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    return (
        <div>
            <h3>Service Uptime</h3>
            <p>{hours}h {minutes}m {seconds}s</p>
        </div>
    );
};

export default UptimeStatus;
