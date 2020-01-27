import React, { useState, useEffect } from 'react'
import { fakeRequest } from '../../utils/mocks'

export const AuthContext = React.createContext()

export function AuthProvider({children}) {
 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = () => fakeRequest(false)
        .then(() => setIsAuthenticated(true))
        .catch(() => setIsAuthenticated(false))
        .then(() => setIsLoading(false))

    const login = credentials => {
        setIsLoading(true)
        fakeRequest(true)
            .then(() => {
                setIsLoading(false)
                setIsAuthenticated(true)
            })
            .catch(error => {
                alert(error)
                setIsAuthenticated(false)
            })
    }
    const logout = () => {
        setIsLoading(true)
        fakeRequest(true)
            .then(() => {
                setIsLoading(false)
                setIsAuthenticated(false)
            })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
  }