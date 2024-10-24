import { atom , selector} from "recoil";



export const counterAtom = atom({
    key : "counter",
    default : {
        nname :'',
        messages : 0


    }

})


export const evenSelector = selector({
    key : "isEvenSelector",
    get : function({get}){
        const currentCount = get(counterAtom.messages);
        const isEven = (currentCount % 2 ==0);
        return isEven;

    }
})