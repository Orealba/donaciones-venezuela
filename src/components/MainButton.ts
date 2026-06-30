export function createMainButton(): HTMLElement {
  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = '¡Recibí la caja!'
  button.className =
    'w-full max-w-xs md:max-w-sm py-4 md:py-5 bg-emerald-600 text-white font-bold text-xl md:text-2xl lg:text-3xl rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-transform'

  return button
}
