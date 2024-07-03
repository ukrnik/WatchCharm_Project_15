document.addEventListener("DOMContentLoaded", function () {
    const smallImages = document.querySelectorAll(".sale-item");
    const largeImages = document.querySelectorAll(".sale-item-big");
    const firstImage = document.querySelector(".first");

    smallImages.forEach(smallImage => {
        smallImage.addEventListener("click", function () {

            const targetId = smallImage.dataset.large;

            largeImages.forEach(largeImage => {
                if (largeImage.id === `large-${targetId}`) {
                    largeImage.classList.add("active");
                } else {
                    largeImage.classList.remove("active");
                }
            });
        });
    });

    largeImages.forEach(largeImage => {
        largeImage.addEventListener("click", function () {
            largeImage.classList.remove("active");
            firstImage.classList.add("active");

        });
    });


});


