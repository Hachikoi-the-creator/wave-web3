const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  // compile & create bytecode files in '/artifacts'
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // it's like a local server, but without hot-refresh
  const waveContract = await waveContractFactory.deploy();
  // wait until the contract is full deployed :O
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
};

runMain();