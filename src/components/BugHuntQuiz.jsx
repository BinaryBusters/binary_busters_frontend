import { useState } from "react";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import Editor from "@monaco-editor/react";
import bugHuntIcon from "../assets/bughunter.png";
import Header from "./Header";
import enterIcon from "../assets/enter.png";

const extension = {
    python: "py",
    javascript: "js",
    java: "java",
    c: "c",
    "c++": "cpp",
    "c#": "cs",
    php: "php",
    ruby: "rb",
};

export default function BugHuntQuiz() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const { language, level } = useParams();
    const questions = useLoaderData()
    const [userAnswer, setUserAnswer] = useState("");
    const [lives, setLives] = useState(5);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-col w-10/12 h-4/5 justify-center">
            <Header
                lives={lives}
                progress={(step * 100) / Object.keys(questions).length}
                backPath={`/bughunt/${language}/level`}
            />
            <h1 className="text-3xl font-bold self-center text-center mt-10">
                Find the bug
            </h1>
            <div className="h-1/2 mt-5 mb-24">
                <div className="flex gap-2.5 bg-black">
                    <img src={bugHuntIcon} className="w-6 h-6"></img>
                    <p className="text-secondary">
                        script.{extension[language.toLowerCase()]}
                    </p>
                </div>
                <Editor
                    theme="vs-dark"
                    language={language === "C++" ? "cpp" : language.toLowerCase()}
                    value={questions[step][0]}
                    options={{
                        readOnly: true,
                        contextmenu: false,
                        fontSize: 16,
                        scrollbar: {
                            vertical: "hidden",
                            verticalHasArrows: false,
                            verticalScrollbarSize: 0,
                            verticalSliderSize: 0,
                        },
                        glyphMargin: false,
                        guides: {
                            highlightActiveIndentation: false,
                            indentation: false,
                        },
                        lightbulb: {
                            enabled: false,
                        },
                        lineNumbersMinChars: 3,
                        // padding: {
                        //   top: 10,
                        //   bottom: 10,
                        // },
                        scrollBeyondLastLine: false,
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
            </div>
            <div className="flex">
                <input
                    type="number"
                    placeholder="The bug is in line..."
                    className="input w-full bg-white rounded-r-none focus:outline-none"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                ></input>
                <div
                    className="flex w-14 bg-secondary-content rounded-r-xl justify-center items-center cursor-pointer"
                    onClick={() => {
                        if (userAnswer) {
                            if (userAnswer != questions[step][1][0]) {
                                setLives((lives) => lives - 1);
                            }
                            setShowModal(true);
                        }
                    }}
                >
                    <img src={enterIcon} className="w-10 h-10"></img>
                </div>
            </div>
            <div
                className={`modal modal-bottom sm:modal-middle ${showModal && "modal-open"
                    }`}
            >
                <div
                    className={`modal-box rounded-none border-t-4 ${userAnswer == questions[step][1][0]
                        ? "border-primary bg-secondary"
                        : "border-error bg-accent"
                        }`}
                >
                    <h3
                        className={`font-bold text-4xl ${userAnswer == questions[step][1][0]
                            ? "text-primary"
                            : "text-red-600"
                            }`}
                    >
                        {userAnswer == questions[step][1][0] ? "Correct!" : "Incorrect."}
                    </h3>
                    <p
                        className={`py-4 text-lg ${userAnswer == questions[step][1][0]
                            ? "text-primary"
                            : "text-red-600"
                            }`}
                    >
                        There is a bug on line {questions[step][1][0]}.
                    </p>
                    <div className="modal-action justify-center">
                        <label
                            htmlFor="my-modal-6"
                            className={`btn btn-wide text-xl ${userAnswer == questions[step][1][0]
                                ? "btn-primary text-white"
                                : "bg-accent-focus border-rose-400 hover:bg-error"
                                }`}
                            onClick={() => {
                                if (lives == 0 || step >= Object.keys(questions).length) {
                                    return navigate("/gameover", { state: { language, level, score: step - (5 - lives) } });
                                }
                                setStep((step) => step + 1);
                                setShowModal(false);
                                setUserAnswer("");
                            }}
                        >
                            Continue
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
