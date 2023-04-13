import React, { useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    // Send login/create account data to server here
    console.log(email, password, isLogin)

    // Clear form
    setEmail("")
    setPassword("")
  }

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <section>
      <article className="px-20">
        <Navbar />
        <div className="w-[70%] min-h-screen m-auto bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
          <h1 className="font-medium text-3xl mb-4">
            {isLogin ? "Login" : "Create Account"}
          </h1>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-cyan-400 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm bg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <button
                onClick={toggleLogin}
                className="w-full flex justify-center py-2 px-4 text-[25px] border border-transparent rounded-md shadow-sm text-sm font-bold specialText bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLogin ? "Create Account" : "Back to Login"}
              </button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </section>
  )
}

export default Login
