import ItemList1 from "./ItemList1"
const Content = ({items, setItems, handleCheck, handleDelete}) => {
    return (
        <main>
            {items.length? 
                (
                    <ItemList1 
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ):
                (
                    <p style={{marginTop: '2rem'}}>
                        Your list is empty
                    </p>
                )
            }
        </main>
    )
}

export default Content