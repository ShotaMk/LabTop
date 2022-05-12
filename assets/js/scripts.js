let element = document.querySelectorAll('.animated');
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
            if(entry.isIntersecting){

                    entry.target.classList.add('fadeIn')

            }
    })
})

/*
observer.observe(document.querySelectorAll('.container'))*/


element.forEach(el=>{
    observer.observe(el)
})