import { Form, Button } from "react-bootstrap";
import "./shoeAddnPrint.css";
import { useContext, useState } from "react";
import { CartContext } from "./ProdContext";



export default function ShoeAddnPrint() {

  const {storeMedicineFun} = useContext(CartContext)

  const [prod,setProd] = useState({
    medName:'',
    medDes:'',
    medPrice:'',
  })
  const changeHandler = (e) =>{
    const {name,value} = e.target;
    setProd(prevProd=>({
      ...prevProd,[name]:value
    }))
  }
  // console.log("Prod value",prod);

  const submitHadler = (e)=>{
    e.preventDefault()
    const value = {
      medicineName:prod.medName,
      medicineDesc:prod.medDes,
      medicinePrice:Number(prod.medPrice)
    }
    // console.log("MedicinePrice is Number or not in shoeAddnPrint",typeof(value.medicinePrice));
    // console.log(value);
    storeMedicineFun(value)
  }


  return (
    <Form className="setForm" onSubmit={submitHadler} >
      <Form.Group>
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control name="medName" value={prod.medName} onChange={changeHandler}  placeholder="Enter Medicine Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control name="medDes" value={prod.medDes} onChange={changeHandler} placeholder="Enter Medicine Details" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="Number" name="medPrice" value={prod.medPrice} onChange={changeHandler} placeholder="Price" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
