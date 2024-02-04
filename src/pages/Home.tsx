import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between ">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
