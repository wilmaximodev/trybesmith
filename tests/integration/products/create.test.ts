import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import { validProduct } from '../../mocks/productsMock';
import ProductsService from '../../../src/database/services/Products.Service';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Verifica se adiciona produto corretamente', async function () {
    sinon.stub(ProductsService, 'create').resolves({
      status: 201, data: validProduct
    });

    const response = await chai.request(app).post('/products').send(validProduct);
    expect(response.body).to.deep.equal(validProduct);
    expect(response).to.have.status(201);

  });

});
