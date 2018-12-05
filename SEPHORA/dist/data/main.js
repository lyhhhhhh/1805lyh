console.log('加载成功');
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		// 'index':"index",
		'index2':"index2"
	}
	
});
require(['index','index2'],function(index,index2){
		// index.index();
		index2.index2();
})