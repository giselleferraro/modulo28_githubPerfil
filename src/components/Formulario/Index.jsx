import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        console.log("O componenete iniciou");
        return ()=> {
            console.log("O compononente finalzou")
        }
    }, [])
    
    useEffect(() => {
        console.log("o estado do nome mudou");
    }, [nome])

    const alteraNome = (evento) => {
        setNome (evento.target.value)
    }

    const renderizaRestultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, foi reprovado</p>
            )
        }
    }


    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item} >{item}</li>
            ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />

            {renderizaRestultado()}
        </form>
    )
}

export default Formulario