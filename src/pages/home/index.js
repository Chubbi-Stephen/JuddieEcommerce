import Exclusive from "../../components/exclusive"
import Main from "../../components/main"
import Navbar from "../../components/navbar"

function Home() {
  return (
    <section className="px-20">
      <Navbar />
      <Main />
      <Exclusive />
    </section>
  )
}

export default Home
