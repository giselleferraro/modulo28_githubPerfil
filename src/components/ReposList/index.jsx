import { useEffect, useState } from "react";

import styles from './RespostList.module.css';

const RepostList = ({nomeUsuario}) => { 
    const [repos, setRepos] = useState ([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect (() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then (res => res.json())
        .then (resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            },3000);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}> 
                        <div className={styles.listItemName}>
                            <b>Nome:</b>
                            {repositorio.name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b>
                            {repositorio.language}
                        </div>
                        <a className={styles.listItemLink}  target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                    <li>Repositório</li>
                </ul>
            )}
        </div>
    )
}

export default RepostList;