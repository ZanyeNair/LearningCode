function Form(){



  return(
    
    <form class="btn btn-lg m-4 text-light gradient-form1">
        <label>
            Name:
            <input class="form-control" type="text" />
            
        </label>
        <label>
        Age:
            <input class="form-control"  type="number" />
        </label>
        <label>
            Email:
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
           
        </label>
        <label>
            Resume:
            <input class="form-control" type="file" />
        </label>
        <label>
            Week of interview:
            <input class="form-control" type="date" />
        </label>
        <label>
            Time of interview:
            <input class="form-control" type="time" />
        </label>
       
        <label>
            <input type="submit" value="Submit" />
        </label>
    </form>





    
  )

}

export default Form;