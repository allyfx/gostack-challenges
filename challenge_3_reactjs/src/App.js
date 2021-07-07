import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {

    const response = await api.post('/repositories', {
      title: `Novo repositório: ${Date.now()}`,
      url: "https://github.com/AndreDalSantos?tab=repositories",
      techs: [ "ReactJS", "NodeJS" ]
    })

    const repository = response.data;

    setRepositories([ ...repositories, repository ])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`)

    const repositoryIndex = repositories.findIndex(repository => repository.id === id);

    repositories.splice(repositoryIndex, 1);

    setRepositories([ ...repositories ])
  }

  return (
    <div>
      <ul data-testid="repository-list">

          {repositories.map(repo => <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>)}

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;