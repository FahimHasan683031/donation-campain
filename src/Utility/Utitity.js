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
        alert('This donation allrady done')
    }else{
        data?.push(id);
        localStorage.setItem('selectDonation',JSON.stringify(data))
    }
}

export {getLsData, saveData}