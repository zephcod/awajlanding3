import axios from "axios"
import { string } from "zod"


const todosApi = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const todosUrlEndpoint = '/faq?limit=2'

export const getTodos = async () => {
    const response = await todosApi.get(todosUrlEndpoint)
    return response.data
}
export const fetcher = (url: string) => axios.get(url).then(res => res.data)
export const addTodo = async ({ userId, title, completed }) => {
    const response = await todosApi.post(todosUrlEndpoint, { userId, title, completed })
    return response.data
}

export const updateTodo = async (todo) => {
    const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo)
    return response.data
}

export const deleteTodo = async ({ id }) => {
    const response = await todosApi.delete(`${todosUrlEndpoint}/${id}`)
    return response.data
}