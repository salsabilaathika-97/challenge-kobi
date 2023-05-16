import react from "react";
import placeholder from "../../assets/SM-placeholder.png"

const QuestionPartThree = () => {
    return (
        <div class="mb-4 mt-12">
            <p class="bg-blue-200 p-2 text-slate-700">Part 2 (Question 11 - 24)</p>
            <div class="flex flex-row">
                <p class="text-lg p-4 text-blue-500">Question 11 - 13</p>
                <button class="px-6 m-4 bg-blue-200 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
                    <span class="font-normal">Click here for listen</span></button>
            </div>
            <div class="font-normal italic text-lg mb-4 px-4">
                <p class="mt-2 mb-4">Label the diagram/plan below</p>
                <p class="mt-2 mb-4">Write the correct letter, A-G next to question 11-13</p>
            </div>
            <div class="w-96">
                <img class="mx-48" src={placeholder} />
            </div>
            <div class="flex flex-row m-4">
                <p class="w-8 text-center font-bold ml-2 bg-slate-500 text-white">11</p><p class="font-normal ml-2">traffic lights .........</p>
            </div>
            <div class="flex flex-row m-4">
                <p class="w-8 text-center font-bold ml-2 bg-slate-500 text-white">12</p><p class="font-normal ml-2">petrol station .........</p>
            </div>
            <div class="flex flex-row m-4">
                <p class="w-8 text-center font-bold ml-2 bg-slate-500 text-white">13</p><p class="font-normal ml-2">blue van .........</p>
            </div>
        </div>
    )
}

export default QuestionPartThree;