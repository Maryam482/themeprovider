// import React,{createContext} from 'react';
// export const BookContext = createContext();

// class BookContextProvider extends React.Component{
// state= { bookstore :
//       [{name:'HtmlCss', author:'Jon Ducket'},
//        { name:'JavaScript', author:'Mark'},
//        { name:'React', author:'Dave Ceddia'}
// ]
// }

//     render(){
//         return(
//             <BookContext.Provider value = {{...this.state}}>
//               {this.props.children}
//             </BookContext.Provider>
//         )
//     }
// }
// export default BookContextProvider;


//or


import React,{useState,createContext}from 'react';
export const BookContext = createContext()

function BookContextProvider(props){
    const [bookstore, setbooks] = useState([
        { name:'HtmlCss', author:'Jon Ducket'},
        { name:'JavaScript', author:'Mark'},
        { name:'React', author:'Dave Ceddia'}
    ])
    return(
        // <BookContext.Provider value = {{bookstore}}>
        <BookContext.Provider value = {[bookstore,setbooks]}>
          {props.children}
            </BookContext.Provider>
    )
}
export default BookContextProvider;