import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import lockIcon from "../assets/lock.png";

export default function BugHuntLevel() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
    const { language } = useParams();
    const levels = [{ id: 1, unlocked: true }, { id: 2, unlocked: true }, { id: 3, unlocked: true }, { id: 4, unlocked: false }, { id: 5, unlocked: false }]

    const levelsComponent = levels.map((level) => (<div className={`flex relative justify-center items-center w-16 h-16 cursor-pointer rounded-full ${level.unlocked || "opacity-50"} ${selected === level.id ? "bg-primary hover:bg-primary-focus" : "bg-secondary-content hover:bg-primary-focus"}`}
        key={level.id} onClick={() => level.unlocked && setSelected(level.id)}>
        <p className="text-secondary font-bold text-2xl">{level.id}</p>
        {level.unlocked || <img src={lockIcon} className="absolute w-12 h-12"></img>}
    </div>)
    )

    return (
        <div className="flex flex-col justify-evenly w-10/12 h-full">
            <Header backPath="/bughunt/lang" />
            <h1 className="text-3xl font-bold self-center text-center">Choose your <br /> level</h1>
            <div className="flex justify-center items-center gap-1">
                {levelsComponent}
            </div>
            <div className={`btn btn-block text-2xl ${selected || "btn-disabled"}`} onClick={() => selected && navigate(`/bughunt/${language}/level/${selected}`)}>Continue</div>
        </div>
    )
}