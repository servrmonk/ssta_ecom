import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CartContext } from "./ProdContext";
import { useContext } from "react";

export default function ProductPage() {
  const { medsDet,storeProductInCart } = useContext(CartContext);
  // console.log("Medsdetails", medsDet);


  const handleCartButton = (medicine,index) => {
    console.log(medicine,index);
    const productForCart = {
      medicineName:medicine.medicineName,
      medicineDescription:medicine.medicineDesc,
      medicinePrice:Number(medicine.medicinePrice)
      
    }
    // console.log("MedicinePrice is Number or not in productPage",typeof(productForCart.medicinePrice));
    storeProductInCart(productForCart)
    // console.log(productForCart);
  };

  return (
    <Container className="mt-3 p-1">
      <Card>
        {medsDet.length > 0 &&
          medsDet.map((prod, index) => (
            <div key={index}>
              <Card.Header as="h5">
                Medicine Name: {prod.medicineName}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Medicine Description: {prod.medicineDesc}
                </Card.Title>
                <Card.Text>Medicine Price:{prod.medicinePrice}</Card.Text>
                <Button onClick={()=>handleCartButton(prod,index)} variant="primary">
                  Add To Cart
                </Button>
              </Card.Body>
            </div>
          ))}
        {/* <Card.Header as="h5">Medicine Name</Card.Header>
        <Card.Body>
          <Card.Title>Medicine Description</Card.Title>
          <Card.Text>Price:$50</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body> */}
      </Card>
    </Container>
  );
}
