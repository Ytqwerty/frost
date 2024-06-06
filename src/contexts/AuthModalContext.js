import React, { createContext, useContext, useState } from 'react';

const AuthModalContext = createContext();

export function AuthModalProvider  (props)  {

    const [modal_registration, setModal_registration] = useState(false);

    const [modal_sign, setModal_sign] = useState(false);

    const[modal_product,setModal_product] = useState(false)

    return (
        <AuthModalContext.Provider value={{
                modal_registration,
                setModal_registration,
                modal_sign,
                setModal_sign,
                modal_product,
                setModal_product
        }}>
            {props.children}
        </AuthModalContext.Provider>
    );
}

export const useAuthModal = () => useContext(AuthModalContext);