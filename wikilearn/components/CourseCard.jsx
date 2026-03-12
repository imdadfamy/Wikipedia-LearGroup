export default function CourseCard({title,image,color}){

  return(

    <div className="card" style={{background:color}}>

      <img src={image} alt={title}/>

      <h2>{title}</h2>

    </div>

  )

}