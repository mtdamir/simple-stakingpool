async function main() {

  const  Stakinpool = await ethers.getContractFactory("Stakinpool");
  const stakinpool = await Stakinpool.deploy("Hello, Hardhat!");

  console.log(" Stakinpool deployed to:", stakinpool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });