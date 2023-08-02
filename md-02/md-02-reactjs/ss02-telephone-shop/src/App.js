import BigTitle from "./components/BigTitle";
import FooterArea from "./components/FooterArea";
import HeaderArea from "./components/HeaderArea";
import ListProduct from "./components/ListProduct";
import MainMenuArea from "./components/MainMenuArea";

function App() {
  return (
    <div>
<>
  {/* Header  */}
  <HeaderArea />
  {/* End header area */}
  {/* End site branding area */}
<MainMenuArea />
  {/* End mainmenu area */}
<BigTitle />
  {/* List product */}
<ListProduct />
  {/* Footer area */}
<FooterArea />
</>

    </div>
  );
}

export default App;
