import ChatList from "./ChatList/ChatList";
import Userinfo from "./userInfo/Userinfo";
import "./list.css";
const List = () => {
        return(
                <div className = "list">
                        <Userinfo/>
                        <ChatList/>

                </div>
        )
}

export default List;