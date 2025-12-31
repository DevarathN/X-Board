
async function addAccordionToHTML(){
    const res1 = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.thenation.com/subject/politics/feed/')
    const accordion1= await res1.json()
    const res2 = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss')
    const accordion2= await res2.json()
    const res3 = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thehindu/sportstarlive-rj3ttinvz.rss')
    const accordion3= await res3.json()
    let accBody1 = document.getElementsByClassName('carousel-inner')[0]
    let accBody2 = document.getElementsByClassName('carousel-inner')[1]
    let accBody3 = document.getElementsByClassName('carousel-inner')[2]
    
    let temp1= ''
    let temp2=''
    let temp3 = ''
    accordion1.items.map((ele,ind)=>{
        let newDate = new Date(ele.pubDate.toString())
        newDate = newDate.toLocaleString('en-US',{month:'long',day:'numeric',year:'numeric'})
        let author = ele.author
        if(author ==''){
            author = 'Anonymous'
        }
        if(ind!=0){
            temp1+=`
            <a href = ${ele.link}>
                <div class="carousel-item">
                    
                    <img src=${ele.thumbnail} class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                    
                </div>
            </a>
`
            
          
        }
        
        else{
            temp1+=`
            <a href = ${ele.link}>
                <div class="carousel-item active">
                    <img src="${ele.enclosure.link}" class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                </div>
            </a>
 `}
        
        
    })

    accBody1.innerHTML =temp1
    
    accordion2.items.map((ele,ind)=>{
        let author = ele.author
        if(author ==''){
            author = 'Anonymous'
        }
        let newDate = new Date(ele.pubDate.toString())
        newDate = newDate.toLocaleString('en-US',{month:'long',day:'numeric',year:'numeric'})
        if(ind!=0){
            temp2+=`
            <a href = ${ele.link}>
                <div class="carousel-item">
                    
                    <img src="${ele.enclosure.link}" class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                    
                </div>
            </a>
`
            
          
        }
        
        else{
            temp2+=`
            <a href = ${ele.link}>
                <div class="carousel-item active">
                    <img src="${ele.enclosure.link}" class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                </div>
            </a>
 `}
        
        
    })
    accBody2.innerHTML = temp2
    accordion3.items.map((ele,ind)=>{
        let author = ele.author
        if(author ==''){
            author = 'Anonymous'
        }
        let newDate = new Date(ele.pubDate.toString())
        newDate = newDate.toLocaleString('en-US',{month:'long',day:'numeric',year:'numeric'})
        if(ind!=0){
            temp3+=`
            <a href = ${ele.link}>
                <div class="carousel-item">
                    
                    <img src="${ele.enclosure.link}" class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                    
                </div>
            </a>
`
            
          
        }
        
        else{
            temp3+=`
            <a href = ${ele.link}>
                <div class="carousel-item active">
                    <img src="${ele.enclosure.link}" class="d-block w-100" alt="...">
                    <div class='carousel-text'>
                        <div class='carousel-heading'>
                            <h4>${ele.title}<h4>
                        </div>
                        <div class='carousel-sub-heading'>
                            <p>${author}</p>
                            <div class='dot'>
                            </div>
                            <p>${newDate}</p>
                        </div>
                        <div class='description'>${ele.description}</div>
                    </div>
                </div>
            </a>
 `}
        
        
    })
    accBody3.innerHTML = temp3
    
}
