function createPillIcon(): string {
  return '💊';
}

function createShirtIcon(): string {
  return '👕';
}

function createCanIcon(): string {
  return '🥫';
}

function createBoxIcon(): string {
  return '📦';
}

function createCheckIcon(): string {
  return `<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#10b981"/><path d="M6 10l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function createWarningIcon(): string {
  return `<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 2L1 18h18L10 2z" fill="#f59e0b" stroke="#f59e0b" stroke-width="1"/><path d="M10 8v4M10 14.5v.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;
}

function createXIcon(): string {
  return `<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ef4444"/><path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;
}

interface CategoryOption {
  icon: string;
  label: string;
}

interface StateOption {
  icon: string;
  label: string;
}

export interface SurveyData {
  category: string | null;
  state: string | null;
  file: File | null;
}

function createCategorySection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'flex flex-col gap-2';

  const label = document.createElement('p');
  label.textContent = '¿Qué recibiste principalmente? (Opcional)';
  label.className = 'text-xs md:text-sm font-medium text-stone-700';

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 gap-1 w-full category-grid';

  const options: CategoryOption[] = [
    { icon: createPillIcon(), label: 'Medicinas' },
    { icon: createShirtIcon(), label: 'Ropa' },
    { icon: createCanIcon(), label: 'Comida' },
    { icon: createBoxIcon(), label: 'Otros' },
  ];

  let selectedBtn: HTMLButtonElement | null = null;

  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<span class="text-sm">${option.icon}</span><span>${option.label}</span>`;
    btn.className =
      'flex flex-col items-center justify-center gap-0 py-1 px-1 border border-stone-300 rounded-md bg-white text-stone-700 text-[10px] font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors';

    btn.addEventListener('click', () => {
      if (selectedBtn && selectedBtn !== btn) {
        selectedBtn.className =
          'flex flex-col items-center justify-center gap-0 py-1 px-1 border border-stone-300 rounded-md bg-white text-stone-700 text-[10px] font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors';
        delete selectedBtn.dataset.selected;
      }
      if (btn === selectedBtn) {
        selectedBtn = null;
        btn.className =
          'flex flex-col items-center justify-center gap-0 py-1 px-1 border border-stone-300 rounded-md bg-white text-stone-700 text-[10px] font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors';
        delete btn.dataset.selected;
      } else {
        btn.className =
          'flex flex-col items-center justify-center gap-0 py-1 px-1 border border-emerald-600 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-medium transition-colors';
        btn.dataset.selected = 'true';
        selectedBtn = btn;
      }
    });

    grid.append(btn);
  });

  section.append(label, grid);
  return section;
}

function createStateSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'flex flex-col gap-2';

  const label = document.createElement('p');
  label.textContent = '¿En qué estado llegó la caja? (Opcional)';
  label.className = 'text-xs md:text-sm font-medium text-stone-700';

  const list = document.createElement('div');
  list.className = 'flex flex-col gap-1.5 w-full state-list';

  const options: StateOption[] = [
    { icon: createCheckIcon(), label: 'Perfecta' },
    { icon: createWarningIcon(), label: 'Un poco golpeado' },
    { icon: createXIcon(), label: 'Incompleto' },
  ];

  let selectedBtn: HTMLButtonElement | null = null;

  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<span class="flex-shrink-0">${option.icon}</span><span>${option.label}</span>`;
    btn.className =
      'flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-lg bg-white text-stone-700 text-xs font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left';

    btn.addEventListener('click', () => {
      if (selectedBtn && selectedBtn !== btn) {
        selectedBtn.className =
          'flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-lg bg-white text-stone-700 text-xs font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left';
        delete selectedBtn.dataset.selected;
      }
      if (btn === selectedBtn) {
        selectedBtn = null;
        btn.className =
          'flex items-center gap-2 py-2 px-3 border border-stone-300 rounded-lg bg-white text-stone-700 text-xs font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-colors w-full text-left';
        delete btn.dataset.selected;
      } else {
        btn.className =
          'flex items-center gap-2 py-2 px-3 border border-emerald-600 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium transition-colors w-full text-left';
        btn.dataset.selected = 'true';
        selectedBtn = btn;
      }
    });

    list.append(btn);
  });

  section.append(label, list);
  return section;
}

function createPhotoSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'flex flex-col gap-1.5';

  const label = document.createElement('p');
  label.textContent = 'Subir foto (Opcional)';
  label.className = 'text-xs md:text-sm font-medium text-stone-700';

  const description = document.createElement('p');
  description.textContent =
    'Si quieres, súbenos una foto de lo que recibiste. A nuestro equipo le llena el corazón saber de ustedes.';
  description.className = 'text-[10px] text-stone-400';

  const wrapper = document.createElement('div');
  wrapper.className =
    'flex items-center gap-2 border border-stone-300 rounded-lg p-2 bg-white';

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.className = 'hidden';
  input.id = 'photo-input';

  const customBtn = document.createElement('label');
  customBtn.htmlFor = 'photo-input';
  customBtn.textContent = 'Seleccionar foto';
  customBtn.className =
    'cursor-pointer py-1.5 px-3 rounded-lg text-xs font-medium bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors flex-shrink-0';

  const fileName = document.createElement('span');
  fileName.textContent = 'Ningún archivo seleccionado';
  fileName.className = 'text-xs text-stone-400 truncate';

  input.addEventListener('change', () => {
    if (input.files && input.files[0]) {
      fileName.textContent = input.files[0].name;
      fileName.className = 'text-xs text-stone-700 truncate';
    } else {
      fileName.textContent = 'Ningún archivo seleccionado';
      fileName.className = 'text-xs text-stone-400 truncate';
    }
  });

  wrapper.append(customBtn, fileName, input);
  section.append(label, description, wrapper);
  return section;
}

export function createSurveyForm(
  onSubmit: (data: SurveyData) => void,
  onSkip: () => void,
): HTMLElement {
  const container = document.createElement('div');
  container.className = 'flex flex-col gap-4 w-full';

  const h3 = document.createElement('h3');
  h3.className = 'text-lg md:text-xl lg:text-2xl font-bold text-stone-800';
  h3.textContent = '¡Qué alivio saber que llegó!';

  const p = document.createElement('p');
  p.className = 'text-xs md:text-sm text-stone-600';
  p.textContent =
    'Si tienes un minutito, cuéntanos cómo llegó todo, y ayúdanos a seguir con nuestra misión';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'button';
  submitBtn.textContent = 'Enviar detalles';
  submitBtn.className =
    'w-full max-w-xs py-2.5 md:py-3 bg-emerald-600 text-white font-bold text-base md:text-lg rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-transform';
  submitBtn.addEventListener('click', () => {
    const categoryBtn = container.querySelector<HTMLElement>(
      '.category-grid [data-selected]',
    );
    const stateText =
      container.querySelector<HTMLElement>('.state-list [data-selected]')
        ?.childNodes[1]?.textContent ?? null;
    const fileInput = container.querySelector<HTMLInputElement>('#photo-input');
    const data: SurveyData = {
      category: categoryBtn?.childNodes[1]?.textContent?.trim() ?? null,
      state: stateText?.trim() ?? null,
      file: fileInput?.files?.[0] ?? null,
    };
    onSubmit(data);
  });

  const skipBtn = document.createElement('button');
  skipBtn.type = 'button';
  skipBtn.textContent = 'No tengo tiempo, gracias igual la recibimos';
  skipBtn.className =
    'w-full max-w-xs py-2 md:py-2.5 bg-white border border-stone-300 text-stone-600 font-medium text-xs md:text-sm rounded-2xl hover:border-stone-400 hover:text-stone-800 active:scale-95 transition-all';
  skipBtn.addEventListener('click', onSkip);

  container.append(
    h3,
    p,
    createCategorySection(),
    createStateSection(),
    createPhotoSection(),
    submitBtn,
    skipBtn,
  );
  return container;
}
