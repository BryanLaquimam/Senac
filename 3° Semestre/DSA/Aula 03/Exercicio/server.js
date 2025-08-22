const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

// Listar todas as viagens
app.get('/viagens', async (req, res) => {
  try {
    const viagens = await prisma.viagem.findMany();
    res.json(viagens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as viagens' });
  }
});

// Criar uma nova viagem
app.post('/viagens', async (req, res) => {
  const { destino, transporte, dataSaida, preco, duracao } = req.body;
  try {
    const viagem = await prisma.viagem.create({
      data: {
        destino,
        transporte,
        dataSaida: new Date(dataSaida),
        preco,
        duracao,
      },
    });
    res.status(201).json(viagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a viagem' });
  }
});

// Atualizar uma viagem existente
app.put('/viagens/:id', async (req, res) => {
  const { id } = req.params;
  const { destino, transporte, dataSaida, preco, duracao } = req.body;
  try {
    const viagem = await prisma.viagem.update({
      where: { id: parseInt(id) },
      data: {
        destino,
        transporte,
        dataSaida: new Date(dataSaida),
        preco,
        duracao,
      },
    });
    res.json(viagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a viagem' });
  }
});

// Excluir uma viagem
app.delete('/viagens/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.viagem.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Viagem excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a viagem' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
