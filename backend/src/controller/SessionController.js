const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body; //Passar a Id da ong pelo Body

    const ong = await connection("ongs") //Conexao com a tabela ongs
      .where("id", id) //Onde ID for igual a ID
      .select("name") //Me retorne apenas o nome
      .first(); //Primeiro elemento

    if (!ong) {
      return res.status(404).json({ erro: "Not Found Ong with this ID" }); //Se n for encontrado, return a error
    }
    return res.status(200).json(ong); //Se der tudo certo, retorne o dado solicitado da ong(No caso o Name)
  },
};
