import {MyWardrobeModel} from "../model/MyWardrobeModel";



type MyWardrobeCardProps = {

    myWardrobeModel: MyWardrobeModel;
}


export default function MyWardrobeCard (props: MyWardrobeCardProps) {

     return (

         <div>
             <p>{props.myWardrobeModel.name}</p>
             <img src={props.myWardrobeModel.image} alt={props.myWardrobeModel.name}/>
             <p>{props.myWardrobeModel.size}</p>
             <p>{props.myWardrobeModel.price}</p>
         </div>

     )
 }