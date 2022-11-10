import "./App.css";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="modern__wrapper">
      <Navbar />
      <main>
        <Article
          index="0"
          img="art1.jpg"
          title="Neque porro quisquam"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus eros, eleifend at massa vitae, rutrum pellentesque mi. Morbi iaculis efficitur arcu sed efficitur. In tincidunt, leo eu efficitur convallis, nisl massa sodales libero, nec laoreet massa purus in risus. Aenean tempus eget sapien rhoncus condimentum. Sed sed nunc vitae."
        />
      </main>
    </div>
  );
}
