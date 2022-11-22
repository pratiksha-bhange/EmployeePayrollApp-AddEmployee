window.addEventListener('DOMContentLoaded',()=>{

    const name=document.querySelector('#name');

    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if (name.Value.length==0)
        {
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayroll()).name=name.Value;
            textError.textContent="";
        }catch(e)
        {
            textError.textContent=e;
        }
    }
    );
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textcontent=salary.value;
    salary.addEventListener('input',function() 
    {
        output.textContent=salary.value;
    });

function createAndUpdateStorage(employeeRollData)
{
    let EmployeePayrolllist=JSON.parse(localStorage.getItem("EmploeePayrolllist"));
    
   if (EmployeePayrolllist!=undefined)
    {
         EmployeePayrolllist.push(employeeRollData);
     }
     else{
        EmployeePayrolllist=[employeeRollData]
     }
     alert(EmployeePayrolllist.toString());
     localStorage.setItem("Employee[ayrolllist",JSON.stringify(EmployeePayrolllist));
    }
  const save=()=>
    {
        try{
            let employeePayRollData=createEmployeePayRoll();
            createAndUpdateStorage(employeePayRollData);
             window.location.replace("index.html");
        }catch(e)
        {
            console.log(e);
            return;
        }
        const createEmpPayRoll=()=>
        {
            let employeePayRollData=new EmployeePayroll();
            try{
                employeePayRollData.name=getInputValueById('#name');
            }catch(e)
            {
                setTextValue('.text-error',e);
                throw e;
            }
            employeePayRollData.profilePic=getSelectedValues('[name=profile]').pop();
            employeePayRollData.gender=getSelectedValues('[name=gender]').pop();
            employeePayRollData.department=getSelectedValues('[name=department]');
            employeePayRollData.notes=getInputValueById('#notes');
            employeePayRollData,salary=getInputValueById('#salary');
            let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
            employeePayRollData.startDate=date;
            alert(employeePayRollData.toString());
            return employeePayRollData;

        }
        const getInputValueById=(id)=>
        {
            let value=Document.querySelector(id).value;
            return value;
        }
        const getInputElementValue=(id)=>
        {
            let value=document.getElementById(id).value;
            return value;
        }
        const getSelectedValues=(propertyValue)=>{
            let allItems=document.querySelectorAll(propertyValue);
            let selItems=[];
            allItems.forEach(item =>
                {
                    if(item.checked)
                    selItems.push(item.value);
                });
                return selItems;

        }
        const resetform=()=>
        {
            setvalue('#name', '');
            unsetSelectedValues('[name=profile]');
            unsetSelectedValues('[name=gender]');
            unsetSelectedValues('[name=department]');
            setValue('#salary', '');
            setValue('#day', '3');
            setValue('#month', 'january');
            setValue('#year', '2020');
        
        }
        const unsetSelectedValues=(propertyValue)=>
        {
            let allItems=document.querySelector(propertyValue);
            allItems.forEach(item=>
                {
                    item.checked=false;
                });
        }
        const setTextValue=(id,value)=>{
            const element=document.querySelector(id);
            element.textContent=value;
        }
    }
});  
        

