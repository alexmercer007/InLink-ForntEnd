

 function Names( { classLabel, classInput } ){

  const names = [ 
    
    { label:"Name:", htmlFor:"name", id:"name", type:"text", name:"name" },
    { label:"Last name:", htmlFor:"lastname", id:"lastname", type:"text", name:"lastname" },
    { label:"Username:", htmlFor:"username", id:"username", type:"text", name:"username" },
    { label:"Email:", htmlFor:"email", id:"email", type:"email", name:"email" },
    { label:"Password:", htmlFor:"password", id:"password", type:"password", name:"password" },
    { label:"Confirm Password:", htmlFor:"confirmPassword", id:"confirmPassword", type:"password", name:"confirmPassword" },
    { label:"Birthdate:", htmlFor:"birthdate", id:"birthdate", type:"date", name:"birthdate" },
    { label:"Number Phone:", htmlFor:"numberPhone", id:"numberPhone", type:"text", name:"numberPhone" }];

     return(
             
             <div>
            { names.map((name, index )=>(
               <div key={index}>
               <label className="classLabel" htmlFor={name.htmlFor}>{name.label}</label>
               <input className="classInput" id={name.id} type={names.type} name={name.name}></input>
               </div>      
             ))}
             </div>
             );
 };
 
 
 export default Names;