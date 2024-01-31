const Content = () => {
    const name = 'karthik';
    const handleNameChange = () => {
      const names = ['karthik', 'arjun', 'kausik'];
      const int = Math.floor(Math.random()*3);
      return names[int];
    }
    return (
        <main>
            <p>
                {name} , Hello {handleNameChange()}
            </p>
        </main>
    )
}

export default Content