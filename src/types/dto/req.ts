interface CreateCastRequest {
    name: string,
    language: string,
    status: string,
    rating: number
}

interface UpdateCastRequest {
    id: number,
    name: string,
    language: string,
    status: string,
    rating: number
}