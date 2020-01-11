// TODO: Import json file
import * as data from './vocabulary.json';

// const word = (<any>data).financial;
// console.log(word);

const get_word_object = (): any => {
    const keys: string[] = Object.keys(data);
    const id: number = (Math.random() * keys.length) >> 0;
    return Object.assign({key: keys[id]}, data[keys[id]]);
};

const update = () => {
    let object = get_word_object();
    document.getElementById('word').innerHTML = object.key;
}

document.querySelector('button').addEventListener('click', () => {
    update();
    // TODO: Check the answer
    // TODO: Switch the flag
});