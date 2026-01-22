"use client";

import { useState } from "react";

export default function IntakePage() {
  const [stage, setStage] = useState("");
  const [urgency, setUrgency] = useState(false);

  function handleSubmit() {
    alert(
      `Case submitted.\nStage: ${stage}\nUrgent: ${
        urgency ? "Yes" : "No"
      }\n\nOur team will review your matter.`
    );
  }

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Submit Your Case</h2>

      <label>
        Current Stage:
        <select onChange={(e) => setStage(e.target.value)}>
          <option value="">Select</option>
          <option value="Notice">Notice Stage</option>
          <option value="OA Filed">OA Filed</option>
          <option value="Auction">Auction Stage</option>
        </select>
      </label>

      <br /><br />

      <label>
        <input
          type="checkbox"
          onChange={(e) => setUrgency(e.target.checked)}
        />{" "}
        Urgent (Auction / Short deadline)
      </label>

      <br /><br />

      <button
        onClick={handleSubmit}
        style={{ padding: "10px 16px", background: "black", color: "white" }}
      >
        Submit for Review
      </button>
    </main>
  );
}
