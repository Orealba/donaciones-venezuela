export function createFooterLinks(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center gap-1';

  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Más información';
  link.className = 'text-sm md:text-base text-amber-700 underline hover:text-amber-900';

  const small = document.createElement('p');
  small.className = 'text-xs md:text-sm text-stone-400';
  small.textContent = 'Toca el botón para confirmar que llegó a salvo.';

  container.append(link, small);
  return container;
}
