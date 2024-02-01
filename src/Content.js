import ItemList1 from "./ItemList1"
const Content = ({items, setItems, handleCheck, handleDelete}) => {
    return (
        <>
        {/* fragements uses parent component's element here <main></main> */}
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
        </>
    )
}

export default Content