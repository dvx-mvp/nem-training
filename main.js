let nem = require("nem-sdk").default;

let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

nem.com.requests.chain.height(endpoint).then(function(result){
	console.log(result);
}, function(error){
	console.log(error);
})

nem.com.requests.chain.lastBlock(endpoint).then(function(result){
	console.log(result);
}, function(error){
	console.log(error);
})