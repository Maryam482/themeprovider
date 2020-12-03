import React,{useContext,useState} from 'react';
import {ThemeContext} from '../context/ThemeContext'
function BookList(){
    const {isLight, light, dark} = useContext(ThemeContext);
    // consolog.log(theme)
    const ui = isLight? light: dark;
    //console.log(ui)
    const [books, setbooks] = useState([
       { name:'HtmlCss', author:'Jon Ducket'},
       { name:'JavaScript', author:'Mark'},
       { name:'React', author:'Dave Ceddia'}
    ])
    return(
  <div style={{backgroundColor: ui.bg, color: ui.text}}>
      <ul>
          {books.map((item) => (
              <li  key={item.name}>{`${item.name} is written by ${item.author}`}</li>
          )
         )}
         
      </ul>
  </div>
    )
}
export default BookList