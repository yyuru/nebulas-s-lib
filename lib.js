//@description: 自定义js库
//@author: nebulas
//@version: 1.0.0
//@date-from: 2018/3/26

(function(window){
    'use strict';
    function define_library(){
        var Library={};
        Library.description=function(){
            console.log("It's nebulas' library")
        };
        //自增数字方法，包括dom值自增显示效果，css样式属性值自增效果
        Library.increaseNumValue={
            "id":0,
            dom:function(strNum,endNum,interval,dom){
                let value=strNum;
                setInterval(function(){
                    if(value<endNum){
                       
                        value+=interval;
                        dom.innerHTML=value;  
                            
                           
                            
                    }else{
                            return false   
                    }
                },1)
               
            },
            style:function(strNum,endNum,interval,dom,type){
                let value=strNum;
                setInterval(function(){
                    if(value<endNum){
                       
                        value+=interval;
                        dom.style.setProperty(type,value); 
                            
                           
                            
                    }else{
                            return false   
                    }
                },1)
            }
        }
       return Library;
    }

    if(typeof(Library)==="undefined"){
        
        window.library=define_library();
    }else{
        console.log("Library is already defined.")
    }
})(window)