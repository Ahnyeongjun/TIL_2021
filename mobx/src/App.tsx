import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class Todo {
    id = Math.random();
    title = '';
    finished = false;

    constructor(title) {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action,
        });
        this.title = title;
    }

    toggle() {
        console.log('toggle');
        this.finished = !this.finished;
    }
}

function createDoubler(title) {
    return makeAutoObservable({
        title,
        finished: false,

        toggle() {
            console.log('toggle');
            this.finished = !this.finished;
        },
    });
    //가지고 있는 모든 속성은 observable로 지정됩니다.
    //모든 getter는 computed로 지정됩니다.
    //모든 setter는 action으로 지정됩니다.
}
class TodoList {
    todos = [];
    get unfinishedTodoCount() {
        return this.todos.filter((todo) => !todo.finished).length;
    }
    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed,
        });
        this.todos = todos;
    }
}

const TodoListView = observer(({ todoList }: any) => (
    <div>
        <ul>
            {todoList.todos.map((todo) => (
                <TodoView todo={todo} key={todo.id} />
            ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
    </div>
));

const TodoView = observer(({ todo }: any) => (
    <li>
        <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
        {todo.title}
    </li>
));

const store = new TodoList([createDoubler('Get Coffee'), createDoubler('Write simpler code')]);
const App = () => {
    return <TodoListView todoList={store} />;
};
export default App;
