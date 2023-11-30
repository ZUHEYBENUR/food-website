let yemekListesi = [
    {
        "id": "1",
        "name": "KAHVALTI",
        "description": "Enfes lezzetiyle şık sunumuyla ta bir misafir yemeği tarifim var sizlere, üstelik de çok pratik. mutlaka denein derim.",
        "link": "payce/kahvaltı.html",
        "photo": "img/kahvaltı.jpg"
    },
    {
        "id": "2",
        "name": "ÖĞLE YEMEĞİ",
        "description": "Enfes lezzetiyle şık sunumuyla ta bir misafir yemeği tarifim var sizlere, üstelik de çok pratik. mutlaka denein derim.",
        "link": "payce/ögleyemegi.html",
        "photo": "img/öğle yemeği.jpg"
    },
    {
        "id": "3",
        "name": "AKŞAM YEMEĞİ",
        "description": "Enfes lezzetiyle şık sunumuyla ta bir misafir yemeği tarifim var sizlere, üstelik de çok pratik. mutlaka denein derim.",
        "link": "payce/kahvaltı.html",
        "photo": "img/akşam yemeği.jpg"
    },
    {
        "id": "4",
        "name": "TATLILAR",
        "description": "Enfes lezzetiyle şık sunumuyla ta bir misafir yemeği tarifim var sizlere, üstelik de çok pratik. mutlaka denein derim.",
        "link": "payce/kahvaltı.html",
        "photo": "img/tatlı.jpg"
    },
    {
        "id": "5",
        "name": "APERATİFLER",
        "description": "Enfes lezzetiyle şık sunumuyla ta bir misafir yemeği tarifim var sizlere, üstelik de çok pratik. mutlaka denein derim.",
        "link": "payce/kahvaltı.html",
        "photo": "img/aperatif.jpg"
    },
]
div = document.getElementById("food-container")

for (yemek of yemekListesi) {
    let item = `<div class="card p-0 ms-2 mb-2 " style="width: 18rem;">
    <img height="191px" src="${yemek.photo}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${yemek.name}</h5>
        <p class="card-text">${yemek.description}</p>
        <a href="${yemek.link}" class="btn btn-outline-primary">Tariflere Git!</a>
    </div>
</div>`
    div.insertAdjacentHTML("beforeend" , item)

}
