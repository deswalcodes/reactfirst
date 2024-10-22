import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom ,evenSelector} from "./store/atoms/counter"



export default function App(){





  return <div>
    <RecoilRoot>
    <Button/>
    <Counter/>
    <IsEven/>
    
    </RecoilRoot>

  </div>
}


function Button(){
const setCount = useSetRecoilState(counterAtom)


  return <div>
    <button onClick = {()=> setCount(c=>c+2)}>Increase</button>
    <button onClick = {()=> setCount(c=>c-1)}>Decrease</button>
  </div>
}
function Counter(){
  const count = useRecoilValue(counterAtom)




  return <div>
    {count}

  </div>
}

function IsEven(){
  const even = useRecoilValue(evenSelector);


  return <div>
    {even ? <div>Value is Even! </div> : <div>Value is Odd!!</div>}
  </div>

}