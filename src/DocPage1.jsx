import { useState, useRef } from 'react';
import './DocPage1.css';

function DocPage1() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: 'Ram Anok', age: 23 },
    { id: 2, name: 'Anand Raj', age: 32 },
    { id: 3, name: 'Rahul Verma', age: 60 },
  ];

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };


  return (
    <div className="doctor-dashboard">

      {/* SIDEBAR */}
      <div className="patient-list">
        <h1 className="brand-title">respira.</h1>
        <p className="list-header">Active Patients</p>

        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`patient-card ${selectedPatient?.id === patient.id ? 'active' : ''}`}
            onClick={() => setSelectedPatient(patient)}
          >
            <div className="patient-info">
              <strong>{patient.name}</strong>
              <span>Age {patient.age}</span>
            </div>
            {selectedPatient?.id === patient.id && <span style={{ color: 'var(--cyan-light)' }}>●</span>}
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="patient-details">
        {selectedPatient ? (
          <>
            <div className="header-row">
              <div className="patient-title">
                <h2>{selectedPatient.name}</h2>
                <span className="status-badge">Stable</span>
              </div>
            </div>

            <div className="dashboard-grid">
              {/* HISTORY PANEL */}
              <div className="glass-panel history-panel">
                <h3>📜 Medical History</h3>
                <ul className="history-list">
                  <li>Asthma <span>Oct 2021</span></li>
                  <li>Bronchitis <span>June 2023</span></li>
                  <li>COPD <span>Jan 2026</span></li>
                </ul>
              </div>

              {/* AUDIO PANEL */}
              <div className="glass-panel audio-panel" >
                <h3>🔊 Sound Analysis</h3>
                <div className="visualizer-container">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <button className="primary-btn" onClick={handleUploadClick}>
                  Drop Audio
                </button>

                <input
                  type="file"
                  accept="audio/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🩺</div>
            <p>Select a patient from the sidebar to view details</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default DocPage1;
