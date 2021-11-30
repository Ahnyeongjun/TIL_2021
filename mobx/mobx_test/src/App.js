import React from 'react';
import CounterStore from './stores/counter';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import Counter from './components/counter';

const counter = new CounterStore();

export default function App() {
    return (
        <Provider counter={counter}>
            <div>
                <Counter />
            </div>
        </Provider>
    );
}
