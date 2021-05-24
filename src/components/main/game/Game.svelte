<script>
	import Card from '../layout/Card.svelte';
	import GameCard from '../layout/GameCard.svelte';
	import { onMount } from 'svelte';

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

		createData('btc', 250000, 5000, 0.2);
		createData('eth', 24000, 250, 0.13);
		createData('bnb', 12000, 80, 0.2);
		createData('xrp', 15, 5, 0.15);
		createData('dot', 2, 1, 0.3);
		createData('dgb', 0.3, 0.1, 0.35);

		console.log(intdata.cryptos);

		return intdata.cryptos;
	}

	let data = {
		money: 15000,
		cryptos: initData(),
		incomePerSecond: 0
	};

	function buyBNB() {
		buy('bnb');
	}
	function buyETH() {
		buy('eth');
	}
	function buyBTC() {
		buy('btc');
	}
	function buyDGB() {
		buy('dgb');
	}
	function buyDOT() {
		buy('dot');
	}
	function buyXRP() {
		buy('xrp');
	}

	function buy(type) {
		let crypto = data.cryptos[type];
		let price = crypto.price;
		let amount = crypto.amount;
		let increase = crypto.increase;
		let gives = crypto.gives;

		data.cryptos[type] = {
			price: parseFloat((price + price * increase).toFixed(2)),
			amount: amount + 1,
			increase,
			gives
		};

		data.money = parseFloat((data.money - price).toFixed(2));
	}

	function updateMoney() {
		let cryptos = data.cryptos;

		let eth = cryptos['eth'];
		let btc = cryptos['btc'];
		let bnb = cryptos['bnb'];
		let dgb = cryptos['dgb'];
		let dot = cryptos['dot'];
		let xrp = cryptos['xrp'];

		data.money = parseFloat(
			(
				data.money +
				(eth.gives * eth.amount +
					btc.gives * btc.amount +
					bnb.gives * bnb.amount +
					dgb.gives * dgb.amount +
					dot.gives * dot.amount +
					xrp.gives * xrp.amount)
			).toFixed(2)
		);
		data.incomePerSecond = parseFloat(
			eth.gives * eth.amount +
				btc.gives * btc.amount +
				bnb.gives * bnb.amount +
				dgb.gives * dgb.amount +
				dot.gives * dot.amount +
				xrp.gives * xrp.amount
		).toFixed(2);
	}

	onMount(() => {
		setInterval(updateMoney, 1000);
	});
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
			<Card>
				<h1>{data.money} DKK</h1>
				<br />
				<br />
				<h6>Income Per Second: {data.incomePerSecond} DKK</h6>
				<br />
				<br />
				<br />
				<br />

				<p>
					Wanna learn more about Cryptos? Visit
					<a
						href="https://coinmarketcap.com/"
						target="_blank">
						coinmarketcap
					</a>
					to learn more
				</p>
			</Card>
		</div>
		<div class="col-12 col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
			<div class="row">
				<div
					class="col-12 col-sm-12 col-xs-12 col-md-6
					col-lg-6 col-xl-6">
					<GameCard
						price={data.cryptos.dgb.price}
						money={data.money}>
						<div slot="header">DIGIBYTE</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.dgb.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.dgb.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.dgb.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyDGB}>
							Buy for {data.cryptos.dgb.price}
						</button>
					</GameCard>
					<GameCard
						price={data.cryptos.dot.price}
						money={data.money}>
						<div slot="header">DOT</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.dot.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.dot.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.dot.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyDOT}>
							Buy for {data.cryptos.dot.price}
						</button>
					</GameCard>
					<GameCard
						price={data.cryptos.xrp.price}
						money={data.money}>
						<div slot="header">XRP</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.xrp.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.xrp.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.xrp.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyXRP}>
							Buy for {data.cryptos.xrp.price}
						</button>
					</GameCard>

				</div>
				<div
					class="col-12 col-sm-12 col-xs-12 col-md-6
					col-lg-6 col-xl-6">
					<GameCard
						price={data.cryptos.bnb.price}
						money={data.money}>
						<div slot="header">BINANCE COIN</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.bnb.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.bnb.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.bnb.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyBNB}>
							Buy for {data.cryptos.bnb.price}
						</button>
					</GameCard>
					<GameCard
						price={data.cryptos.eth.price}
						money={data.money}>
						<div slot="header">ETHEREUM</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.eth.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.eth.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.eth.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyETH}>
							Buy for {data.cryptos.eth.price}
						</button>
					</GameCard>
					<GameCard
						price={data.cryptos.btc.price}
						money={data.money}>
						<div slot="header">BITCOIN</div>
						<div slot="body">
							<span>
								Price: {data.cryptos.btc.price}
							</span>
							<br />
							<span>
								Income: {data.cryptos.btc.gives}
							</span>
							<br />
							<span>
								Amount Owned: {data.cryptos.btc.amount}
							</span>
						</div>
						<button
							class="btn btn-primary btn-block"
							slot="footer"
							on:click={buyBTC}>
							Buy for {data.cryptos.btc.price}
						</button>
					</GameCard>
				</div>
			</div>
		</div>
	</div>
</div>
