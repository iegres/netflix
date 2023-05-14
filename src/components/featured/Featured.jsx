import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import { Link } from "react-router-dom";

const posters = [
  {
    img: "https://preview.redd.it/el-camino-wallpaper-with-music-url-in-comments-v0-d1e1mk9nzr691.jpg?auto=webp&s=dab60f0033e25e0edc03c5caedca74403edaedbc",
    title: "El Camino",
    description: "After a dramatic escape from captivity, Jesse Pinkman must deal with his past in order to make some kind of future for himself"
  },
  {
    img: "https://wallpaperaccess.com/full/31580.jpg",
    title: "Deadpool 2",
    description: "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/930/1011/592/bruce-willis-face-bw-sin-city-hd-wallpaper-preview.jpg",
    title: "Sin City",
    description: "In this quartet of neo-noir tales, a mysterious salesman narrates a tragic story of co-dependency, while a musclebound vigilante tears his way through the criminal underworld in search of his lost love"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/827/638/353/movie-gran-torino-clint-eastwood-gran-torino-movie-wallpaper-preview.jpg",
    title: "Gran Torino",
    description: "Retired auto worker and Korean War vet Walt Kowalski fills emptiness in his life with beer and home repair, despising the many Asian, Latino and black families in his neighborhood"
  },
  {
    img: "https://wallpaperaccess.com/full/2030219.jpg",
    title: "Inception",
    description: "Dom Cobb is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/509/261/297/the-wolverine-2013-wallpaper-preview.jpg",
    title: "The Wolverine",
    description: "Lured to a Japan he hasn't seen since World War II, century-old mutant Wolverine finds himself in a shadowy realm of yakuza and samurai"
  },
];

export default function Featured({ type }) {
  const poster = posters[Math.floor(Math.random() * 6)];
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={poster.img}
        alt="Movie poster"
      />
      <div className="info">
        <div style={{fontSize: 100}}>{poster.title}</div>
        {/* <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        /> */}
        <span className="desc">
          {poster.description}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum? */}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <Link to="/watch" className="link">
              <span>Play</span>
            </Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
