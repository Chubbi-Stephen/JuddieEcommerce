import React from "react"

class Products extends React.Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataisLoaded: false,
    }
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }
  render() {
    const { DataisLoaded, items } = this.state
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      )

    return (
      <div className="w-[100%] mb-10 showcase grid grid-cols-3 gap-5">
        {items.map((item) => (
          <section key={item._id} className="w-[100%] box py-6">
            <div className="w-[80%] m-auto">
              <img
                src={item.image}
                alt="img_Illustration"
                className="w-[100%] h-[200px] object-cover rounded hover:scale-105 transition-all"
              />
              <span className="flex">
                <h3 className="w-full capitalize">{item.title}</h3>
                <div className="w-[35%]  text-center rounded-full bg">
                  <p>${item.price}</p>
                </div>
              </span>
              <h5>{item.category}</h5>
              <p>
                {item.description.split(" ").slice(0, 10).join(" ") + "..."}
              </p>
            </div>
          </section>
        ))}
      </div>
    )
  }
}

export default Products
