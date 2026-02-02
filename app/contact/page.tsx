import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const page = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default page