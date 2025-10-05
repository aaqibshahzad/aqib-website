import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { letsConnect, letsConnectHover } from '../assets';

const LetsConnectSec = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Let’s Build Something Great Together.</h2>
        <p className={styles.sectionSubText}>Whether you’ve got an idea, a question, or just want to talk tech, I’d love to hear from you.</p>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe 4xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[14px] max-w-4xl 4xl:leading-[40px] lg:leading-[24px] leading-[30px]">
            Say hi on WhatsApp, and I’ll get back to you as soon as I can. Oh, and the consultation is free!
      </motion.p>

    <div className="mt-20 lg:mt-12 flex flex-wrap gap-10">
      <button
        className="live-demo flex justify-between 
        sm:text-[18px] text-[14px] text-timberWolf 
        font-bold font-beckman items-center py-5 pl-3 pr-3 
        whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
        w-[125px] h-[46px] rounded-[10px] bg-jetLight 
        sm:mt-[22px] mt-[16px] hover:bg-battleGray 
        hover:text-eerieBlack transition duration-200 
        ease-in-out"
        onClick={() =>
          window.open("https://shop.muhammadaqibshahzad.com", "_blank")
        }
        onMouseOver={() => {
            document
                .querySelector('.download-btn')
                .setAttribute('src', letsConnectHover);
            }}
        onMouseOut={() => {
            document
                .querySelector('.download-btn')
                .setAttribute('src', letsConnect);
            }}>
        Let's Chat
        <img
          src={letsConnect}
          alt="letsConnect"
          className="sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
        />
      </button>
    </div>
    </div>
  );
};

export default SectionWrapper(LetsConnectSec, 'letsconnectsec');