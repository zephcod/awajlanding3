'use client'
import {toast} from 'sonner'
import { useState } from 'react'

import useSWR from 'swr'

import {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    todosUrlEndpoint as cacheKey,
} from '@/app/api/faqsApi/faqApi'

import {
    addTodoOptions,
    updateTodoOptions,
    deleteTodoOptions,
} from "@/app/api/faqSWR/todosSWROptions"

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')

    const {
        isLoading,
        error,
        data: _faq,
        mutate,
    } = useSWR(cacheKey, getTodos)

    const addTodoMutation = async (newTodo: { userId: any; title: any; completed: any; id?: number }) => {
        try {
            await mutate(
                addTodo(newTodo),
                addTodoOptions(newTodo)
            )

            toast.success("Faq created successfully.")
        } catch (err) {
            toast.error("Failed to add the new item.", {
                duration: 1000,
            })
        }
    }

    const updateTodoMutation = async (updatedTodo: any) => {
        try {
            await mutate(
                updateTodo(updatedTodo),
                updateTodoOptions(updatedTodo)
            )

            toast.success("Success! Updated item.", {
                duration: 1000,
                icon: '🚀'
            })
        } catch (err) {
            toast.error("Failed to update the item.", {
                duration: 1000,
            })
        }
    }

    const deleteTodoMutation = async ( id: number ) => {
        try {
            await mutate(
                deleteTodo({ id }),
                deleteTodoOptions({ id })
            )

            toast.success("Success! Deleted item.", {
                duration: 1000,
            })
        } catch (err) {
            toast.error("Failed to delete the item.", {
                duration: 1000,
            })
        }
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        addTodoMutation({ userId: 1, title: newTodo, completed: false, id: 9999 })
        setNewTodo('')
    }

    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                UP
            </button>
        </form>
    )

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>{error.message}</p>
    } else {
        content = _faq.faq.slice(0,6).map((item: {question:string, id: number}) => (
                <article key={item.id}>
                    <div className="todo">
                      {item.question}
                        {/* <input
                            type="checkbox"
                            checked={todo.question}
                            onChange={() =>
                                updateTodoMutation({ ...todo, completed: !todo.completed })
                            }
                        /> */}
                        {/* <label htmlFor={todo.id}>{todo.title}</label> */}
                    </div>
                    {/* <button className="trash" onClick={() => deleteTodoMutation({ id: todo.id })}>
                        DELETE
                    </button> */}
                </article>
            )
        )
    }
    
  

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
    }
export default TodoList