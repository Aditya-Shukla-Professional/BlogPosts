// This file works more like the brain for our program by contaning all the browser run javascript to run on the user's browser
function addmore(){  // used to add to the sql table for the specific user when the add button is pressed
    $("#add").on("click",()=>{
        $("form").css("display","block");
        $("#title").val("");
        $("#desc").val("");
        $("form").removeData("update-id");
        $("form").attr("action","/submit");
        $("#updateId").val("");
    })
}

function update(){   // used to modify the record of the specific user when the update button is pressed
    $("main").on("click","#update", function(){
        let postDiv=$(this).closest(".blog-post");
        let title_text=postDiv.find(".title").text();
        let desc_text=postDiv.find(".desc").text();
        let postId = postDiv.data("db-id");
        $("#title").val(title_text);
        $("#desc").val(desc_text);
        $("form").css("display","block");
        $("form").data("update-id", postId);
        $("#updateId").val(postId);
        $("form").attr("action", "/update");
    })
}

function del(){   // used to delete the record of the specific user when delete button is pressed
    $("main").on("click","#del", function(){
        let postDiv=$(this).closest(".blog-post");
        let postId = postDiv.data("db-id");
        fetch("/delete",{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`update_id=${postId}`
        })
        .then(()=>{
            window.location.reload();
        })
    })
}

del()
addmore()
update()
