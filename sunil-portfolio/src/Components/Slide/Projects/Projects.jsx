import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 75px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: "https://camo.githubusercontent.com/1f6d3dceac9c2546f58bf9e5e2254f3a40963803547c2711effe8096ee97ece9/68747470733a2f2f692e706f7374696d672e63632f6e5679343737646b2f53637265656e73686f742d3930352e706e67",
    title: "Shop.com",
    description:
      "SHOP.COM is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands and products you love - all in one place.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Express",
      "MongoDB",
      "Node",
      "Redux",
    ],
    repoLink: "https://github.com/yadav123yo/FaydaBazar",
    demoLink: "https://fayda-bazar.vercel.app/",
    type: "A collaborative project built by a team of 5 members executed in 4 days.",
    blogLink: "#",
    features: [
      "Functional Admin Page",
      "User Authentication",
      "Product Page ,Payment page and Checkout Page Functional",
      "MongoDb used as a database",
    ],
    responsibilities: [
      "Built Checkout Page with Otp functional and Chakra Modal",
      "Responsive Page.",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/101394814/203414368-e7cf9831-8187-4a00-a81b-bdcd346b567f.png",
    title: "Cult Fit ",
    description:
      "Operator of a fitness-based online platform designed to address preventive healthcare techniques. The company's platform addresses the concept of preventive healthcare through a combination of engagement, coaching, and delivery by offering services for mental wellness, healthy food, and fitness through its mobile application.",

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",

      "Node",
      "Express",
      "MongoDB",
      "Redux",
    ],
    repoLink:
      "https://github.com/SunilKumarRoy450/quickest-seashore-9367-Cultfit.in-Clone",
    demoLink: "https://cultfit-aayan269.vercel.app/",
    type: "A collaborative project built by a team of 5 members executed in 4 days.",
    // blogLink:
    //   "https://ar1pperk.medium.com/building-a-bike-rental-website-from-scratch-28572c5565f7",
    features: [
      "Login and Signup",
      "A user can choose a location wheather it offline or online after getting their membership ",
      "User can hire the professional trainer according to their needs ",
      "A user can choose monthly plans acording to their membership",
      "A user can pay through online or cash to avail our services",
      "All the order history is recorded in user profile",
    ],
    responsibilities: [
      "Integrated slick-carousel",
      "Developed the Mind page.",
      "Responsive Page.",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/101394814/200108228-2ba18402-1b35-44f5-9aa5-198a36ffb814.png",
    title: "CocktailDB",
    description:
      "An open, crowd-sourced database of drinks and cocktails from around the world. It is an individual project built by me using cocktailDB free api.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      // "Express",
      // "MongoDB",
    ],
    repoLink: "https://github.com/SunilKumarRoy450/cocktail",
    demoLink: "https://ubiquitous-lily-c855fc.netlify.app/",
    type: "A single project built by me in 4 days.",
    //  blogLink: "https://medium.com/@nikhilnik_24208/clone-of-marriott-bonvoy-f3001ab316c5",
    features: [
      "Searching product-based functionality",
      "Responsive Website",
      "Used API to build this project",
      "Name Searched functionality",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/101394814/200108387-785853b9-a635-4fd4-bf49-f5c359ec65ef.png",
    title: "Shine.com",
    description:
      "Shine.com is the most innovative and second largest online job portal in India. It connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      // "React",
      // "MaterialUI",
      // "Node",
      // "Express",
      // "MongoDB",
    ],
    repoLink: "https://github.com/rituraj6/-slim-pen-3767",
    demoLink: "https://shine-web-clone.netlify.app/",
    type: "A collaborative project built by a team of 5 members under 4 days.",
    // blogLink: "https://medium.com/@adityaraj9983/e-commerce-clone-purplle-com-b13ec4a9d9b2",
    features: [
      "Signup and Login.",
      "Featured categorised drop-down method in navbar.",
      "Sepicific payment page.",
      "Product gallery.",
      "User authentication.",
      "Simple carousel",
    ],
  },

  // {
  //   img: "https://user-images.githubusercontent.com/39058941/111019686-ec977e00-83e6-11eb-81e8-84625a9e7576.png",
  //   title: "Royal Brothers ",
  //   description:
  //     "A web application to rent two-wheelers on monthly and daily basis.",

  //   techStack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React",
  //     "MaterialUI",
  //     "Node",
  //     "Express",
  //     "MongoDB",
  //   ],
  //   repoLink: "https://github.com/therealdrtroll/royal_brothers",
  //   demoLink: "https://royalbrothersak.netlify.app/",
  //   type: "A collaborative project built by a team of 3 executed in 4 days.",
  //   blogLink:
  //     "https://ar1pperk.medium.com/building-a-bike-rental-website-from-scratch-28572c5565f7",
  //   features: [
  //     "Login and Signup",
  //     "A user can choose a location from where he wants to choose a bike",
  //     "User can choose the date and time for pickup and drop along with the choice of his/her bike",
  //     "A user can choose between monthly and daily rental plans",
  //     "A user can pay through card",
  //     "All the order history is recorded in user profile",
  //   ],
  //   responsibilities: [
  //     "Built REST API and integrated it with the frontend.",
  //     "Laid out the database schema and built authentication.",
  //     "Developed the Home and Tariff page.",
  //     "Integrated the frontend and backend.",
  //   ],
  // },

  // {
  //   img: "https://user-images.githubusercontent.com/39058941/115154017-68e04980-a096-11eb-8c0c-820652ed499e.png",
  //   title: "Sudoku",
  //   description:
  //     "A sudoku challenge for users, where they can solve or submit their own puzzles and get them solved.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   repoLink: "https://github.com/therealdrtroll/sudoku",
  //   demoLink: "https://sudoku-solver-animated.netlify.app/",
  //   type: "Solo project",
  //   blogLink: "#",
  //   features: [
  //     "User can solve a puzzle",
  //     "User can submit a puzzle and solve",
  //     "User can get solution for a puzzle using auto-solve",
  //   ],
  // },
  // {
  //   img: "https://user-images.githubusercontent.com/39058941/118371705-7d4b2f80-b5cb-11eb-9cfd-a5a917f759e0.png",
  //   title: "Product Hunt ",
  //   description:
  //     "An online product portal where users can browse, research, and post products. ",
  //   techStack: ["HTML", "CSS", "JavaScript", "React", "MaterialUI"],
  //   repoLink: "https://github.com/therealdrtroll/product-hunt",
  //   type: "A collaborative project built by a team of 4 under 4 days.",
  //   demoLink: "https://producthuntalpha.netlify.app/",
  //   blogLink:
  //     "https://ar1pperk.medium.com/how-can-you-collab-remotely-to-develop-an-effective-product-in-4-days-ff3d2a0168dd",
  //   features: [
  //     "Research products and post products.",
  //     "Research jobs and post jobs.",
  //     "Raise a discussion and comment under it.",
  //     "Book an appointment with your favourite product mentor.",
  //   ],

  //   responsibilities: [
  //     "Scraped data from the original product hunt.",
  //     "Developed pixel-perfect UI of the product page.",
  //     "Implemented features like up-vote, share, and single product modal.",
  //   ],
  // },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectDetail
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectDetail>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
