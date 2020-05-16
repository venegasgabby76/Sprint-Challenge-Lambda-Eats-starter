import React, { useState } from 'react';

function Form (){

    const [ formState , setFormState ] = useState({
        name:'',
        size:'',
        sauce:'',
        pepperoni:false, 
        garlic:false, 
        pineapple:false, 
        olives:false, 
        mushrooms:false, 
        onions:false, 
        request:'',
        number:'',
    });

    const clearForm = () => {
        setFormState({
            name:'',
            size:'',
            sauce:'',
            pepperoni:false, 
            garlic:false, 
            pineapple:false, 
            olives:false, 
            mushrooms:false, 
            onions:false, 
            request:'',
            number:'',
        })
    }


    const inputChange = e => {
        e.persist();
        // console.log("input changed!", e.target.value, e.target.checked);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
      };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        clearForm();
    };

    return (
       <form onSubmit={formSubmit}>
           <div className='name'>
           <label htmlFor="name">
               Name 
            <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
           </label>
           <br/>

           </div>
           <div className='size'>
           <label htmlFor="size">
               Choose Your Size
               <select
               value={formState.size}
               name="size"
               id="size"
               onChange={inputChange}>
                   <option value="">----</option>
                   <option value="X-Small">X-Small</option>
                   <option value="Small">Small</option>
                   <option value="Medium">Medium</option>
                   <option value="Large">Large</option>
                   <option value="X-Large">X-Large</option>
               </select>
           </label>
           <br/>
           </div>

           <div className='sauce'>
           <label htmlFor="sauce">
               Choose Your Sauce
               <select
               value={formState.sauce}
               name="sauce"
               id="sauce"
               onChange={inputChange}>
                   <option value="">----</option>
                   <option value="Red">Red Sauce</option>
                   <option value="BBQ">BBQ</option>
                   <option value="Garlic">Garlic White Sauce</option>
                   <option value="Alfredo">Alfredo</option>
               </select>
           </label>
           <br/>
           </div>

           <div className='toppings'>
           <label htmlFor="toppings">
           Pick Your Toppings</label>
           <br/>
        <input
          type="checkbox"
          id="pepperoni"
          name="pepperoni"
          checked={formState.pepperoni}
          onChange={inputChange}
        />
        <label htmlFor="pepperoni">Pepperoni</label>
        <br/>
    
        <input
          type="checkbox"
          id="garlic"
          name="garlic"
          checked={formState.garlic}
          onChange={inputChange}
        />
        <label htmlFor="garlic">Garlic</label>
        <br/>
         
        <input
          type="checkbox"
          id="pineapple"
          name="pineapple"
          checked={formState.pineapple}
          onChange={inputChange}
        />
        <label htmlFor="pineappple">Pineapple</label>
        <br/>
         
        <input
          type="checkbox"
          id="olives"
          name="olives"
          checked={formState.olives}
          onChange={inputChange}
        />
        <label htmlFor="olives">Black Olives</label>
        <br/>
         
        <input
          type="checkbox"
          id="mushrooms"
          name="mushrooms"
          checked={formState.mushrooms}
          onChange={inputChange}
        />
        <label htmlFor="mushrooms">Mushrooms</label>
        <br/>
        
        <input
          type="checkbox"
          id="onions"
          name="onions"
          checked={formState.onions}
          onChange={inputChange}
        />
         <label htmlFor="onions">Onions</label>
        <br/>
           </div>

           <div className="request">
           <label htmlFor="request">Special Intructions</label>
           <br/>
            <textarea
            name="request"
            id="request"
            placeholder="Put instructions here!"
            value={formState.request}
            onChange={inputChange}
            />
           </div>
            <div className="number">
            <label htmlFor="number">
               <select
               value={formState.number}
               name="number"
               id="number"
               onChange={inputChange}>
                   <option value="">--</option>
                   <option value="one">1</option>
                   <option value="two">2</option>
                   <option value="three">3</option>
                   <option value="four">4</option>
                   <option value="five">5</option>
               </select>
           </label>
           <button>ADD TO ORDER</button>
           </div>
       </form>
    );
};

export default Form;