import { Siswa } from '../../models/siswa'
// const jwt = require('jsonwebtoken');

const all = async () => Siswa.find({})

const byId = async (_id) => Siswa.find({ _id })

// const byEmailAndPassword = async (email, password) => {
//     const user = await User.findOne({ email })
//     return bcrypt.compareSync(password, user.password) ? { secret: jwt.sign({
//         id: user._id,
//         name: user.name,
//         email: user.email
//     }, process.env.SECRET) } : { secret: null }
// }

export default {
    all,
    byId
}