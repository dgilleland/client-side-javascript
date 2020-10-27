function getCategory( ){
    let randomIndex = Math.ceil(Math.random() * 6)  -1
     const categories=['domestic', 'project', 'school', 'social', 'personal', 'proffessional']
    return categories[randomIndex]
}

 

 