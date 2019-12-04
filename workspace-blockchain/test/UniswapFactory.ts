import { should } from 'chai';
import { TestTokenInstance } from '../types/truffle-contracts';
import { UniswapFactoryInstance } from '../types/truffle-contracts';

const TestToken = artifacts.require('./TestToken.sol') as Truffle.Contract<TestTokenInstance>;
const UniswapFactory = artifacts.require('./UniswapFactory.sol') as Truffle.Contract<UniswapFactoryInstance>;
should();

/** @test {UniswapFactory} contract */
contract('UniswapFactory', (accounts) => {
    /**
     * @test {UniswapFactory#launchExchange}
     */
    it('Launch an exchange for test token.', async () => {
        const token = await TestToken.new('TestToken', 'TST', 18);
        const uniswapFactory = await UniswapFactory.new();
        const launchEvent = (await uniswapFactory.launchExchange(token.address)).logs[0];
        launchEvent.event.should.be.equal('ExchangeLaunch');
        launchEvent.args.token.should.be.equal(token.address);
    });
});
