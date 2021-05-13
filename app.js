function size(){
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight
    
    if(screenWidth < 576){
        document.getElementById('size').innerHTML = 'Extra small'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }else if(screenWidth >= 576 && screenWidth < 768){
        document.getElementById('size').innerHTML = 'Small'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }else if(screenWidth >= 768 && screenWidth < 992){
        document.getElementById('size').innerHTML = 'Medium'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }else if(screenWidth >= 992 && screenWidth < 1200){
        document.getElementById('size').innerHTML = 'Large'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }else if(screenWidth >= 1200 && screenWidth < 1400){
        document.getElementById('size').innerHTML = 'Extra large'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }else{
        document.getElementById('size').innerHTML = 'Extra large +'
        document.getElementById('width').innerHTML = "Width: " + screenWidth + " px"
        document.getElementById('height').innerHTML = "Height: " + screenHeight + " px"
    }
}

function load(){
    size()
}