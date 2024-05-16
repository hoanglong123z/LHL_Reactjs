import React, { createContext, useContext, useState } from 'react'
import Lhl_useContext1 from './Lhl_useContext1';
export const ThemeContext = createContext(); //tạo ngữ cảnh để chia sẻ
export default function Lhl_useContext() {
    //state
    const [theme, settheme] = useState('Green');
    // const toggleTheme = () => {
    //     settheme(theme === 'red' ? 'dark' : 'light')
    // }

    //hàm thay đổi theme
    const lhlhandlechange = (toggle) =>{
        settheme(theme === 'Green' ? 'Pink' : 'Green')
    }
  return (
    <ThemeContext.Provider value = {theme}>
    <div className='alert'>
        <h2>Demo useContext</h2>
        <Lhl_useContext1/>
        <button onClick={lhlhandlechange}>Đổi Màu Cho đặc sắc</button>
    </div>
    </ThemeContext.Provider>
  )
}
