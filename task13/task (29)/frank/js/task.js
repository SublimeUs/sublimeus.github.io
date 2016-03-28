
	function g(id){
		return document.getElementById(id);
	}
	var value = g('text').value.length;
	var btn = g('btn');
	var help = g('help');

	/*正则验证*/
	var lenReg = /^.{4,16}$/;   

	var msg = {
		err_length: {
			"msg":"长度为4~16个字符",
            "className":"err"
		},
		err_require: {
			"msg":"姓名不能为空",
            "className":"err"
		},
		right_msg: {
			"msg":"名称格式正确",
            "className":"right"
		}
	}
	function change(data){
		help.innerHTML = "";
		help.innerHTML = data.msg;
		g('text').className = data.className;
		help.className = data.className;
	}

	btn.onclick = function(){
		// if(value==0){
		// 	change(msg.err_require);
		// }else 
		if(value<4||value>16){
			change(msg.err_length);
		}else{
			change(msg.right_msg);
		}
	}

