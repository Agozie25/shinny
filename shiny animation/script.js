let outer = document.querySelector('.outer')
let inner = document.querySelector('.inner')
let percent = document.querySelector('span')
let count = 0


function animation(){
    let loading = setInterval(animate,200)
    function animate(){
        if(count === 100){
            clearInterval()
            outer.classList.add('active-loader2')
            outer.classList.remove('active-loader')
        }else{
            count = count + 1
            percent.textContent = count + `%`
            outer.classList.add('active-loader')
        }
    }

}

inner.addEventListener('click',animation)