const TOKEN_KEY = "soulphia_token"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setCredentials = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}
