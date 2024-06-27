import { useEffect, useState } from "react";
import BackOffice from "../../components/BackOffice";
import MyModal from "../../components/MyModal";
import config from "../../config";
import Swal from "sweetalert2";
import axios from "axios";


function Product() {

    const [product,setProduct] = useState({});
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const handleSave = async () => {
        try{
            product.img = "";
            product.price = parseInt(product.price);
            product.cost = parseInt(product.cost);

            const res = await axios.post(config.apiPath + '/product/create', product,config.headers());

            if(res.data.message === 'success'){
                Swal.fire({
                    title: 'save',
                    text: 'success',
                    icon: 'success',
                    timer: 2000
                })
            }
            document.getElementById('modalProduct_btnClose').click();
            fetchData();
        }catch(e){
            Swal.fire({
                title: 'error',
                text: e.message,
                icon: 'error'
            })

        }

    }

    const clearForm = () => {
        setProduct({
            name: '',
            price: '',
            cost:''
        })
    }

    const fetchData = async () => {
        try{
            const res = await axios.get(config.apiPath + '/product/list',config.headers())

            if(res.data.results !== undefined){
                setProduct(res.data.results);
            }
        }catch(e){
            Swal.fire({
                title:'error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    return<BackOffice>
        <div className="h4">Product</div>
        <button onClick={clearForm} className="btn btn-primary" data-toggle='modal' data-target='#modalProduct'>
        <i className="fa fa-plus"></i>เพิ่มรายการ
        </button>

        <MyModal id='modalProduct' title='สินค้า'>
            <div>
                <div>ชื่อสินค้า</div>
                <input value={product.name} classname="form-control" onChange={e => setProduct({ ...product, name: e.target.value})} />
            </div>
            <div className="mt-3">
                <>ราคาทุน</>
                <input value={product.cost} className="form-control" onChange={e => setProduct({ ...product, cost: e.target.value })}/>
            </div>
            <div className="mt-3">
                <div>ราคาขาย</div>
                <input value={product.price} className="form-control" onChange={e => setProduct({ ...product,price: e.target.value })}/>
            </div>
            <div className="mt-3">
                <>ภาพสินค้า</>
                <input className="form-control" type="file"/>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={handleSave }>
                    <i className="fa fa-facheck mr-2"></i>
                    save
                </button>
            </div>
        </MyModal>
       
    </BackOffice>
}

export default Product;