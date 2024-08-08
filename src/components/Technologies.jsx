import { motion } from "framer-motion"
import Tooltip from '@mui/material/Tooltip';

import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaDatabase } from "react-icons/fa"; // For Python and MySQL
import { SiPandas, SiPytorch, SiCplusplus } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Tooltip title="React">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <RiReactjsLine className="text-7xl text-cyan-400"/>
                    </motion.div>
                </Tooltip>
                <Tooltip title="Python">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaPython className="text-7xl text-yellow-400"/>
                    </motion.div>
                </Tooltip>
                <Tooltip title="SQL">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaDatabase className="text-7xl text-green-500"/>
                    </motion.div>
                </Tooltip>
                <Tooltip title="Pandas">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <SiPandas className="text-7xl text-blue-400" />
                    </motion.div>
                </Tooltip>
                <Tooltip title="PyTorch">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <SiPytorch className="text-7xl text-red-500"/>
                    </motion.div>
                </Tooltip>
                <Tooltip title="C++">
                    <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                        whileHover={{ scale: 1.2 }}
                    >
                        <SiCplusplus className="text-7xl text-sky-700"/>
                    </motion.div>
                </Tooltip>
            </div>
        </div>
    )
};

export default Technologies;