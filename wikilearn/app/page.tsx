import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import CourseCard from "../components/CourseCard"

export default function Home() {

  return (

    <main>

      <Navbar/>

      <SearchBar/>

      <div className="courses">

        <CourseCard
        title="HTML"
        image="/html.png"
        color="orange"
        />

        <CourseCard
        title="CSS"
        image="/css.png"
        color="#1e5eff"
        />

        <CourseCard
        title="JAVASCRIPT"
        image="/js.png"
        color="#ffd800"
        />

      </div>

    </main>

  )

}