/**
 *
 * @param { * } array
 * @returns { boolean }
 */

export const isArrayOfNumbers = (array = []) => {
    if(!Array.isArray(array)) {
        return false;
    }

    
        for(let i = 0; i < array.length; i++) {
            if(typeof array[i] !== 'number' || Number.isNaN(array[i])) {
                return false;
            } 
    }
    return true;
};
