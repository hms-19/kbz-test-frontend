export interface BlogCardProps {
    id: number,
    title: string,
    image: string,
    read_time?: number,
    createdAt?: string,
    description ?: string,
    author?: string,
    avatar?: string,
    category?: {
        name: string,
        id: number
    },
    tags?: {
        name: string,
        id: number
    }[]
}

export interface BlogProps extends Array<BlogCardProps>{}

export interface CategoryProps {
    id: number,
    name: string,
    blogs_count: number,
}

export interface TagProps {
    id: number,
    name: string
}