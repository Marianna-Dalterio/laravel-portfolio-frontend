import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

export default function ProjectHomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //qui chiamo il backend
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero dati", err);
      });
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-center">Tutti i Progetti</h2>

      <div className="row">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center">Caricamento progetti in corso...</p>
        )}
      </div>
    </section>
  );
}
