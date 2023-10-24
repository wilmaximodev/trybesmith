import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Verifica se retorna todos os produtos', async function () {
    const response = await chai.request(app)
    .get('/products')

    expect(response.status).to.be.equal(200);
    });
});
