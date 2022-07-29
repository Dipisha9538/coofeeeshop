import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'AdminUser',
    email: '190406@example.com',
    password: bcrypt.hashSync('dipisha', 10),
    isAdmin: true,
  },
  {
    name: 'dipisha',
    email: 'dipisha@example.com',
    password: bcrypt.hashSync('nepal123', 10),
    isAdmin: true,
  },
  {
    name: 'dipisha thapa',
    email: 'thapa@example.com',
    password: bcrypt.hashSync('nepal123', 10),
  },
]

export default users
