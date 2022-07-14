import { Siswa } from '../../models/siswa'

const create = async (siswa) => Siswa.create(siswa)

export default {
    create
}