var rate = document.querySelectorAll('.rating'), button = document.querySelectorAll('.btn'), titleReview = document.querySelectorAll('.title-review'), textReview = document.querySelectorAll('.review-text-content'), buttonDrop = document.querySelectorAll('.review-icon'), animationSpace = document.querySelectorAll('.additional-empty-space-animation');
rate.forEach(function (rateObject) {
    for (var i = 0; i < parseFloat(rateObject.getAttribute('count')); i++) {
        rateObject.innerHTML += "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\">\n            <path d=\"M32.1772 13.0785H20.2924L16.6076 1.55701L12.9228 13.0785H1.03798L10.6392 20.1887L7.00633 31.6583L16.6076 24.5481L26.2089 31.6583L22.5241 20.1368L32.1772 13.0785Z\" fill=\"#FFCE31\"/>\n        </svg>";
    }
});
button.forEach(function (btnObject) {
    btnObject.addEventListener('click', function () {
        button.forEach(function (btn) {
            btn.classList.replace('active', 'unactive');
        });
        btnObject.classList.replace('unactive', 'active');
        if (btnObject.getAttribute('type') === 'initial') {
            titleReview.forEach(function (title) {
                title.innerHTML = 'Best of Best';
            });
            textReview.forEach(function (text) {
                text.innerHTML = 'Best of the best of the best of the best Best of the best of the best of the best';
            });
        }
        else if (btnObject.getAttribute('type') === 'middle') {
            titleReview.forEach(function (title) {
                title.innerHTML = 'The Best of Best';
            });
            textReview.forEach(function (text) {
                text.innerHTML = 'The Best of the best of the best of the best Best of the best of the best of the best';
            });
        }
        else if (btnObject.getAttribute('type') === 'high') {
            titleReview.forEach(function (title) {
                title.innerHTML = 'The Most Best of Best';
            });
            textReview.forEach(function (text) {
                text.innerHTML = 'The Most Best of the best of the most best of the most best The Most Best of the best of the most best of the most best';
            });
        }
    });
});
var dropActive = false;
buttonDrop.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var _a;
        var container = btn.nextElementSibling, objectSpace = (_a = container.closest('.about-list-item')) === null || _a === void 0 ? void 0 : _a.querySelector('.additional-empty-space-animation');
        if (!dropActive) {
            btn.style.transform = 'rotate(45deg)';
            objectSpace.style.maxHeight = '100px';
            container.style.setProperty('--content-text-item', "'at.Always great.Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great. Always great'");
            setTimeout(function () {
                container.style.setProperty('--opacity-text-item', '1');
                objectSpace.style.maxHeight = '0px';
                dropActive = true;
            }, 300);
        }
        else {
            btn.style.transform = '';
            container.style.setProperty('--opacity-text-item', '0');
            objectSpace.style.maxHeight = '100px';
            setTimeout(function () {
                container.style.setProperty('--content-text-item', "''");
                objectSpace.style.maxHeight = '0px';
            }, 300);
            dropActive = false;
        }
    });
});
