//액션타입 정의
//액션 타입은 주로 대문자로 작성
export const ADD_TODO = "todos/ADD_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const DELETE_TODO = "todos/DELETE_TODO";

//액션 생성함수 정의
//액션 생성함수는 주로 카밀케이르로 작성

let count = 1;

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo: {
    id: count++,
    title: todo.title,
    content: todo.content,
    isComplete: todo.isComplete,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

//기본값 리덕스가 가지고 있을 기본 state
const initialState = {
  todoList: [
    {
      id: 0,
      title: "리액트 ",
      content: "리엑트 공부하기.",
      isComplete: false,
    },
  ],
};

//리듀서 만들기
//주의 리듀서에서는 불변성을 꼭 지켜줘야합니다.
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //js
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    case TOGGLE_TODO:
      const _todo = state.todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      });
      //js
      return {
        ...state,
        todoList: _todo,
      };
    case DELETE_TODO:
      const _todos = state.todoList.filter((p) => p.id !== action.id); //state의 todoList (위에 todoList이다.)
      //js
      return {
        ...state,
        todoList: _todos,
      };

    default:
      return state;
  }
};

//export default reducer
export default todos;
