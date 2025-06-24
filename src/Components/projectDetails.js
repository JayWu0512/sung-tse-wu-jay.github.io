import logo from ".././assets/logo.svg";

// Porject Images
import website from ".././assets/projects/website.png";
import breakout_game from ".././assets/projects/breakout_game.png";
import name_searching from ".././assets/projects/name_searching.png";
import boogle from ".././assets/projects/boogle.png"
import rotten_tomato from ".././assets/projects/rotten_tomato.png"
import neural_network from ".././assets/projects/neural_network.png"

// finScope3D Project Image
import finscope3d from ".././assets/projects/finscope3d/finscope3d.png"
import finscope3d_structure from ".././assets/projects/finscope3d/structure.png"
import finscope3d_chat from ".././assets/projects/finscope3d/chat.png"
import finscope3d_youtube from ".././assets/projects/finscope3d/youtube.png"

// Enter your Project Details here
export const projectDetails = [
  {
    title: "My Personal Website",
    image: logo,
    description: [
      <p key="1">
        This is my first project to establish a personal website, featuring
        several pages: <br />
        <br />
        <strong>About:</strong> Introduces my work experience, education, and certifications.
        <br />
        <br />
        <strong>Technologies:</strong> Highlights the frontend, backend, database, and tools I’ve used. <br />
        <br />
        <strong>Projects:</strong> Showcases all ongoing and completed projects.
        <br />
        <br />
        <strong>Resume:</strong> Contains my CV. <br />
        <br />
      </p>,
      "The website was initially based on a GitHub template by Paven MG (linked below)." +
        " I customized and extended it, with significant changes to the 'About' and 'Projects' sections." +
        " In the 'About' page, I reformatted the education section to highlight what sets me apart from other college students." +
        " The 'Projects' page required more extensive modifications, including fade animations and expandable content." +
        " Through this project, I gained valuable experience with tools such as npm and frameworks like React.js.",
    ],
    links: [
      "https://github.com/pavanmg007/react-developer-portfolio-template",
      "https://sung-tse-wu-jay.vercel.app/",
      "https://github.com/JayWu0512/sung-tse-wu-jay.github.io",
    ],
    imgs: [website],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Javascript, HTML, CSS, npm, Node.js
      </p>,
    ],
  },

  {
    title: "FinScope3D - Multimodal Financial QA Platform",
    image: finscope3d,
    description: [
      <p key="1">
        FinScope3D is a multimodal financial QA system that integrates natural language understanding, 
        named entity recognition (NER), structured and unstructured data processing, and predictive modeling to deliver insightful responses to financial queries.
      </p>,
      "Preview link and presentation is available below, and the source code is on GitHub."
    ],
    links: [
      "https://drive.google.com/file/d/1ua_CjsZJFX0CzS_Aortgt-NMUekr0hUb/view",
      "https://github.com/JayWu0512/FinScope3D",
      "https://www.youtube.com/watch?v=rx6D4VRTPIQ",
    ],
    imgs: [finscope3d_structure, finscope3d_chat, finscope3d_youtube],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python, SQL, LLM, HuggingFace, LangChain, ChromaDB, LightGBM, Gradio
      </p>,
    ],
  },

  {
    title: "Neural Network - Multi-class Prediction on CIFAR-10 dataset",
    image: neural_network,
    description: [
      <p key="1">
        This is a Python project that builds a Neural Network for multi-class prediction on the CIFAR-10 dataset. 
        Using ReLU activation and softmax loss, it performs forward and backward passes with matrix operations. 
        The training process is validated through visualizations of cost and accuracy history to ensure model performance and reliability.
      </p>,
      "The source code is on GitHub."
    ],
    links: [
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/neural_netwrok_multi-class_%20prediction_on%20_CIFAR-10_dataset",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Deep Learning)
      </p>,
    ],
  },

  {
    title: "Rotten Tomatoes Movie Review AI Rating System",
    image: rotten_tomato,
    description: [
      <p key="1">
        This is a Python project that develops a Rotten Tomatoes Movie Review AI Rating System. 
        Using logistic regression and stochastic gradient descent, it classifies movie reviews as positive or negative. 
        The system includes a manual prediction feature and rigorous testing with custom examples to ensure accuracy and reliability.
      </p>,
      "The source code is on GitHub."
    ],
    links: [
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/rotten_tomatoes_movie_review_AI_rating_system",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Machine Learning)
      </p>,
    ],
  },

  {
    title: "Breakout Game",
    image: breakout_game,
    description: [
      <p key="1">
        This is a sample of a brick-breaking game implemented in Python, 
        which utilizes object-oriented programming and event-driven programming to create a dynamic and interactive experience.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=o63KPoIXJS4&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=1",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/break_out_game",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Object-Oriented Programming)
      </p>,
    ],
  },

  {
    title: "Name Popularity Searching System",
    image: name_searching,
    description: [
      <p key="1">
        This is a sample project that utilizes data structures and data visualization, 
        allowing users to input multiple names and generate a trend chart of baby name rankings from 1990 to 2020, 
        helping them understand the popularity of names across different years.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=9JIc0CZwsa4&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=4",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/name_searching_system",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Data Structure)
      </p>,
    ],
  },

  {
    title: "Boggle Game Solver",
    image: boogle,
    description: [
      <p key="1">
        This is a sample project in Python that mimics a common board game. When a 4x4 grid of letters is displayed, 
        Python will attempt to find all possible answers using an algorithm.
      </p>,
      "Preview link is available below, and the source code is on GitHub."
    ],
    links: [
      "https://www.youtube.com/watch?v=gbLlbpOppzA&list=PL6FWNwNPGCE56gP3lxhYPLoUbqE_unUiP&index=3",
      "https://github.com/JayWu0512/StanCode_Projects/tree/main/StanCode_Projects/boggle_game_solver",
    ],
    imgs: [],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Python(Algorithm)
      </p>,
    ],
  },
];