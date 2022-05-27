import React, {forwardRef} from 'react';
function Monday(props,ref){
    return(
        <input type="text" ref={ref}/>
    )
}
export default forwardRef(Monday);