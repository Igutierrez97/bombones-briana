import { ScrollShadow } from "@nextui-org/react";
import { MainSection } from "./sections/MainSection";
import  ProductSections  from "./sections/ProductSections";
function App() {
  return (
    <div className="App">
      <ScrollShadow  hideScrollBar offset={100}>
        <MainSection />
        <ProductSections/>
      </ScrollShadow>
    </div>
  );
}

export default App;
