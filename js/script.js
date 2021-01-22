$(document).ready(function(){

    //Progress Bar A
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1100,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 6);

            circle.setText(value);
        }
    });
    //Progress Bar B
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 800,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 2);

            circle.setText(value);
        }
    });
    //Progress Bar C
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 7);

            circle.setText(value);
        }
    });
    //Progress Bar D
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 200);

            circle.setText(value);
        }
    });

    // iniciando o loader quando o usuário chegar no elemento
    let dataAreaOffSet = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffSet.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
        
            stop = 1;

        }

    });

    //Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'imagens/cidadeparallax.png'});

    }, 250);


});