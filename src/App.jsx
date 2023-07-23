import Header from "./components/Header";
import Footer from "./components/Footer";
import Creation from "./Layouts/Creation";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main 
      className="flex flex-wrap justify-center items-center flex-grow
      bg-gray-100 px-10 md:flex-nowrap">

        <Creation/>
        {/* <Visualization/> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
