let channelReducer =(state= null,action)=>{

     switch(action.type){
        case "CHANNEL_NAME":
            return action.payload;

        default :
            return null;

    }

}
export default channelReducer;
