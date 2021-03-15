import React from 'react';
//import { FaCommentsDollar } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SupportData } from '../components/Support/SupportData';

function Support(){

    const [title, changeTitle] = React.useState(true);
    const [index, setIndex] = React.useState();
    const [display, setDisplay] = React.useState(false);

    const handleTitle = (e) => {
       changeTitle(false);
       setIndex(e);
       setDisplay(true);
    }

    const handleOcult = () =>{
        changeTitle(true);
        setDisplay(false);
    }

    return(
        <>
            <div className="support" >
                <div className="supportContainer">
                        { title ? <h1>What is the problem ?</h1> : ''}
                        <div className="supportItems">
                        <ul> 
                            {SupportData.map((i,item) => (
                                <li key={item} onClick={() => handleTitle(item)}>
                                    <i className={i.cName}>{i.icon}</i>
                                    <p>{i.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                { display ? 
                    <div className="supportDescription">
                        <div className="descriptionContainer">
                            <div className="containerIcon">
                                <i>{SupportData[index].icon}</i>
                            </div>
                            <div className="supportHelp">
                                <div className="titleAndClose">
                                    <h2>{SupportData[index].title}</h2>
                                    <i><AiOutlineClose onClick={handleOcult}/></i>
                                </div>
                                <p>{SupportData[index].description}</p>
                            </div>
                        </div>
                    </div> 
                : ''
                }
                </div>
            </div>
        </>
    );
}

export default Support;