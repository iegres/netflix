import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { showNotification } from "../../notification.js";

const icons = [
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Alex-Rodriguez_TheBatman.jpg",
    title: "The Batman",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. The hero must forge new relationships, unmask the culprit and bring justice to the metropolis.",
    genre: "Action",
    duration: "2 hours 56 mins",
    year: 2022,
    restriction: "13+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Raid71_BladeRunner.jpg",
    title: "Blade Runner",
    description: "Deckard is forced by the police Boss to continue his old job as Replicant Hunter.",
    genre: "Action",
    duration: "2 hours 34 mins",
    year: 2018,
    restriction: "13+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Matt-Ferguson_ROTJ.jpg",
    title: "Return of the Jedi",
    description: "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire.",
    genre: "Action",
    duration: "2 hours 16 mins",
    year: 1986,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Nicolas-Tetreault_Guardians3.jpg",
    title: "Guardians of the Galaxy Vol. 3",
    description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own.",
    genre: "Action",
    duration: "2 hours 23 mins",
    year: 2016,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Pablo-Olivera_MadMax.jpg",
    title: "Mad Max: Fury Road",
    description: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel.",
    genre: "Action",
    duration: "2 hours 18 mins",
    year: 2015,
    restriction: "13+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Ludo-D.RODRIGUEZ-PASCAL_Wolverine.jpg",
    title: "The Wolverine",
    description: "Lured to a Japan he hasn't seen since World War II, century-old mutant Wolverine finds himself in a shadowy realm of yakuza and samurai.",
    genre: "Action",
    duration: "1 hour 58 mins",
    year: 2013,
    restriction: "13+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Krzysztof-Domaradzk_FifthElement.jpg",
    title: "The Fifth Element",
    description: "In the 23rd century, a New York City cabbie, Korben Dallas, finds the fate of the world in his hands when Leeloo falls into his cab.",
    genre: "Action",
    duration: "1 hour 49 mins",
    year: 1990,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Brent-Nederhand-_IndianaJones-DialOfDestiny.jpg",
    title: "Indiana Jones and the Dial of Destiny",
    description: "Daredevil archaeologist Indiana Jones races against time to retrieve a legendary dial that can change the course of history.",
    genre: "Comedy",
    duration: "1 hour 55 mins",
    year: 2023,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/05/Andre-Barnett_RiseOfSkywalker.jpg",
    title: "Star Wars: The Rise of Skywalker",
    description: "When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts.",
    genre: "Action",
    duration: "2 hours 14 mins",
    year: 2019,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/GrahamHumphreys_DeathProof.jpg",
    title: "Death Proof",
    description: "Stuntman Mike is a professional body double who likes to take unsuspecting women for deadly drives in his free time.",
    genre: "Thriller",
    duration: "1 hour 48 mins",
    year: 1988,
    restriction: "16+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/ARKANA-John-Wick.jpg",
    title: "John Wick: Chapter 4",
    description: "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld.",
    genre: "Action",
    duration: "2 hours 06 mins",
    year: 2023,
    restriction: "16+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/Ludo-D.RODRIGUEZ-PASCAL_DialOfDestiny.jpg",
    title: "Indiana Jones and the Raiders of the Lost Ark",
    description: "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination.",
    genre: "Comedy",
    duration: "1 hour 59 mins",
    year: 1981,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/Chris-Valentine_PhantomMenace.jpg",
    title: "Star Wars: Episode I - The Phantom Menace",
    description: "Obi-Wan Kenobi is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn; Anakin Skywalker, who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy.",
    genre: "Action",
    duration: "2 hours 10 mins",
    year: 1983,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/Troy-Adams_ReturnOfTheJedi.jpg",
    title: "Star Wars: Episode VI - Return of the Jedi",
    description: "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire.",
    genre: "Action",
    duration: "1 hour 59 mins",
    year: 1987,
    restriction: "6+",
  },
  {
    img: "https://alternativemovieposters.com/wp-content/uploads/2023/04/Morgan-Kauffer_Fellowship.jpg",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it.",
    genre: "Fantasy",
    duration: "3 hours 23 mins",
    year: 2001,
    restriction: "6+",
  },
];

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const icon = useMemo(() => icons[Math.floor(Math.random() * 15)], []);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={icon.img}
        alt="Movie icon"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" className="link">
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" onClick={() => showNotification()} />
              <ThumbUpAltOutlined className="icon" onClick={() => showNotification()} />
              <ThumbDownOutlined className="icon" onClick={() => showNotification()} />
            </div>
            <div className="itemInfoTop">
              <span>{icon.duration}</span>
              <span className="limit">{icon.restriction}</span>
              <span>{icon.year}</span>
            </div>
            <div className="desc">
              {icon.description}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus. */}
            </div>
            <div className="genre">{icon.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
