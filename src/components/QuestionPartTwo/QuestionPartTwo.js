import React from "react";

const QuestionPartTwo = () => {
    return (
        <div>
            <div class="flex flex-row">
                <p class="text-lg p-4 text-blue-500">Question 7 - 10</p>
                <button class="px-6 m-4 bg-blue-200 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
                    <span class="font-normal">Click here for listen</span></button>
            </div>
            <p class="font-normal text-lg mb-4 px-4">Complete the form below, using NO MORE THAN THREE WORDS AND/OR NUMBER for each answer</p>
            <div class="grid grid-cols-1 bg-slate-200 h-max font-normal p-2">
                <p class="text-center text-2xl">Travel Safe</p>
                <div class = "px-12">
                    <p class="mt-8 ml-2">Department: Motor Insurance</p>
                    <div class="ml-2 mb-4">
                        <p class="text-xl mt-8 mb-2">Client Details: </p>
                        <div class="flex flex-row mb-2">
                            <p>Name: Elisabeth</p><p class="font-bold ml-2 bg-slate-300 h-max w-8 text-center text-slate-400">[7]</p><p class="mx-2">.......</p>
                        </div>
                        <p class="mb-2">Date of birth: 8. 10. 1975</p>
                        <div class="flex flex-row mb-2">
                            <p class="mb-2">Address: </p><p class="font-bold mx-2 bg-slate-300 h-max w-8 text-center text-slate-400">[8]</p><p class="mx-2">....... </p><p>(street) Callington (town)</p>
                        </div>
                        <div class="flex flex-row">
                            <p>Policy number: </p><p class="font-bold ml-2 bg-slate-300 h-max w-10 text-center text-slate-400">[10]</p><p class="mx-2">.......</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionPartTwo;