let generator = () => {
    let i = 1;
    while (true) {
        let input = prompt(
        `Enter the "exit" to exit \nPrevious result: ${i}. Enter a new number: `);
        if (+input) {
            i += (+input);
        } else {
            console.error('Invalid number!');
        }
        if (input === 'false') {
            break;
        }
        if (i > 10000) {
            i = 1;
        }
    }
}

generator();