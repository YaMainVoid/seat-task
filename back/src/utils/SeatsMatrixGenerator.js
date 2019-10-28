import id from './id';

export default class SeatsMatrixGenerator {
    static generateContent(row) {
        let content;

        // 65 - code of A letter in unicode system
        let A = 65;

        // 26 - count of letters in english alphabet :)
        // if the condition passed then will get AA, BB, CC ect instead of incomprehensible stuffs
        if (row > 26) {
            let count = (row / 26) ^ 0;
            let codes = []
            for (let k = 0; k <= count; k++) {
                codes.push(A + (row % 27));
            }
            content = String.fromCharCode.apply(null, codes);
        } else {
            content = String.fromCharCode(A + row)
        }
        return content;
    }

    static generate(rows, chairs) {
        let inner = [];

        for (let i = 0; i < rows; i++) {
            inner.push([]);
        }

        for (let row = 0; row < rows; row++) {
            for (let chair = 0; chair < chairs + 1; chair++) {
                if (!chair) {
                    let content = SeatsMatrixGenerator.generateContent(row);

                    inner[row][chair] = {
                        id: id.next(),
                        type: 'row_info',
                        existed: true,
                        content
                    }
                } else {
                    inner[row][chair] = {
                        id: id.next(),
                        type: 'seat',
                        existed: true,
                        content: chair,
                        cost: 0,
                        state: 'free'
                    }
                }
            }
        }
        return inner;
    }
}