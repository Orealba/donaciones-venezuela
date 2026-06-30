function createPillIcon(): string {
  return '💊'
}

function createShirtIcon(): string {
  return '👕'
}

function createCanIcon(): string {
  return '🥫'
}

function createBoxIcon(): string {
  return '📦'
}

function createCheckIcon(): string {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#10b981"/><path d="M6 10l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

function createWarningIcon(): string {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L1 18h18L10 2z" fill="#f59e0b" stroke="#f59e0b" stroke-width="1"/><path d="M10 8v4M10 14.5v.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`
}

function createXIcon(): string {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ef4444"/><path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`
}

interface CategoryOption {
  icon: string
  label: string
}

interface StateOption {
  icon: string
  label: string
}

function createCategorySection(): HTMLElement {
  const section = document.createElement('div')
  section.className = 'flex flex-col gap-3'

  const label = document.createElement('p')
  label.textContent = '¿Qué recibiste principalmente? (Opcional)'
  label.className = 'text-sm md:text-base font-medium text-stone-700'

  const grid = document.createElement('div')
  grid.className = 'grid grid-cols-2 gap-2 w-full'

  const options: CategoryOption[] = [
    { icon: createPillIcon(), label: 'Medicinas' },
    { icon: createShirtIcon(), label: 'Ropa' },
    { icon: createCanIcon(), label: 'Comida' },
    { icon: createBoxIcon(), label: 'Otros' },
  ]

  let selectedBtn: HTMLButtonElement | null = null

  options.forEach((option) => {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.innerHTML = `<span class="text-lg">${option.icon}</span><span>${option.label}</span>`
    btn.className =
      'flex flex-col items-center justify-center gap-1 py-3 px-2 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors'

    btn.addEventListener('click', () => {
      if (selectedBtn && selectedBtn !== btn) {
        selectedBtn.className =
          'flex flex-col items-center justify-center gap-1 py-3 px-2 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors'
      }
      if (btn === selectedBtn) {
        selectedBtn = null
        btn.className =
          'flex flex-col items-center justify-center gap-1 py-3 px-2 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors'
      } else {
        btn.className =
          'flex flex-col items-center justify-center gap-1 py-3 px-2 border-2 border-emerald-600 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-medium transition-colors'
        selectedBtn = btn
      }
    })

    grid.append(btn)
  })

  section.append(label, grid)
  return section
}

function createStateSection(): HTMLElement {
  const section = document.createElement('div')
  section.className = 'flex flex-col gap-3'

  const label = document.createElement('p')
  label.textContent = '¿En qué estado llegó la caja? (Opcional)'
  label.className = 'text-sm md:text-base font-medium text-stone-700'

  const list = document.createElement('div')
  list.className = 'flex flex-col gap-2 w-full'

  const options: StateOption[] = [
    { icon: createCheckIcon(), label: 'Perfecta' },
    { icon: createWarningIcon(), label: 'Un poco golpeado' },
    { icon: createXIcon(), label: 'Incompleto' },
  ]

  let selectedBtn: HTMLButtonElement | null = null

  options.forEach((option) => {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.innerHTML = `<span class="flex-shrink-0">${option.icon}</span><span>${option.label}</span>`
    btn.className =
      'flex items-center gap-3 py-3 px-4 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left'

    btn.addEventListener('click', () => {
      if (selectedBtn && selectedBtn !== btn) {
        selectedBtn.className =
          'flex items-center gap-3 py-3 px-4 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left'
      }
      if (btn === selectedBtn) {
        selectedBtn = null
        btn.className =
          'flex items-center gap-3 py-3 px-4 border-2 border-stone-300 rounded-xl bg-white text-stone-700 text-sm font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left'
      } else {
        btn.className =
          'flex items-center gap-3 py-3 px-4 border-2 border-emerald-600 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-medium transition-colors w-full text-left'
        selectedBtn = btn
      }
    })

    list.append(btn)
  })

  section.append(label, list)
  return section
}

function createPhotoSection(): HTMLElement {
  const section = document.createElement('div')
  section.className = 'flex flex-col gap-3'

  const label = document.createElement('p')
  label.textContent = 'Subir foto (Opcional)'
  label.className = 'text-sm md:text-base font-medium text-stone-700'

  const description = document.createElement('p')
  description.textContent =
    'Si puedes y quieres, súbenos una foto de lo que recibiste. A nuestro equipo le llena el corazón saber de ustedes.'
  description.className = 'text-xs md:text-sm text-stone-500'

  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.className =
    'w-full text-sm text-stone-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-stone-200 file:text-stone-700 hover:file:bg-stone-300 file:cursor-pointer'

  section.append(label, description, input)
  return section
}

export function createSurveyForm(onNext: () => void): HTMLElement {
  const container = document.createElement('div')
  container.className = 'flex flex-col gap-6 w-full'

  const h3 = document.createElement('h3')
  h3.className = 'text-xl md:text-2xl lg:text-3xl font-bold text-stone-800'
  h3.textContent = '¡Qué alivio saber que llegó!'

  const p = document.createElement('p')
  p.className = 'text-sm md:text-base text-stone-600'
  p.textContent =
    'Si tienes un minutito, cuéntanos cómo llegó todo. Esto nos ayuda muchísimo a asegurar que más ayuda siga llegando a salvo y continuar con nuestra misión de ayudarnos.'

  const submitBtn = document.createElement('button')
  submitBtn.type = 'button'
  submitBtn.textContent = 'Enviar detalles'
  submitBtn.className =
    'w-full max-w-xs py-3 md:py-4 bg-emerald-600 text-white font-bold text-lg md:text-xl rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-transform'
  submitBtn.addEventListener('click', onNext)

  const skipBtn = document.createElement('button')
  skipBtn.type = 'button'
  skipBtn.textContent = 'No tengo tiempo, gracias igual la recibimos'
  skipBtn.className =
    'w-full max-w-xs py-3 md:py-4 bg-white border-2 border-stone-300 text-stone-600 font-medium text-sm md:text-base rounded-2xl hover:border-stone-400 hover:text-stone-800 active:scale-95 transition-all'
  skipBtn.addEventListener('click', onNext)

  container.append(
    h3,
    p,
    createCategorySection(),
    createStateSection(),
    createPhotoSection(),
    submitBtn,
    skipBtn,
  )
  return container
}
