
$(function(){
        var windowWidth = $( window ).width();
        var items = $('#items');
        var item = $('.item');
        var itemsChild = items.find('.item');
        var clickCount = 0;
        var canClick = true;
        var itemWidth = $('.item').width();
        var divCount = 5;
         


        item.width( windowWidth/divCount)
        contentWidth = items.find('.item:first').width()+1; 
         
      console.log(contentWidth)
        items.width(contentWidth*itemsChild.length);

     
        refreshChildPosition();

        $('.btnNext').click(function(){
            if(canClick){
                canClick = false;
                clickCount++;

               
                items.stop(false, true).animate({
                    left : '-='+contentWidth
                },300, function(){
                  
                    lastItem = items.find('.item:first');
                    lastItem.remove().appendTo(items);
                    lastItem.css('left', ((itemsChild.length-1)*(contentWidth))+(clickCount*contentWidth));
                    canClick = true;
                });
            }
        });

        $('.btnPrevious').click(function(){
            if(canClick){
                canClick = false;
                clickCount--;
              
                lastItem = items.find('.item:last');
                lastItem.remove().prependTo(items);

                lastItem.css('left', contentWidth*clickCount);             
               
                items.finish(true).animate({
                    left: '+='+contentWidth
                },300, function(){
                    canClick = true;
                });
            }
        });

        function refreshChildPosition(){
            itemsChild.each(function(){
                $(this).css('left', contentWidth*itemsChild.index($(this)));
            });
        }
    });
