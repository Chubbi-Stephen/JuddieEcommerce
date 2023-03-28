import Exclusive from "../../components/exclusive"
import Footer from "../../components/footer"
import Main from "../../components/main"
import Navbar from "../../components/navbar"

function Home() {
  return (
    <section className="px-20">
      <Navbar />
      <Main />
      <Exclusive />
      <Footer/>
    </section>
  )
}

export default Home
