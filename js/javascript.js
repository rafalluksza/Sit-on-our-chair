document.addEventListener('DOMContentLoaded', function () {
    console.log('test');

//    element hidden na produktach
var productImage1 = document.querySelector('.box1');
var productImage2 = document.querySelector('.box2');

productImage1.addEventListener('mouseenter', function () {
    // console.log(productImage1);
    this.firstElementChild.classList.add('hidden');
    this.lastElementChild.classList.add('hidden');
});
    productImage1.addEventListener('mouseout', function () {
        // console.log(productImage1);
        this.firstElementChild.classList.remove('hidden');
        this.lastElementChild.classList.remove('hidden');
    });

productImage2.addEventListener('mouseenter', function () {
        console.log(productImage1);
        this.firstElementChild.classList.toggle('hidden');
        this.lastElementChild.classList.toggle('hidden');
});
    productImage2.addEventListener('mouseout', function () {
        console.log(productImage1);
        this.firstElementChild.classList.remove('hidden');
        this.lastElementChild.classList.remove('hidden');
    });

//slider

var arrowLeft = document.querySelector('.arrowLeft');
var arrowRight = document.querySelector('.arrowRight');
    console.log(arrowLeft);
    console.log(arrowRight);

        var IMGlist = document.querySelectorAll('.slider_img');
    console.log(IMGlist);

        var IMGlistArr = [];
        for (var i=0; i<IMGlist.length; i++) {
            IMGlistArr.push(IMGlist[i]);
        }
        console.log(IMGlistArr);

        var counter = 0;
        // function reset(){
            IMGlistArr[counter].classList.remove('slider_img');
// }
// reset();


        arrowRight.addEventListener('click', function () {
            console.log('nextclick');


            IMGlistArr[counter].classList.add('slider_img');
            counter++;
            if (counter < 0){
                counter = IMGlistArr.length-1;

            } else if (counter > IMGlistArr.length-1) {
                counter = 0
            }
            IMGlistArr[counter].classList.remove('slider_img');
            console.log(counter);


        })

        arrowLeft.addEventListener('click', function () {
            console.log('prevclick');

            IMGlistArr[counter].classList.add('slider_img');
            counter--;
            if (counter < 0){
                counter = IMGlistArr.length-1;

            } else if (counter > IMGlistArr.length-1) {
                counter = 0
            }
            IMGlistArr[counter].classList.remove('slider_img');

            console.log(counter);

        })













    });



