import Skeleton from '../img/skeleton.png'
import Centaur from '../img/Centaur.png'
import Bandit from '../img/bandit.png'
import ElfArcher from '../img/elf_archer.png'
import SkeletonMage from '../img/skeleton_mage.png'
import Archimage from '../img/archimage.png'
import Monk from '../img/monk.png'
import Biskop from '../img/Biskop.png'
import Sirena from '../img/sirena.png'

console.log('sirena', Sirena)

export const getImageCard = (name: String) => {
  switch (name) {
    case 'Skeleton':
      return Skeleton
    case 'Centaur':
      return Centaur
    case 'Bandit':
      return Bandit
    case 'Elf Archer':
      return ElfArcher
    case 'Skeleton Mage':
      return SkeletonMage
    case 'Archimage':
      return Archimage
    case 'Monk':
      return Monk
    case 'Biskop':
      return Biskop
    case 'Sirena':
      return Sirena
  }
}
