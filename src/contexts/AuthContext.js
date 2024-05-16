import {createContext, useContext} from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider(props) {

    const [tokenInfo, setTokenInfo] = useState(JSON.parse(localStorage.getItem('tokenInfo')));

    const [user, setUser] = useState(null);

    // Если токен был корректно получен необходимо запросить информацию о пользователе.
    // `/api/auth/user` (Authorization).
    useEffect(function () {
        if (tokenInfo) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.access_token;
            axios
                .post('https://frost.runtime.kz/api/auth/user')
                .then(function (res) {
                    let data = res.data;
                    setUser(data)
                })
        }
    }, [tokenInfo])

    const login = (username, password, setLoading, setError) => {
        // Запрос токена и его сохранение в браузерном хранилище (localStorage).
        axios
            .post('https://frost.runtime.kz/api/auth/token', {
                username,
                password,
            })
            .then(function (res) {
                setLoading(false)
                let data = res.data;
                let tokenInfo = {
                    access_token: data.access_token,
                };
                setTokenInfo(tokenInfo)
                localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
            })
            .catch(function (error) {
                setLoading(false)
                let response = error.response;
                if (response.status === 400) {
                    setError('Неверный логин или пароль');
                }
            })
    };

    const logout = () => {
        // Удалить токен из браузерного хранилища (localStorage).
        localStorage.removeItem('tokenInfo')
        setUser(null)
        setTokenInfo(null)
    };

    // Либо если токена нет, либо если токен есть, и состояние загрузки равно false.

    if (tokenInfo === null || (user !== null)) {
        return (
            <AuthContext.Provider value={{user, login, logout}}>
                {props.children}
            </AuthContext.Provider>
        );
    } else {
        return (
            <>...Loading</>
        );
    }
}

export function useAuth() {
    return useContext(AuthContext);
}
