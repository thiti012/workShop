import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import config from "../config";


function Index(params) {
    const [products, setproducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [recordInCarts,setRecordInCarts] = useState(0)

    useEffect (() => {
        fetchData();
        fetchDataFromLocal();
    },[]);

    const fetchData = async () => {
        try{
            const res = await axios.get(config.apiPath + '/product/list')
            if( res.data.results !== undefined){
                setproducts(res.data.results);
            }
        }catch(e){
            Swal.fire({
                title: 'error',
                text: e.message,
                icon:'error'
            })

        }
    }

    const addToCart = (item) => {
        let arr = carts;

        if(arr === null ){
            arr = [];
        }
        arr.push (item);

        setCarts(arr)
        setRecordInCarts(arr.length);

        localStorage.setItem('carts',JSON.stringify(carts));
    }

    const fetchDataFromLocal =  () => {
        const itemInCarts = JSON.parse(localStorage.getItem('carts'))
        setCarts(itemInCarts);
        setRecordInCarts(itemInCarts !== null ? itemInCarts.length : 0)
    }

    function showImage(item) {

        if(item.img !== undefined){
            let imgPath = config.apiPath + '/uploads/' + item.img;

            if(item.img === "" ) imgPath = "ezgif-7-57f525ec7d.webp";

            return <img className="card-img-top" 
            height='250px'
            src={imgPath}
            alt=""/>
        }
        
    }


    return<>

        <div  className="container-sm mt-5 ">
            <div className="float-start">
                <div className="h3">สินค้าของร้านเรา</div>
             </div>
            <div className="float-end">
                  ตะกร้าของฉัน
                <button className="btn btn-outline-success ms-2 me-2">
                     <i className="fa fa-shopping-cart me-2"></i>
                     {recordInCarts}
                 </button>
               ชิ้น
            </div>
            <div className="clearfix"></div>

            {/* <div className="h3">สินค้าของเรา</div> */}
                <div className="row " >
                    {products.length > 0 ? products.map(item => 
                        <div className="col-3 mt-3" key={item.id}>
                            <div className="card">
                                { showImage(item)}
                                <div className="card-body">
                                    <div>{item.name}</div>
                                    <div>{item.price.toLocaleString('th-TH')}</div>
                                    <div className="text-center">
                                        <button className="btn btn-primary" onClick={e => addToCart(item)}>
                                            <i className="fa fa-shopping-cart me-2"></i>
                                            add to Cart
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ): <></>}
                </div>

        </div>
    
    </>
    
}
export default Index;