import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import javascriptIcon from '../assets/javascript.png';
import pythonIcon from '../assets/python.png';
import cIcon from '../assets/c.png';
import javaIcon from '../assets/java.png';
import cplusplusIcon from '../assets/cplusplus.png';
import csharpIcon from '../assets/csharp.png';
import phpIcon from '../assets/php.png';
import rubyIcon from '../assets/ruby.png';

export default function BugHuntLang() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
    const languages = [{ name: 'JavaScript', logo: javascriptIcon },
    { name: 'Python', logo: pythonIcon },
    { name: 'C', logo: cIcon },
    { name: 'Java', logo: javaIcon },
    { name: 'C++', logo: cplusplusIcon },
    { name: 'C#', logo: csharpIcon },
    { name: 'PHP', logo: phpIcon },
    { name: 'Ruby', logo: rubyIcon },
    ];

    const languagesComponent = languages.map((language) => {
        return (<div className={`flex items-center w-full p-2.5 rounded-2xl shadow-lg gap-2.5 cursor-pointer ${selected === language.name ? "bg-primary" : "bg-secondary-content"}`}
            key={language.id} onClick={() => setSelected(language.name)}>
            <img src={language.logo} className="w-9"></img>
            <p className="text-secondary font-bold text-2xl">{language.name}</p>
        </div>)
    })

    return (
        <div className="flex flex-col justify-evenly w-10/12 h-full">
            <img src="../arrowback.png" className="absolute w-10 h-10 top-12 cursor-pointer" onClick={() => navigate("/chooseyourlearning")}></img>
            <h1 className="text-3xl font-bold self-center text-center">Choose your <br /> language</h1>
            <div className="flex flex-col justify-center items-center  gap-2.5">
                {languagesComponent}
            </div>
            <div className={`btn btn-block text-2xl ${selected || "btn-disabled"}`} onClick={() => selected && navigate(`/bughunt/${selected}/level`)}>Continue</div>
        </div>
    )
}


