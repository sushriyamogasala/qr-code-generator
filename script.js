//alert('Hello world');
/*function showit()
        {
            var myimg = document.getElementById('myimg') ;
            var myoption = document.getElementById('myoption').value ;
            if (myoption == 'google')
            {
                myimg.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
            }
            else if (myoption == 'bing')
            {
                myimg.src = 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg';
            }
                else if (myoption == 'facebook')
            {
                myimg.src = 'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg';
            }
            else
            {
                alert('picture not available');
            }
        }*/

function genQR()
{
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById('img');
    var mytext = document.getElementById('qrtext').value;
    var mysize = document.getElementById('size').value;

    if (mytext!=='' && mysize == "100")
    {
        myimg.src = gapi+"100x100"+"&chl="+mytext;
    }
    else if (mytext!=="" && mysize == '150')
    {
        myimg.src = gapi+"150x150"+"&chl="+mytext ;
    }
    else if (mytext!=="" && mysize == '200')
    {
        myimg.src = gapi+"200x200"+"&chl="+mytext ;
    }
    else if (mytext!=="" && mysize == '250')
    {
        myimg.src = gapi+"250x250"+"&chl="+mytext ;
    }
    else if (mytext!=="" && mysize == '300')
    {
        myimg.src = gapi+"300x300"+"&chl="+mytext ;
    }
    else
    {
        alert('Please enter text');
    }
    
}