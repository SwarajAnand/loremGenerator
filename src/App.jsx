import { useState } from 'react'

function App() {
  const [para, setPara] = useState([]);
  const [count, setCount] = useState(0);
  const randomParagraphs = [
    "The rain pelted down on the roof with relentless determination, each droplet a percussionist in nature's symphony. Outside, the world was painted in shades of gray, the gloomy sky casting a somber veil over the landscape. Yet, amidst the downpour, there was a certain tranquility—a rhythm to the chaos that whispered of renewal.",

    "Lost in the labyrinth of his own thoughts, he traced the contours of memories long forgotten. Each twist and turn of the maze led him deeper into the recesses of his mind, where echoes of the past lingered like shadows in the night. Yet, amid the darkness, there was a glimmer of hope—a faint beacon guiding him toward understanding.",

    "The old bookstore stood at the corner of the street, its weathered facade a testament to the passage of time. Inside, shelves sagged under the weight of countless volumes, each one a portal to another world. The air was thick with the scent of paper and ink, a fragrance that whispered of adventure and discovery.",

    "With a flourish of his pen, the artist breathed life into the blank canvas before him. Stroke by stroke, he wove a tapestry of colors and emotions, each hue a reflection of his innermost thoughts. In the silence of his studio, the only sound was the gentle scratching of his quill—a symphony of creativity in motion.",

    "Beneath the canopy of stars, she danced to the rhythm of the night, her movements fluid and graceful. With each step, she wove a story in the language of motion, a tale of passion and longing that spoke to the soul. In that fleeting moment, she was untethered from the constraints of reality, a free spirit bound only by the music of the cosmos.",

    "The city sprawled before him, a maze of concrete and steel that stretched as far as the eye could see. From his vantage point atop the skyscraper, he watched as the world below bustled with life—a symphony of car horns and chatter that echoed through the streets. In that moment, he felt both small and infinite, a mere speck in the vastness of the urban landscape.",

    "With a flick of her wand, the magician conjured a flurry of sparks that danced through the air like fireflies in the night. Around her, the audience gasped in awe, their eyes wide with wonder at the spectacle unfolding before them. In that moment, she was more than just a performer—she was a sorceress, wielding magic with a grace that defied explanation.",

    "The forest whispered secrets to those who dared to listen, its ancient trees murmuring tales of times long past. As she wandered through the shadows, she felt the weight of history pressing down upon her—a reminder of the countless lives that had walked these same paths before her. Yet, amid the darkness, there was a sense of solace—a quietude that spoke of nature's eternal wisdom.",

    "With a roar of engines, the race car hurtled down the track, its sleek form slicing through the air with deadly precision. Behind the wheel, the driver was a blur of focus and determination, his eyes locked on the finish line looming in the distance. In that moment, nothing else mattered—not the cheers of the crowd, nor the roar of competing engines. There was only speed, and the relentless pursuit of victory.",
    "The waves crashed against the shore with a rhythmic cadence, their song a symphony of power and grace. In the distance, the lighthouse stood sentinel against the storm, its beacon cutting through the darkness like a knife. As the storm raged on, she stood on the cliffs above, her hair whipped by the wind, her eyes fixed on the horizon. In that moment, she felt a kinship with the tempest—a wildness that echoed the tumult within her own heart.",
  ];



  const showPara = () => {

    if(count < 0) {
      alert(" Ayyo ! you know that you wrote negative input 😵");
      return;
    }

    if(count > 10) {
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
      return;
    }

    let arr = [];
    for(let i = 0; i < count; i++) {
      arr.push(randomParagraphs[i]);
    }

    setPara(arr);
  }

  return (
    <div className='pt-[80px]'>
      <h1 className="text-3xl font-bold text-center text-hMain">TIRED OF BORING LOREM IPSUM?</h1>
      <div className="text-center p-4 m-2 gap-4 flex justify-center">
      <label htmlFor="numInput" className="text-2xl font-normal">Paragraphs : </label>
        <input className="pl-2 w-[60px]" type="number" name="numInput" value={count} onChange={(e) => setCount(e.target.value)}/>
        <button className="text-white font-medium bg-btnMain pt-1 pb-1 pl-4 pr-4 rounded-sm hover:bg-hoverMain" onClick={showPara}>GENERATE</button>
      </div>

      <div className='w-1/2 m-auto text-center'>
        {para.map((para, index) => (
          <p key={index} className="font-normal  text-paraMain text-hMain p-4">{para}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
