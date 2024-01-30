
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.urlencoded({extended: false })); 
app.set('view engine','pug'); 
app.use(express.static('public/'));


app.get('/',(req,res)=>{  //建立路由
	res.send('<h1>hello, server</h1>'); 
});


app.get('/getData',(req,res) =>{
	const {number} = req.query;
	//計算n!
	let total=0;
	for(let i=0;i<=number;i++){
		total+=i;
	}

	let templateData={ };
	const lack='Lack of Parameter';
	const wrong='Wrong parameter'
	templateData.dataDisplay=lack;
	if( number){
		if(number>=0){
			templateData.dataDisplay=total;
		} else {
			templateData.dataDisplay=wrong;
		}
	}
	// 檢查點console.log(number);
	res.render('getData',templateData);
});

app.listen(3000,()=>{  //告訴server要在哪port
	console.log('The app is running on host:3000'); //顯示狀態
});
