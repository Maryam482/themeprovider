import './App.css';
import BookList from './components/BookList';
import BookContextProvider, { BookContext } from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <BookContextProvider>
      <BookList/>
      </BookContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
