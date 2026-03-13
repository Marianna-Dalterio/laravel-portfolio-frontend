import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

export default function ProjectDetailPage() {
  const { id } = useParams(); // Prende il parametro :id definito in App.jsx
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
      .then(res => {
        setProject(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (!project) return <p>Progetto non trovato.</p>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-4">← Torna alla Home</Link>
      
      <div className="row">
        {/* Usiamo la Card passando la prop isFullVersion */}
        <ProjectCard project={project} isFullVersion={true} />
      </div>
    </div>
  );
}
