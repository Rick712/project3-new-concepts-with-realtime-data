(function(){

    const swim = function() {
        const fishes = document.querySelectorAll('.tank img')
        fishes.forEach(function(fish){
            const xPos = window.innerWidth - 130,
                xRand = Math.random(),
                yPos = window.innerHeight - 50,
                yRand = Math.random()

            const firstPos = window.getComputedStyle(fish).getPropertyValue('left').split('p')[0],
                nextPos = xPos * xRand

            if (firstPos > nextPos) {
                fish.style.transform = "rotateY(180deg)"
            }
            if (firstPos < nextPos) {
                fish.style.transform = "rotateY(0deg)"
            }

            fish.style.left = xPos * xRand + 'px'
            fish.style.top = yPos * yRand + 'px'
        })
    },
        changeVariables = function() {
            const ammUp = document.querySelector('.ammUp'),
                ammDown = document.querySelector('.ammDown'),
                ammCounter = document.querySelector('.amm p'),
                foodUp = document.querySelector('.foodUp'),
                foodDown = document.querySelector('.foodDown'),
                foodCounter = document.querySelector('.food p'),
                    fish = document.querySelectorAll('.tank img')

            let ammCount = 0,
                foodCount = 3

            if(ammUp) {

                ammCounter.innerHTML = ammCount
                foodCounter.innerHTML = foodCount

                ammUp.addEventListener('click', function(){
                    ammCount++
                    ammCounter.innerHTML = ammCount
                    check()
                })

                ammDown.addEventListener('click', function() {
                    if (ammCount == 0) {} 
                    else {
                        ammCount--
                        ammCounter.innerHTML = ammCount
                        check()
                    }
                })

                foodUp.addEventListener('click', function () {
                    foodCount++
                    foodCounter.innerHTML = foodCount
                    check()
                })

                foodDown.addEventListener('click', function () {
                    if(foodCount == 0) {}
                    else {
                        foodCount--
                        foodCounter.innerHTML = foodCount
                        check()
                    }
                })
            }

            const check = function(){

                const fishHealthy = document.querySelector('.fish_healthy'),
                    fishUnhealthy = document.querySelector('.fish_unhealthy'),
                    fishAlmostDead = document.querySelector('.fish_almost_dead'),
                    fishDead = document.querySelector('.fish_dead')

                if(ammCount >= 10 || foodCount == 0) {

                    fish.forEach(function(fish) {
                        fish.src =  '../images/fish_dead.png'
                    })
                    fishDead.classList.remove('noDisplay')
                    fishAlmostDead.classList.add('noDisplay')
                    fishUnhealthy.classList.add('noDisplay')
                    fishHealthy.classList.add('noDisplay')

                } else if(ammCount >= 7 || foodCount == 1) {
                    
                    fish.forEach(function (fish) {
                        fish.src = '../images/fish_almost_dead.png'
                    })
                    fishDead.classList.add('noDisplay')
                    fishAlmostDead.classList.remove('noDisplay')
                    fishUnhealthy.classList.add('noDisplay')
                    fishHealthy.classList.add('noDisplay')

                } else if(ammCount >= 5 || foodCount == 2) {

                    fish.forEach(function (fish) {
                        fish.src = '../images/fish_sick.png'
                    })
                    fishDead.classList.add('noDisplay')
                    fishAlmostDead.classList.add('noDisplay')
                    fishUnhealthy.classList.remove('noDisplay')
                    fishHealthy.classList.add('noDisplay')

                } else if (ammCount <= 5 || foodCount >= 3) {

                    fish.forEach(function (fish) {
                        fish.src = '../images/fish.png'
                    })
                    fishDead.classList.add('noDisplay')
                    fishAlmostDead.classList.add('noDisplay')
                    fishUnhealthy.classList.add('noDisplay')
                    fishHealthy.classList.remove('noDisplay')
                }
            }
        }

    swim()
    changeVariables()
    setTimeout(swim, 1)
    setInterval(swim, 4000)

})()