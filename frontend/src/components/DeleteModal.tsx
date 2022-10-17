import React from 'react';
import {Product} from "../model/Product";
import {useNavigate} from "react-router-dom";

type DeleteModalProps = {
    product: Product;
    deleteProduct: (id: string) => void;
}

function DeleteModal(props: DeleteModalProps) {

    const handleRoute = () => {
        // @ts-ignore
        props.deleteProduct(props.product.id)
        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete {props.product.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {props.product.name}?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleRoute}
                            data-bs-dismiss="modal"
                        >Delete</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;