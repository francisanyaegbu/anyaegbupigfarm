import Navbar from '../components/Navbar'
import { About } from '../components/About'
import Footer from '../components/Footer'

export const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default page