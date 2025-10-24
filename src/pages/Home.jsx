import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import ServicesPreview from '../components/ServicesPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import AboutPreview from '../components/AboutPreview'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Testimonials />
      <ServicesPreview />
      <ProjectsPreview />
      <AboutPreview />
    </div>
  )
}

export default Home
