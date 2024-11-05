function generatRandom(n){
    let array = new Array(n);

    for(let i=0; i<n; i++){
        array[i] = Math.floor(Math.random() * 10);
    }

    return array;
}

function sum(array){
    return array.reduce((sum, curr)=> sum + curr, 0);
}

export {generatRandom, sum};