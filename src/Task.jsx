import React from 'react';

export default ({text, done, id, edit, onDelete, onCheck, onEdit, toEdit}) => {
    const listClass = `task ${done? 'task-done' : ''} ${edit? 'inEdit' : ''}`;
    const textInput = React.useRef(null);
    const handleKeydown = (e) => {
        if(e.key == 'Enter') {
            return toEdit();
        }
    }
   return (
        <li className={listClass}>
            <div className={"task-content"}>
                {!edit? <input type='checkbox' className='task-check' defaultChecked={done}
                onChange={()=>onCheck(id)}/>
                : null}            
                {edit ?
                <input  className='editTask' value={text} 
                onChange={onEdit} onKeyDown={handleKeydown}
                 ref={textInput} autoFocus={true}/>
                :<span className='task-text'>{text}</span> }
                
            </div>                                                          
            <div className="task-buttons">
                {!done?
                <div className='task-button' onClick={() => toEdit(id)}> 
                    <img src={edit? './submit.png' : './edit.png' }
                    alt='img' className='task-img' title='edit'
                    />
                </div>
                : null}            
                <div className='task-button' onClick={()=>onDelete(id)}>
                <img src='./del.png' alt='img' className='task-img' title='delete'></img>
                </div>                      
            </div>                    
        </li>)
}