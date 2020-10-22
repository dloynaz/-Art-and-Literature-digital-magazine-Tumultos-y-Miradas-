import React,{useEffect, useState} from 'react'

const Word = () => {


    const [palabras, setPalabras] = useState(["ridículas", "extravagantes", "extrañas", "grotescas", "estrafalarias", "escasas", "cortas", "pobres", "irrisorias", "pequeñas", "mezquinas", "exiguas", "insignificantes", "insuficientes"])
    const [palabra, setPalabra] = useState(palabras[0])

    useEffect(() => {

        const interval = setInterval(() => {
    
          triggerWord();
    
        }, 100);
      
      }, [])

    
      let index = 0

      function triggerWord() {
        if (index < (palabras.length - 1)) {
          index++
          setPalabra(palabras[index])
        } else {
          index = 0
          setPalabra(palabras[index])
        }
      }

      return(
            <h2 style={{display: "inline"}}>{palabra}</h2>
      )  
}

export default Word