import { useTheme } from './contexts/ThemeContext'
const Card = () => {
    const {currentTheme} = useTheme();
  return (
    <div className={`h-40 w-40 rounded-lg ${currentTheme === 'dark' ? "bg-amber-900" : "bg-teal-200"}`}>
      
    </div>
  )
}

export default Card
