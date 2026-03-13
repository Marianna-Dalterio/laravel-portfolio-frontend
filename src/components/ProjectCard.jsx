import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  //per comodità destrutturo i dati così da non dover scrivere ogni volta project.name, project.title...
  const { id, project_name, type_id, client, date, overview } = project;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary">{project_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Cliente: {client}</h6>
          <p className="card-text small">Data: {date}</p>
          {/* Pulsante per il dettaglio - Spinto in basso da mt-auto */}
          <div className="mt-auto">
            <Link
              to={`/projects/${id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Vedi Dettagli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
