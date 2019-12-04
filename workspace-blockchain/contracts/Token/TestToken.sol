pragma solidity ^0.5.10;
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";


contract TestToken is ERC20Mintable {
    string public name;
    string public symbol;
    uint8 public decimals;

    constructor(string memory _name, string memory _symbol, uint8 _decimals) public {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }
}
