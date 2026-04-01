import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MOCK_SPOTIFY } from "../constants";
import { FaSpotify } from "react-icons/fa";

const EQ_BAR_CLASSES = [
  "animate-equalizer-1",
  "animate-equalizer-2",
  "animate-equalizer-3",
  "animate-equalizer-4",
];

const Equalizer = () => (
  <div className="flex items-end gap-[3px] h-5">
    {EQ_BAR_CLASSES.map((cls, i) => (
      <div
        key={i}
        className={`w-[3px] min-h-[4px] rounded-full bg-green-400 ${cls}`}
      />
    ))}
  </div>
);

const NowPlaying = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const {
    track,
    artist,
    album,
    progress,
    duration,
    currentTime,
    albumGradient,
    recentTracks,
  } = MOCK_SPOTIFY;

  return (
    <div ref={ref} className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="glass-card p-8 md:p-10"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-8 text-neutral-500">
          <FaSpotify className="text-green-400" size={18} />
          <span className="text-xs uppercase tracking-widest font-medium">
            Currently Listening
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Vinyl + Album Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Vinyl disc */}
            <motion.div
              className="w-40 h-40 md:w-48 md:h-48 vinyl-record"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Album art as rotating center label */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 overflow-hidden shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${albumGradient[0]}, ${albumGradient[1]})`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black/40 border border-white/10" />
              </div>
            </motion.div>
          </motion.div>

          {/* Track info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Equalizer />
              <span className="text-xs text-green-400 font-medium uppercase tracking-wider">
                Playing
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
              {track}
            </h3>
            <p className="text-neutral-400 text-lg mb-1">{artist}</p>
            <p className="text-neutral-600 text-sm mb-6">{album}</p>

            {/* Progress bar */}
            <div className="w-full">
              <div className="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${progress}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-500"
                />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-neutral-600">
                <span>{currentTime}</span>
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent tracks */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
            Recent
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recentTracks.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.albumGradient[0]}, ${t.albumGradient[1]})`,
                  }}
                />
                <div className="min-w-0">
                  <p className="text-sm text-neutral-300 truncate">{t.track}</p>
                  <p className="text-xs text-neutral-600 truncate">{t.artist}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NowPlaying;
