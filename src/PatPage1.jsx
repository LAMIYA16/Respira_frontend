import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./PatPage1.css";

function PatPage1(){

 const [patient,setPatient] = useState(null);
 const [diseases,setDiseases] = useState([]);
 const [selected,setSelected] = useState(null);

 useEffect(()=>{

  const stored = JSON.parse(localStorage.getItem("patient"));

  setPatient(stored);

  fetchDiseases(stored.patient_id);

 },[]);


 const fetchDiseases = async (patientId)=>{

  const { data } = await supabase
   .from("disease_history")
   .select("*")
   .eq("patient_id", patientId);

  setDiseases(data);

 };


 return(

  <div className="dashboard">

   <div className="sidebar">

    <h3>Your Records</h3>

    {diseases.map((d)=>(
     <div
      key={d.id}
      className="disease-card"
      onClick={()=>setSelected(d)}
     >
      {d.disease}
     </div>
    ))}

   </div>


   <div className="content">

    <h2>{patient?.name}</h2>

    {selected && (

     <div>

      <h3>Diagnosis</h3>
      <p>{selected.disease}</p>

      <h4>Notes</h4>
      <p>{selected.notes}</p>

      <h4>Remedies</h4>

      <ul>
       {selected.remedies?.map((r,i)=>(
        <li key={i}>{r}</li>
       ))}
      </ul>

     </div>

    )}

   </div>

  </div>

 );
}

export default PatPage1;