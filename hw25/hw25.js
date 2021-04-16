// Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j.
// Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.
window.onload = () => {
    function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const promise = new Promise((resolve, reject) => {     
        const i = random(1, 2);
        console.log('0');

        if (i === 1) {
            resolve(i);
        } else {
            reject(i);
        }

    });

    promise
        .then((i) => {
            console.log('1');
            return i;
        },
            (i) => {
                console.log('2');
                return i;
            })
        .then((i) => {
            console.log('3');
            throw Error(i);
        })
        .catch((error) => {
                console.log('6');            
                if (+error.message == 1) {
                    return i;
                }                
            })
        .then(() => {
            console.log('7');
        },
            () => {
                console.log('8');
            })
        .then(() => {
            console.log('9');
            throw Error('error');
        },
            () => {
                console.log('10');
            })
        .catch(() => {
                console.log('12');
            });
};