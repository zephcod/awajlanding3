import axios from "axios"

const aiTextImageApi = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const textImageEndpoint = '/ai/text-image'

export const getTextImage = async () => {
    const res = await fetch('http://localhost:3000/api/ai/text-image')
    const response = await aiTextImageApi.get(textImageEndpoint)
    return response.data
}