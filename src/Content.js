import {useState} from 'react';
const Content = () => {
    const [name, setName] = useState('karthik');
    //gotchas
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
      const names = ['karthik', 'arjun', 'kausik'];
      const int = Math.floor(Math.random()*3);
      setName(names[int]);
    }

    const handleClick2 = () => {
        //count is actually the value of count when brought into the function
        setCount(count+1);
        setCount(count+1); //does not add +1 to count as count is simply count+1 twice without actually changing in every step
        console.log(count);
    }
    const handleClick3 = (e) => {
        console.log("event target: ", e.target);
    }
    return (
        <main>
            <p onDoubleClick={(e)=>handleClick3(e)}>
                {name} , Hello {name}!
            </p>
            <button onClick={handleNameChange}>Please click to change name</button>
            <button onClick={()=>handleClick2()}>also click me</button>
            <button onClick={(e)=>handleClick3(e)}>finally click me</button>
        </main>
    )
}

export default Content