function message(){
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Gender = document.getElementById('female');
    var Gender = document.getElementById('male');
    var Gender = document.getElementById('others');
    var BloodGroup = document.getElementById('blood');
    var Age = document.getElementById('age');
    var DOB = document.getElementById('DOB');
    var Aadhar = document.getElementById('aadhar');
    var Password = document.getElementById('password');
    var checkbox = document.getElementById('checkbox');
    
    if(Name.value === '' || Email.value === '' || Gender.value ==='' || BloodGroup.value ==='' ||
       Age.value === '' || DOB.value === '' || Aadhar.value === '' || Password.value === '' || checkbox.value === ''
       )
       danger.style.display = 'block';
}
else{
    setTimeout(()=>{
        
    }
    )
}