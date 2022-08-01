import featuresTab1Image from '../public/images/illustration-features-tab-1.svg'
import featuresTab2Image from '../public/images/illustration-features-tab-2.svg'
import featuresTab3Image from '../public/images/illustration-features-tab-3.svg'

export function slideShow(elements: HTMLElement){
    const infoImage = document.querySelector<HTMLImageElement>('.features__container #image img')!;
    const infoTitle = document.querySelector<HTMLDivElement>('.features__info h1')!;
    const infoDesc = document.querySelector<HTMLElement>('.features__info p')!;

    // @ts-ignore
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => {
            if (i === 0) {
                infoImage.src = featuresTab1Image;
                infoTitle.textContent = 'Bookmark in one click';
                infoDesc.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.`
            } else if (i == 1){
                infoImage.src = featuresTab2Image;
                infoTitle.textContent = 'Intelligent search';
                infoDesc.textContent = `Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.`
            } else if (i == 2) {
                infoImage.src = featuresTab3Image;
                infoTitle.textContent = 'Share your bookmarks';
                infoDesc.textContent = `Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.`
            };
        });
    }
};