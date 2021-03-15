import React, { useState, useEffect } from 'react';
import Chat from '../components/Messages/Chat';
import Chats from '../components/Messages/Chats.json';

function Messages(){
    const [title, setTitle] = useState(false);
    const[list, setList] = useState(false);
    const[del, setDel] = useState(false);
    const[search, setSearch] = useState("");
    const[chat, setChat] = useState(Chats);
    const[chatsDel, setChatsDel] = useState([]);
    const recent = [
        { mensajes : "No tienes mensajes recientes"}
    ]

    const showNew = () => {
        setTitle(!title);
        setList(false);
    }
    const showRecent = () => {
        setTitle(false);
        setList(false);
        recent.map(i => (
            alert(i.mensajes)
        ))
    }
    const showAll = () => {
        setTitle(false);
        setList(!list);
        setDel(false);
    }
    const showDel = () => {
        setTitle(false);
        setList(false);
        setDel(!del);
    }

    const handleSearch = ((e) => {
        setSearch(e.target.value);
    })
    
    const handleFilter = chat.filter( i => {
        return i.nombre.toLowerCase().includes(search.toLowerCase());
    })

    const handleDelete = (id) => {
        setChat(chat.filter(i => i.id !== id));
        const filtro = chat.filter(i => i.id == id);
        console.log(filtro);
        setChatsDel([...chatsDel, filtro]);
    }
    
    return(
        <div className="messages">
            { title ? <Chat /> : ""}
            {list ? 
                <div className="messages-text">
                    <input type="text" placeholder="Buscador..." value={search} onChange={(e) => handleSearch(e)} />
                    <button onClick={handleSearch}>Search</button>
                    <ul>
                        {handleFilter.map(i => 
                            <li>{i.nombre} 
                                <button onClick={() => handleDelete(i.id)}>Delete</button>
                            </li>)}
                    </ul>
                </div>
            : ""}
            {del ?
                <div>
                    <ul>
                        {chatsDel.map(i => <li>{i.nombre}</li>)}
                    </ul>
                </div>
            : null}

            <div className="msg-nav">
                <input type="submit" value="Nuevo Chat" onClick={showNew}/>
                <input type="submit" value="Chats Recientes" onClick={showRecent}/>
                <input type="submit" value="Todos los Chats" onClick={showAll} />
                <input type="submit" value="Chats eliminados" onClick={showDel}/>
            </div>
        </div> 
    );
}

export default Messages;