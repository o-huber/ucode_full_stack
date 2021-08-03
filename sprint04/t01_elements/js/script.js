const li = document.querySelectorAll('li');

li.forEach(atr1 => {
    let classAttribute = atr1.getAttribute('class');
    let dataElement = atr1.getAttribute('data-element');
    if (classAttribute == null) {
        atr1.classList.add('unknown');
    };
    if (dataElement == null) {
        atr1.setAttribute('data-element', 'none');
    };
    atr1.append(document.createElement('br'));
    dataElement = atr1.getAttribute('data-element').split(' ');
    dataElement.forEach(atr2 => {
        const div = document.createElement('div');
        atr1.append(div);
        div.setAttribute(`class`, `elem ${atr2}`);
        if (atr2 == 'none') {
            const div2 = document.createElement('div');
            div2.setAttribute(`class`, `line`);
            div.append(div2);
        };
    });
});