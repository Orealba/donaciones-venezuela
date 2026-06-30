export function createQuickThanksPage(onBack: () => void): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center gap-6 w-full'

  const icon = document.createElement('div')
  icon.className = 'text-5xl md:text-6xl'
  icon.textContent = '💚'

  const h3 = document.createElement('h3')
  h3.className = 'text-lg md:text-xl lg:text-2xl font-bold text-stone-800'
  h3.textContent = '¡Qué alivio saber que llegó!'

  const p = document.createElement('p')
  p.className = 'text-xs md:text-sm text-stone-600'
  p.textContent = 'Gracias por confirmarnos. Estamos contigo.'

  const closeBtn = document.createElement('button')
  closeBtn.type = 'button'
  closeBtn.textContent = 'Cerrar y volver al inicio'
  closeBtn.className =
    'w-full max-w-xs py-2.5 md:py-3 bg-white border border-stone-300 text-stone-600 font-medium text-sm md:text-base rounded-2xl hover:border-stone-400 hover:text-stone-800 active:scale-95 transition-all'
  closeBtn.addEventListener('click', onBack)

  container.append(icon, h3, p, closeBtn)
  return container
}
