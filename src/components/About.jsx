import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[8rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe 4xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[14px] max-w-4xl 4xl:leading-[40px] lg:leading-[24px] leading-[30px]">
          As a backend engineer, I love using Laravel to build robust application logic and dependable APIs. In order to ensure that data flows smoothly and that systems remain scalable, I spend the majority of my time designing and optimizing database schemas in MySQL and PostgreSQL. In order to help projects go beyond pre-made templates with unique solutions, I also create WordPress plugins and themes. <br />
          Backend development, in my opinion, is about solving practical issues, not just writing code. In my opinion, this is a career that never truly ends because every project I work on gives me new insights, every obstacle I overcome helps me hone my abilities, and every tool I acquire expands my options for the future.
      </motion.p>

      <div className="mt-20 lg:mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
