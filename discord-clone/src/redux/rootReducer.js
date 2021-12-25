import { combineReducers } from "redux";
import userReducer from "./reducer/userReducer";
import channelReducer from "./reducer/channelReducer";

let rootReducer = combineReducers({
    user: userReducer,
    channel:channelReducer,
});

export default rootReducer;
