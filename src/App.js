import {ToastContainer} from "react-toastify";
import Request from "./components/request";

function App() {

    return (
        <>
            <h1 className="text-3xl hover:font-bold text-red-800"> Hello world! </h1>
            <Request/>
            <ToastContainer/>
        </>
    );
}

export default App;
