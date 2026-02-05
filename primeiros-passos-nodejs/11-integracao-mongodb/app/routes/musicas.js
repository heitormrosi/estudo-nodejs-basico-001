const express = require("express");
const db = require("../db");
const router = express.Router();

/**
 * Rota GET / estabelece:
 * 1. Exibição de todas as músicas cadastradas
 * 2. Opções de alterar e excluir músicas
 * 
 * Rota GET /add estabelece:
 * 1. Formulário para adicionar nova música
 * 
 * Rota POST / estabelece:
 * 1. Recebe os dados do cadastro
 * 2. Insere no banco de dados
 * 
 * Rota GET /edit/:id estabelece:
 * 1. Formulário para editar as informações de uma música
 * 
 * Rota PUT /edit/:id estabelece:
 * 1. Recebe os dados do formulário
 * 2. Altera as informações de uma música no banco de dados
 * 
 * Rota DELETE /delete/:id estabelece:
 * 1. Exclui uma música do banco de dados
 */

router.get("/", (_, res, next) => {
    db("musicas").then((musicas) => {
        res.render("index", {
            musicas
        });
    }, next);
});

router.get("/add", (_, res) => {
    res.render("add");
});

router.post("/", (req, res, next) => {
    db("musicas").insert(req.body).then((ids) => {
        res.redirect('/');
    }, next);
});

router.get("/edit/:id", (req, res, next) => {
    const { id } = req.params;
    db("musicas")
        .where("id", id)
        .first()
        .then((musica) => {
            if (!musica) {
                return res.send(400);
            }

            res.render("edit.njk", {
                musica
            });
        }, next);
});

router.put("/edit/:id", (req, res, next) => {
    const { id } = req.params;
    db("musicas")
        .where('id', id)
        .update(req.body)
        .then((result) => {
            if (result === 0) {
                return res.send(400);
            }
            res.redirect('/');
        }, next);
});

router.delete("/delete/:id", (req, res, next) => {
    const { id } = req.params;
    db("musicas")
        .where('id', id)
        .delete()
        .then((result) => {
            if (result === 0) {
                return res.send(400);
            }
            res.redirect('/');
        }, next);
});

module.exports = router;