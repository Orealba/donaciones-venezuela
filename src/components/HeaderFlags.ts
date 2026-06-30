import venezuelaFlag from '../assets/VenezuelaBandera.png'
import espanaFlag from '../assets/EspañaBandera.png'

export function createHeaderFlags(): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex justify-center items-center gap-0 w-full'

  const img1 = document.createElement('img')
  img1.src = venezuelaFlag
  img1.alt = 'Bandera de Venezuela'
  img1.className = 'object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'

  const img2 = document.createElement('img')
  img2.src = espanaFlag
  img2.alt = 'Bandera de España'
  img2.className = 'object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'

  container.append(img1, img2)
  return container
}
