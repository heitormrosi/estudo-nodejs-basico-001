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

router.get("/", (req, res) => { });

router.get("/add", (req, res) => { });

router.post("/", (req, res) => { });

router.get("/edit/:id", (req, res) => { });

router.put("/edit/:id", (req, res) => { });

router.delete("/delete/:id", (req, res) => { });

module.exports = router;