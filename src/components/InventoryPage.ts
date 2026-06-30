export function createInventoryPage(onBack: () => void): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col items-center gap-6 w-full'

  const h2 = document.createElement('h2')
  h2.className = 'text-xl md:text-2xl lg:text-3xl font-bold text-stone-800'
  h2.textContent = 'Inventario de donaciones'

  const p = document.createElement('p')
  p.className = 'text-xs md:text-sm text-stone-600'
  p.textContent =
    'Nos gusta tener las cuentas claras con la gente e hicimos un inventario de los insumos y comida que recibimos de las personas, aquí tienen detallado lo que hemos recibido por ahora:'

  const notice = document.createElement('p')
  notice.className = 'text-sm md:text-base font-bold text-red-600'
  notice.textContent = 'Próximamente actualizaremos con más detalles.'

  const backBtn = document.createElement('button')
  backBtn.type = 'button'
  backBtn.textContent = 'Volver al inicio'
  backBtn.className =
    'w-full max-w-xs py-2.5 md:py-3 bg-white border border-stone-300 text-stone-600 font-medium text-sm md:text-base rounded-2xl hover:border-stone-400 hover:text-stone-800 active:scale-95 transition-all'
  backBtn.addEventListener('click', onBack)

  container.append(h2, p, notice, backBtn)
  return container
}
