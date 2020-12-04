import React, {createContext} from 'react';
export const ThemeContext = createContext();

 class ThemeContextProvider extends React.Component{
   state = {
       isLight: false,
       light : { text:'black', bg:'white'},
       dark : {text:'white', bg:'black'}
   }
   render(){
    console.log(this.props.children)
       return(
        <ThemeContext.Provider value ={{...this.state}}>
            {this.props.children}
         </ThemeContext.Provider>
       )

   }
 }
 export default ThemeContextProvider;

