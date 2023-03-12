import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import bugHuntIcon from "../assets/bughunter.png";

const extension = {
    "python": "py",
    "javascript": "js",
    "java": "java",
    "c": "c",
    "c++": "cpp",
    "c#": "cs",
    "php": "php",
    "ruby": "rb"
}

export default function BugHuntQuiz() {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const { language } = useParams();
    const dummy = {
        "1": ["def find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num\n            max_num = num\n    return max_num\n\nnumbers = [1, 3, 5, 2, 4]\nprint(find_max(numbers))", [3]],
        "2": ["def calculate_product(n):\n    product = 1\n    for i in range(0, n):\n        product *= i\n    return product\n\nprint(calculate_product(5))", [3]],
        "3": ["def fizzbuzz(n):\n    for i in range(1, n+1):\n        if i % 3 == 0:\n            print(\"Fizz\")\n        elif i % 5 == 0:\n            print(\"Buzz\")\n        elif i % 3 == 0 and i % 5 == 0:\n            print(\"FizzBuzz\")\n        else:\n            print(i)\n\nfizzbuzz(15)", [5, 7]],
        "4": ["def binary_search(numbers, target):\n    low = 0\n    high = len(numbers) - 1\n    while low <= high:\n        mid = (low + high) / 2\n        if numbers[mid] == target:\n            return mid\n        elif numbers[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nnumbers = [1, 2, 3, 4, 5]\nprint(binary_search(numbers, 3))", [7]],
        "5": ["def remove_duplicates(numbers):\n    unique_numbers = []\n    for num in numbers:\n        if num not in unique_numbers:\n            unique_numbers.append(num)\n    return unique_numbers\n\nnumbers = [1, 2, 2, 3, 4, 4, 5]\nprint(remove_duplicates(numbers))", [3]],
        "6": ["def find_average(numbers):\n    sum = 0\n    for num in numbers:\n        sum += num\n    average = sum / len(numbers)\n    return average\n\nnumbers = [1, 2, 3, 4, 5]\nprint(find_average(numbers))\n", [3]],
        "7": ["def is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nprint(is_prime(7))", [4]],
        "8": ["def find_min(numbers):\n    min_num = numbers[0]\n    for num in numbers:\n        if num < min_num:\n            min_num = num\n    return min_num\n\nnumbers = [5, 2, 9, 1, 5]\nprint(find_min(numbers))", [2]],
        "9": ["def merge_sort(numbers):\n    if len(numbers) <= 1:\n        return numbers\n    mid = len(numbers) // 2\n    left = merge_sort(numbers[:mid])\n    right = merge_sort(numbers[mid:])\n    sorted_numbers = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] < right[j]:\n            sorted_numbers.append(left[i])\n            i += 1\n        else:\n            sorted_numbers.append(right[j])\n            j += 1\n    sorted_numbers += left[i:]\n    sorted_numbers += right[j:]\n    return sorted_numbers\n\nnumbers = [5, 2, 9, 1, 5]\nprint(merge_sort(numbers))", [7]],
        "10": ["def reverse_list(numbers):\n    reversed_list = []\n    for i in range(len(numbers), 0, -1):\n        reversed_list.append(numbers[i])\n    return reversed_list\n\nnumbers = [1, 2, 3, 4, 5]\nprint(reverse_list(numbers))", [3, 4]]
    }

    return (
        <div className="flex flex-col w-10/12 h-4/5 justify-evenly">
            <h1 className="text-3xl font-bold self-center text-center">Find the bug</h1>
            <div className="h-1/2">
                <div className="flex gap-2.5 bg-black">
                    <img src={bugHuntIcon} className="w-6 h-6"></img>
                    <p className="text-secondary">script.{extension[language.toLowerCase()]}</p>
                </div>
                <Editor
                    theme="vs-dark"
                    language={language.toLowerCase()}
                    value={dummy["1"][0]}
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
                            indentation: false
                        },
                        lightbulb: {
                            enabled: false
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
            <input type="text" placeholder="" className="input w-full bg-white"></input>
        </div>
    )
}


