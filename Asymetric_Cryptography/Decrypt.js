//verify message 
//to ensure that data are form source we except it  to be 
var bufferedMsg=new Buffer(encrpyted);
if(!senderPubKey.hashAndVerify('sha256',bufferMsg,signed,'base64'))
{
	throw new Error('Invalid signature');
	
}

//edcrypt message with recipent private key
else{
	var decryptedMsg=recipientPrivKey.decrpyt(encrpyted,'base64','utf8');
	console.log('decrypted MSG verifeid:',decryptedMsg);
}
