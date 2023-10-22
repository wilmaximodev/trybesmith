import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import ProductsService from '../../../src/database/services/Products.Service';
import { findAllProducts } from '../../mocks/productsMock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se retorna todos os produtos', async function () {

    const products = await ProductModel.findAll()

    sinon.stub(ProductsService, 'findAll').resolves(products);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(findAllProducts);

  });

});
