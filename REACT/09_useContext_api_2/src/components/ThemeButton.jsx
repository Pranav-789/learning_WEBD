import React from 'react'
import useTheme from '../contexts/theme'

const ThemeButton = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme();
    const onChangeBtn =(e) =>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
  return (
    <div>
      <input type="checkbox" className='h-10 w-10' onChange={onChangeBtn} checked={themeMode==="dark"}/>
    </div>
  )
}

export default ThemeButton
