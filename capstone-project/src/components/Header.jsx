
const header = () => {

    return <>
    <header>
        <nav className="navbar">
            <div>Product Sale</div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Log In</li>
                    {/* had setCount for items in cart */}
                    <li>Cart </li>
                </ul>
            </div>
            </nav>
        </header>
    
    </>
}

export default header