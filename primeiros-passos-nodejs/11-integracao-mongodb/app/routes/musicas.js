const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

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
    mongoose.model("Musica").find().then((musicas) => {
        res.render("index", {
            musicas
        });
    }, next);
});

router.get("/add", (_, res) => {
    res.render("add");
});

router.post("/", (req, res, next) => {
    const Musica = mongoose.model("Musica");
    const m = new Musica(req.body);

    m.save().then(() => {
        res.redirect('/');
    }, next);
});

router.get("/edit/:id", (req, res, next) => {
    const { id } = req.params;
    mongoose.model("Musica")
        .findOne({ _id: id })
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
    mongoose.model("Musica")
        .update({ _id: id },
            {
                $set: req.body
            }
        )
        .then((result) => {
            if (result === 0) {
                return res.send(400);
            }
            res.redirect('/');
        }, next);
});

router.delete("/delete/:id", (req, res, next) => {
    const { id } = req.params;
    mongoose.model("Musica")
        .delete({ _id: id })
        .then((result) => {
            if (result === 0) {
                return res.send(400);
            }
            res.redirect('/');
        }, next);
});

module.exports = router;