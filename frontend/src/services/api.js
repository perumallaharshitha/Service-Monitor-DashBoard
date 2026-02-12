export const fetchMetrics = async () => {
  try {
    const response = await fetch(
      "https://service-monitor-dashboard-1.onrender.com/api/metrics"
    );
    if (!response.ok) throw new Error("Network response not ok");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching metrics:", err);
    return null;
  }
};
