var content = document.querySelector('.content ul')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.btn-removeAll')

var tags = []
function reRender(){
    content.innerHTML =''
    let vitualTagDoms = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=`<li> 
                                ${tag} 
                                <i class="fas fa-times" onclick="removeTag(${i})" ></i>  
                            </li>`

    }
    content.appendChild(input)
    input.focus()
}

reRender()

input.addEventListener('keydown',function(e){
    if(e.key=='Enter')
    {
        tags.push(input.value.trim())
        input.value=''
        reRender()
    }
})

function removeTag(index){
    tags.splice(index,1)
    reRender()
}

btnRemoveAll.addEventListener('click',function(){
    tags =[]
    reRender()
})