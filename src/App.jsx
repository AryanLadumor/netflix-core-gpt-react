import Body from "./components/Body"
import Browse from "./components/Browse"
import store from "./utils/store"
import { Provider } from "react-redux"
function App() {

  return (
    <Provider store={store}>
    <div className="w-full">
     <Body/>
    </div>
    </Provider>
  )
}

export default App
