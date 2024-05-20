import { Col, Grid, Row } from "rsuite";
import storeData from "../data/items.json";
import StoreItem from "../components/StoreItem/StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Grid fluid>
        <Row className="show-grid">
          {storeData.map((item) => (
            <Col xs={24} md={12} lg={8} key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  );
};

export default Store;
