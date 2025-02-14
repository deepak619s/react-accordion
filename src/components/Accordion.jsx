import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { FAQ } from "../ui/FAQ";

export const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);

    const handleButton = (id) => {
        setActiveId((prevId) => (prevId === id ? false : id));
    };

    useEffect(() => {
        setData(faq);
    }, []);

    // console.log(data);

    return(
        <>
            <h1>The Accordion</h1>  
            <ul className="section-accordion">
                {data.map((curElem) => {
                    return(
                        <FAQ key={curElem.id} curData={curElem} isActive={activeId === curElem.id} onToggle={() => handleButton(curElem.id)}></FAQ>
                    );
                })};
            </ul>    
        </>
    ); 
};