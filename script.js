const color=document.querySelectorAll('.palatte')

let previouslyselectedpalatte=null;
color.forEach(function(colour){
    colour.addEventListener('click',function(e){
        if(previouslyselectedpalatte){
            previouslyselectedpalatte.style.outline='';
        }
        selectedColor = e.target.id;
        e.target.style.outline='5px solid black';
        previouslyselectedpalatte=e.target;
    });
});

const drawing=document.querySelectorAll('.drawing *')
//the asteric * allows us to manipulate all the children of drawing
drawing.forEach(function(shape){
    shape.addEventListener('click',function(s){
        s.stopPropagation();
        const curr=s.target.style.backgroundColor;
        if(selectedColor){
            s.target.style.backgroundColor=curr===selectedColor?'':selectedColor;
        }
        else{
            alert('Please select a colour from the palette first');
        }
    });
});
