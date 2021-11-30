import { action, makeAutoObservable, makeObservable } from 'mobx';

class CounterStore {
    number = 0;

    constructor() {
        makeObservable(this, { number: number, increase: action, decrease: action });
    }

    increase = () => {
        console.log('증가');
        this.number++;
    };

    decrease = () => {
        this.number--;
    };
}

export default CounterStore;
