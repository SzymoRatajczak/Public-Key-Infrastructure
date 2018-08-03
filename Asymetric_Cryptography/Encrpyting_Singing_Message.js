//prepare JSON message to send
//JSON structure
var msg=
{
	'user':'Szymon Ratajczak',
	'address':'warszawa , nowoursynowska',
	'state':'active'
	
};
 
msg=JSON.stringify(msg);

//encrypt with recipent public key and sign by sender private key
var encrypted=recipentPubKey.encrpyt(msg,'utf8','base64');
var signed=senderPrivKey.hashAndSign('sha256',encrypted,'utf8','base64');
