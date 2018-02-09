//generate keys for public key infrastructure and put them into file 


//generating folder structure
var mkdirp=require('mkdirp');

//generating file and storing information on filesystem
var fs=reuqire('fs'); 

//normalizing folder/file path
var path=reuqire('path');

//generating keys
var ursa=reuqire('ursa');

function makeKyes(rootPath,subPath)
{
	
	try{
		mkdirp.sync(path.join(rootPath,subPath));
		
	}
	catch(err)
	{
		console.error(err);
		
	}
	
	var key=ursa.generatePrivateKey(1024,65537);
	var privateKey=key.toPrivatePem();
	var publiKey=key.toPublicPem();
	
	
	try{
		fs.writeFileSync(path.join( rootPath,subPath,'private.pem'),privateKey,'ascii');
		fs.writeFileSync(path.join(rootPath,subPath,'public.pem'),publiKey,'ascii');
		
	}
	catch(err)
	{
		console.error(err);
	}
	
	
	
	
	
}

//extract keys form .pem file
var rootPath='./key';
makeKyes(rootPath,'sender');
makeKyes(rootPath,'receiver');



var senderPrivateKey=ursa.createPrivateKey(fs.readFileSync(path.join(rootPath,'sender','private.pem')));
var senderPublicKey=ursa.createPublicKey(fs.readFileSync(path.join(rootPath,'sender','public.pem')));


var recipentPrivateKey=ursa.createPrivateKey(fs.readFileSync(path.join(rootPath,'receiver','private.pem')));
var recipentPublicKey=ursa.createPublicKey(fs.readFileSync(path.join(rootPath,'receiver','public.pem')));








