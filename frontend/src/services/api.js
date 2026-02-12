export const fetchMetrics = async () => {
  try {
    const response = await fetch(
      "https://service-monitor-dashboard-1.onrender.com/api/metrics"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching metrics:", error);
    return null;
  }
};
