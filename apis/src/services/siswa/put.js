import { Siswa } from '../../models/siswa'

const byId = async (id, siswa) => Siswa.findByIdAndUpdate(id, siswa)

export default {
    byId
}