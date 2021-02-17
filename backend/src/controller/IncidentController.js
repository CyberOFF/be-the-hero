const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    //Retornar valores lmitando a 5 casos por paginação
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id") //Concatenação de Tabelas || Verificação do id da ong com o id do incidente || Trazendo os dados da ong relacionado aos dados do incidente
      .limit(5)
      .offset((page - 1) * 5) //Pular 5 casos por pagina,
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);//Retornar todos os dados dos incidentes || Retornar dados especificos da tabela ong

    res.header("X-Total-Counts", count["count(*)"]);

    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    // req.headers ;Dados de autenticação,dados de idioma, contexto da requisição
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation Not Authorized. " });
    }
    await connection("incidents").where("id", id).delete();

    return res.status(204).send();
  },
};
