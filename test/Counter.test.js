const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", function () {
  let Counter, counter, owner, addr1;

  // Deploy the contract before each test
  beforeEach(async function () {
    // Get the contract factory
    Counter = await ethers.getContractFactory("Counter");
    // Deploy the contract
    counter = await Counter.deploy();
    // Get signers (accounts)
    [owner, addr1] = await ethers.getSigners();
  });

  // Test initial state
  describe("Deployment", function () {
    it("Should initialize count to 0", async function () {
      expect(await counter.get()).to.equal(0);
    });
  });

  // Test increment functionality
  describe("Increment", function () {
    it("Should increment count by 1", async function () {
      await counter.inc();
      expect(await counter.get()).to.equal(1);
    });

    it("Should increment multiple times correctly", async function () {
      await counter.inc();
      await counter.inc();
      expect(await counter.get()).to.equal(2);
    });
  });

  // Test decrement functionality
  describe("Decrement", function () {
    it("Should decrement count by 1", async function () {
      await counter.inc(); // Set count to 1
      await counter.dec();
      expect(await counter.get()).to.equal(0);
    });

    it("Should revert when decrementing below 0", async function () {
      await expect(counter.dec()).to.be.revertedWith("Counter: cannot decrement below zero");
    });
  });

  // Test reset functionality
  describe("Reset", function () {
    it("Should reset count to 0", async function () {
      await counter.inc(); // Set count to 1
      await counter.reset();
      expect(await counter.get()).to.equal(0);
    });

    it("Should reset to 0 when count is already 0", async function () {
      await counter.reset();
      expect(await counter.get()).to.equal(0);
    });
  });

  // Test access from different accounts
  describe("Multi-account interaction", function () {
    it("Should allow other accounts to increment", async function () {
      await counter.connect(addr1).inc();
      expect(await counter.get()).to.equal(1);
    });
  });
});