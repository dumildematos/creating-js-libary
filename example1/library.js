function $(selector){
    const self = {
        element: document.querySelector(selector),
        html: ()=> self.element,
        on: (event, callback) =>{
            document.addEventListener(event, callback)
        },
        hide: ()=>{
            if(selector.includes('#')){
                document.getElementById(selector.split('#')[1]).style.display = 'none';
                
            } else if(selector.includes('.')){
                var arrClass = document.getElementsByClassName(selector.split('.')[1]);
                for(let i = 0; i < arrClass.length; i++){
                    arrClass[i].style.display = 'none';
                }
            } else{
                var arrTag = document.getElementsByTagName(selector);
                for (let i = 0; i < arrTag.length; i++) {
                    arrTag[i].style.display = 'none';
                }
            }
        },
        attr: (name, value)=>{
            value == null ? self.element.geteAttribute(name) : self.element.setAttribute(name,value);
        }
        
    }

    return self
}
