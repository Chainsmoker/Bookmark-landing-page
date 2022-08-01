import './style.css'
import { openMenu } from './menu'
import { slideShow } from './slideshow'
import { questions } from './questions'

// Images
import navbarImage from '../public/images/logo-bookmark-black.svg'
import navbarWahiteImage from '../public/images/logo-bookmark-white.svg'
import homeImage from '../public/images/illustration-hero.svg'
import featuresImage from '../public/images/illustration-features-tab-1.svg'

import chromeImage from '../public/images/logo-chrome.svg'
import firefoxImage from '../public/images/logo-firefox.svg'
import operaImage from '../public/images/logo-opera.svg'

import fbImage from '../public/images/icon-facebook.svg'
import twImage from '../public/images/icon-twitter.svg'

const images = document.querySelectorAll('#image') as NodeListOf<HTMLDivElement>;
const mediaImages = document.querySelectorAll('#media-image') as NodeListOf<HTMLDivElement>;

if (images.length > 0) {
  images[0].innerHTML = `<img src="${navbarImage}" alt=""/>`;
  images[1].innerHTML = `<img src="${homeImage}" alt=""/>`;
  images[2].innerHTML = `<img src="${featuresImage}" alt=""/>`;
  images[3].innerHTML = `<img src="${chromeImage}" alt=""/>`;
  images[4].innerHTML = `<img src="${firefoxImage}" alt=""/>`;
  images[5].innerHTML = `<img src="${operaImage}" alt=""/>`;
  images[6].innerHTML = `<img src="${navbarWahiteImage}" alt=""/>`;
}

if (mediaImages.length > 0) {
  mediaImages[0].innerHTML = `<img src="${fbImage}" alt=""/>`;
  mediaImages[1].innerHTML = `<img src="${twImage}" alt=""/>`;
}

openMenu(document.querySelector<HTMLButtonElement>('#btnMenu')!);
// @ts-ignore
slideShow(document.querySelectorAll('#features-tab') as HTMLCollectionOf<HTMLElement>)!;
// @ts-ignore
questions(document.querySelectorAll('#questionBtn') as HTMLCollectionOf<HTMLElement>)!;