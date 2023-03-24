const starAmount = 10;
const container = document.getElementById("star-container");

for (let i = 0; i < starAmount; i++)
{
    const stars = document.createElement("div");
    stars.className = "star";
    container.appendChild(stars);

    let starPosX = Math.random() * 85 + 7.5;
    let starPosY = Math.random() * 90 + 5;
    let starDelay = Math.random();
    let starDirection = Math.random();
    starDirection = Math.round(starDirection);

    if (starDirection === 0)
    {
        stars.style.animationDirection = "normal";
    }
    else 
    {
        stars.style.animationDirection = "reverse";
    }

    stars.style.left = starPosX + "%";
    stars.style.top = starPosY + "%";
    stars.style.animationDelay = starDelay + "s";
}