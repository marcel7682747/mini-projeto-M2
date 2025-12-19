import livro from "../models/livro.js";

class LivroController {

    static async listarLivrosPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
          res.status(500).json({ mensage: `${erro.mensage} - falha na requisição do livro`})
        }
    };

    static async cadastrarLIvro (req, res) {
      try {
         const novoLivro = await livro.create(req.body);
    res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
      } catch (erro) {
      res.status(500).json({ message: `${erro.menssage} - falha ao cadastrar o livro`})
      }
    }

    
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (erro) {
          res.status(500).json({ mensage: `${erro.mensage} - falha ao atualizar`})
        }
    };
     
    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro excluido com sucesso"});
        } catch (erro) {
          res.status(500).json({ mensage: `${erro.mensage} - falha na exclusão`})
        }
    };

};

export default LivroController;