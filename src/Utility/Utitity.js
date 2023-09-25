import Swal from 'sweetalert2'
const getLsData = ()=>{
  const  exData = localStorage.getItem('selectDonation');
    if (exData){
        return JSON.parse(exData)
    }else{
        return []
    }
}

const saveData = (id)=>{
    const data = getLsData()
    if(data?.find(itemId => itemId ==id)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You ar already donate here please try to donate another one.',
          })
          return
    }else{
        data?.push(id);
        localStorage.setItem('selectDonation',JSON.stringify(data))
        Swal.fire({
            icon: 'success',
            title: ' Your donation has been taken',
            showConfirmButton: false,
            timer: 2000
          })
    }
}

export {getLsData, saveData}