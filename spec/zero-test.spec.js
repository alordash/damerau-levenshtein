const { distance, closest } = require('../lib/damerau-levenshtein');

describe('levenshtein-test', function () {
    //#region distance
    it('distance 0', async function () {
        let val = distance("polynomial", "exponential");
        expect(val).toBe(6);
    });

    it('distance 1', async function () {
        let val = distance("best", "better");
        expect(val).toBe(3);
    });

    it('distance 2', async function () {
        let val = distance("test", "tset");
        expect(val).toBe(1);
    });
    //#endregion

    //#region closest
    it('closest 0', async function () {
        let val = closest("test", ["teeeeest", "testtest", "tset", "tet", "est test"]);
        expect(val.closest_string).toBe("tset");
        expect(val.distance).toBe(1);
    });

    it('closest 1', async function () {
        let val = closest("best", ["the good", "the bad", "the best"]);
        expect(val.closest_string).toBe("the best");
        expect(val.distance).toBe(4);
    });
    //#endregion
});