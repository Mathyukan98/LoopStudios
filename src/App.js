import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import HeaderSection from "./components/HeaderSection";
import Post from "./components/Post";
import Creation from "./components/Creation";
import { ImagePost } from "./components/ImagePost";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Appbar/>
      <HeaderSection />
      <Post />
      <Creation />
      <ImagePost />
      <Footer />
      {/* <Filters/> */}
    </>
  );
}

export default App;
