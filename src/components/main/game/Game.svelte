<script>
  import Card from "../layout/Card.svelte";
  import GameCard from "../layout/GameCard.svelte";
  import { onMount } from "svelte";

  function initData() {
    let intdata = { cryptos: {} };

    function createData(name, price, gives, increase) {
      intdata.cryptos[name] = {
        price,
        gives,
        increase,
        amount: 0
      };
    }

    createData("btc", 250000, 1000, 0.06);
    createData("eth", 24000, 50, 0.07);
    createData("bnb", 12000, 75, 0.12);
    createData("xrp", 3, 0.05, 0.2);
    createData("dot", 2, 0.2, 0.5);
    createData("dgb", 0.3, 0.02, 0.8);

    console.log(intdata.cryptos);

    return intdata.cryptos;
  }

  let data = {
    money: 10,
    cryptos: initData()
  };

  function buyBNB() {}
  function buyETH() {}
  function buyBTC() {}
  function buyDGB() {}
  function buyDOT() {}
  function buyXRP() {}

  function updateMoney() {}

  onMount(() => {
    setInterval(updateMoney, 1000);
  });
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
      <Card>
        <div>
          <p>Hello</p>
        </div>
      </Card>
    </div>
    <div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
      <div class="row">
        <div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
          <GameCard price={data.cryptos.btc.price} money={data.money}>
            <div slot="header">BITCOIN</div>
            <div slot="body">
              <span>Price: {data.cryptos.btc.price}</span>
              <br />
              <span>Income: {data.cryptos.btc.gives}</span>
              <br />
              <span>Amount Owned: {data.cryptos.btc.amount}</span>
            </div>
            <button
              class="btn btn-primary btn-block"
              slot="footer"
              on:click={buyBTC}>
              Buy for {data.cryptos.btc.price}
            </button>
          </GameCard>
        </div>
        <div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6" />
      </div>
    </div>
  </div>
</div>
