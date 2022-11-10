import "./Article.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHolder,
} from "react-icons/ai";

export default function Article(props) {
  return (
    <div className="modern__article">
      <div
        className="modern__article-section image"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="modern__article-section description">{props.desc}</div>
      <div className="modern__article-section title">
        <p>{props.title}</p>
        <button>
          <AiOutlineHolder className="icon" />
        </button>
      </div>
      <div className="modern__article-section nav">
        <button>
          <AiOutlineArrowLeft />
        </button>
        <button>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
