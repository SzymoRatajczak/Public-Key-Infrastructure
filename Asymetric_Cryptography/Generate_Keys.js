//generate keys for public key infrastructure without storage
var ursa=require('ursa');


//generate sender's PKI
var senderKey=ursa.generatePrivateKey(1024,65537); //produce random key set
//first parameter: number of bits in modules any value 1024 or over is consider like secure 
//second:  exponent value

var sendPrivateKey=ursa.createPrivateKey(senderKey.toPrivatePem());
var sendPublicKey=ursa.createPublicKey(senderKey.toPublicPem());


//generate reciver's PKI
var reciverKey=ursa.generatePrivateKey(1024,65537);
var reciverPrivateKey=ursa.createPrivateKey(reciverKey.toPrivatePem());
var receiverPublicKey=ursa.createPublicKey(reciverKey.toPublicPem());

