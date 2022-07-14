import { Siswa } from '../../models/siswa'

const byId = async (id) => Siswa.findByIdAndDelete(id)

export default {
    byId
}