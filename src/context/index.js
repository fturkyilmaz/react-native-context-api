import React, {createContext, useContext, useReducer} from 'react';

//Context oluşturuyoruz.

const MainContext = createContext();

// State Default değerleri

const initialState = {
  theme: 'light',
  title: 'React Native Context Api Sample Example',
  message:
    'Furkan Türkyılmaz Context Api Global State Management Simple Example',
  linkedin: 'https://www.linkedin.com/in/furkanturkyilmaz/',
};

// Reducer Method tanımlıyoruz.

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };

    case 'TOGGLE_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

//Provider içinde state ve dispatch değişkenlerini tanımlıyoruz.

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export {MainContext, ContextProvider, useContext};
