document.addEventListener("DOMContentLoaded", function(){
console.log('Hello11');

let vmwiki = new Vue ({
    el:"#app_wiki",
    data:{
        query: "жуки"
    },
    methods:{
        inputText: function(event){
            if (event.which==13){
                UserQuery = this.query;
                $.ajax({
                        url: "https://ru.wikipedia.org/w/api.php",
                        jsonp: "callback",
                        dataType: "jsonp",
                        data: {
                                action: "query",
                                prop: "extracts",
                                format: "json",
                                exintro: "",
                                redirects:"1",
                                titles: vmwiki.query
                            },
                        success: function (response){
                            let pages = response.query.pages;
                            for (let pageID in pages){
                                if (pageID == -1){
                                   
                                }
                                else {
                                    let page = pages[pageID];
                                    p1 = page.extract;
                                }
                                break;
                            }
                            $("#text").html(p1);
                        }
                    });
          
            }
        },

    }
});







});