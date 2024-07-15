function calculator ()
{
    var val_1 = document.getElementById('n1').value;
    var opr_1 = document.getElementById('opr').value;
    var val_2  = document.getElementById('n2').value;
    
    if(opr_1 == '+')
    {
     var result = parseInt(val_1) + parseInt(val_2);
    }
    if(opr_1 == '-')
    {
     var result = parseInt(val_1) - parseInt(val_2);
    }
    if(opr_1 == 'X')
    {
     var result = parseInt(val_1) * parseInt(val_2);
    }
    if(opr_1 == '/')
    {
     var result = parseInt(val_1) / parseInt(val_2);
    }
    
    document.getElementById('result').value = result ;
      alert(Calculate, Done);
}