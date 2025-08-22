import { PrismaClient } from "@prisma/client";
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
    const filmes = await prisma.filme.findMany()
    res.status(200).json(filmes)
})

router.post("/", async (req, res) => {
    // receber as variaveis vindas do corpo da requisição
    const { titulo, genero, duracao, preco,
        sinopse = null } = req.body

    // verifica se campos obrigatorios foram passados
    if (!titulo || !genero || !duracao || !preco) {
        res.status(400).json(
            { erro: "Informe todos os dados" })
        return
    }

    const filme = await prisma.filme.create({
        data: { titulo, genero, duracao, preco, sinopse }
    })
    res.status(201).json(filme)

})

router.put("/:id", async (req: any, res: any) => {
    const { id } = req.params;
    const { titulo, genero, duracao, preco, sinopse = null } = req.body;

    // Verifica se o ID foi fornecido
    if (!id) {
        return res.status(400).json({ erro: "ID do filme é obrigatório" });
    }

    // Verifica se pelo menos um campo foi passado para atualização
    if (!titulo && !genero && !duracao && !preco && sinopse === null) {
        return res.status(400).json({ erro: "Informe dados para atualização" });
    }

    try {
        // Atualiza o filme no banco de dados
        const filmeAtualizado = await prisma.filme.update({
            where: { id: parseInt(id) },
            data: { titulo, genero, duracao, preco, sinopse },
        });

        res.status(200).json(filmeAtualizado);
    } catch (error) {
        res.status(404).json({ erro: "Filme não encontrado" });
    }
});

export default router