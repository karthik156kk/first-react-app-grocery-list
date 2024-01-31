const Content = () => {
    const name = 'karthik';
    const handleNameChange = () => {
      const names = ['karthik', 'arjun', 'kausik'];
      const int = Math.floor(Math.random()*3);
      return names[int];
    }
    const handleClick = () => {
        console.log("you clicked it");
    }
    //anonymous function is not called until its clicked. so inner function is invoked immediately only after clicking
    const handleClick2 = (name) => {
        console.log("you clicked and my name is: ", name);
    }
    const handleClick3 = (e) => {
        console.log("event target: ", e.target);
    }
    return (
        <main>
            <p onDoubleClick={(e)=>handleClick3(e)}>
                {name} , Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Please click</button>
            <button onClick={()=>handleClick2(name)}>also click me</button>
            <button onClick={(e)=>handleClick3(e)}>finally click me</button>
        </main>
    )
}

export default Content