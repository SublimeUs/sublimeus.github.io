
var single = function(){
	var pro1 = '私有变量1';
	var pro2 = '私有变量2';
	function showPriv(){
		console.log('这是私有函数调用的--------');
		console.log(pro1);
	}
	return {
		publicMethod:function(){
			showPriv();
		},
		publicVar:'the public can see this!'
	}
}
var s = new single();
s.publicMethod();
console.log(s.publicVar);


