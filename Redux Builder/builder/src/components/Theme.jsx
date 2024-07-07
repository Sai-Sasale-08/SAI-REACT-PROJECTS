import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme } from '../Theme/action';


const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.ThemeReducer);
  console.log(theme);

  return (
    <div>
      <button onClick={() => dispatch(ChangeTheme("light"))} disabled={theme === 'light'}>Switch to Light</button>
      <button onClick={() => dispatch(ChangeTheme("dark"))} disabled={theme === 'dark'}>Switch to Dark</button>
    </div>
  )
}

export default Theme;