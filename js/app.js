const searchInput  = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item") ; 
const buttons = document.querySelectorAll(".filter")
const priceButton = document.getElementById("search-price").children[1] ; 


const changeClass = (filter) => { 
    buttons.forEach(btn => { 
        if (btn.innerText.toLowerCase()===filter) { 
            btn.classList.add("selected")
        }
        else { 
            btn.classList.remove("selected") ; 
        }
    })
}

const searchhandler = () => { 
    const searchValue = searchInput.value.toLowerCase().trim(); 
    for(let product  = 0 ; product<products.length ; product++) {

        const productName  =  products[product].children[1].innerText.toLowerCase(); 
 
        if (productName.includes(searchValue)) { 
            products[product].style.display = "block" ; 
        }
        else { 
            products[product].style.display = "none" ; 
        }
    }

}

const FilterHandler = (event)=> {

    const filterText = event.target.innerText.toLowerCase();
    changeClass(filterText)
    
    products.forEach(item => { 
        const dataSet = item.dataset.category.toLowerCase() ; 
        
        switch(filterText) { 
            case dataSet : item.style.display = "block" ; break ; 
            case "all" : item.style.display = "block" ; break ; 
            default : item.style.display = "none" ; break ; 
        } 

    })
}

const searchPriceHandler = (event)=> { 
    const searchPrice = +event.target.parentElement.children[0].value ; 
    products.forEach(product => { 
        const productPrice = product.children[2].innerText ;
        const finalPrice = Number(productPrice.split(" ")[1]) ; 
        
        // We should compare searchPrice with finalPrice.

        if(searchPrice === finalPrice) { 
            product.style.display = "block" ; 
        }
        else { 
            product.style.display = "none" ; 
        }

        

    })

}


searchInput.addEventListener("keyup" , searchhandler) ; 

buttons.forEach((btn)=> { 
    btn.addEventListener("click" , FilterHandler) ; 
})

priceButton.addEventListener("click" , searchPriceHandler)

