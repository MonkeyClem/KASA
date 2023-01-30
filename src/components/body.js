// import React from 'react'
import '../styles/body.css'

export function Body({children}){
        //Nous loggons la props children, afin d'inspecter ce qui se trouve dedans.  
        //Résultat : Apparait sous un format peu lisible.
        // console.log (children)
      
        // //Possibilité d'utiliser la méthode toArray, qui transforme props.children en tableau. Nous mappons ensuite dessus afin de le parcourir 
        // const bodyChild = React.Children.toArray(children).map(enfant => enfant.props.children)
        // console.log(bodyChild)
      
        return children
                
}
