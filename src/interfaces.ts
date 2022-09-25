type User = {
    first_name?: string,
    last_name?: string,
    username: string,
    email: string,
    password: string
}

type LoginUser = {
    username: string,
    password: string
}

export type { User, LoginUser };