import CardThumbnail from './components/CardThumbnail'
import videoData from './video'

function App() {

  console.log(videoData)

  
  const CardComponents = videoData.map(video => {
    return <CardThumbnail videoInfo={video}/>
  })

  console.log(CardComponents)
  
  return (
    <main className="container pt-5">
       {CardComponents}
    </main>
  );
}

export default App;
