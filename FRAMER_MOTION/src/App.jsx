import React from 'react'
import {motion, useMotionValue, useTransform} from 'motion/react';
import BrightnessBar from '../BrightnessBar';

const App = () => {

  const x = useMotionValue(0);

  const width = useTransform(x, [0, 260], ['5%', '100%'])

  // const scrollYProgress = useScroll().scrollYProgress;

  return (
    <div className="p-20 text-center text-white font-mono">
      {/* <motion.div 
      initial={{
        x:0
      }}
      animate = {{
        x: 600,
        rotate: 360
      }}
      transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity,
        ease: 'anticipate'
      }}
      className='box'>
        
      </motion.div> */}

      {/* <motion.div 
      whileHover={{
        backgroundColor: 'green'
      }}
      whileTap={{
        scale: 0.9
      }}
      className='box'>
        
      </motion.div> */}

      {/* <motion.div 
      drag
      whileDrag={{
        scale: 0.8
      }}
      dragConstraints={{
        left: 0,
        top: 0
      }}
      dragDirectionLock = 'true'
      className='box'>
        
      </motion.div> */}

      {/* <motion.div 
      animate={{
        x: 1100,
        scale: 0.5
      }}
      className='circle'>
        
      </motion.div> */}

      {/* <motion.h1
        animate={{
          x:1000,
        }}
        transition={{
          duration: 2,
        }}
      >Subscribe</motion.h1> */}

      {/* <motion.div 
      animate={{
        x: [0, 800, 800, 0, 0],
        y: [0, 0, 300, 300, 0],
        rotate: [0, 360, 0, -360, 0]
      }}
      transition={{
        duration: 4,
        delay: 1
      }}
      className='box'>

      </motion.div> */}

      {/* <motion.div
        animate={{
          x: [0, 500, 0, 500, 0, 500]
        }}
        transition={{
          delay: 1,
          duration: 2,
          ease: 'anticipate'
        }}
      className='box'>
          Subscribe
      </motion.div> */}

      {/* <motion.div
        className="bg-red-500 w-full h-3 fixed top-0 left-0 origin-left"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>

      <h2 className="text-4xl font-bold mb-8">ProZero</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        reiciendis ut eaque possimus suscipit qui laboriosam! Dolor nesciunt
        temporibus excepturi placeat itaque sit explicabo iste culpa, mollitia,
        blanditiis ipsum deserunt, tenetur aliquam officia. Consectetur placeat
        asperiores praesentium! Nemo, nam aliquam. Veritatis voluptatibus
        repellat sed inventore, non sapiente iusto, dolore impedit accusamus
        quos vero unde eos. Sequi quae nobis tempore alias nesciunt est
        doloremque repellat debitis, quod eius ipsum dicta consequatur
        laboriosam error voluptatum, eaque dolor quis explicabo voluptas eum
        esse. Iste eligendi minima dignissimos totam placeat ad repellat in,
        atque maxime sint nostrum ut aperiam quo quidem voluptatum nemo? Ex
        inventore commodi a rem repellendus in aperiam architecto dolorum,
        minima iure, tempora temporibus cupiditate totam quis! Sit voluptatibus
        rerum laudantium nobis eveniet ipsam accusantium, libero quia expedita
        quidem exercitationem aliquid? Quam eos, vitae, unde expedita quo nisi
        sunt obcaecati commodi, dicta deleniti pariatur aliquam eveniet quos.
        Dolores, maiores doloremque suscipit quia, a, minus officia quibusdam
        itaque unde nesciunt nulla adipisci deserunt reprehenderit quo facere
        natus iusto quam tempore esse aliquid ratione quos ea quis! Voluptates
        sunt atque unde debitis tempore error consectetur obcaecati itaque
        tenetur non ut enim doloribus, corrupti assumenda esse repellat eveniet
        voluptatem perferendis harum! Eum, earum recusandae. <br /> Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Velit molestiae non
        recusandae repellat beatae aliquid eveniet! Quibusdam deserunt sapiente
        incidunt iste, iusto recusandae fugiat fuga? Commodi quo expedita,
        beatae qui necessitatibus minus dolorem exercitationem, facere dolor
        porro libero officiis aliquid velit quas labore culpa incidunt veritatis
        magnam tempora delectus sit vel in a. Delectus molestias quasi ipsa,
        reprehenderit accusantium deserunt, id explicabo excepturi inventore
        optio non similique temporibus, hic nisi harum numquam atque dignissimos
        incidunt beatae. Repellat beatae perspiciatis mollitia quis ad error
        numquam eligendi, repudiandae quaerat hic quia consequatur, ex dolores
        provident culpa accusamus? Quae aut tempore quas saepe ab sint eaque,
        veritatis iure, facilis accusantium ipsum laudantium? A, sunt. Id sunt
        ipsum nam quis cum. Provident consectetur suscipit, facere perferendis,
        voluptatibus illo nesciunt id alias ipsum doloremque nostrum
        necessitatibus sint amet placeat, quod ducimus harum est a reiciendis
        praesentium? Corporis delectus culpa facere debitis expedita, veniam
        recusandae vero totam, iste eveniet, velit veritatis! Porro quia,
        corporis iusto incidunt similique fugiat aut dolorem eligendi quo iure a
        doloribus neque impedit, vero recusandae beatae dicta reprehenderit!
        Animi tempore enim ratione unde nam dolor voluptatem expedita asperiores
        inventore, aperiam odio atque incidunt sapiente officiis eveniet
        voluptates, saepe vitae possimus. Minima, reprehenderit! <br />
      </p> */}

      <BrightnessBar />
    </div>
  );
}

export default App
