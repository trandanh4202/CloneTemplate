var btnsearch = document.querySelector('.search-btn')

btnsearch.addEventListener('click',function(){
	this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})