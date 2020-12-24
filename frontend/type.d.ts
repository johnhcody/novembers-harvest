interface IPost {
    user: number
    title: string
    text: string
    date: date
}

type ContextType = {
    posts: IPost[]
    savePost: (post: IPost) => void
    updatePost: (id: number) => void
}