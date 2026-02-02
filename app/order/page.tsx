import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Order from '../components/Order'

export const page = () => {
  return (
    <div>
      <Navbar />
      <Order />
      <Footer />
    </div>
  )
}

export default page