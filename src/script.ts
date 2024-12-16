console.log('Hello TypeScript !');

function wait(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, time);
    });
}

async function viewMessage() {
    console.log('Premier message !!!');
    await wait(500);
    console.log('Deuxieme message !!!');
}
viewMessage();
