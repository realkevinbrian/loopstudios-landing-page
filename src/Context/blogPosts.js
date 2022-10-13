import deepEarth from "../Assets/images/desktop/image-deep-earth.jpg";
import FishEye from "../Assets/images/desktop/image-fisheye.jpg";
import fromAbove from "../Assets/images/desktop/image-from-above.jpg";
import imageGrid from "../Assets/images/desktop/image-grid.jpg";
import nightArcade from "../Assets/images/desktop/image-night-arcade.jpg";
import soccerTeam from "../Assets/images/desktop/image-soccer-team.jpg";
import pocketBorealis from "../Assets/images/desktop/image-pocket-borealis.jpg";
import curiosity from "../Assets/images/desktop/image-curiosity.jpg";
import { createContext } from "react";

const Context = createContext(null);

const blogPosts = [
  { id: 1, image: deepEarth, title: "Deep Earth" },
  { id: 2, image: nightArcade, title: "Night Arcade" },
  { id: 3, image: soccerTeam, title: "Soccer Team" },
  { id: 4, image: imageGrid, title: "the Grid" },
  { id: 5, image: fromAbove, title: "From Up Above VR" },
  { id: 6, image: pocketBorealis, title: "pocket Borealis" },
  { id: 7, image: curiosity, title: "The Curiosity" },
  { id: 8, image: FishEye, title: "Make it fisheye" },
];

export { Context, blogPosts };
