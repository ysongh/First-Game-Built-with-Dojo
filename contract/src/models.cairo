use starknet::ContractAddress;

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Test {
    #[key]
    pub player: ContractAddress,
    pub remaining: u8
}