import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  // it('Verifica se adiciona produto', async function () {
  //   const body = {
  //       name: 'product',
  //       price: 100,
  //       orderId: 1,
  //   };
  //   const response = await chai.request(app)
  //   .post('/products')
  //   .send(body)

  //   expect(response.status).to.be.equal(201);
  // });
});