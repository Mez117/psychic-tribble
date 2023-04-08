$(document).ready(function () {
    tTT = {
        playerSquareResults: {1: [0, 0], 2:[0, 0], 3:[0, 0], 4:[0, 0], 5:[0, 0], 6:[0, 0], 7:[0, 0], 8:[0, 0] },
        playerTurn: 0,
        x: 0,
        y: 0,
        winner: {0: ['cross', 0], 1: ['circle', 0]},
        firstTurn: '',
        secondTurn: '',
        shape: '',
        customName: ['cross', 'circle'],
        buttonName: '',

        determineTurnName: function (firstPlayer, secondPlayer, buttonPressed, num) {
            if ($(firstPlayer).val() === '') {
                this.firstTurn = "it's your turn " + $(buttonPressed).attr('id');
                firstHTML = $(buttonPressed).attr('id') + ' wins: ' + this.winner[num][1];    
            } else {
                this.firstTurn = "it's your turn " + $(firstPlayer).val();
                firstHTML = $(firstPlayer).val() + ' wins: ' + this.winner[num][1];
                this.customName[num] = $(firstPlayer).val();
            }
            let winID = '#' + $(buttonPressed).attr('id') + 'wins'
            $(winID).html(firstHTML);
            $('h2').html(this.firstTurn);

            if ($(buttonPressed).attr('id') == 'cross') {this.shape = 'circle'} else {this.shape = 'cross'};

            if ($(secondPlayer).val() === '') {
                this.secondTurn = "it's your turn " + this.shape;
                secondHTML = this.shape + ' wins: ' + this.winner[this.x][1]; 
            } else {
                this.secondTurn = "it's your turn " + $(secondPlayer).val();
                secondHTML = $(secondPlayer).val() + ' wins: ' + this.winner[this.x][1];
                this.customName[this.x] = $(secondPlayer).val();
            }
            let winTwoID = '#' + this.shape + 'wins'
            $(winTwoID).html(secondHTML);
            this.x = 0;
        },

        rowCheck: function (iD, playerTurn, div) {
            this.x += 1;
            let checkURL = this.customName[playerTurn].slice(-3);
            console.log(checkURL)
            $(div).addClass(this.winner[playerTurn][0]);
            if (this.customName[playerTurn] !== 'circle' && this.customName[playerTurn] !== 'cross') {
                removal = '.' + this.winner[playerTurn][0];
                if (checkURL !== 'jpg' && checkURL !== 'png' && checkURL !== 'gif' && checkURL !== 'peg') {
                    $(removal).css('background', 'none');
                    $('<h4>' + this.customName[playerTurn] + '</h4>').appendTo(div);
                } else {
                    $(removal).css('background', `url("${this.customName[playerTurn]}") no-repeat center`);
                    $(removal).css('background-size', '180px');
                }
            }
            for (let i = 0; i < iD.length; i++) {
                let winCheck = iD[i];
                let result = this.playerSquareResults[winCheck][playerTurn] += 1;
                let line = '.' + (Number(winCheck));
                console.log(line);
                if (result === 3) {
                    if (winCheck < 4) {
                        $(line).show().animate({width: '630px'}, 5);
                    }
                    else if (winCheck < 7) {
                        $(line).show().animate({height: '630px'}, 2000);
                    }
                    if (winCheck == 7) {
                        $('.8').show().animate({height: '800px', marginLeft: '327px', marginTop: '-105px'}, 1300);
                    }
                    if (winCheck == 8) {
                        $('.7').show().animate({height: '800px', marginLeft: '290px', marginTop: '-105px'}, 1300);
                    }
                    $('.tttsquares').prop('disabled', true);
                    $('#again').show();
                    $('#again').animate({height: '30px', width: '100px', margin: '10px'}, 2000);

                    this.winner[playerTurn][1] += 1;
                    $('h2').html(`Game over, ${ this.customName[playerTurn] } won`);
                    winnerID = '#' + this.winner[playerTurn][0] + 'wins';
                    winnerHTML = this.customName[playerTurn] + ' wins: ' + this.winner[playerTurn][1];
                    $(winnerID).html(winnerHTML);
                    return line;
                }
            } if (this.x % 2 === 0) {$('h2').html(this.firstTurn)} else {$('h2').html(this.secondTurn)};
            if (this.x === 9) {
                $('h2').html('Tie!');
                $('#again').show();
                $('#again').animate({height: '30px', width: '100px', margin: '10px'}, 2000);
            }
        },
    };

    $('.tttsquares').prop('disabled', true);

    $('#cross').on('click', function () {
        tTT.x = 1;
        $('.tttsquares').prop('disabled', false);
        $('.player').prop('disabled', true);
        tTT.determineTurnName('.one', '.two', this, 0);
        tTT.playerTurn = 1;
    });

    $('#circle').on('click', function () {
        tTT.x = 0;
        $('.tttsquares').prop('disabled', false);
        $('.player').prop('disabled', true);
        tTT.determineTurnName('.two', '.one', this, 1);
        tTT.playerTurn = 0;
        
    });

    $('.tttsquares').on('click', function () {
        
        $(this).hide();
        tTT.playerTurn = 1 - tTT.playerTurn;
        tTT.rowCheck($(this).attr('id'), tTT.playerTurn, this)

        if ($('.one').val() !== '') {
            $(this).html(this.customNameOne);
        };
        if ($('.two').val() !== '') {
            $(this).html(this.customNameTwo);
        };
        $(this).fadeIn(500);
        $(this).prop('disabled', true);  
    });

    

    $('.reset').on('click', function () {
        $('.tttsquares').prop('disabled', true);
        $('.player').prop('disabled', false);
        $('.cross').css('background', "");
        $('.circle').css('background', "");
        $('.tttsquares').removeClass('cross');
        $('.tttsquares').removeClass('circle');
        $('h2').html('_________');
        $('.line').hide();
        $('#again').hide();
        tTT.playerTurn = 0;
        $('.line').css('height', '');
        $('.line').css('width', '');
        $('.line').css('margin-left', '');
        $('.line').css('margin-top', '');
        $('#again').css('height', '');
        $('#again').css('width', '');
        $('#again').css('margin', '');
        $('h4').remove();
        tTT.playerSquareResults = {1: [0, 0], 2:[0, 0], 3:[0, 0], 4:[0, 0], 5:[0, 0], 6:[0, 0], 7:[0, 0], 8:[0, 0] };
        tTT.x = 0;
        tTT.customName = ['cross', 'circle'];
    });

    $('#fullreset').on('click', function () {
        $('#crosswins').html("cross wins: 0")
        $('#circlewins').html("circle wins: 0")
        tTT.winner = {0: ['cross', 0], 1: ['circle', 0]};
    })



});