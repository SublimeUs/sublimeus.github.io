(function(){
	function g(id){
		return document.getElementById(id);
	}
	var val = g('input-value').value;
	/**
	 * 渲染模板
	 */
	var list = {
		queue: [2,3],	//队列
		unshift: function(num){		//左侧入
			this.queue.unshift(num);
			this.paint();
		},
		push: function(num){	//右侧入
			this.queue.push(num);
			this.paint();
		},
		pop: function(){	//左侧出
			if(list.queue.length===0){
				alert('队列为空');
				return false;
			}
			list.queue.pop();
			list.paint();
		},
		shift: function(){		//右侧出
			if(list.queue.length===0){
				alert('队列为空');
				return false;
			}
			list.queue.shift();
			list.paint();
		},
		del: function(num){
			this.queue.splice(num,1);
			this.paint();
		},
		paint: function(){
			var html=this.queue.reduce(function(pre,cur){
				return pre+"<span class='items' data-num='"+val+"'>"+cur+"</span>"}
				,"");
			g('entry').innerHTML = html;
		}
	}
	g('left-in').onclick = function(){
		list.unshift(val);
	}
	g('right-in').onclick = function(){
		list.push(val);
	}
	g('left-out').onclick = function(){
		list.shift();
	}
	g('right-out').onclick = function(){
		list.pop();
	}
})();