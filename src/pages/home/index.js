import Exclusive from "../../components/exclusive"
import Footer from "../../components/footer"
import Main from "../../components/main"
import Navbar from "../../components/navbar"
import Products from "../../components/products"

function Home() {
  return (
    <article>
      <section className="px-5 md:px-20">
        <Navbar />
        <Main />
        <Exclusive />
        <Products />
      </section>
      <Footer />
    </article>
  )
}

export default Home
