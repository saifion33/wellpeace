import { createAsyncThunk } from "@reduxjs/toolkit";
import { createChannelFunc} from "../../helpers";

export const createChannel=createAsyncThunk<ICreateChannelResponse,ICreateChannelData,{rejectValue:IServerResponse}>('/community/create',async(data,thunkApi)=>{
    try {
        const _id=await createChannelFunc(data);
        if (!_id) {
            throw new Error("channel creation failed.")
        }
        return {_id}
    } catch (error) {
        const errMsg=error as {message:string,errors:string[]}
        return thunkApi.rejectWithValue(errMsg);
    }
})