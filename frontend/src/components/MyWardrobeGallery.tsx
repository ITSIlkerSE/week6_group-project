import {MyWardrobeModel} from "../model/MyWardrobeModel";
import MyWardrobeCard from "./MyWardrobeCard";

type MyWardrobeGalleryProps = {
    myWardrobeModel : MyWardrobeModel[];
}


export default function MyWardrobeGallery (props: MyWardrobeGalleryProps) {

    return(
        <div>
            {props.myWardrobeModel.map((product) =>
                <div><MyWardrobeCard myWardrobeModel={product}/></div>)}
        </div>
    )
}