$(document).ready(function () {
    tTT = {
        squareNum: ['.first', '.second', '.third', '.fourth', '.fifth', '.sixth', '.seventh', '.eighth', '.nineth'],
        // lineClass: ['.one', '.two', '.three', '.four', '.five', '.six', '.seven', '.eight'],
        // boxLine: ['.hor1', '.hor2', '.hor3', '.ver1', '.ver2', '.ver3', '.dia1', '.dia2'],
        playerTurn: 0,
        x: 0,
        cr: 0,
        ci: 0,
        firstTurn: '',
        secondTurn: '',

        rowCheck: function (line, s1, s2, s3, obj) {
            if ($(s1).hasClass(obj) && $(s2).hasClass(obj) && $(s3).hasClass(obj)) {
                if (line === '.one' || line === '.two' || line === '.three') {
                    $(line).show().animate({width: '630px'}, 5);
                }
                if (line === '.four' || line === '.five' || line === '.six') {
                    $(line).show().animate({height: '630px'}, 2000);
                }
                if (line === '.eight') {
                    $('.eight').show().animate({height: '800px', marginLeft: '330px', marginTop: '-105px'}, 1300);
                }
                if (line === '.seven') {
                    $('.seven').show().animate({height: '800px', marginLeft: '294px', marginTop: '-105px'}, 1300);
                }
                $('.tttsquares').prop('disabled', true);
                // $('h2').html(`Game over, ${ obj } won`);
                $('#again').show();
                $('#again').animate({height: '30px', width: '100px', margin: '10px'}, 2000);
                if (obj === 'cross') {
                    this.cr += 1;
                    let whoWon = this.firstTurn.split("'")[0];
                    wins = whoWon + " wins: " + this.cr;
                    $('h2').html(`Game over, ${ whoWon } won`);
                    $('#crwins').html(wins);
                } if (obj === 'circle') {
                    this.ci += 1;
                    let whoWon = this.secondTurn.split("'")[0];
                    wins = whoWon + " wins: " + this.ci;
                    $('h2').html(`Game over, ${ whoWon } won`);
                    $('#ciwins').html(wins);
                }
            }
        },

        squareResult: function (div) {
            if ($('.b').val() === '') {
                this.secondTurn = ("Circle's turn");
                $('h2').html(tTT.secondTurn);
            }
            else { 
                turn = $('.b').val() + "'s turn";
                this.secondTurn = turn;
                $('h2').html(turn);
                ciwin = $('.b').val() + "'s wins: " + tTT.ci;
                $('#ciwins').html(ciwin);
            }
            if ($('.a').val() === '') {
                tTT.firstTurn = ("Cross' turn");
                $('h2').html(tTT.firstTurn);
            }
            else { 
                turn = $('.a').val() + "'s turn";
                tTT.firstTurn = turn;
                $('h2').html(turn);
                crwin = $('.a').val() + "'s wins: " + tTT.cr;
                $('#crwins').html(crwin);
            }
            this.playerTurn += 1
            if (this.x % 2 == 0) {
                $(div).addClass('cross');
                this.x += 1; 
                $('h2').html(this.secondTurn);
            }
            else {
                $(div).addClass('circle');
                this.x += 1;
                $('h2').html(this.firstTurn);
            } 
            if (this.playerTurn === 9) {
                $('h2').html('Tie!');
                $('#again').show();
                $('#again').animate({height: '30px', width: '100px', margin: '10px'}, 2000);
            }
            let obj = ($(div).attr('class').split(' ')[4]);
            this.rowCheck('.one', '.first', '.second', '.third', obj);
            this.rowCheck('.two', '.fourth', '.fifth', '.sixth', obj);
            this.rowCheck('.three', '.seventh', '.eighth', '.nineth', obj);
            this.rowCheck('.four', '.first', '.fourth', '.seventh', obj);
            this.rowCheck('.five', '.second', '.fifth', '.eighth', obj);
            this.rowCheck('.six', '.third', '.sixth', '.nineth', obj);
            this.rowCheck('.seven', '.third', '.fifth', '.seventh', obj);
            this.rowCheck('.eight', '.first', '.fifth', '.nineth', obj);
        },
        // 6
        // 15
        // 24
        // 12
        // 15
        // 18
        // 15
        // 15
    };

    const enable = function (a, state) {
        if (a === 1) {

            $('#cross').prop('disabled', state);
            $('#circle').prop('disabled', state);
        }
        if (a === 0) {

            $('.first').prop('disabled', state);
            $('.second').prop('disabled', state);
            $('.third').prop('disabled', state);
            $('.fourth').prop('disabled', state);
            $('.fifth').prop('disabled', state);
            $('.sixth').prop('disabled', state);
            $('.seventh').prop('disabled', state);
            $('.eighth').prop('disabled', state);
            $('.nineth').prop('disabled', state);
        }
    }

    enable(0, true);

    $('#cross').on('click', function () {
        tTT.x = 0;
        enable(0, false);
        enable(1, true);
        if ($('.a').val() === '') {
            $('h2').html("Cross' turn");
        }
        else { 
            turn = $('.a').val() + "'s turn";
            $('h2').html(turn);
            crwin = $('.a').val() + "'s wins: " + tTT.cr;
            $('#crwins').html(crwin);
        }
        if ($('.b').val() !== '') {
            ciwin = $('.b').val() + "'s wins: " + tTT.ci;
            $('#ciwins').html(ciwin);
        };
    });

    $('#circle').on('click', function () {
        tTT.x = 1;
        enable(0, false);
        enable(1, true);
        if ($('.b').val() === '') {
            $('h2').html("Circle's' turn");
        }
        else { 
            turn = $('.b').val() + "'s turn";
            $('h2').html(turn);
            ciwin = $('.b').val() + "'s wins: " + tTT.ci;
            $('#ciwins').html(ciwin);
        }
        if ($('.a').val() !== '') {
            crwin = $('.a').val() + "'s wins: " + tTT.cr;
            $('#crwins').html(crwin);
        };
    });

    $('.tttsquares').on('click', function () {
        
        $(this).hide();
        tTT.squareResult(this);  
        if ($('.a').val() !== '' && $(this).hasClass('cross')) {
            $('.cross').css('background-image', "none");
            text = $('<h4></h4>').text($('.a').val());
            $(this).html(text);
        };
        if ($('.b').val() !== '' && $(this).hasClass('circle')) {
            $('.circle').css('background', 'none');
            text = $('<h4></h4>').text($('.b').val());
            $(this).html(text);
        };
        $(this).fadeIn(500);
        $(this).prop('disabled', true);  
    });

    

    $('.reset').on('click', function () {
        enable(0, true);
        enable(1, false);
        // $('.cross').css('background-image', "url('https://i.imgur.com/6Ug5Ywq.png')");
        // $('.circle').css('background', "url('https://i.imgur.com/6Ug5Ywq.png')");
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
        $('.tttsquares').html('');
    });

    $('#fullreset').on('click', function () {
        $('#crwins').html("Cross' wins: 0")
        $('#ciwins').html("Circle's wins: 0")
        tTT.cr = 0;
        tTT.ci = 0;
    })



});