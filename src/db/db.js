const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '2187',
    database: 'freelancer'
  }
});

export const getUsers = async () => {
  try {
    const users = await knex.select('*').from('freelancer.users');
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


