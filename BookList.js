import React,{useContext,useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import{ BookContext} from '../context/BookContext';
function BookList(){
    const {isLight, light, dark} = useContext(ThemeContext);
    // const {bookstore} = useContext(BookContext)
    const[bookstore, setbooks] = useContext(BookContext);
    var newId = bookstore.length+1;
    console.log(bookstore)
    // consolog.log(theme)
    const ui = isLight? light: dark;
    //console.log(ui)
    // const [books, setbooks] = useState([
    //    { name:'HtmlCss', author:'Jon Ducket'},
    //    { name:'JavaScript', author:'Mark'},
    //    { name:'React', author:'Dave Ceddia'}
    // ])
    return(
       <div style={{backgroundColor: ui.bg, color: ui.text}}>
           {/* <button onClick={()=>setbooks([...bookstore, {name:'NewBook', author:'levios', id:{newId}}])}>Add</button>  */}
          < button onClick={()=>setbooks([...bookstore,{name:'sds',author:'sdasd', id:newId}])}>Add</button>
      <ul>
          {bookstore.map((item) => (
              <li key={item.name}>{`${item.name} is written by ${item.author}`}</li>
          )
         )}
         
      </ul>
  </div>
    )
}
export default BookList;
