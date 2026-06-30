export function createFooterLinks(onInfoClick: () => void): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center gap-1'

  const link = document.createElement('button')
  link.type = 'button'
  link.textContent = 'Más información'
  link.className =
    'text-sm md:text-base text-amber-700 underline hover:text-amber-900 bg-transparent border-0 cursor-pointer'
  link.addEventListener('click', onInfoClick)

  const small = document.createElement('p')
  small.className = 'text-xs md:text-sm text-stone-400'
  small.textContent = 'Toca el botón para confirmar que llegó a salvo.'

  container.append(link, small)
  return container
}
