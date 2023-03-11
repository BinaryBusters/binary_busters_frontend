import { useState } from 'react'

export default function CYL() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="flex flex-col justify-evenly w-10/12 h-full">
            <h1 className="text-3xl font-bold self-center text-center">Choose your <br /> learning</h1>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className={`flex justify-end items-center w-full py-6 rounded-3xl border-2 border-solid border-secondary gap-5 shadow-lg cursor-pointer ${selected === "bughunt" ? "bg-primary" : "bg-secondary-content"}`}
                    onClick={() => setSelected("bughunt")}>
                    <img src="./bughunter.png" className="w-20"></img>
                    <div className="flex flex-col justify-center w-7/12">
                        <h2 className="text-secondary font-bold text-2xl">Bug Hunt</h2>
                        <p className="text-secondary text-lg">Hunt for bugs</p>
                    </div>
                </div>
                <div className={`flex justify-end items-center w-full py-6 rounded-3xl border-2 border-solid border-secondary gap-5 shadow-lg cursor-pointer ${selected === "workwise" ? "bg-primary" : "bg-secondary-content"}`}
                    onClick={() => setSelected("workwise")}>
                    <img src="./workwise.png" className="w-20"></img>
                    <div className="flex flex-col justify-center w-7/12">
                        <h2 className="text-secondary font-bold text-2xl">Work Wise</h2>
                        <p className="text-secondary text-lg">Behaviour check</p>
                    </div>
                </div>
            </div>
            <div className={`btn btn-bloc text-2xl ${!selected && "btn-disabled"}`} onClick={() => selected && alert("Ayo let's continue")}>Continue</div>
        </div>
    )
}


