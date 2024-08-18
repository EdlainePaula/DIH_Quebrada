const express = require("express")
const mongoose = require('mongoose');

const app = express();
app.use (express.json());
const port = 3000
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://edlainepaulae:jabuticabinha@dih-qubrada-api.zwox9p4.mongodb.net/?retryWrites=true&w=majority&appName=dih-qubrada-api');

}

const produtoSchema = new mongoose.Schema({ 
    Produto: { type: String, required: true }, 
    Categoria: { type: Array, required: true },
    Descricao: { type: String, required: true },
    Marca: { type: String, required: true },
    Preço: { type: Number, required: true },
    Quantidade: { type: Number, required: true },
});

  
const Produto = mongoose.model('Produto', produtoSchema);

app.put("/:id", async (req, res) =>{
    const produtos = await Produto.findByIdAndUpdate(req.params.id, {
        Produto: req.body.Produto,
        Categoria: req.body.Categoria,
        Descricao: req.body.Descricao,
        Marca: req.body.Marca,
        Preço: req.body.Preço,
        Quantidade: req.body.Quantidade
    })
    return res.body(produtos)
})



app.get("/", async (req, res) =>{
    const produtos = await Produto.find()
    return res.send(produtos)
})

app.delete("/:id", async(req, res) => {
    const Produto = await Produto.findByIdAndRemove(req.params.id)
    return res.send(Produto)

})

app.post("/", async (req, res) => {
    const novoProduto = new Produto({
      Produto: req.body.Produto,
      Categoria: req.body.Categoria,
      Descricao: req.body.Descricao,
      Marca: req.body.Marca,
      Preço: req.body.Preço,
      Quantidade: req.body.Quantidade
    });
  
    try {
      await novoProduto.save();
      res.send(novoProduto);
    } catch (error) {
      res.status(500).send('Erro ao salvar o produto: ' + error.message);
    }
});

app.listen(port, () => {
    console.log('App running on port', port);
});