import './App.css'
import { SquadifyTextIcon } from './icons/SquadifyTextIcon'
import { SquadifyLogoIcon } from './icons/SquadifyLogoIcon'

const App = () => {
    return (
        <div className="App">
            <div className="App-background">
                {new Array(15).fill(null).map((_, i) => (
                    <div key={i} className="App-logo-row">
                        {new Array(8).fill(null).map((_, j) => (
                            <div
                                className="App-logo-cell"
                                key={j}
                                style={{
                                    margin: '0.5 rem',
                                }}
                            >
                                <SquadifyLogoIcon width="100%" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <SquadifyTextIcon width="80%" zIndex={2} />
        </div>
    )
}

export default App
