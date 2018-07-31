//一个最简单的模板引擎
(function(w){
  function buildFunc(tpl){
    let index = 0;
    let reg = /<%([\s\S]+?)%>/g;
    //out 为编译后的代码
    let body = 'var out=\'\';';
    body += '';
    tpl.replace(reg,(match,val,offset)=>{
      body += 'out += \''+ tpl.substring(index,offset) +'\';';
      if(match.includes('<%=')){
        //如果是取值将输出的字符串加上取值表达式即可
        body += 'out += '+val.substr(1)+';';
      }else{
        //不是取值就将表达式拼到方法体就即可
        body += val;
      }
      index =offset+match.length;//设置代码后面的位置
    });

    //将最后的字符串加入
    body += tpl.substring(index);
    body += 'return out;'
    
    return body;
  }
  w.compile = function(tpl,option){
    var funcBody = 'with(Data){' + buildFunc(tpl) +'}';
    var func = new Function('Data',funcBody);
    return func(option);
  }
})(window);