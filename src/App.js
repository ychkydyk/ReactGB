import './components/style/App.css'
import {Message} from "./components/func/Message";

export function App() {
    const myMessage = 'Продам гараж';
    return (
        <div className="App">
            <header className="App-header">
                <h3 style={{color: 'darkgreen'}}>
                    Message:<Message message={myMessage}/>
                </h3>
            </header>
        </div>
    );
}


