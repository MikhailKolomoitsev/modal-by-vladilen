const fruits = [
    { id:1, title: 'Яблоки', price:20, img:'https://cdn.pixabay.com/photo/2014/02/01/17/30/apple-256268_1280.jpg'},
    { id:2, title: 'Апельсины', price:30, img:'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg'},
    { id:3, title: 'Манго', price:40, img:'https://cdn.pixabay.com/photo/2016/03/05/22/18/food-1239241_1280.jpg'}
]

const modal = $.modal({
    title: 'Mikhail Modal',
    closable: true,
    content: `
    <h4>modal is working</h4>
    <p>Lorem as aws 2q</p>`,
    width: `400px`,
    footerButtons: [
        {
            text: 'Ok',
            type: 'primary',
            handler() {
                console.log("primary btn clicked");
            }
        },
         {
            text: 'Cancel',
            type: 'danger',
            handler() {
                console.log("danger btn clicked");
            }
        }
    ]
})