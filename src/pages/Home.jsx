import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const [todoList, setTodoList] = useState([]);
  const todoList = useSelector((state) => state.todos.todoList);

  const onaddTodo = () => {
    //setTodoList([...todoList, todo]);
    dispatch(
      addTodo({
        title: title,
        content: content,
        isComplete: false,
      })
    );
    setTitle("");
    setContent("");
  };

  // todoList.push(todo)
  const ondeleteTodo = (id) => {
    //const _todos = todoList.filter((p) => p.id !== id);
    //setTodoList(_todos);
    dispatch(deleteTodo(id));
  };

  const ontoggleTodo = (id) => {
    //const _todo = todoList.map((todo) => {
    //if (todo.id === id) {
    // return { ...todo, isComplete: !todo.isComplete };
    // } else {
    //  return todo;
    // }
    //});
    //setTodoList(_todo);
    dispatch(toggleTodo(id));
  };

  return (
    <div className="layout">
      <div className="container">
        <div>MY Todo List</div>
        <div>React</div>
      </div>
      <div className="add">
        <span
          style={{
            height: "25px",
            borderRadius: "8px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          제목
        </span>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        ></input>

        <div>
          <span
            style={{ marginLeft: "10px", borderRadius: "8px", height: "25px" }}
          >
            내용
          </span>
          <input
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></input>
        </div>
        <button
          style={{
            marginLeft: "auto",
            backgroundColor: "turquoise",
            width: "120px",
            height: "40px",
            borderRadius: "8px",
          }}
          onClick={onaddTodo}
        >
          작성하기
        </button>
      </div>
      <div>
        <div>
          <h1>Working...🔥</h1>
          <div>
            {todoList.map((todo) => {
              if (!todo.isComplete) {
                return (
                  <div className="square-style" key={todo.id}>
                    <Link to={`/detail/${todo.id}`}>상세페이지</Link>
                    <span>{todo.id}</span>
                    <h2>{todo.title}</h2>
                    <div>{todo.content}</div>
                    <div>
                      <button
                        className="addButton1"
                        onClick={() => ondeleteTodo(todo.id)}
                      >
                        삭제하기
                      </button>
                      <button
                        className="addButton2"
                        onClick={() => ontoggleTodo(todo.id)}
                      >
                        {todo.isComplete ? "취소" : "완료"}
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div>
        <h1>Done...</h1>
        <div>
          {todoList.map((todo) => {
            if (todo.isComplete) {
              return (
                <div className="square-style" key={todo.id}>
                  <Link to={`/detail/${todo.id}`}>상세페이지</Link>
                  <span>{todo.id}</span>
                  <h2>{todo.title}</h2>
                  <div>{todo.content}</div>
                  <div>
                    <button
                      className="addButton1"
                      onClick={() => ondeleteTodo(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="addButton2"
                      onClick={() => ontoggleTodo(todo.id)}
                    >
                      {todo.isComplete ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
