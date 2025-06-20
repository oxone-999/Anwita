import React, { useEffect, useState } from "react";

const startDate = new Date("2025-03-21T00:00:00");

export default function LiveTogetherTimer() {
  const [timeTogether, setTimeTogether] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "20px", textAlign: "center", color: "#ff3366" }}>
      <h3>⏱ We've been together since March 21, 2025</h3>
      <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{timeTogether}</p>
    </div>
  );
}
