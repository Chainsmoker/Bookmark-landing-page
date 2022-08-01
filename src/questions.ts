export function questions(elements: HTMLElement){
    const answer = document.querySelectorAll('.question--answer') as NodeListOf<HTMLDivElement>;
    // @ts-ignore
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', ()=>{
        elements[i].classList.toggle('rotate')
        answer[i].classList.toggle('answer--selected');
      });  
    };
};