import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';




//this is going to be for my errors. i think i will do all expect for special intructions and toppings. 
const formSchema = yup.object().shape({
    name: yup.string().required("Please add your name"),
    size: yup.string().required("Please pick your size"),
    sauce: yup.string().required("Please pick your sauce"),
    pepperoni:yup.boolean(), 
    garlic:yup.boolean(), 
    pineapple:yup.boolean(), 
    olives:yup.boolean(), 
    mushrooms:yup.boolean(), 
    onions:yup.boolean(), 
    request:yup.string(),
    number:yup.string().required("How many would you like"),
})

function Form (){

    //main states
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



    //validating my schema 
    const validate = e => {
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
          .reach(formSchema, e.target.name)
          .validate(value)
          .then(valid => {
            errorState({
              ...error,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            errorState({
              ...error,
              [e.target.name]: err.errors[0]
            });
          });
      };


    //this is going to be my error state
    const [ error , errorState ] = useState({
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

    //input change 
    const inputChange = e => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
      };

      //submit my form
    const formSubmit = e => {
        e.preventDefault();
        console.log("Your Yummy Pizza Is On The Way!");
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => console.log(response))
        .catch(err => console.log(err));
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
        {error.name.length > 2 ? (
          <p className="error">{error.name}</p>
        ) : null}
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
               {error.size.length > 0 ? (
          <p className="error">{error.size}</p>
        ) : null}
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
               {error.sauce.length > 0 ? (
          <p className="error">{error.sauce}</p>
        ) : null}
           </label>
           <br/>
           </div>

           <div className='toppings'>
           <label htmlFor="toppings">
           Pick Up To 5 Toppings</label>
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
            placeholder="Add instructions here!"
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
               {error.number.length > 0 ? (
          <p className="error">{error.number}</p>
        ) : null}
           </label>
           <button>ADD TO ORDER</button>
           </div>
           <pre>{JSON.stringify(Form, null, 2)}</pre>
       </form>
    );
    
};

export default Form;