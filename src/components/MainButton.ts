export function createMainButton(): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center gap-2'

  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = '¡Recibí la caja!'
  button.className =
    'w-full max-w-xs md:max-w-sm py-4 md:py-5 bg-emerald-600 text-white font-bold text-xl md:text-2xl lg:text-3xl rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-transform'

  const small = document.createElement('p')
  small.className = 'text-xs md:text-sm text-stone-400'
  small.textContent = 'Toca el botón para confirmar que llegó a salvo.'

  container.append(button, small)
  return container
}
