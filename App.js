import './App.css';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <BookList/>
    </ThemeContextProvider>
  );
}

export default App;
