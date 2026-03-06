import { useState } from "react";
import "./PatPage1.css";

function PatPage1() {
  const patient = {
    name: "Ram Anok",
    age: 23,
  };

  // previous detections
  const history = [
    {
      id: 1,
      disease: "Mild Asthma",
      date: "Jan 2026",
      notes: "Breathing irregularities detected from cough pattern.",
      remedies: [
        "Use prescribed inhaler twice daily.",
        "Avoid dust and cold air.",
        "Steam inhalation at night.",
      ],
    },
    {
      id: 2,
      disease: "Bronchitis",
      date: "Oct 2024",
      notes: "Infection reduced after medication.",
      remedies: [
        "Take antibiotics",
        "Drink warm fluids",
      ],
    },
  ];

  const [selected, setSelected] = useState(history[0]);

  const downloadReport = () => {
    alert(`Downloading report for ${selected.disease}`);
  };

  return (
    <div className="patient-dashboard">

      {/* SIDEBAR */}
      <div className="history-sidebar">
        <h1 className="brand-title">respira.</h1>
        <p className="sidebar-title">Your Records</p>

        {history.map((item) => (
          <div
            key={item.id}
            className={`history-item ${selected.id === item.id ? "active" : ""}`}
            onClick={() => setSelected(item)}
          >
            <strong>{item.disease}</strong>
            <span>{item.date}</span>
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div className="history-details">
        <div className="details-content">
          {/* Patient info */}
          <div className="patient-summary glass-panel">
            <h2>{patient.name}</h2>
            <span>Age {patient.age}</span>
          </div>

          {/* Diagnosis */}
          <div className="glass-panel">
            <h3>🩺 Diagnosis</h3>
            <p className="diagnosis">{selected.disease}</p>
            <p className="doctor-notes">{selected.notes}</p>
          </div>

          {/* Remedies */}
          <div className="glass-panel">
            <h3>💊 Suggested Remedies</h3>
            <ul className="remedy-list">
              {selected.remedies.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download Fixed at Bottom of Panel */}
        <div className="download-section">
          <button className="primary-btn download-btn" onClick={downloadReport}>
            Download Report 📄
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatPage1;
