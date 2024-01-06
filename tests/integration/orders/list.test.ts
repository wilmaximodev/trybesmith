import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  // it('Verifica se retorna todas as orders', async function () {
  //   const response = await chai.request(app)
  //   .get('/orders')

  //   expect(response.status).to.be.equal(200);
  //   })
});
