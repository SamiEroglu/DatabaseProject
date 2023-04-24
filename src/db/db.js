const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '2187',
      database : 'freelancer'
    }
  });

const getUsers = async () => {
    // await knex('users').insert({
    //     username: 'test',
    //     email: 'test@mail.com',
    //     password: '123',
    //     name: 'test',
    //     surname: 'test',
    // })

    const users = await knex.select('*').from('users')

    console.log(users)

    return users
}

getUsers()

