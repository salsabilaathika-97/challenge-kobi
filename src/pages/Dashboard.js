import react from "react";
import Navbar from "../components/Navbar/Navbar";
import { QuestionStatus } from "../const/StaticData";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div class="grid grid-cols-2 gap-8 my-8 mx-10">
                <div class="text-lg text-slate-500 font-bold">
                    Listening Tips
                    <p class = "text-sm text-slate-">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel leo ipsum. Quisque nisl erat, LoreSm ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                
                <div class="bg-slate-500 p-2 text-lg text-white font-bold">
                    Questions Status
                    <div class="text-white text-sm">
                        Lorem ipsum sit dolor amet
                    </div>
                    <div class="grid grid-cols-7">
                        {
                            QuestionStatus.map((item) => (
                                <button class="my-4 mx-2 rounded-full bg-green-200 active:bg-red-200 text-green-800 active:text-red-800 text-center">
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                    <div>
                        Ket:
                        <div class = "flex flex-row">
                        <div class="w-12 h-12 m-2 bg-green-200 rounded-full"></div><p class = "m-2 p-2">Answered</p>
                        <div class="w-12 h-12 m-2 bg-red-400 rounded-full"></div><p class = "m-2 p-2">Unanswered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;