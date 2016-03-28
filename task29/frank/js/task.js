
	function g(id){
		return document.getElementById(id);
	}
	var value = g('text').value;
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
		if(g('text').value.length>=4&&g('text').value.length<=16){
			change(msg.right_msg);
		}else if(g('text').value==0){
			change(msg.err_require);
		}else {
			change(msg.err_length);
		}
	}

