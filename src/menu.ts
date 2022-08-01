import close from '../public/images/icon-close.svg';
import hamburger from '../public/images/icon-hamburger.svg';

export function openMenu(element: HTMLButtonElement) {
  let contador = 0;
  const openMenu = () => {
    const menu = document.querySelector<HTMLButtonElement>('.navbar__links')!;
    const btnMenu = document.querySelector<HTMLImageElement>('#btnMenu')!;
    menu.classList.toggle('clip');
    if (contador == 0) {
      btnMenu.src = close;
      contador++;
    } else { btnMenu.src = hamburger; contador=0;};
  }
  element.addEventListener('click', () => openMenu())
}
