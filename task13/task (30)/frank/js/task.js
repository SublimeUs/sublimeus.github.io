function g(id){
	return document.getElementById(id);
}

var username = g('name');
var password = g('password');
var passwordRe = g('password-re');
var email = g('email');
var phone = g('phone');
var submit = g('submit');

var validate = {
	usernameValidate: function(ele){	//验证用户姓名
		if(ele.value.length>3&&ele.value.length<17){
			this.show(ele,'名称可用',true);
			return true;
		}else if(ele.value.length===0){
			this.show(ele,'名称不能为空',false);
		}else{
			this.show(ele,'长度为4~16个字符',false);
		}
	},
	passwordValidate:function(ele){		//验证用户密码
		if(ele.value.length>3&&ele.value.length<17){
			this.show(ele,'密码可用',true);
			return true;
		}else if(ele.value.length===0){
			this.show(ele,'密码不能为空',false);
		}else{
			this.show(ele,'长度为4~16个字符',false);
		}
	},
	passwordReValidate:function(pre,ele){		//验证用户再次输入密码	pre是与password比较
		if(ele.value.length>3&&ele.value.length<17){	
			if(ele.value===pre.value){
				this.show(ele,'密码输入一致',true);
				return true;
			}else{
				this.show(ele,'两次密码输入不一致',false);
			}
		}else if(ele.value.length===0){
			this.show(ele,'密码不能为空',false);
		}else{
			this.show(ele,'长度为4~16个字符',false);
		}
	},
	emailValidate:function(ele){		//验证用户邮箱
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(re.test(ele.value)){
			this.show(ele,'邮箱格式正确',true);return true;
		}else if(ele.value.length===0){
			this.show(ele,'邮箱不能为空',false);
		}else{
			this.show(ele,'邮箱格式不正确',false);
		}
	},
	phoneValidate:function(ele){		//验证用户手机
		var re =  /^1\d{10}$/;
		if(re.test(ele.value)){
			this.show(ele,'手机格式正确',true);return true;
		}else if(ele.value.length===0){
			this.show(ele,'手机不能为空',false);
		}else{
			this.show(ele,'手机格式不正确',false);
		}
	},
	show:function(ele,msg,status){	//显示提示信息 以及改变框和提示信息的颜色
			ele.nextElementSibling.innerHTML=msg;	//显示提示信息
			ele.style.borderColor = "";
			ele.nextElementSibling.style.color = "";
		if(status){
			ele.style.borderColor = "#59BB40";
			ele.style.boxShadow = "0 0 3px #59BB40";
			ele.nextElementSibling.style.color = "#59BB40";
		}else{
			ele.style.borderColor = "#DD010D";
			ele.style.boxShadow = "0 0 3px #DD010D";
			ele.nextElementSibling.style.color = "#DD010D";
		}
	}
}

username.onblur = function(){
	validate.usernameValidate(this);
}
password.onblur = function(){
	validate.passwordValidate(this);
}
passwordRe.onblur = function(){
	validate.passwordReValidate(password,this);
}
email.onblur = function(){
	validate.emailValidate(this);
}
phone.onblur = function(){
	validate.phoneValidate(this);
}
submit.onclick = function(){
	if(validate.usernameValidate(username)&&
		validate.passwordValidate(password)&&
		validate.passwordReValidate(password,passwordRe)&&
		validate.emailValidate(email)&&
		validate.phoneValidate(phone)){
			alert('输入信息成功');
		}else{
			alert('输入有误');
		}
}
