const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    const materias = ["DIGITAL EXPERIENCE PLATAFORM (BACKEND)", "OPTIMIZATION TECHNOLOGY"];
    const tabela = [
      { nome: "André Spinelli Cintra", rm: "RM551016" },
      { nome: "Augusto de Oliveira Laurino", rm: "RM93498" },
      { nome: "Caio Felipe Britto Zanardo da Silva", rm: "RM95125" },
      { nome: "Gabriel Wilke Azevedo", rm: "RM95211" },
      { nome: "Guilherme de Lucas Garcia", rm: "RM94392" },
    ];
    const professor = "CLEBER GRAFIETTI";
    res.json({ message: "Checkpoint integração Backend + Frontend", materias, tabela, professor });
  });
  
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });