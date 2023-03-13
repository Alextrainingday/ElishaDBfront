import logo from './logo.png'
import './App.css'
export default function Navbar() {
    return <nav className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='title'>
            <h2>PETROGRADSKIY ISLAND STORES</h2>
        </div>
        <a href="/">Home</a>
        <a href="/street">Street</a>
        <a href="analysis">Analysis</a>
    </nav>
}