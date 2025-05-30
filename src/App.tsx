import Details from "./components/Details/Details";
import Heading from "./components/Heading/Heading";
import Search from "./components/Search/Search";
import classes from "./index.module.css";
import PostGrid from "./PostGrid/PostGrid";

function App() {
  return (
    <div className={classes.wrapper}>
      {/* <Heading
        heading="Блог"
        underheading="Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи"
      />
      <Search />

      <PostGrid /> */}
      <Details />
    </div>
  );
}

export default App;
