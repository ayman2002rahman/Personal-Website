import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaDatabase } from "react-icons/fa"; // For Python and MySQL
import { SiPandas, SiPytorch, SiCplusplus } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDatabase className="text-7xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPytorch className="text-7xl text-red-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-sky-700"/>
                </div>
            </div>
        </div>
    )
};

export default Technologies;