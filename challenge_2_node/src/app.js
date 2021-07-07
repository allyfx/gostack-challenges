const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  // Lists the repositories
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  // Register a new repository
  const { title, url, techs } = req.body;

  const repository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repository);

  return res.json(repository);
});

app.put("/repositories/:id", (req, res) => {
  // Changes the title, url and techs of a repository based on its id
  const { id } = req.params;
  const { title, url, techs } = req.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if (repositoryIndex < 0) {
    return res.status(400).json({ error: 'Repository not found.' });
  }

  const repoLikes = repositories[repositoryIndex].likes;

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repoLikes
  };

  repositories[repositoryIndex] = repository;

  return res.json(repository);
});

app.delete("/repositories/:id", (req, res) => {
  // Deletes the repository based on its id
  const { id } = req.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if (repositoryIndex < 0) {
    return res.status(400).json({ error: 'Repository not found.' });
  }

  repositories.splice(repositoryIndex, 1);

  res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  // It'll add 1 to the numbers of likes of a repository based on it id every time this route is called
  const { id } = req.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id == id);

  if (repositoryIndex < 0) {
    return res.status(400).json({ error: 'Repository not found.' });
  }

  repositories[repositoryIndex].likes += 1;

  return res.json(repositories[repositoryIndex]);
});

module.exports = app;
