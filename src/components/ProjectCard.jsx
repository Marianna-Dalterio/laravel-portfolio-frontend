import { Link } from "react-router-dom";
//isFullVersion uso un prop condizionale per la pagina del dettaglio così da mostrare più info solo se è su true
export default function ProjectCard({ project, isFullVersion = false }) {
  //per comodità destrutturo i dati così da non dover scrivere ogni volta project.name, project.title...
  const {
    id,
    project_name,
    client,
    date,
    overview,
    technologies,
    type,
  } = project;

  return (
    /* Se è la versione full, occupa tutta la larghezza (col-12), 
       altrimenti resta una colonna della griglia (col-md-4) */
    <div className={isFullVersion ? "col-12" : "col-md-4 mb-4"}>
      <div
        className={`card shadow-sm h-100 ${isFullVersion ? "border-primary" : ""}`}
      >
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary">{project_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Cliente: {client}</h6>
          <p className="card-text small">Data: {date}</p>

          {/* --- INIZIO PARTE CONDIZIONALE --- */}
          {isFullVersion && (
            <div className="extra-info mt-3 border-top pt-3">
              {/* Visualizzazione Tipo */}
              <p>
                <strong>Tipo:</strong>
                <span className="badge bg-info text-dark ms-2">
                  {type?.name || "Nessun tipo"}
                </span>
              </p>

              {/* Visualizzazione Tecnologie */}
              <div className="mb-3">
                <strong>Tecnologie:</strong>
                {technologies?.length > 0 ? (
                  technologies.map((tech) => (
                    <span key={tech.id} className="badge ms-1" style={{backgroundColor: tech.color}}>
                      {tech.name}
                    </span>
                  ))
                ) : (
                  <span className="ms-2 text-muted">Nessuna tecnologia</span>
                )}
              </div>

              {/* Descrizione completa */}
              <div className="mt-4">
                <h5>Descrizione Progetto:</h5>
                <p>{overview}</p>
              </div>
            </div>
          )}
          {/* --- FINE PARTE CONDIZIONALE --- */}

          {/* Mostra il tasto "Vedi Dettaglio" solo nella Home (quando NON è full version) */}
          {!isFullVersion && (
            <div className="mt-auto pt-3">
              <Link to={`/projects/${id}`} className="btn btn-outline-primary btn-sm w-100">
                Vedi Dettagli
              </Link>
            </div>
          )}
          </div>
        </div>
    </div>
    
  );
}
