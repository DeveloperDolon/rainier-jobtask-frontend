import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
            Empowering Your Path to Knowledge and Success
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Empower Your Journey: Dive into Dynamic Learning Experiences on Our Premier Course Website. Unleash Your Potential Today!
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?size=626&ext=jpg",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-vector/online-games-addiction-concept-illustration_114360-2014.jpg?size=626&ext=jpg",
  },
  {
    id: 6,
    src: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg",
  },
  {
    id: 7,
    src: "https://img.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_274679-9896.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 8,
    src: "https://img.freepik.com/free-photo/composition-with-html-system-websites_23-2150866277.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 9,
    src: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 10,
    src: "https://img.freepik.com/free-vector/programmers-work-isometric-template_1284-25049.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 11,
    src: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 12,
    src: "https://img.freepik.com/free-vector/programming-code-writing-isometric-icon-software-development-laptop-with-text-program-code_39422-887.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 13,
    src: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062002.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 14,
    src: "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2751.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 15,
    src: "https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?size=626&ext=jpg&ga=GA1.1.1120030824.1703487398&semt=ais",
  },
  {
    id: 16,
    src: "https://media.istockphoto.com/id/1254050848/photo/smart-schoolboy-uses-laptop-to-program-software-for-robotics-engineering-class-elementary.jpg?s=612x612&w=0&k=20&c=4imK7-BVxxorFs6EewSJ5Vx-TJ4I5hoEAzw3ORTR_28=",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;