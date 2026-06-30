export function createHeroMessage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center gap-2 md:gap-4';

  const h1 = document.createElement('h1');
  h1.className = 'text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800';
  h1.textContent = 'Si estás aquí es porque viste una caja de nosotros.';

  const h3 = document.createElement('h3');
  h3.className = 'text-lg md:text-xl lg:text-2xl text-stone-600';
  h3.textContent =
    'En estos días difíciles, les enviamos esta ayuda con mucho cariño desde las afueras de Barcelona, de parte de hermanos de distintas nacionalidades que creemos en ustedes.';

  container.append(h1, h3);
  return container;
}
