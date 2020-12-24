interface IPost {
    user: number
    title: string
    text: string
    date: string
}

type ContextType = {
    posts: IPost[]
    savePost: (post: IPost) => void
    updatePost: (id: number) => void
}