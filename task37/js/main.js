function g(id){
	return document.getElementById(id);
}
function getClass(parent,cls){
	var parent = parent||document;
	var ele = document.getElementById(parent).getElementsByTagName('*');
	var arr=[];
	for(var i=0;i<ele.length;i++){
		if(ele[i].className==cls){
			arr.push(ele[i]);
		}
	}
	return arr;
}
var ele = getClass('F-Modal','modal-head');

var Modal = function(id,data){
	if(this instanceof Modal)
	{
		this.id=id;
		this.data=data;
	}else{
		return new Modal(id,data);
	}
}

Modal.prototype = {
	init:function(){

	}
	
}