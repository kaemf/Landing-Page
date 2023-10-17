const rate : NodeListOf<HTMLDivElement> = document.querySelectorAll('.rating'),
button : NodeListOf<HTMLDivElement> = document.querySelectorAll('.btn'),
titleReview : NodeListOf<HTMLDivElement> = document.querySelectorAll('.title-review'),
textReview : NodeListOf<HTMLDivElement> = document.querySelectorAll('.review-text-content'),
buttonDrop : NodeListOf<HTMLElement> = document.querySelectorAll('.review-icon'),
animationSpace : NodeListOf<HTMLDivElement> = document.querySelectorAll('.additional-empty-space-animation');

rate.forEach(rateObject => {
    for(let i = 0; i < parseFloat(rateObject.getAttribute('count')); i++){
        rateObject.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M32.1772 13.0785H20.2924L16.6076 1.55701L12.9228 13.0785H1.03798L10.6392 20.1887L7.00633 31.6583L16.6076 24.5481L26.2089 31.6583L22.5241 20.1368L32.1772 13.0785Z" fill="#FFCE31"/>
        </svg>`
    }
});

button.forEach(btnObject => {
    btnObject.addEventListener('click', () => {
        button.forEach(btn => {
            btn.classList.replace('active', 'unactive');
        });
        btnObject.classList.replace('unactive', 'active');
        if (btnObject.getAttribute('type') === 'initial'){
            titleReview.forEach(title => {
                title.innerHTML = 'Best of Best';
            });
            textReview.forEach(text => {
                text.innerHTML = 'Best of the best of the best of the best Best of the best of the best of the best';
            });
        }
        else if (btnObject.getAttribute('type') === 'middle'){
            titleReview.forEach(title => {
                title.innerHTML = 'The Best of Best';
            });
            textReview.forEach(text => {
                text.innerHTML = 'The Best of the best of the best of the best Best of the best of the best of the best';
            });
        }
        else if (btnObject.getAttribute('type') === 'high'){
            titleReview.forEach(title => {
                title.innerHTML = 'The Most Best of Best';
            });
            textReview.forEach(text => {
                text.innerHTML = 'The Most Best of the best of the most best of the most best The Most Best of the best of the most best of the most best';
            });
        }
    });
});

let dropActive : Boolean = false;
buttonDrop.forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.nextElementSibling as HTMLDivElement,
            objectSpace = container.closest('.about-list-item')?.querySelector('.additional-empty-space-animation') as HTMLDivElement;

        if (!dropActive) {
            btn.style.transform = 'rotate(45deg)';
            objectSpace.style.maxHeight = '100px';
            container.style.setProperty('--content-text-item', "'at.Always great.Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great'");
            setTimeout(() => {
                container.style.setProperty('--opacity-text-item', '1');
                objectSpace.style.maxHeight = '0px';
                dropActive = true;
            }, 300);
        } else {
            btn.style.transform = '';
            container.style.setProperty('--opacity-text-item', '0');
            objectSpace.style.maxHeight = '100px';
            setTimeout(() => {
                container.style.setProperty('--content-text-item', "''");
                objectSpace.style.maxHeight = '0px';
            }, 300);
            dropActive = false;
        }
    });
});
