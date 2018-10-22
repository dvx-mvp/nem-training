let nem = require("nem-sdk").default;

let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

let common = nem.model.objects.create("common")("9951354a","9d0ba79cf57d05e144a39188003ded1e37059757131c20babcc8ad54f637cb52");

let transferTransaction = nem.model.objects.create("transferTransaction")("TCPCAZ7XJ2X4SWR6AG6BUEKS6DQ7DLZ2D6QB5M2V",5,"Hi");

let preparedTransaction = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id);

nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(success){
	console.log(success);
}, function(error){
	console.log(error);
});