$(".my-btn").click(function()
{
      $(".box").fadeOut(2000, function() //let the opacity:0 during 2s
      {
          $(".box").fadeIn(2000,function() //let the opacity 1 during 2s
          {
              $(".box").slideUp(2000,function()
              {
                  $(".box").slideDown(2000,function()
                  {
                      $(".box").slideUp(2000,function()
                      {
                          $(".box").fadeIn(2000);
                      })
                  });
              });
          });
      });
});

$(".my-btn2").click(function()
{
    $(".box2").show(2000,function()
    {
        $(".box2").hide(2000,function()
        {
            $(".box2").fadeIn(2000,function()
            {
                $(".box2").fadeOut(2000,function()
                {
                    $(".box2").fadeIn(2000);
                });
            });
        });
    });
    
});

$(".btn3").click(function()
{
    $(".my-box3").css({"display":"block", "background-color":"blue"});
    $(".my-box3").slideUp(2000,function()
        {
            $(".my-box3").slideDown(2000,function()
            {
              $(".my-box3").fadeOut(2000,function()
              {
                  $(".my-box3").fadeIn(2000);
              });
            });
        });
    });
   






