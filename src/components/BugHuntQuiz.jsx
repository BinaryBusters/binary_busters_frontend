import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function BugHuntLang() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
    const languages = [{ name: 'JavaScript', logo: '../javascript.png' },
    { name: 'Python', logo: '../python.png' },
    { name: 'C', logo: '../c.png' },
    { name: 'Java', logo: '../java.png' },
    { name: 'C++', logo: '../cplusplus.png' },
    { name: 'C#', logo: '../csharp.png' },
    { name: 'PHP', logo: '../php.png' },
    { name: 'Ruby', logo: '../ruby.png' },
    ];

    const languagesComponent = languages.map((language, index) => {
        return (<div className={`flex items-center w-full p-2.5 rounded-2xl shadow-lg gap-2.5 cursor-pointer ${selected === language.name ? "bg-primary" : "bg-secondary-content"}`}
            key={index} onClick={() => setSelected(language.name)}>
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
            <div className={`btn btn-block text-2xl ${!selected && "btn-disabled"}`} onClick={() => selected && navigate(`/bughunt/${selected}/0`)}>Continue</div>
        </div>
    )
}


