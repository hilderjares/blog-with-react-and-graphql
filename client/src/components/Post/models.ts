export interface Author {
    name: string
}

export interface Post {
    id: string
    title: string
    category: Category
    author: Author
}

export interface Category {
    name: string
}
