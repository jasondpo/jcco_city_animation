const cityAnimation = document.createElement('template');
cityAnimation.innerHTML = `
<style>
#triangle-down {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 6px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid red;
  }
  
  .city-container {
    position: absolute;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    width: 900px;
    height: 199px;
    overflow: hidden;
    cursor: default;
  }
  
  .city-container #animation-title {
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: inline-block;
  }
  
  .city-container #animation-title p {
    display: block;
    text-align: center;
    color: #585858;
    font-size: 19px;
    font-weight: bold;
    line-height: 1.1em;
    margin: 0;
    padding: 0;
  }
  
  .city-container #animation-title p span {
    font-size: 17px;
    font-weight: normal !important;
  }
  
  .city-container #greeting {
    position: absolute;
    top: -30px;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 10px 6px 10px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: .03em;
    text-align: center;
    white-space: nowrap;
    background-color: red;
    border-radius: 4px;
    opacity: 0;
    transition: top .15s linear, opacity .15s linear;
    transition-delay: .25s;
  }
  
  .city-container #greeting p {
    display: inline;
    margin: 0;
    padding: 0;
  }
  
  .city-container #city-forground {
    position: absolute;
    z-index: 2;
    width: 704px;
    height: 199px;
    background-image: url(images/louisville_skyline_forground.png);
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  
  .city-container #city-background {
    position: absolute;
    z-index: 1;
    width: 704px;
    height: 199px;
    background-image: url(images/louisville_skyline_background.png);
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  
  #centerHotZone {
    position: absolute;
    z-index: 4;
    bottom: 0;
    width: 165px;
    height: 90px;
    cursor: default;
  }
  
  #centerHotZone:hover #greeting {
    opacity: 1;
    top: -40px;
  }
  
  #centerHotZone:hover #city-car-1 {
    background-image: url(images/car_purple.png);
    animation: firstStop1 5s  0s   linear forwards,  carFadeIn1  2s  1s   linear forwards,  continue1  4s  6s   linear forwards, carFadeOut1 4s  8.5s linear forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes firstStop1 {
    from {
      right: -380px;
    }
    to {
      right: 120px;
    }
  }
  
  @keyframes continue1 {
    from {
      right: 120px;
    }
    to {
      right: 480px;
    }
  }
  
  @keyframes carFadeIn1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes carFadeOut1 {
    0% {
      opacity: 1;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  #centerHotZone:hover #city-car-2 {
    background-image: url(images/car_orange.png);
    animation: firstStop2 4.7s  .5s   linear forwards,  carFadeIn2  2s  1.5s   linear forwards,  continue2  4.2s  6.5s   linear forwards, carFadeOut2 4s  9s linear forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes firstStop2 {
    from {
      right: -380px;
    }
    to {
      right: 70px;
    }
  }
  
  @keyframes continue2 {
    from {
      right: 70px;
    }
    to {
      right: 480px;
    }
  }
  
  @keyframes carFadeIn2 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes carFadeOut2 {
    0% {
      opacity: 1;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  #centerHotZone:hover #city-car-3 {
    background-image: url(images/truck_blue.png);
    animation: firstStop3 4.3s  1.1s   linear forwards,  carFadeIn3  2s  2s   linear forwards,  continue3  4.6s  6.8s   linear forwards, carFadeOut3 4s  9.5s linear forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes firstStop3 {
    from {
      right: -380px;
    }
    to {
      right: 15px;
    }
  }
  
  @keyframes continue3 {
    from {
      right: 15px;
    }
    to {
      right: 480px;
    }
  }
  
  @keyframes carFadeIn3 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes carFadeOut3 {
    0% {
      opacity: 1;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  #centerHotZone:hover #city-car-4 {
    background-image: url(images/car_green.png);
    animation: firstStop4 3s  3s   linear forwards,  carFadeIn4  2s  4.2s   linear forwards,  continue4  4.6s  7.8s   linear forwards, carFadeOut4 4s  10.8s linear forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes firstStop4 {
    from {
      right: -350px;
    }
    to {
      right: -100px;
    }
  }
  
  @keyframes continue4 {
    from {
      right: -100px;
    }
    to {
      right: 480px;
    }
  }
  
  @keyframes carFadeIn4 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes carFadeOut4 {
    0% {
      opacity: 1;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  #centerHotZone:hover #city-car-5 {
    background-image: url(images/car_red.png);
    animation: firstStop5 4s  4s   linear forwards,  carFadeIn5  3s  5.2s   linear forwards,  continue5  5.6s  8.8s   linear forwards, carFadeOut5 5s  12.5s linear forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes firstStop5 {
    from {
      right: -350px;
    }
    to {
      right: -150px;
    }
  }
  
  @keyframes continue5 {
    from {
      right: -150px;
    }
    to {
      right: 500px;
    }
  }
  
  @keyframes carFadeIn5 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes carFadeOut5 {
    0% {
      opacity: 1;
    }
    10% {
      opacity: .5;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  .car-style {
    position: absolute;
    z-index: 3;
    bottom: 0;
    right: 0;
    background-position: bottom center;
    background-repeat: no-repeat;
    width: 54px;
    height: 20px;
    opacity: 0;
  }
  
  .city-container:hover .cloud-1 {
    top: 50px;
    animation: clouds 42s linear infinite, cloudFade 42s linear infinite;
    animation-delay: -20s;
    background-image: url(images/cloud.png);
  }
  
  .city-container:hover .cloud-2 {
    top: 30px;
    animation: clouds 47s linear infinite, cloudFade 47s linear infinite;
    animation-delay: -16s;
    background-image: url(images/large-cloud.png);
  }
  
  .city-container:hover .cloud-3 {
    top: 50px;
    animation: clouds 50s linear infinite, cloudFade 50s linear infinite;
    animation-delay: -4s;
    background-image: url(images/cloud.png);
  }
  
  .city-container:hover .cloud-4 {
    top: 55px;
    animation: clouds 45s linear infinite, cloudFade 45s linear infinite;
    animation-delay: -6s;
    background-image: url(images/cloud.png);
  }
  
  .cloud-style {
    position: absolute;
    opacity: 0;
    left: 50%;
    z-index: -1;
    width: 54px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  
  @keyframes clouds {
    0%  { margin-left: -410px;}
    25% { margin-left: -205px;}
    50% { margin-left: 0px;}
    75% { margin-left: 190px;}
    100% { margin-left: 380px;}
  }
  
  @keyframes cloudFade {
    0% {opacity: 0;}
    15% {opacity: 1;}
    85% {opacity: 1;}
    100% {opacity: 0;}
  }
</style>
<div class="city-container">


        <div id="animation-title">
            <p>Jefferson County Clerk's Office<br />
                <span>Bringing You V.I.P. Service</span>
            </p>
        </div>

        <div id="centerHotZone">

            <div id="greeting">
                <p id="greeting-message"></p>
                <div id="triangle-down"></div>
            </div>

            <div id="city-car-1" class="car-style"></div>
            <div id="city-car-2" class="car-style"></div>
            <div id="city-car-3" class="car-style"></div>
            <div id="city-car-4" class="car-style"></div>
            <div id="city-car-5" class="car-style"></div>

        </div>

        <div id="city-forground"></div>
        <div id="city-background"></div>

        <div class="cloud-1 cloud-style"></div>
        <div class="cloud-2 cloud-style"></div>
        <div class="cloud-3 cloud-style"></div>
        <div class="cloud-4 cloud-style"></div>

    </div>
`
class cityAnimate extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(cityAnimation.content.cloneNode(true));
    }

    testFunc(){
        let date = new Date();
        let curtime = date.getHours() * 100 + date.getMinutes();

        if (curtime > 1199 && curtime < 1800) {
            this.shadowRoot.querySelector('#greeting-message').innerHTML = 'Good afternoon, from the County Clerk!';
        }if (curtime > 1799 && curtime < 2399) {
            this.shadowRoot.querySelector('#greeting-message').innerHTML = 'Good evening, from the County Clerk!';
        } if (curtime > 0 && curtime < 1200) {
            this.shadowRoot.querySelector('#greeting-message').innerHTML = 'Good morning, from the County Clerk!';
        }
    }

    connectedCallback() {
        this.testFunc()
        setInterval(this.testFunc, 10000)
    }
}

window.customElements.define('city-animation', cityAnimate);