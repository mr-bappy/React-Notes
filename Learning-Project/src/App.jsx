import './App.css'
import { DerivedState } from './components/DerivedState'
import { EventHandling } from './components/EventHandling'
import { EventPropagation } from './components/EventPropagation'
import { EventProps } from './components/EventProps'
import { SiblingComponent, State } from './hooks/State'
import { LiftStateUp } from './components/LiftStateUp'
import {NetflixSeries} from './components/NetflixSeriex'
import { Counter } from './hooks/useState'
import { ToDoList } from './projects/ToDoList'
import { ToggleSwitch } from './projects/ToggleSwitch'
import { ReactUseEffect } from './hooks/useEffect'
import { HowNotToFetchApi } from './hooks/useEffect/HowNotToFetchApi'
import { Pokemon } from './projects/Pokemon/Pokemon'

function App() {

  return (
    <>
      {/* in html you can't write JS comments or JS language, to write JS in HTML you need to '{}' like we have used here to write comments, you can also add variable name too. this is known as dynamic values in JSX */}
      {/* using a component */}
      {/* <NetflixSeries/>  */}
      {/* <NetflixSeries/> ----> we can use multiple times */}
      {/* <NetflixSeries/> ----> this follow DRY(Don't Repeat Yourself) method, as we just using component and not writing whole code again */}
      
      {/* Events */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}

      {/* States */}
      {/* <State/>
      <SiblingComponent/> */}
      {/* <DerivedState/> */}
      {/* <LiftStateUp/> */}




      {/* Projects */}
      {/* <ToggleSwitch/> */}
      {/* <ToDoList/> */}

      {/* hooks */}
      {/* <Counter/> */}
      {/* <ReactUseEffect/> */}

      {/* <HowNotToFetchApi/> */}

      {/* project */}
      <Pokemon/>

    </>
  )
}

export default App


// // making of a component
// const NetflixSeries = () => {

//   const name = 'Queen of Tears';
//   const rating = 8.2 ;
//   const summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias obcaecati, dolorem enim maiores velit incidunt nemo similique non quae numquam cupiditate labore fugit quia explicabo amet tenetur totam in optio?' ;

//   function returnGenre(){
//     return 'RomCom';
//   }

//   return (
//     <div>
//       <div>
//         <img src="qot.webp" alt="" />
//       </div>
//       <div>
//         <h1>Name: {name}</h1> {/* passing variable */}
//         <h3>Rating: {5==1 ? rating : 5+2} </h3> {/* using conditional operators and expressions */}
//       </div>
//       <div>
//         <p>Summary: {summary} </p>
//       </div>
//       <div>
//         Genre: {returnGenre()}
//       </div>
//     </div>
//   )
// }


/* to avoid unnessacary nodes, we can use
- array with key
- React.Fragment
- null tag
*/