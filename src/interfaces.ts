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

type AccountConfirmType = {
    username: string,
    token: string
}

export type { User, LoginUser, AccountConfirmType };