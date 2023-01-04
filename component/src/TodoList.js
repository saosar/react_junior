import react from "react";
// import { TodoItem } from “./TodoItem”;

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList} ;