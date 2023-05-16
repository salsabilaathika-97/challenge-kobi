import React from "react";

const QuestionPartOne = () => {
    return (
        <div>
            <p class="bg-blue-200 p-2 text-slate-700">Part 1 (Question 1 - 10)</p>
            <div class="flex flex-row">
                <p class="text-lg p-4 text-blue-500">Question 1 - 6</p>
                <button class="px-6 m-4 bg-blue-200 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                </svg>
                    <span class="font-normal">Click here for listen</span></button>
            </div>
            <div class="p-4 text-slate-500 font-normal">
                <div class="flex flex-row mt-2">
                    <p class="w-8 text-center font-bold ml-2 bg-slate-300 text-slate-400">1.</p><p class = "ml-2"> The reservation is for today</p>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-1" class="text-lg px-2">
                        True
                    </label>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-2" class="text-lg px-2">
                        False
                    </label>
                </div>
            </div>
            <div class="p-4 text-slate-500 font-normal">
                <div class="flex flex-row mt-2">
                    <p class="w-8 text-center font-bold ml-2 bg-slate-300 text-slate-400">2.</p><p class = "ml-2"> What time is the reservation?</p>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-1" class="text-lg px-2">
                        7
                    </label>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-2" class="text-lg px-2">
                        6
                    </label>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-1" class="text-lg px-2">
                        7:30
                    </label>
                </div>
                <div class="flex items-center mb-4 mx-10 p-2">
                    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="country-option-2" class="text-lg px-2">
                        7:10
                    </label>
                </div>
            </div>
        </div>
    )
}

export default QuestionPartOne;