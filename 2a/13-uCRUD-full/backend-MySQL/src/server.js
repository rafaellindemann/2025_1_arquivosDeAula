const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
// objeto para conectar e conversar com o banco
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Altere para o nome do seu user no MySQL
    password: 'senai',    // Altere para a senha correta
    database: 'crud_cliente_demo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.use(cors());
app.use(express.json());

app.get('/clientes', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// app.get('/produtos', async (request, response) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM produtos');
//         response.json(rows);
//     } catch (err) {
//         console.error(err.message);
//         response.status(500).json({ error: 'Erro ao buscar produtos' });
//     }
// });

// localhost:3000/clientes/1
app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
});

// app.get('/veiculos/:placa', async (req, res) => {
//     const { placa } = req.params;
//     try {
//         const [rows] = await pool.query('SELECT * FROM veiculos WHERE placa = ?', [placa]);
//         if (rows.length === 0) {
//             return res.status(404).json({ error: 'Veículo não encontrado' });
//         }
//         res.json(rows[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao buscar veículo' });
//     }
// });

app.post('/clientes', async (req, res) => {
    const { nome, endereco, email, telefone } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO clientes (nome, endereco, email, telefone) VALUES (?, ?, ?, ?)',
            [nome, endereco, email, telefone]
        );
        const [novoCliente] = await pool.query('SELECT * FROM clientes WHERE id = ?', [result.insertId]);
        res.status(201).json(novoCliente[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// *** verificar o dna do insertId
// app.post('/equipamentos', async (req, res) => {
//     const { nome, marca, tipo, preco, dataManutencao } = req.body;
//     try {
//         const [result] = await pool.query(
//             'INSERT INTO equipamentos (nome, marca, tipo, preco, dataManutencao) VALUES (?, ?, ?, ?, ?)',
//             [nome, marca, tipo, preco, dataManutencao]
//         );
//         const [novoEquipamento] = await pool.query('SELECT * FROM equipamentos WHERE nome = ?', [result.insertNome]);
//         res.status(201).json(novoEquipamento[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao adicionar equipamento' });
//     }
// });

app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});

// app.delete('/alimentos/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const [result] = await pool.query('DELETE FROM alimentos WHERE id = ?', [id]);
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Alimento não encontrado' });
//         }
//         res.json({ message: 'Alimento deletado com sucesso' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao deletar alimento' });
//     }
// });

app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE clientes SET nome = ?, endereco = ?, email = ?, telefone = ? WHERE id = ?',
            [nome, endereco, email, telefone, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        const [clienteAtualizado] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        res.json(clienteAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
});

// app.put('/dinossauros/:id', async (req, res) => {
//     const { id } = req.params;
//     const { nome, tamanho, familia, peso } = req.body;
//     try {
//         const [result] = await pool.query(
//             'UPDATE dinossauros SET nome = ?, tamanho = ?, familia = ?, peso = ? WHERE id = ?',
//             [nome, tamanho, familia, peso, id]
//         );
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Dinossauro não encontrado' });
//         }
//         const [dinossauroAtualizado] = await pool.query('SELECT * FROM dinossauros WHERE id = ?', [id]);
//         res.json(dinossauroAtualizado[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: 'Erro ao atualizar dinossauro' });
//     }
// });



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
