import ReactDOM from "react-dom";

import Header from "./header";
import Story from "./story";
import Body from "./body";
import Aside from "./aside";

export default function App(){
    return(
        <div>
            <Header />
            <Story />
            <Aside />
            <Body />
        </div>

    );
}