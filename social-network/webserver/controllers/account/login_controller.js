const bcrypt = require("bcrypt");
const Joi = require("joi");
const mysqlPool = require("../../../databases/mysql-pool");
const jwt = require("jsonwebtoken");

async function validateSchema(payload) {
  /**
   * TODO: Fill email, password and full name rules to be (all fields are mandatory):
   *  email: Valid email
   *  password: Letters (upper and lower case) and number
   *    Minimun 3 and max 30 characters, using next regular expression: /^[a-zA-Z0-9]{3,30}$/
   * fullName: String with 3 minimun characters and max 128
   */
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
  };

  return Joi.validate(payload, schema);
}

async function login(req, res) {
  const accountData = req.body;
  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const connection = await mysqlPool.getConnection();

  const sqlSelect = `SELECT * FROM users WHERE email =?`;

  try {
    const [selection] = await connection.query(sqlSelect, [accountData.email]);
    connection.release();

    if (selection.length === 0) {
    }

    const validatedPass = await bcrypt.compare(
      accountData.password,
      selection[0].password
    );

    if (validatedPass === false) {
      return res.status(401).send("");
    }

    const tokenData = { uuid: selection[0].uuid };
    const jwtExpiration = parseInt(process.env.JWT_ACCESS_TOKEN_TTL, 10);
    const token = jwt.sign(tokenData, process.env.JWT_PASS, {
      expiresIn: jwtExpiration
    });

    const response = {
      accessToken: token,
      expiresIn: jwtExpiration
    };

    return res.status(200).send(response);
  } catch (e) {
    if (connection) {
      connection.release();
    }

    return res.status(401).send(e.message);
  }
}

module.exports = login;
