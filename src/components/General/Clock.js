import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();
  /* Reference 2 - taken from https://github.com/Rinlama/ReactTools/blob/clock/src/components/Clock.js */
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  /* End of Reference 2 */

  return (
    <div
      style={{
        fontSize: "2rem",
        margin: "1rem",
        color: "#fff",
        letterSpacing: "3px",
        fontWeight: "bold",
        fontStyle: "italic",
      }}
    >
      {clockState}
    </div>
  );
}

export default Clock;
