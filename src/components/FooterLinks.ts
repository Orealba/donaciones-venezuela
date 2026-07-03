export function createFooterLinks(): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center gap-1'

  const small = document.createElement('p')
  small.className = 'text-xs md:text-sm text-stone-400'
  small.textContent = 'Toca el botón para confirmar que llegó a salvo.'

  container.append(small)
  return container
}
