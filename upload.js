$(document).ready(function() {
    $('#upload').on('click', function() {
    var file_data = $('#bg').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('bg', file_data);
    
    $.ajax({
                url: 'uploads.php', 
                dataType: 'text',  
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(data){
                    alert(data); 
                }
     });
    });
    });
    