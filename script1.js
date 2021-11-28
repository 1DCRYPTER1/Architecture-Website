$('.card').click(function(e) {
        var self = $(this);
        self.stop().removeClass('closed');
        self.stop().addClass('opened');
        $('.overlay').stop().addClass('opened');
        self.children('button').stop().addClass('opened');
      });

      $('.overlay').click(function(event) {
        $('.card.opened').stop().removeClass('opened');
        $('.card').stop().addClass('closed');
        $('.card').children('button').stop().removeClass('opened');
        var self = $(this);
        self.stop().removeClass('opened');
      });

      $('button').click(function(e){
        var self = $(this);
        if(self.hasClass('opened')){
            if(self.hasClass('not-added')){
              self.removeClass('not-added');
              self.addClass('added');
            }else{
              self.removeClass('added');
              self.addClass('not-added');
            }
        }
      });