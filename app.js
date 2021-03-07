const input = document.getElementById('inputItem');
const searchButton = document.getElementById('button-click');
let mealCategory = input;


searchButton.addEventListener('click', function () {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+mealCategory.value+'')
        .then(res => res.json())
        .then(data =>getMealItem(data.meals))
});

const getMealItem=category=>{
    //console.log(category);
    if (category){
        for(let i=0;i<category.length;i++){
            const meal=category[i];
           // console.log(meal);
            var mealName=meal.strMeal;
            var thumbnail=meal.strMealThumb;
            //console.log(mealName,thumbnail);
    
            const categoryDiv=document.getElementById('categories');
            const itemDiv=document.createElement('div');
            //const infoDiv=document.createElement('div');
            itemDiv.className="single-item";
            //infoDiv.setAttribute("id","details")
            itemDiv.innerHTML=`
                <img src="${thumbnail}">
                <h6>${mealName}</h6>
                <button id="info"><a href="#" target="_blank">Details</a></button>
               `
            //infoDiv.appendChild(itemDiv);
            categoryDiv.appendChild(itemDiv);                        
    }}
    else {
        alert("meals are not found,try again");
    }
    }

    









