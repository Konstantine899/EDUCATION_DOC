import React, { useContext } from 'react';
import { Row, Card } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device._brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          style={{ cursor: 'pointer' }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
