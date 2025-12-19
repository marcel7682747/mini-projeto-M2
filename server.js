
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Bibliotca",
    "/livros": "Entrei na rota livros",
};


app.listen(3000, () => {
    console.log("servidor escutando!");
});
