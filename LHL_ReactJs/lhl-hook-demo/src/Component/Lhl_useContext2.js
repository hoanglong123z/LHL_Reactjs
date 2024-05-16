import React, { useContext } from 'react'
import { ThemeContext } from './Lhl_useContext'

export default function Lhl_useContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
        <h2>Lhl_useContext2</h2>
        <p>
            <b>2210900037</b>
            <b>Lê Hoàng Long</b>
            <i>k22Cnt3</i>
        </p>
    </div>
  )
}
