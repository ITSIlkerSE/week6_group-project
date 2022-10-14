import MyWardrobeGallery from "../components/MyWardrobeGallery";
import {MyWardrobeModel} from "../model/MyWardrobeModel";



type HomepageProps = {
    myWardrobeModel : MyWardrobeModel[];
}


export default function Homepage(props: HomepageProps) {


    return(
        <div>
            <MyWardrobeGallery myWardrobeModel={props.myWardrobeModel} />y
        </div>
    )
}