import react from "react";
import Navbar from "../components/Navbar/Navbar";
import { QuestionStatus } from "../const/StaticData";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import QuestionPartOne from "../components/QuestionPartOne/QuestionPartOne";
import QuestionPartTwo from "../components/QuestionPartTwo/QuestionPartTwo";
import QuestionPartThree from "../components/QuestionPartThree/QuestionPartThree";
import QuestionPartFour from "../components/QuestionPartFour/QuestionPartFour";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div class="grid grid-cols-1 items-center" >
                <div class="grid grid-cols-2 gap-8 my-8 mx-10">
                    <div class="text-lg text-slate-500 font-bold">
                        Listening Tips
                        <p class="text-sm text-slate-">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel leo ipsum. Quisque nisl erat, LoreSm ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div class="my-4">
                            <AudioPlayer />
                        </div>
                        <QuestionPartOne />
                        <QuestionPartTwo />
                        <QuestionPartThree />
                        <QuestionPartFour />
                        <button class="w-full my-4 p-2 font-normal bg-purple-500 hover:bg-purple-700 rounded-md text-white">Submit</button>
                    </div>

                    <div class="bg-slate-200 h-max p-2 text-lg text-slate-500 font-bold w-max">
                        Questions Status
                        <div class="text-slate-500 text-sm">
                            Lorem ipsum sit dolor amet
                        </div>
                        <div class="grid grid-cols-7 grid-rows-4 mx-12">
                            {
                                QuestionStatus.map((item) => (
                                    <button class="my-4 mx-2 w-11 h-11 rounded-full grow-0 shrink-0 bg-green-200 active:bg-red-200 text-green-800 active:text-red-800 text-center">
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                        <div class = "p-2">
                            Ket:
                            <div class="flex flex-row">
                                <div class="w-11 h-auto m-2 bg-green-200 rounded-full"></div><p class="m-2 p-2">Answered</p>
                            </div>
                            <div class="flex flex-row">
                                <div class="w-11 h-auto m-2 bg-red-400 rounded-full"></div><p class="m-2 p-2">Unanswered</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;