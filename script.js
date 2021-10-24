const AddNewWE=()=>
{
    let newNode=document.createElement('textarea');
    
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');

    let wEObj=document.getElementById('WE');
    let wABObj=document.getElementById('weAddButton');
    wEObj.insertBefore(newNode,wABObj);

}
const AddNewAQ=()=>
{
    let newNode=document.createElement('textarea');
    
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');

    let aQObj=document.getElementById('AQ');
    let aABObj=document.getElementById('aqAddButton');
    aQObj.insertBefore(newNode,aABObj);
}

const AddNewSkill=()=>
{

    let newNode=document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('placeholder','e.g HTML');


    let skillObj=document.getElementById('Skill');
    let sABObj=document.getElementById('skillAddButton');
   // console.log(sABObj);

    skillObj.insertBefore(newNode,sABObj);
}

// generate cv

const generateCV=()=>
{
    // cv design hide and show cv templete

    let cvDObj=document.getElementById('cvDesign');
    let cvTObj=document.getElementById('cvTemplete');
    cvDObj.style.display='none';
    cvTObj.style.display='block';
    
    // personal destails
    let nameObj=document.getElementById('nameField').value;
    let nameTObj=document.getElementById('nameFieldT1');
    nameTObj.innerHTML=nameObj;
    let phoneObj=document.getElementById('phoneField').value;
    let phoneTObj=document.getElementById('phoneFieldT1');
    phoneTObj.innerHTML=phoneObj;
    let addressObj=document.getElementById('addressField').value;
    let addressTObj=document.getElementById('addressFieldT1');
    addressTObj.innerHTML=addressObj;


    // social links

    let fbObj=document.getElementById('fbField').value;
    let fbTObj=document.getElementById('fbFieldT1');
    console.log(fbObj);
    fbTObj.innerHTML=fbObj;
    let instaObj=document.getElementById('instaField').value;
    let instaTObj=document.getElementById('instaFieldT1');
    instaTObj.innerHTML=instaObj;
    let liObj=document.getElementById('liField').value;
    let liTObj=document.getElementById('liFieldT1');
    liTObj.innerHTML=liObj;
    
    // objective

    let obObj=document.getElementById('ob').value;
    let obTObj=document.getElementById('obT');
    obTObj.innerHTML=obObj; 

   // work experience

   let weObj=document.getElementsByClassName('weField');
   let weTObj=document.getElementById('weT');

   let str='';

   for(let e of weObj)
   {
       str=str+`<li>${e.value}</li>`;
       
   }
  // console.log('w'+str);
   weTObj.innerHTML=str;
   
   // academin qualification

   let aqObj=document.getElementsByClassName('aqField');
   let aqTObj=document.getElementById('aqT');

   let str1='';

   for(let e of aqObj)
   {
       str1=str1+`<li>${e.value}</li>`;
   }
   //console.log('a'+str1);
   aqTObj.innerHTML=str1;
   
   // skill

   let skillObj=document.getElementsByClassName('skillField');
   let skillTObj=document.getElementById('skillT');

   let str2='';

   for(let e of skillObj)
   {
       str2=str2+`<li>${e.value}</li>`;
   }
   console.log('a'+str1);
   skillTObj.innerHTML=str2;



   //photo


   let photoObj=document.getElementById('photoField').files[0];
   //console.log(photoObj);
   let photoTObj=document.getElementById('photoT');

   let reader=new FileReader();
   reader.readAsDataURL(photoObj);
   
   reader.onloadend=()=>
   {
   photoTObj.src=reader.result;
   }

}
 // cv download

 const downloadCV=()=>
 {
     window.print();
 } 
