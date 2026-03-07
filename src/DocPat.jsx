import { useNavigate } from 'react-router-dom';
import './DocPat.css';

function DocPat() {
  const navigate = useNavigate();

  return (
    <div className="docpat-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg
          className="back-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <h1 className="docpat-title">Select Your Role</h1>

      <div className="card-container">

        {/* DOCTOR CARD */}
        <div className="role-card" onClick={() => navigate('/doctor-login')}>
          <div className="card-icon">🩺</div>
          <h2>Doctor</h2>
          <p>Monitor patients and analyze data</p>
          <div className="card-hover-effect"></div>
        </div>

        {/* PATIENT CARD */}
        <div className="role-card" onClick={() => navigate('/patient')}>
          <div className="card-icon">👤</div>
          <h2>Patient</h2>
          <p>Track your health and breathing</p>
          <div className="card-hover-effect"></div>
        </div>

      </div>
    </div>
  );
}

export default DocPat;
